"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { companyInfo, navigation } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-br from-blue-500 to-blue-700">
                  MC
                </div>
                <span className="text-2xl font-bold text-white">
                  Main <span className="text-orange-500">Clim</span>
                </span>
              </Link>
              <p className="mb-6 leading-relaxed">{companyInfo.description}</p>
              <div className="flex gap-4">
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={getWhatsAppLink(companyInfo.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white text-lg font-bold mb-6">Nos Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white text-lg font-bold mb-6">Liens Rapides</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/devis"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Demander un Devis
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.city}, {companyInfo.address.country}
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-blue-400" />
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p>{companyInfo.hours.weekdays}</p>
                    <p>{companyInfo.hours.saturday}</p>
                    <p className="text-orange-400 font-semibold">
                      {companyInfo.hours.emergency}
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {companyInfo.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
