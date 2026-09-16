# 2026.09 — Maintenance release

- Maintenance review of mainclim-website — a marketing site for Main Clim, an HVAC (climatisation, ventilation, refrigeration) company based in Benin, West Africa. Content is French (`a-propos`, `realisations`, `devis`).
- Stack: Next.js 14 App Router + TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod, Lucide icons. Ships three alternative landing-page variants (default plus `landing-b` and `landing-c`) alongside services, about, portfolio, contact, multi-step quote and blog routes.
- Status: last change February 2026, which added a GitHub Actions CI/CD workflow (lint → build → deploy to Vercel). CHANGELOG existed before this release but its only entry is an unfinished `[1.0.0] - 2024-01-XX` initial-release section. No live URL is stated in the README.
- Reviewed September 2026: docs refreshed, CHANGELOG entry added, package version bumped, versioned as v2026.09. No site code touched.
- Known gaps: no LICENSE file (README declares the project proprietary to Main Clim); the existing CHANGELOG's top entry still carries a placeholder date `2024-01-XX` and a version that does not match `package.json`; no tests in the repo, so the CI pipeline only lints and builds.
