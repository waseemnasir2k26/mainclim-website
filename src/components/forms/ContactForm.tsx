"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { logger } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(8, "Veuillez entrer un numéro de téléphone valide"),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  { value: "", label: "Sélectionnez un sujet" },
  { value: "devis", label: "Demande de devis" },
  { value: "installation", label: "Installation" },
  { value: "maintenance", label: "Maintenance" },
  { value: "depannage", label: "Dépannage urgent" },
  { value: "autre", label: "Autre" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    logger.event("contact_form_submit", { subject: data.subject });

    try {
      // Simulate API call - Replace with actual EmailJS or Formspree integration
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For production, uncomment and configure:
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) throw new Error("Erreur lors de l'envoi");

      logger.info("Contact form submitted successfully", data);
      setStatus("success");
      reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      logger.error("Contact form submission failed", error);
      setStatus("error");
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Message Envoyé !
        </h3>
        <p className="text-gray-600">
          Merci pour votre message. Nous vous répondrons dans les plus brefs
          délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="name"
          label="Nom complet *"
          placeholder="Votre nom"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          type="email"
          label="Email *"
          placeholder="votre@email.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="phone"
          type="tel"
          label="Téléphone *"
          placeholder="+229 XX XX XX XX"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Select
          id="subject"
          label="Sujet *"
          options={subjects}
          error={errors.subject?.message}
          {...register("subject")}
        />
      </div>

      <Textarea
        id="message"
        label="Message *"
        placeholder="Décrivez votre projet ou votre demande..."
        rows={5}
        error={errors.message?.message}
        {...register("message")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={status === "loading"}
        leftIcon={<Send className="w-5 h-5" />}
        className="w-full md:w-auto"
      >
        Envoyer le Message
      </Button>
    </form>
  );
}
