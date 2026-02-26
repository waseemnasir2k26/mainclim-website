"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      className={cn(centered && "text-center", "mb-12", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider mb-2",
            light ? "text-blue-300" : "text-blue-600"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg max-w-3xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
