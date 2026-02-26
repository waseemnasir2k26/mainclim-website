import { Metadata } from "next";
import HeroCorporate from "@/components/sections/HeroCorporate";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Accueil | Main Clim - Expert Climatisation Bénin",
  description:
    "Main Clim - Votre expert en climatisation, ventilation et réfrigération au Bénin. Installation, maintenance et dépannage pour particuliers et professionnels.",
};

// Landing Page A - "Corporate Trust"
export default function HomePage() {
  return (
    <>
      <HeroCorporate />
      <StatsBar variant="default" />
      <ServicesGrid showAll={false} />
      <TestimonialsSection variant="carousel" />
      <ProjectsGallery limit={3} showFilters={false} />
      <CTASection />
      <ContactSection />
    </>
  );
}
