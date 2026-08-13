# CIVERRA Evidence Capsule — Public-Service Form Rescue

Verified: 13 August 2026

## Claim boundary

CIVERRA is a self-initiated fictional public-service product. It proves a tested
engineering method; it is not paid client work, legal certification, or evidence
of measured government-service conversion.

## Failure baseline

The retained legacy fixture reproduces four automated defect families:

- unnamed button;
- insufficient color contrast;
- unlabelled form field;
- unlabelled select control.

## Acceptance evidence

| Boundary | Executable evidence |
|---|---|
| Dashboard entry | Continue action moves focus to the application main region |
| Form failure | Invalid submission focuses a summary and identifies the missing income field |
| Error relationship | Income control exposes `aria-invalid` and linked guidance |
| Recovery | Valid income and type reach the next review state |
| Keyboard entry | Skip link is the first keyboard stop |
| Mobile | Application has no horizontal overflow at 390×844 |
| Automated accessibility | Tested states return zero violations for the configured axe WCAG tags |

## Verified quality gates

- ESLint with zero allowed warnings: **passed**.
- TypeScript production build: **passed**.
- Vite build: **958ms**.
- Playwright/axe regression suite: **5/5 passed in 26.5s**.
- JavaScript bundle: **206.03 kB / 63.79 kB gzip**.
- CSS bundle after font optimization: **17.34 kB / 4.22 kB gzip**.
- Font output reduced from 26 generated font files to 10 by shipping only the Latin subsets used by the product.
- Runtime dependencies and test tooling are pinned to exact versions instead of `latest`.

## Rescue offer this supports

**Consequential Form Rescue Sprint** for public services, insurance, finance,
onboarding, eligibility, and regulated application flows.

The deliverable is not a visual redesign alone: baseline defects, an acceptance
matrix, focused error recovery, mobile QA, and a regression pack are delivered
together.

## Honest limitations

Screen-reader sessions, forced-colors, 200%/400% zoom, real backend failures,
session expiry, upload malware controls, localization, and production policy
review remain separate work.

## Proposal-ready proof line

> CIVERRA preserves a reproducible failing form baseline, while the repaired flow
> passes its zero-warning build and five Playwright/axe scenarios covering focused
> validation, linked errors, successful recovery, keyboard entry, and mobile
> overflow. I would use the same baseline-to-regression method on your application
> flow.
