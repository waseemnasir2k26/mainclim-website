"use client";

import { cn } from "@/lib/utils";

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export default function GoogleMap({
  className,
  height = "400px",
}: GoogleMapProps) {
  // Cotonou, Benin coordinates
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.89847245486!2d2.2942329!3d6.3702913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102355e3ffbe899d%3A0x9a9c7d6ee6a2cf72!2sCotonou%2C%20Benin!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s`;

  return (
    <div
      className={cn("rounded-2xl overflow-hidden shadow-lg", className)}
      style={{ height }}
    >
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation Main Clim - Cotonou, Bénin"
      />
    </div>
  );
}
