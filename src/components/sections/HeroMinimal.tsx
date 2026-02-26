"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Snowflake } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroMinimal() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gray-50 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-gray-600 font-medium">Climatisation Professionnelle</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Le Confort
              <br />
              <span className="text-blue-600">à Votre Portée</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Solutions de climatisation sur mesure pour votre maison ou votre
              entreprise. Qualité, fiabilité et service client exceptionnel.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/devis">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Obtenir un Devis
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg">
                  Découvrir nos Services
                </Button>
              </Link>
            </div>

            {/* Minimal Stats */}
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-500">Années d&apos;expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-500">Projets livrés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-500">Clients satisfaits</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-[3rem] transform rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-br from-blue-200 to-blue-100 rounded-[2.5rem] transform -rotate-3" />

              {/* Main Image */}
              <div className="relative h-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-minimal.jpg"
                  alt="Installation climatisation moderne"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Certifié Daikin</div>
                    <div className="text-sm text-gray-500">Installateur agréé</div>
                  </div>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">4.9/5</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">350+ avis clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
