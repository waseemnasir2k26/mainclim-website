"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, logger } from "@/lib/utils";
import { companyInfo } from "@/data/company";

interface WhatsAppButtonProps {
  message?: string;
  showLabel?: boolean;
}

export default function WhatsAppButton({
  message = "Bonjour Main Clim ! Je souhaite obtenir des informations sur vos services.",
  showLabel = false,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    logger.event("whatsapp_click", { message });
    window.open(getWhatsAppLink(companyInfo.whatsapp, message), "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors duration-200"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contacter via WhatsApp"
    >
      {showLabel ? (
        <span className="pl-5 pr-2 py-3 font-medium">Discuter sur WhatsApp</span>
      ) : null}
      <span className={showLabel ? "p-3 pr-4" : "p-4"}>
        <MessageCircle className="w-6 h-6" fill="currentColor" />
      </span>
    </motion.button>
  );
}
