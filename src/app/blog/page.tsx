import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | Main Clim",
  description:
    "Conseils, actualités et guides pratiques sur la climatisation au Bénin. Découvrez nos articles pour optimiser votre confort climatique.",
};

// Placeholder blog posts - Replace with CMS data
const blogPosts = [
  {
    id: 1,
    slug: "comment-choisir-climatiseur",
    title: "Comment Choisir le Bon Climatiseur pour Votre Maison",
    excerpt:
      "Guide complet pour sélectionner le climatiseur adapté à vos besoins, votre budget et la taille de votre espace.",
    image: "/images/blog/choisir-climatiseur.jpg",
    category: "Conseils",
    author: "Main Clim",
    date: "2024-01-15",
    readTime: "5 min",
  },
  {
    id: 2,
    slug: "entretien-climatisation-benin",
    title: "L'Entretien de Votre Climatisation au Bénin : Guide Pratique",
    excerpt:
      "Découvrez les bonnes pratiques pour maintenir votre climatiseur en parfait état et prolonger sa durée de vie.",
    image: "/images/blog/entretien-clim.jpg",
    category: "Maintenance",
    author: "Main Clim",
    date: "2024-01-10",
    readTime: "4 min",
  },
  {
    id: 3,
    slug: "economiser-energie-climatisation",
    title: "5 Astuces pour Économiser l'Énergie avec Votre Climatiseur",
    excerpt:
      "Réduisez vos factures d'électricité tout en restant au frais. Conseils pratiques et faciles à appliquer.",
    image: "/images/blog/economie-energie.jpg",
    category: "Économies",
    author: "Main Clim",
    date: "2024-01-05",
    readTime: "3 min",
  },
  {
    id: 4,
    slug: "climatisation-commerciale-guide",
    title: "Climatisation Commerciale : Ce Qu'il Faut Savoir",
    excerpt:
      "Tout ce que les propriétaires d'entreprises doivent savoir sur la climatisation de leurs locaux professionnels.",
    image: "/images/blog/climatisation-commerciale.jpg",
    category: "Commercial",
    author: "Main Clim",
    date: "2023-12-28",
    readTime: "6 min",
  },
  {
    id: 5,
    slug: "signes-reparation-climatiseur",
    title: "Les Signes Qui Montrent Que Votre Climatiseur a Besoin d'une Réparation",
    excerpt:
      "Identifiez rapidement les problèmes de votre climatiseur avant qu'ils ne s'aggravent.",
    image: "/images/blog/reparation-clim.jpg",
    category: "Dépannage",
    author: "Main Clim",
    date: "2023-12-20",
    readTime: "4 min",
  },
  {
    id: 6,
    slug: "avantages-contrat-maintenance",
    title: "Les Avantages d'un Contrat de Maintenance Climatisation",
    excerpt:
      "Pourquoi souscrire un contrat de maintenance est un investissement judicieux pour votre tranquillité.",
    image: "/images/blog/contrat-maintenance.jpg",
    category: "Maintenance",
    author: "Main Clim",
    date: "2023-12-15",
    readTime: "5 min",
  },
];

const categories = [
  { name: "Tous", count: 6 },
  { name: "Conseils", count: 2 },
  { name: "Maintenance", count: 2 },
  { name: "Économies", count: 1 },
  { name: "Commercial", count: 1 },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog & Conseils
            </h1>
            <p className="text-xl text-blue-100">
              Restez informé avec nos articles sur la climatisation, les
              économies d&apos;énergie et l&apos;entretien de vos équipements.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">Catégories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="border-t mt-6 pt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez nos derniers articles et conseils directement dans
                    votre boîte mail.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button variant="primary" size="sm" className="w-full">
                      S&apos;abonner
                    </Button>
                  </form>
                </div>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    variant="outlined"
                    hover
                    className="overflow-hidden group"
                  >
                    <div className="relative h-48 -mx-6 -mt-6 mb-4 bg-gray-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/40 group-hover:opacity-75 transition-opacity" />
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span>{post.readTime} de lecture</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all"
                      >
                        Lire l&apos;article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-semibold">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg bg-white text-gray-600 hover:bg-gray-50 font-semibold">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg bg-white text-gray-600 hover:bg-gray-50 font-semibold">
                  3
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
