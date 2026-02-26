"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo, navigation } from "@/data/company";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "solid" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg =
    variant === "transparent" && !isScrolled
      ? "bg-transparent"
      : "bg-white shadow-md";

  const textColor =
    variant === "transparent" && !isScrolled ? "text-white" : "text-gray-900";

  const logoColor =
    variant === "transparent" && !isScrolled ? "text-white" : "text-blue-600";

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-blue-900 text-white text-sm py-2">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {companyInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>{companyInfo.hours.weekdays}</span>
              <span className="text-orange-400 font-semibold">
                {companyInfo.hours.emergency}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          headerBg
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white",
                  "bg-gradient-to-br from-blue-500 to-blue-700"
                )}
              >
                MC
              </div>
              <span className={cn("text-2xl font-bold", logoColor)}>
                Main <span className="text-orange-500">Clim</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-blue-600",
                    textColor
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/devis">
                <Button variant="primary" size="md">
                  Devis Gratuit
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn("lg:hidden p-2", textColor)}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <Container>
                <div className="py-4 space-y-4">
                  {navigation.main.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t space-y-3">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <Phone className="w-4 h-4" />
                      {companyInfo.phone}
                    </a>
                    <Link href="/devis" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="primary" size="md" className="w-full">
                        Devis Gratuit
                      </Button>
                    </Link>
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
