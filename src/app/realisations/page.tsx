import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Nos Réalisations | Main Clim",
  description:
    "Découvrez nos projets de climatisation réalisés au Bénin. Installations résidentielles et commerciales, réfrigération et ventilation.",
};

export default function RealisationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-blue-100">
              Parcourez notre portfolio de projets réalisés pour des clients
              satisfaits à travers le Bénin.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Gallery */}
      <ProjectsGallery showFilters={true} />

      <CTASection variant="simple" />
    </>
  );
}
