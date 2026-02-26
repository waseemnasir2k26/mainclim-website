import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\s/g, "");
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = formatPhoneNumber(phone);
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Structured logging for form submissions and events
export const logger = {
  info: (message: string, data?: Record<string, unknown>) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data || "");
  },
  error: (message: string, error?: unknown) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || "");
  },
  event: (eventName: string, data?: Record<string, unknown>) => {
    console.log(`[EVENT] ${new Date().toISOString()} - ${eventName}`, data || "");
  },
};
