"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/company";
import Link from "next/link";

const categories = [
  { value: "all", label: "Tous" },
  { value: "commercial", label: "Commercial" },
  { value: "residential", label: "Résidentiel" },
];

interface ProjectsGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export default function ProjectsGallery({
  limit,
  showFilters = true,
}: ProjectsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          subtitle="Réalisations"
          title="Nos Derniers Projets"
          description="Découvrez quelques-unes de nos réalisations récentes en climatisation et réfrigération."
        />

        {showFilters && (
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  variant="outlined"
                  hover
                  className="overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-56 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full capitalize">
                      {project.category === "commercial"
                        ? "Commercial"
                        : "Résidentiel"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {limit && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700"
            >
              Voir toutes nos réalisations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
