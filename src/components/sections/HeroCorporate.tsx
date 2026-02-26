"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Play } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";

export default function HeroCorporate() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-corporate.jpg"
          alt="Techniciens Main Clim au travail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">
                Service disponible 24h/7j
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Climatisation
              </span>{" "}
              au Bénin
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Depuis plus de {companyInfo.stats.yearsExperience} ans, nous
              accompagnons particuliers et entreprises dans leurs projets de
              climatisation, ventilation et réfrigération.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/devis">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Demander un Devis
                </Button>
              </Link>
              <a href={`tel:${companyInfo.phone}`}>
                <Button variant="outline" size="lg" leftIcon={<Phone className="w-5 h-5" />} className="border-white text-white hover:bg-white hover:text-gray-900">
                  Appeler Maintenant
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {companyInfo.stats.yearsExperience}+
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  Années
                  <br />
                  d&apos;expérience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {companyInfo.stats.projectsCompleted}+
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  Projets
                  <br />
                  réalisés
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {companyInfo.stats.happyClients}+
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  Clients
                  <br />
                  satisfaits
                </span>
              </div>
            </div>
          </motion.div>

          {/* Video Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <button
              className="group relative w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              aria-label="Voir la vidéo de présentation"
            >
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-30" />
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
              </div>
            </button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
