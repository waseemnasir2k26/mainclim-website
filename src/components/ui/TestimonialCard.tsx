"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  variant = "default",
  className,
}: TestimonialCardProps) {
  const variants = {
    default: "bg-white p-6 rounded-2xl shadow-lg",
    featured: "bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white",
    compact: "bg-white p-4 rounded-xl shadow-md",
  };

  const textColors = {
    default: { primary: "text-gray-900", secondary: "text-gray-600", star: "text-yellow-400" },
    featured: { primary: "text-white", secondary: "text-blue-100", star: "text-yellow-300" },
    compact: { primary: "text-gray-900", secondary: "text-gray-600", star: "text-yellow-400" },
  };

  const colors = textColors[variant];

  return (
    <motion.div
      className={cn(variants[variant], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <Quote
          className={cn(
            "w-10 h-10 flex-shrink-0",
            variant === "featured" ? "text-blue-300" : "text-blue-200"
          )}
        />
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < testimonial.rating
                  ? colors.star
                  : variant === "featured"
                  ? "text-blue-400"
                  : "text-gray-300"
              )}
              fill={i < testimonial.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>

      <p className={cn("mb-6 leading-relaxed", colors.secondary, variant === "featured" && "text-lg")}>
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className={cn("font-semibold", colors.primary)}>{testimonial.name}</p>
          <p className={cn("text-sm", colors.secondary)}>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
