"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { Card, CardContent } from "@/components/ui/Card";
import { services } from "@/data/company";

interface ServicesGridProps {
  showAll?: boolean;
  variant?: "grid" | "cards" | "horizontal";
}

export default function ServicesGrid({
  showAll = true,
  variant = "grid",
}: ServicesGridProps) {
  const displayedServices = showAll ? services : services.slice(0, 4);

  if (variant === "horizontal") {
    return (
      <section className="py-20 bg-white overflow-hidden">
        <Container>
          <SectionTitle
            subtitle="Nos Services"
            title="Solutions Complètes en Climatisation"
            description="De l'installation à la maintenance, nous proposons une gamme complète de services pour répondre à tous vos besoins."
          />
        </Container>

        <div className="relative mt-12">
          <div className="flex gap-6 animate-scroll">
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-80"
                whileHover={{ y: -5 }}
              >
                <Card variant="elevated" hover className="h-full">
                  <CardContent>
                    <ServiceIcon name={service.icon} size="lg" variant="filled" className="mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          subtitle="Nos Services"
          title="Ce Que Nous Proposons"
          description="Des solutions professionnelles pour tous vos besoins en climatisation, ventilation et réfrigération."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" hover className="h-full group">
                <CardContent>
                  <div className="mb-6">
                    <ServiceIcon
                      name={service.icon}
                      size="lg"
                      variant="filled"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <motion.button
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700"
                whileHover={{ x: 5 }}
              >
                Voir tous nos services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
