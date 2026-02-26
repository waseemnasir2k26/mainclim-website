"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/forms/ContactForm";
import { companyInfo } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <Container>
        <SectionTitle
          subtitle="Contact"
          title="Contactez-Nous"
          description="Une question ? Un projet ? N'hésitez pas à nous contacter. Notre équipe est à votre disposition."
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Téléphone</h4>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                <a
                  href={getWhatsAppLink(companyInfo.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Cliquez pour discuter
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Adresse</h4>
                <p className="text-gray-600">
                  {companyInfo.address.street}
                  <br />
                  {companyInfo.address.city}, {companyInfo.address.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Horaires</h4>
                <p className="text-gray-600">
                  {companyInfo.hours.weekdays}
                  <br />
                  {companyInfo.hours.saturday}
                  <br />
                  <span className="text-orange-500 font-semibold">
                    {companyInfo.hours.emergency}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Envoyez-nous un Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
