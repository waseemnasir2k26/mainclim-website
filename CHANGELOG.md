# Changelog

All notable changes to the Main Clim website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2026.09] - 2026-09-16

- Maintenance review of mainclim-website — a marketing site for Main Clim, an HVAC (climatisation, ventilation, refrigeration) company based in Benin, West Africa. Content is French (`a-propos`, `realisations`, `devis`).
- Stack: Next.js 14 App Router + TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod, Lucide icons. Ships three alternative landing-page variants (default plus `landing-b` and `landing-c`) alongside services, about, portfolio, contact, multi-step quote and blog routes.
- Status: last change February 2026, which added a GitHub Actions CI/CD workflow (lint → build → deploy to Vercel). CHANGELOG existed before this release but its only entry is an unfinished `[1.0.0] - 2024-01-XX` initial-release section. No live URL is stated in the README.
- Reviewed September 2026: docs refreshed, CHANGELOG entry added, package version bumped, versioned as v2026.09. No site code touched.
- Known gaps: no LICENSE file (README declares the project proprietary to Main Clim); the existing CHANGELOG's top entry still carries a placeholder date `2024-01-XX` and a version that does not match `package.json`; no tests in the repo, so the CI pipeline only lints and builds.

## [1.0.0] - 2024-01-XX

### Added
- Initial release of Main Clim website
- **Landing Pages:**
  - Landing A "Corporate Trust" with hero, stats bar, testimonials carousel
  - Landing B "Service-First" with bold CTAs and FAQ accordion
  - Landing C "Modern Minimal" with split-screen design
- **Pages:**
  - Homepage with full sections
  - Services page with detailed service descriptions
  - About page with team and company values
  - Projects/Portfolio gallery with category filters
  - Contact page with form and Google Maps
  - Quote request multi-step form
  - Blog section (CMS-ready structure)
- **Components:**
  - Responsive Header with mobile menu
  - Footer with contact info and social links
  - WhatsApp floating button
  - Cookie consent banner
  - Animated stats counter
  - Testimonial cards and carousel
  - Service cards with icons
  - FAQ accordion
  - Contact and quote forms with validation
  - Error boundary component
- **Features:**
  - Mobile-first responsive design
  - Framer Motion animations
  - SEO optimization with structured data (LocalBusiness schema)
  - Open Graph and Twitter meta tags
  - Form validation with Zod
  - Structured logging for form submissions
  - Static export ready
- **Tech Stack:**
  - Next.js 14 (App Router)
  - Tailwind CSS
  - TypeScript
  - Framer Motion
  - React Hook Form
  - Lucide React icons

### Build Information
- Build Date: 2024-01-XX
- Node Version: 18+
- Next.js Version: 14.x

### Known Issues
- None reported

### Notes
- Placeholder images need to be replaced with actual company photos
- Form submissions are simulated - need to configure Formspree/EmailJS
- Google Analytics placeholder needs to be configured with actual ID
