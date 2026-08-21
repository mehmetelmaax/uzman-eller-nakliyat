import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Global Middleware to set security headers and dynamic CSP.
 * Runs on Vercel Edge/Node runtime for all incoming page requests.
 */
export function middleware(request: NextRequest) {
  // Generate a random nonce for script protection
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Unified CSP Policy (Report-Only initially as requested to prevent page breakage)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://mersinuzmaneller.com https://maps.googleapis.com https://maps.gstatic.com;
    font-src 'self' data:;
    connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.clarity.ms;
    frame-src 'self' https://www.google.com https://maps.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Set response headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Report-Only mode is enabled initially to gather metrics before full enforcement
  response.headers.set('Content-Security-Policy-Report-Only', cspHeader);
  
  // Security Hardening Headers (Faz 4.4 requirements)
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: [
    // Match all HTML pages, skip static assets / api
    '/((?!api|_next/static|_next/image|favicon.ico|img|fonts|.*\\.png|.*\\.webmanifest).*)',
  ],
};
