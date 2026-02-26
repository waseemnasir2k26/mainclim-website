export const companyInfo = {
  name: "Main Clim",
  tagline: "Votre Confort Climatique au Bénin",
  description:
    "Spécialiste en climatisation, ventilation et réfrigération au Bénin. Installation, maintenance et dépannage pour particuliers et professionnels.",
  phone: "+229 01 97 00 00 00",
  whatsapp: "22901970000000",
  email: "contact@mainclim.bj",
  address: {
    street: "Boulevard de la Marina",
    city: "Cotonou",
    country: "Bénin",
    postalCode: "",
  },
  hours: {
    weekdays: "Lun - Ven: 8h00 - 18h00",
    saturday: "Sam: 8h00 - 14h00",
    sunday: "Dim: Fermé",
    emergency: "Urgences 24h/7j",
  },
  social: {
    facebook: "https://facebook.com/mainclim",
    instagram: "https://instagram.com/mainclim",
    linkedin: "https://linkedin.com/company/mainclim",
  },
  stats: {
    yearsExperience: 15,
    projectsCompleted: 500,
    happyClients: 350,
    certifiedTechnicians: 12,
  },
  certifications: [
    "Certification Daikin",
    "Agrément Ministère de l'Environnement",
    "ISO 9001:2015",
  ],
};

export const services = [
  {
    id: "climatisation",
    title: "Climatisation",
    shortDescription: "Installation et maintenance de systèmes de climatisation",
    fullDescription:
      "Solutions complètes de climatisation pour votre confort thermique. Nous installons, entretenons et réparons tous types de climatiseurs : split, multi-split, gainable et centralisé.",
    icon: "Snowflake",
    features: [
      "Climatiseurs split et multi-split",
      "Systèmes gainables",
      "Climatisation centralisée",
      "Pompes à chaleur air-air",
    ],
    image: "/images/services/climatisation.jpg",
  },
  {
    id: "ventilation",
    title: "Ventilation",
    shortDescription: "Systèmes de ventilation et traitement d'air",
    fullDescription:
      "Améliorez la qualité de l'air intérieur avec nos solutions de ventilation performantes. VMC, extraction, filtration et traitement d'air pour tous types de bâtiments.",
    icon: "Wind",
    features: [
      "VMC simple et double flux",
      "Extraction industrielle",
      "Filtration d'air",
      "Désenfumage",
    ],
    image: "/images/services/ventilation.jpg",
  },
  {
    id: "refrigeration",
    title: "Froid Commercial",
    shortDescription: "Solutions de réfrigération commerciale et industrielle",
    fullDescription:
      "Équipements frigorifiques pour commerces, restaurants, supermarchés et industries. Chambres froides, vitrines réfrigérées et systèmes de froid industriel.",
    icon: "Thermometer",
    features: [
      "Chambres froides",
      "Vitrines réfrigérées",
      "Comptoirs frigorifiques",
      "Froid industriel",
    ],
    image: "/images/services/refrigeration.jpg",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    shortDescription: "Contrats d'entretien et maintenance préventive",
    fullDescription:
      "Prolongez la durée de vie de vos équipements avec nos contrats de maintenance. Interventions régulières, nettoyage, contrôle et optimisation des performances.",
    icon: "Wrench",
    features: [
      "Contrats annuels",
      "Maintenance préventive",
      "Nettoyage et désinfection",
      "Recharge de fluide",
    ],
    image: "/images/services/maintenance.jpg",
  },
  {
    id: "depannage",
    title: "Dépannage",
    shortDescription: "Service de dépannage rapide et efficace",
    fullDescription:
      "Panne de climatisation ? Notre équipe intervient rapidement pour diagnostiquer et réparer vos équipements. Service disponible 7j/7 pour les urgences.",
    icon: "AlertTriangle",
    features: [
      "Intervention rapide",
      "Diagnostic précis",
      "Réparation sur place",
      "Pièces d'origine",
    ],
    image: "/images/services/depannage.jpg",
  },
  {
    id: "installation",
    title: "Installation",
    shortDescription: "Installation professionnelle clé en main",
    fullDescription:
      "De l'étude à la mise en service, nous assurons l'installation complète de vos systèmes de climatisation et ventilation. Travail soigné et respect des normes.",
    icon: "Settings",
    features: [
      "Étude technique",
      "Dimensionnement",
      "Pose professionnelle",
      "Mise en service",
    ],
    image: "/images/services/installation.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Koffi Mensah",
    role: "Directeur, Hôtel Azalai",
    content:
      "Main Clim a climatisé l'ensemble de notre hôtel. Service impeccable, équipe professionnelle et respect des délais. Je recommande vivement !",
    rating: 5,
    image: "/images/testimonials/client1.jpg",
  },
  {
    id: 2,
    name: "Aminata Diallo",
    role: "Gérante, Restaurant Le Palmier",
    content:
      "Notre chambre froide fonctionne parfaitement grâce à Main Clim. Ils assurent aussi la maintenance régulière. Excellente collaboration depuis 3 ans.",
    rating: 5,
    image: "/images/testimonials/client2.jpg",
  },
  {
    id: 3,
    name: "Jean-Pierre Houngbédji",
    role: "Directeur Technique, Société SOBEMAP",
    content:
      "Pour nos bureaux de 2000m², Main Clim a proposé une solution adaptée et économique. L'équipe est réactive et le SAV est au top.",
    rating: 5,
    image: "/images/testimonials/client3.jpg",
  },
  {
    id: 4,
    name: "Mariette Ahouandjinou",
    role: "Propriétaire, Villa Cotonou",
    content:
      "Professionnels et ponctuels. Ils ont installé 5 climatiseurs chez moi en une journée. Propre et efficace. Merci Main Clim !",
    rating: 5,
    image: "/images/testimonials/client4.jpg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Hôtel Azalai Cotonou",
    category: "commercial",
    description: "Installation de 150 unités de climatisation et système de ventilation centralisé",
    image: "/images/projects/hotel-azalai.jpg",
    location: "Cotonou",
    year: 2023,
  },
  {
    id: 2,
    title: "Supermarché Erevan",
    category: "commercial",
    description: "Chambres froides et vitrines réfrigérées pour grande surface alimentaire",
    image: "/images/projects/supermarche.jpg",
    location: "Cotonou",
    year: 2023,
  },
  {
    id: 3,
    title: "Villa de Luxe Fidjrossè",
    category: "residential",
    description: "Climatisation gainable pour villa de 400m² avec domotique intégrée",
    image: "/images/projects/villa-luxe.jpg",
    location: "Cotonou",
    year: 2022,
  },
  {
    id: 4,
    title: "Bureaux SGDS",
    category: "commercial",
    description: "Climatisation centralisée pour immeuble de bureaux de 3000m²",
    image: "/images/projects/bureaux.jpg",
    location: "Cotonou",
    year: 2022,
  },
  {
    id: 5,
    title: "Restaurant Le Livingstone",
    category: "commercial",
    description: "Système de climatisation et chambre froide pour restaurant haut de gamme",
    image: "/images/projects/restaurant.jpg",
    location: "Cotonou",
    year: 2023,
  },
  {
    id: 6,
    title: "Résidence Les Cocotiers",
    category: "residential",
    description: "Installation de climatiseurs split dans 24 appartements",
    image: "/images/projects/residence.jpg",
    location: "Porto-Novo",
    year: 2021,
  },
];

