import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import StatsBar from "@/components/sections/StatsBar";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/Card";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "À Propos | Main Clim",
  description:
    "Découvrez Main Clim, votre expert en climatisation au Bénin depuis plus de 15 ans. Notre histoire, notre équipe et nos valeurs.",
};

const team = [
  {
    name: "Komlan Adjakpé",
    role: "Directeur Général",
    image: "/images/team/director.jpg",
  },
  {
    name: "Fatimatou Sanni",
    role: "Responsable Technique",
    image: "/images/team/tech-lead.jpg",
  },
  {
    name: "Olivier Mensah",
    role: "Chef d'Équipe Installation",
    image: "/images/team/installation.jpg",
  },
  {
    name: "Rachidatou Bello",
    role: "Responsable Commercial",
    image: "/images/team/commercial.jpg",
  },
];

const values = [
  {
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque projet, de la conception à la réalisation.",
    icon: "🎯",
  },
  {
    title: "Intégrité",
    description:
      "Transparence et honnêteté guident toutes nos relations avec nos clients.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description:
      "Nous adoptons les dernières technologies pour offrir les meilleures solutions.",
    icon: "💡",
  },
  {
    title: "Service Client",
    description:
      "La satisfaction de nos clients est au cœur de toutes nos actions.",
    icon: "❤️",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              À Propos de Main Clim
            </h1>
            <p className="text-xl text-blue-100">
              Depuis plus de {companyInfo.stats.yearsExperience} ans, nous
              accompagnons les particuliers et entreprises du Bénin dans leurs
              projets de climatisation.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Notre Histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Une Passion pour le Confort Climatique
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2009, Main Clim est née de la volonté d&apos;offrir aux
                  Béninois des solutions de climatisation de qualité, adaptées
                  aux spécificités du climat tropical.
                </p>
                <p>
                  Notre fondateur, fort d&apos;une expérience acquise auprès des
                  plus grandes marques internationales, a créé une entreprise
                  qui allie expertise technique et service client irréprochable.
                </p>
                <p>
                  Aujourd&apos;hui, Main Clim est devenue une référence dans le
                  secteur de la climatisation au Bénin, avec plus de{" "}
                  {companyInfo.stats.projectsCompleted} projets réalisés et une
                  équipe de {companyInfo.stats.certifiedTechnicians} techniciens
                  certifiés.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-800/50 flex items-center justify-center">
                <span className="text-white/50 text-6xl">🏢</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBar variant="gradient" />

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Nos Valeurs"
            title="Ce Qui Nous Guide"
            description="Nos valeurs fondamentales définissent qui nous sommes et comment nous travaillons."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} variant="elevated" hover>
                <CardContent className="text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            subtitle="Notre Équipe"
            title="Les Visages de Main Clim"
            description="Une équipe passionnée et expérimentée à votre service."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} variant="outlined" hover>
                <div className="relative h-64 -mx-6 -mt-6 mb-4 bg-gray-200 rounded-t-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <CardContent className="text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Certifications"
            title="Nos Accréditations"
            description="Des certifications qui garantissent notre expertise et notre professionnalisme."
          />

          <div className="flex flex-wrap justify-center gap-8">
            {companyInfo.certifications.map((cert) => (
              <div
                key={cert}
                className="bg-white rounded-xl shadow-md px-8 py-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <span className="font-semibold text-gray-900">{cert}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
