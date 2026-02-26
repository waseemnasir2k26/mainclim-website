import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { Card, CardContent } from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/company";

export const metadata: Metadata = {
  title: "Nos Services | Main Clim",
  description:
    "Découvrez tous nos services de climatisation, ventilation et réfrigération au Bénin. Installation, maintenance, dépannage et plus encore.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-blue-100">
              Des solutions professionnelles et complètes pour tous vos besoins
              en climatisation, ventilation et réfrigération.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <ServiceIcon
                    name={service.icon}
                    size="xl"
                    variant="filled"
                    className="mb-6"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.fullDescription}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-200 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ServiceIcon
                      name={service.icon}
                      size="xl"
                      className="text-white/30 w-32 h-32"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Pourquoi Nous Choisir"
            title="L'Excellence au Service de Votre Confort"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise",
                description:
                  "Plus de 15 ans d'expérience dans le domaine de la climatisation",
                icon: "🏆",
              },
              {
                title: "Qualité",
                description:
                  "Équipements de marques reconnues et installation soignée",
                icon: "⭐",
              },
              {
                title: "Réactivité",
                description:
                  "Intervention rapide et service client disponible 7j/7",
                icon: "⚡",
              },
              {
                title: "Garantie",
                description:
                  "Garantie sur tous nos travaux et SAV assuré",
                icon: "🛡️",
              },
            ].map((item) => (
              <Card key={item.title} variant="elevated" hover>
                <CardContent className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
