# Main Clim Website

A professional, modern website for **Main Clim** — an HVAC (climatisation, ventilation, and refrigeration) company based in Benin, West Africa.

## 🌟 Features

- **3 Landing Page Variants** to choose from:
  - Landing A: "Corporate Trust" - Professional with stats and testimonials carousel
  - Landing B: "Service-First" - Bold CTAs with FAQ accordion
  - Landing C: "Modern Minimal" - Clean split-screen design

- **Complete Website Pages:**
  - Homepage with hero, services, testimonials, projects gallery
  - Services page with detailed service descriptions
  - About page with team and company values
  - Portfolio/Projects gallery with filters
  - Contact page with form and Google Maps
  - Multi-step quote request form
  - Blog section (CMS-ready structure)

- **Key Integrations:**
  - WhatsApp click-to-chat floating button
  - Contact forms with validation
  - Google Maps embed
  - Cookie consent banner
  - SEO optimization with structured data
  - Google Analytics ready (placeholder)

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📁 Project Structure

```
mainclim-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Landing A (default)
│   │   ├── landing-b/          # Landing B variant
│   │   ├── landing-c/          # Landing C variant
│   │   ├── services/           # Services page
│   │   ├── a-propos/           # About page
│   │   ├── realisations/       # Projects/portfolio
│   │   ├── contact/            # Contact page
│   │   ├── devis/              # Quote request page
│   │   └── blog/               # Blog section
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── ui/                 # Reusable UI components
│   │   ├── sections/           # Page sections
│   │   └── forms/              # Form components
│   ├── data/                   # Company data, services, etc.
│   ├── lib/                    # Utilities
│   ├── hooks/                  # Custom hooks
│   └── types/                  # TypeScript types
├── public/
│   └── images/                 # Static images
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mainclim-website.git
cd mainclim-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static export will be generated in the `out/` directory.

## 🎨 Landing Page Variants

Access different landing page designs:

- **Landing A (Corporate Trust):** [http://localhost:3000](http://localhost:3000)
- **Landing B (Service-First):** [http://localhost:3000/landing-b](http://localhost:3000/landing-b)
- **Landing C (Modern Minimal):** [http://localhost:3000/landing-c](http://localhost:3000/landing-c)

## 📝 Configuration

### Company Information

Edit `src/data/company.ts` to update:
- Company name, tagline, description
- Phone numbers and email
- Address and hours
- Social media links
- Services and FAQs
- Statistics and certifications

### Form Submissions

Currently using simulated submission. To enable real form submissions:

1. **Option A: Formspree**
   - Create account at [formspree.io](https://formspree.io)
   - Replace form endpoint in `src/components/forms/ContactForm.tsx`

2. **Option B: EmailJS**
   - Create account at [emailjs.com](https://www.emailjs.com)
   - Configure email templates
   - Add credentials to environment variables

### Google Analytics

Uncomment and configure the GA code in `src/app/layout.tsx`:
```javascript
// Replace GA_MEASUREMENT_ID with your actual ID
```

## 🌍 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`

### Static Hosting

The site exports as static HTML and can be hosted on any static hosting service.

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create folder in `src/app/`
2. Add `page.tsx` with metadata
3. Import and use existing components

### Adding New Components

1. Create component in appropriate folder under `src/components/`
2. Use "use client" directive for interactive components
3. Export from component file

## 📱 Mobile-First Design

The website is built with a mobile-first approach, optimized for:
- Slower connections common in West Africa
- Touch interactions
- WhatsApp as primary communication channel
- Fast loading times

## 🔒 Security Features

- XSS protection headers
- Form validation with Zod
- Sanitized user inputs
- GDPR-compliant cookie consent

## 📄 License

This project is proprietary software for Main Clim.

## 👥 Credits

Developed with care for Main Clim, Benin.

---

**Need Help?** Contact: contact@mainclim.bj
