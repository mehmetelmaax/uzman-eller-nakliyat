# Developer Guidelines for Mersin Uzman Eller Nakliyat

This document outlines the standard commands, code style guidelines, and design principles of the codebase.

## Standard Development Commands

### Running Locally
- Start Development Server: `npm run dev`
- Compile Production Build: `npm run build`
- Start Production Server: `npm run start`

### Testing & Audits
- Run Unit Tests: `npm run test` (Vitest)
- Run E2E Tests: `npx playwright test`
- Run Custom SEO Audit: `npm run audit` (Flags cannibalization, bad headings, missing alt tags)

### Code Formatting & Type Checks
- Run ESLint Check: `npm run lint`
- Run Strict TypeScript Compiler Check: `npm run typecheck`

## Code Guidelines & Best Practices

### Type Safety
- **Strict Index Access**: `"noUncheckedIndexedAccess": true` is active in `tsconfig.json`. Always check that array values are defined (`array[idx] !== undefined` or use safe navigation `array[idx]?.property`) before accessing their attributes.
- Use explicit TypeScript definitions for all props, states, and function arguments.

### Component Architecture
- Prefer Server Components for maximum performance and minimum client JS payload.
- Only use `'use client'` when state hooks (`useState`, `useEffect`), refs, or interactive handlers are strictly required.
- Do not import heavy content data files (`blog-data.ts`, `routes-data.ts`) directly inside listing views; use their split metadata databases instead.

### Asset Pipelines
- All image assets must have explicit `sizes` definitions when utilizing Next.js `fill`.
- Maintain native View Transitions and Speculation Rules configurations in `globals.css` and `layout.tsx` respectively.
