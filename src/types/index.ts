export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: "commercial" | "residential" | "industrial";
  description: string;
  image: string;
  location: string;
  year: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  // Step 1: Contact Info
  name: string;
  email: string;
  phone: string;
  company?: string;

  // Step 2: Project Details
  serviceType: string;
  projectType: "residential" | "commercial" | "industrial";
  propertySize?: string;
  location: string;

  // Step 3: Additional Info
  budget?: string;
  timeline?: string;
  description: string;
  preferredContact: "phone" | "email" | "whatsapp";
}

export interface NavItem {
  name: string;
  href: string;
}

export type LandingVariant = "corporate" | "service" | "minimal";