export const faqs = [
  {
    question: "Quels types de climatiseurs installez-vous ?",
    answer:
      "Nous installons tous types de climatiseurs : split mural, multi-split, cassette, gainable, et systèmes centralisés. Nous travaillons avec les meilleures marques comme Daikin, LG, Samsung et Midea.",
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer:
      "Oui, nous proposons des contrats de maintenance annuels qui incluent 2 à 4 visites par an, le nettoyage des filtres, le contrôle du fluide frigorigène et un dépannage prioritaire.",
  },
  {
    question: "Quel est le délai d'intervention pour un dépannage ?",
    answer:
      "Pour les urgences, nous intervenons sous 24 à 48 heures. Pour les interventions planifiées, nous convenons d'un rendez-vous selon vos disponibilités.",
  },
  {
    question: "Travaillez-vous avec les particuliers et les entreprises ?",
    answer:
      "Absolument ! Nous intervenons aussi bien chez les particuliers (maisons, appartements) que pour les professionnels (bureaux, commerces, hôtels, industries).",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Vous pouvez demander un devis gratuit via notre formulaire en ligne, par WhatsApp ou par téléphone. Nous répondons généralement sous 24 heures avec une proposition détaillée.",
  },
  {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer:
      "Nous intervenons principalement à Cotonou et ses environs, Porto-Novo, Parakou, et sur demande dans d'autres villes du Bénin.",
  },
];

export const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Climatisation", href: "/services#climatisation" },
    { name: "Ventilation", href: "/services#ventilation" },
    { name: "Froid Commercial", href: "/services#refrigeration" },
    { name: "Maintenance", href: "/services#maintenance" },
    { name: "Dépannage", href: "/services#depannage" },
    { name: "Installation", href: "/services#installation" },
  ],
};
