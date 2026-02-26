"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { logger } from "@/lib/utils";

const quoteSchema = z.object({
  // Step 1
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(8, "Veuillez entrer un numéro de téléphone valide"),
  company: z.string().optional(),

  // Step 2
  serviceType: z.string().min(1, "Veuillez sélectionner un service"),
  projectType: z.enum(["residential", "commercial", "industrial"]),
  propertySize: z.string().optional(),
  location: z.string().min(2, "Veuillez indiquer la localisation"),

  // Step 3
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(10, "Veuillez décrire votre projet"),
  preferredContact: z.enum(["phone", "email", "whatsapp"]),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const steps = [
  { id: 1, title: "Vos Coordonnées", icon: User },
  { id: 2, title: "Votre Projet", icon: Building },
  { id: 3, title: "Détails", icon: FileText },
];

const serviceOptions = [
  { value: "", label: "Sélectionnez un service" },
  { value: "climatisation", label: "Installation Climatisation" },
  { value: "ventilation", label: "Ventilation" },
  { value: "refrigeration", label: "Froid Commercial" },
  { value: "maintenance", label: "Contrat de Maintenance" },
  { value: "depannage", label: "Dépannage" },
  { value: "autre", label: "Autre" },
];

const projectTypeOptions = [
  { value: "residential", label: "Résidentiel" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industriel" },
];

const budgetOptions = [
  { value: "", label: "Sélectionnez votre budget" },
  { value: "under-500k", label: "Moins de 500 000 FCFA" },
  { value: "500k-1m", label: "500 000 - 1 000 000 FCFA" },
  { value: "1m-3m", label: "1 000 000 - 3 000 000 FCFA" },
  { value: "3m-5m", label: "3 000 000 - 5 000 000 FCFA" },
  { value: "over-5m", label: "Plus de 5 000 000 FCFA" },
];

const timelineOptions = [
  { value: "", label: "Sélectionnez un délai" },
  { value: "urgent", label: "Urgent (sous 1 semaine)" },
  { value: "1-2-weeks", label: "1-2 semaines" },
  { value: "1-month", label: "Sous 1 mois" },
  { value: "flexible", label: "Flexible" },
];

const contactOptions = [
  { value: "phone", label: "Téléphone" },
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      projectType: "residential",
      preferredContact: "phone",
    },
  });

  const validateStep = async (step: number) => {
    const fieldsToValidate: (keyof QuoteFormData)[][] = [
      ["name", "email", "phone"],
      ["serviceType", "projectType", "location"],
      ["description", "preferredContact"],
    ];

    const isValid = await trigger(fieldsToValidate[step - 1]);
    return isValid;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("loading");
    logger.event("quote_form_submit", {
      serviceType: data.serviceType,
      projectType: data.projectType,
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      logger.info("Quote form submitted successfully", data);
      setStatus("success");
    } catch (error) {
      logger.error("Quote form submission failed", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Demande Envoyée !
        </h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre demande de devis. Notre équipe vous contactera dans
          les 24 heures avec une proposition personnalisée.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            setStatus("idle");
            setCurrentStep(1);
          }}
        >
          Nouvelle Demande
        </Button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
                currentStep >= step.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              <step.icon className="w-6 h-6" />
            </div>
            <span
              className={`hidden md:block ml-3 font-medium ${
                currentStep >= step.id ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-12 md:w-24 h-1 mx-4 rounded ${
                  currentStep > step.id ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Contact Info */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Vos Coordonnées
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="name"
                  label="Nom complet *"
                  placeholder="Votre nom"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <Input
                  id="company"
                  label="Entreprise (optionnel)"
                  placeholder="Nom de votre entreprise"
                  {...register("company")}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="email"
                  type="email"
                  label="Email *"
                  placeholder="votre@email.com"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  id="phone"
                  type="tel"
                  label="Téléphone *"
                  placeholder="+229 XX XX XX XX"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Votre Projet
              </h3>

              <Select
                id="serviceType"
                label="Type de service *"
                options={serviceOptions}
                error={errors.serviceType?.message}
                {...register("serviceType")}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Type de projet *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {projectTypeOptions.map((option) => (
                    <label
                      key={option.value}
                      className="relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer hover:border-blue-400 transition-colors has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        className="absolute opacity-0"
                        {...register("projectType")}
                      />
                      <span className="font-medium text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="propertySize"
                  label="Surface (m²)"
                  placeholder="Ex: 150"
                  {...register("propertySize")}
                />
                <Input
                  id="location"
                  label="Localisation *"
                  placeholder="Ville / Quartier"
                  error={errors.location?.message}
                  {...register("location")}
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: Additional Info */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Détails Supplémentaires
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  id="budget"
                  label="Budget estimé"
                  options={budgetOptions}
                  {...register("budget")}
                />
                <Select
                  id="timeline"
                  label="Délai souhaité"
                  options={timelineOptions}
                  {...register("timeline")}
                />
              </div>

              <Textarea
                id="description"
                label="Description du projet *"
                placeholder="Décrivez votre projet en détail : type d'espace, besoins spécifiques, contraintes..."
                rows={5}
                error={errors.description?.message}
                {...register("description")}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Mode de contact préféré *
                </label>
                <div className="flex gap-4">
                  {contactOptions.map((option) => (
                    <label
                      key={option.value}
                      className="relative flex items-center gap-2 px-4 py-2 border-2 rounded-lg cursor-pointer hover:border-blue-400 transition-colors has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        className="w-4 h-4 text-blue-600"
                        {...register("preferredContact")}
                      />
                      <span className="font-medium text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              leftIcon={<ArrowLeft className="w-5 h-5" />}
            >
              Précédent
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <Button
              type="button"
              variant="primary"
              onClick={nextStep}
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Suivant
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              isLoading={status === "loading"}
              rightIcon={<CheckCircle className="w-5 h-5" />}
            >
              Envoyer la Demande
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
