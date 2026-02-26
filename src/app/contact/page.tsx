import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import GoogleMap from "@/components/ui/GoogleMap";
import { companyInfo } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact | Main Clim",
  description:
    "Contactez Main Clim pour tous vos besoins en climatisation au Bénin. Téléphone, email, WhatsApp ou rendez-vous à notre bureau à Cotonou.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-blue-100">
              Une question ? Un projet ? Notre équipe est à votre disposition
              pour vous accompagner.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-12 relative z-10">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Téléphone</h3>
                <p className="text-gray-600">{companyInfo.phone}</p>
              </div>
            </a>

            <a
              href={getWhatsAppLink(companyInfo.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">Cliquez pour discuter</p>
              </div>
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">{companyInfo.email}</p>
              </div>
            </a>

            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Horaires</h3>
                <p className="text-gray-600 text-sm">
                  {companyInfo.hours.weekdays}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un Message
              </h2>
              <ContactForm />
            </div>

            {/* Map & Address */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Notre Adresse
                    </h3>
                    <p className="text-gray-600">
                      {companyInfo.address.street}
                      <br />
                      {companyInfo.address.city}, {companyInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Heures d&apos;Ouverture
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p>{companyInfo.hours.weekdays}</p>
                    <p>{companyInfo.hours.saturday}</p>
                    <p>{companyInfo.hours.sunday}</p>
                    <p className="text-orange-500 font-semibold">
                      {companyInfo.hours.emergency}
                    </p>
                  </div>
                </div>
              </div>

              <GoogleMap height="300px" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
