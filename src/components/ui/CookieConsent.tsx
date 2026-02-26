"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Button from "./Button";
import { logger } from "@/lib/utils";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    logger.event("cookie_consent", { action: "accepted" });
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    logger.event("cookie_consent", { action: "declined" });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>

              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 mb-2">
                  Nous utilisons des cookies
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ce site utilise des cookies pour améliorer votre expérience de
                  navigation et analyser notre trafic. En continuant à utiliser
                  ce site, vous acceptez notre utilisation des cookies.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm" onClick={handleAccept}>
                    Accepter
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDecline}>
                    Refuser
                  </Button>
                </div>
              </div>

              <button
                onClick={handleDecline}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
