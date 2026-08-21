// In-memory fallback cache for local development/offline mode
const localIpCache = new Map<string, { count: number; expiresAt: number }>();

function cleanLocalCache() {
  const now = Date.now();
  for (const [ip, data] of localIpCache.entries()) {
    if (now > data.expiresAt) {
      localIpCache.delete(ip);
    }
  }
}

function checkLocalRateLimit(ip: string, limit: number, windowMs: number): boolean {
  cleanLocalCache();
  const now = Date.now();
  const data = localIpCache.get(ip);

  if (!data || now > data.expiresAt) {
    localIpCache.set(ip, { count: 1, expiresAt: now + windowMs });
    return true; // Allowed
  } else {
    if (data.count >= limit) {
      return false; // Blocked
    }
    data.count++;
    return true; // Allowed
  }
}

/**
 * Distributed rate limiter using Upstash Redis REST API.
 * Gracefully falls back to local in-memory rate limiting if environment variables are missing
 * or if the network request fails (graceful degradation).
 */
export async function checkRateLimit(
  ip: string,
  limit: number = 3,
  windowSec: number = 60
): Promise<{ success: boolean; limit: number; remaining: number }> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  // 1. Fallback to Local In-Memory Limit if credentials are not configured
  if (!redisUrl || !redisToken) {
    const isAllowed = checkLocalRateLimit(ip, limit, windowSec * 1000);
    return {
      success: isAllowed,
      limit,
      remaining: isAllowed ? 1 : 0 // Simplified remaining count for fallback
    };
  }

  // 2. Distributed Rate Limiter via Upstash Redis REST API (0-dependency HTTP)
  const key = `ratelimit:teklif:${ip}`;
  const pipelineUrl = `${redisUrl.replace(/\/$/, '')}/pipeline`;

  try {
    const response = await fetch(pipelineUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${redisToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([
        ['INCR', key],
        ['TTL', key]
      ]),
      // Short timeout to ensure API response is fast and doesn't hang the lambda
      signal: AbortSignal.timeout(3000)
    });

    if (!response.ok) {
      throw new Error(`Upstash REST API responded with status ${response.status}`);
    }

    const data = await response.json();
    // Expected structure: [{ result: count }, { result: ttl }]
    const count = Number(data[0]?.result || 0);
    const ttl = Number(data[1]?.result || -1);

    // If it is the first request (count is 1) or TTL is expired (-1), set expiry
    if (count === 1 || ttl === -1) {
      await fetch(`${redisUrl.replace(/\/$/, '')}/EXPIRE/${key}/${windowSec}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${redisToken}` }
      }).catch(err => console.error('Failed to set rate limit expire:', err));
    }

    if (count > limit) {
      return { success: false, limit, remaining: 0 };
    }

    return {
      success: true,
      limit,
      remaining: Math.max(0, limit - count)
    };

  } catch (error) {
    // 3. Graceful degradation: Fall back to local map on Redis errors/timeouts
    console.warn('Upstash Rate Limiter Error (graceful degradation fallback triggered):', error);
    const isAllowed = checkLocalRateLimit(ip, limit, windowSec * 1000);
    return {
      success: isAllowed,
      limit,
      remaining: isAllowed ? 1 : 0
    };
  }
}
