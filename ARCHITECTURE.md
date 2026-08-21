# Architecture Documentation - Mersin Uzman Eller Nakliyat

This document details the production-grade architectural design, directory structuring, and rendering strategies of the application.

## Directory Structure

```
├── .github/workflows/   # CI/CD pipelines (automatic tests, typecheck, SEO audit)
├── public/              # Lightweight image assets and local variable fonts
├── src/
│   ├── app/             # Next.js 16 App Router (RSC, static routing, API endpoints)
│   ├── components/      # UI components (Header, Footer, calculators, form elements)
│   ├── content/         # Optimized content chunks (split blog and route databases)
│   ├── lib/             # Pure functional libraries (pricing engines, validation schemas)
│   └── tests/           # Unit tests (Vitest) & E2E tests (Playwright)
├── CLAUDE.md            # Quick reference guidelines for developers
└── tsconfig.json        # Strict TypeScript rules with index checks
```

## Performance & Render Strategy

1. **Database Splitting**: Heavy raw HTML content is split into dynamic code-split chunks under `src/content/`. Metadata indexes are loaded synchronously, while details are imported asynchronously using dynamic import syntax on client route visits.
2. **Local Fonts**: variable fonts are served locally from `src/app/fonts` using `next/font/local` offline-safe loaders to prevent rendering layout shifts (CLS) and Google API roundtrips.
3. **Bandwidth Controls**: Footer links for regions specify `prefetch={false}` to prevent micro-browsing downloads, while core CTAs are eagerly prerendered using the browser Speculation Rules API.
4. **Transition Acceleration**: Native CSS `@view-transition` rules are configured to deliver smooth transition effects across page loads.

## Spam Protection & Fault Tolerance

1. **Distributed Rate Limiting**: Features a zero-dependency Upstash Redis REST rate-limiter in `/api/teklif` that gracefully downgrades to local memory caches if credentials are missing or remote calls timeout.
2. **Timing Honeypot**: Silently blocks submissions completed in less than 2.0 seconds from page load.
3. **Form Idempotency**: Generated UUID tokens filter and drop duplicate form submissions.
4. **Resend Email Resilience**: Form submissions are logged to stdout under a distinct `LEAD_CAPTURE:` prefix. If email notification via Resend fails, the client is informed of a successful save instead of returning a generic error, preventing lead conversion loss.
