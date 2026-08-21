import { z } from 'zod';

/**
 * Zod Schema to validate and strongly type environment variables.
 * Safe defaults are provided, and all third-party credentials are marked as optional
 * to ensure that the site can build and run in fallback mode (offline/development)
 * without raising runtime crashes.
 */
const envSchema = z.object({
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_CLARITY_ID: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  NOTIFY_EMAIL: z.string().email().or(z.literal('')).optional(),
  UPSTASH_REDIS_REST_URL: z.string().url().or(z.literal('')).optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  REVALIDATE_TOKEN: z.string().optional(),
});

// Perform validation
export const env = envSchema.parse({
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  NOTIFY_EMAIL: process.env.NOTIFY_EMAIL,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
});
