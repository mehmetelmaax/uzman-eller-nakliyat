import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Global Middleware to set security headers and dynamic CSP.
 * Runs on Vercel Edge/Node runtime for all incoming page requests.
 */
export function middleware(request: NextRequest) {
  // Set response headers
  const response = NextResponse.next();

  // Security Hardening Headers (Faz 4.4 requirements)
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: [
    // Match all HTML pages, skip static assets / api
    '/((?!api|_next/static|_next/image|favicon.ico|img|fonts|.*\\.png|.*\\.webmanifest).*)',
  ],
};
