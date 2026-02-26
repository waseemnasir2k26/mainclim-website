"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

interface CTASectionProps {
  variant?: "default" | "simple" | "split";
}

export default function CTASection({ variant = "default" }: CTASectionProps) {
  if (variant === "simple") {
    return (
      <section className="py-16 bg-blue-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Améliorer Votre Confort ?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis">
                <Button variant="secondary" size="lg">
                  Demander un Devis Gratuit
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Besoin d&apos;un Devis ?
              </h3>
              <p className="text-blue-100 mb-6">
                Recevez une estimation gratuite et personnalisée pour votre
                projet de climatisation.
              </p>
              <Link href="/devis">
                <Button
                  variant="secondary"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Demander un Devis
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Urgence Dépannage ?</h3>
              <p className="text-gray-400 mb-6">
                Notre équipe est disponible 24h/7j pour les interventions
                urgentes.
              </p>
              <a href={`tel:${companyInfo.phone}`}>
                <Button
                  variant="outline"
                  leftIcon={<Phone className="w-5 h-5" />}
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Appeler Maintenant
                </Button>
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Besoin d&apos;un Expert en Climatisation ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez-nous dès maintenant pour discuter de votre projet et
            obtenir un devis personnalisé gratuit.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/devis">
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Demander un Devis Gratuit
              </Button>
            </Link>
            <a
              href={getWhatsAppLink(companyInfo.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phone}
            </a>
            <span className="hidden md:block">|</span>
            <span className="text-orange-300 font-semibold">
              {companyInfo.hours.emergency}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
