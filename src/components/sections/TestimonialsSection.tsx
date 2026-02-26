"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/company";

interface TestimonialsSectionProps {
  variant?: "carousel" | "grid" | "featured";
}

export default function TestimonialsSection({
  variant = "carousel",
}: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (variant !== "carousel") return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [variant]);

  if (variant === "grid") {
    return (
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Témoignages"
            title="Ce Que Disent Nos Clients"
            description="La satisfaction de nos clients est notre plus grande fierté. Découvrez leurs retours d'expérience."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} variant="compact" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  if (variant === "featured") {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <Container>
          <SectionTitle
            subtitle="Témoignages"
            title="Ils Nous Font Confiance"
            light
          />

          <div className="max-w-4xl mx-auto">
            <TestimonialCard
              testimonial={testimonials[0]}
              variant="featured"
              className="text-center"
            />
          </div>
        </Container>
      </section>
    );
  }

  // Carousel variant
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          subtitle="Témoignages"
          title="Ce Que Disent Nos Clients"
          description="La satisfaction de nos clients est notre plus grande fierté."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  testimonial={testimonials[current]}
                  variant="default"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
