import { Metadata } from "next";
import HeroService from "@/components/sections/HeroService";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Landing B - Service First | Main Clim",
  description:
    "Découvrez nos services de climatisation au Bénin. Demandez un devis gratuit pour l'installation, la maintenance ou le dépannage de votre climatisation.",
};

// Landing Page B - "Service-First"
export default function LandingBPage() {
  return (
    <>
      <HeroService />
      <ServicesGrid variant="cards" />
      <ProjectsGallery limit={4} showFilters={false} />
      <FAQSection />
      <CTASection variant="split" />
    </>
  );
}
