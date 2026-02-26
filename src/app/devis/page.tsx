import { Metadata } from "next";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import QuoteForm from "@/components/forms/QuoteForm";
import { companyInfo } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Demande de Devis | Main Clim",
  description:
    "Demandez un devis gratuit pour votre projet de climatisation au Bénin. Réponse sous 24h garantie.",
};

const benefits = [
  "Devis gratuit et sans engagement",
  "Réponse sous 24 heures",
  "Étude personnalisée de votre projet",
  "Prix compétitifs et transparents",
  "Conseils d'experts inclus",
];

export default function DevisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Demande de Devis
            </h1>
            <p className="text-xl text-blue-100">
              Recevez une estimation gratuite et personnalisée pour votre projet
              de climatisation en moins de 24 heures.
            </p>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Pourquoi Demander un Devis ?
                </h2>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Besoin d&apos;aide ?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {companyInfo.phone}
                    </a>
                    <a
                      href={getWhatsAppLink(companyInfo.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
