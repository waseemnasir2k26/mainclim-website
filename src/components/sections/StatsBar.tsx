"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { companyInfo } from "@/data/company";

interface StatsBarProps {
  variant?: "default" | "dark" | "gradient";
}

const stats = [
  {
    value: companyInfo.stats.yearsExperience,
    suffix: "+",
    label: "Années d'Expérience",
  },
  {
    value: companyInfo.stats.projectsCompleted,
    suffix: "+",
    label: "Projets Réalisés",
  },
  {
    value: companyInfo.stats.happyClients,
    suffix: "+",
    label: "Clients Satisfaits",
  },
  {
    value: companyInfo.stats.certifiedTechnicians,
    label: "Techniciens Certifiés",
  },
];

export default function StatsBar({ variant = "default" }: StatsBarProps) {
  const variants = {
    default: "bg-white py-16",
    dark: "bg-gray-900 py-16",
    gradient: "bg-gradient-to-r from-blue-600 to-blue-800 py-16",
  };

  const textColors = {
    default: { value: "text-blue-600", label: "text-gray-600" },
    dark: { value: "text-blue-400", label: "text-gray-400" },
    gradient: { value: "text-white", label: "text-blue-100" },
  };

  const colors = textColors[variant];

  return (
    <section className={variants[variant]}>
      <Container>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${colors.value}`}>
                {stat.value}
                {stat.suffix}
              </div>
              <div className={`font-medium ${colors.label}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
