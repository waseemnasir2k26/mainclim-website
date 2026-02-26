import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mainclim.bj"),
  title: {
    default: "Main Clim | Expert Climatisation au Bénin",
    template: "%s | Main Clim",
  },
  description:
    "Main Clim - Votre expert en climatisation, ventilation et réfrigération au Bénin. Installation, maintenance et dépannage pour particuliers et professionnels à Cotonou et dans tout le Bénin.",
  keywords: [
    "climatisation",
    "Bénin",
    "Cotonou",
    "installation climatiseur",
    "maintenance climatisation",
    "dépannage climatisation",
    "ventilation",
    "réfrigération",
    "froid commercial",
    "Main Clim",
  ],
  authors: [{ name: "Main Clim" }],
  creator: "Main Clim",
  publisher: "Main Clim",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mainclim.bj",
    siteName: "Main Clim",
    title: "Main Clim | Expert Climatisation au Bénin",
    description:
      "Votre expert en climatisation, ventilation et réfrigération au Bénin. Installation, maintenance et dépannage.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Main Clim - Expert Climatisation Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Clim | Expert Climatisation au Bénin",
    description:
      "Votre expert en climatisation, ventilation et réfrigération au Bénin.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mainclim.bj",
  name: "Main Clim",
  description:
    "Expert en climatisation, ventilation et réfrigération au Bénin",
  url: "https://mainclim.bj",
  telephone: "+229 01 97 00 00 00",
  email: "contact@mainclim.bj",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boulevard de la Marina",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.3702913,
    longitude: 2.2942329,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  image: "https://mainclim.bj/images/og-image.jpg",
  sameAs: [
    "https://facebook.com/mainclim",
    "https://instagram.com/mainclim",
    "https://linkedin.com/company/mainclim",
  ],
  areaServed: {
    "@type": "Country",
    name: "Benin",
  },
  serviceType: [
    "Installation de climatisation",
    "Maintenance climatisation",
    "Dépannage climatisation",
    "Ventilation",
    "Réfrigération commerciale",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics placeholder */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        */}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
