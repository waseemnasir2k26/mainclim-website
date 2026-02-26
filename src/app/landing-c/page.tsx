import { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsBar from "@/components/sections/StatsBar";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Landing C - Modern Minimal | Main Clim",
  description:
    "Main Clim - Solutions de climatisation modernes et élégantes pour votre confort au Bénin.",
};

// Landing Page C - "Modern Minimal"
export default function LandingCPage() {
  return (
    <>
      <HeroMinimal />
      <ServicesGrid variant="horizontal" />
      <StatsBar variant="gradient" />
      <TestimonialsSection variant="featured" />
      <CTASection variant="simple" />
    </>
  );
}
