"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ALL_LABEL = "Tous";
type Category = "Pains" | "Viennoiseries" | "Pâtisseries" | "Gâteaux";
type TabLabel = typeof ALL_LABEL | Category;

const TABS: TabLabel[] = [ALL_LABEL, "Pains", "Viennoiseries", "Pâtisseries", "Gâteaux"];

type Product = {
  name: string;
  description: string;
  image: string;
  category: Category;
};

const products: Product[] = [
  {
    name: "Pain aux céréales",
    category: "Pains",
    image: "/photos/pain-cereales.png",
    description:
      "Pain artisanal aux céréales sélectionnées, cuit sur sole. Croûte dorée et mie généreuse pour accompagner tous vos repas.",
  },
  {
    name: "Croissants & Viennoiseries",
    category: "Viennoiseries",
    image: "/photos/viennoiseries.png",
    description:
      "Croissants pur beurre et pains au chocolat feuilletés à la perfection. Préparés chaque matin pour votre petit-déjeuner.",
  },
  {
    name: "Brioche maison",
    category: "Viennoiseries",
    image: "/photos/brioche.png",
    description:
      "Brioche moelleuse façonnée à la main, dorée au four. Préparée avec du beurre frais et des œufs de qualité.",
  },
  {
    name: "Tartelettes à la pêche",
    category: "Pâtisseries",
    image: "/photos/tartelettes-peche.png",
    description:
      "Fond sablé croustillant, crème pâtissière onctueuse et pêches fraîches de saison. Une douceur estivale irrésistible.",
  },
  {
    name: "Tarte aux fraises",
    category: "Pâtisseries",
    image: "/photos/tarte-fraises.png",
    description:
      "Tarte sablée garnie de crème pâtissière et généreusement couverte de fraises fraîches. Un classique de saison.",
  },
  {
    name: "Chocolat de Pâques",
    category: "Pâtisseries",
    image: "/photos/chocolat-paques.png",
    description:
      "Figurine en chocolat noir artisanal, réalisée à la main pour Pâques. Un savoir-faire chocolatier transmis avec passion.",
  },
  {
    name: "Fraisier",
    category: "Gâteaux",
    image: "/photos/fraisier.png",
    description:
      "Génoise moelleuse, crème mousseline à la vanille et fraises fraîches. Notre fraisier maison est une pièce de choix.",
  },
  {
    name: "Gâteau d'anniversaire",
    category: "Gâteaux",
    image: "/photos/gateau-anniversaire.png",
    description:
      "Gâteaux chiffres et lettres personnalisés, décorés de choux, macarons et écriture chocolat. Sur commande uniquement.",
  },
];

const categoryBadgeColor: Record<Category, string> = {
  Pains: "bg-amber-700",
  Viennoiseries: "bg-brand-400",
  "Pâtisseries": "bg-rose-500",
  "Gâteaux": "bg-violet-500",
};

export default function ProduitsPage() {
  const [activeTab, setActiveTab] = useState<TabLabel>(ALL_LABEL);

  const filtered =
    activeTab === ALL_LABEL
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/photos/fraisier.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/65 to-stone-950/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <span className="inline-block bg-brand-400/20 border border-brand-400/50 text-brand-200 text-sm font-medium px-5 py-2 rounded-full mb-6 tracking-wide">
            Fait maison chaque matin
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos Créations
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Découvrez l&apos;ensemble de nos pains, viennoiseries, pâtisseries et
            gâteaux, préparés avec passion par notre équipe d&apos;artisans.
          </p>
        </div>
      </section>

      {/* Sticky category tabs */}
      <div className="sticky top-20 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shrink-0 ${
                  activeTab === tab
                    ? "bg-brand-400 text-white shadow-md"
                    : "text-stone-600 hover:text-brand-500 hover:bg-brand-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product gallery */}
      <section className="py-16 bg-cream min-h-[60vh]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-stone-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {activeTab === ALL_LABEL ? "Toute notre gamme" : activeTab}
            </h2>
            <p className="text-stone-500 mt-1 text-sm">
              {filtered.length} produit{filtered.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <article
                key={product.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className={`absolute top-4 left-4 ${categoryBadgeColor[product.category]} text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 shadow-md`}
                  >
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="font-bold text-stone-900 text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-4">
          <span className="inline-block bg-brand-400/20 border border-brand-400/40 text-brand-200 text-sm font-medium px-5 py-2 rounded-full mb-6">
            Commandes spéciales
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Commander un gâteau sur mesure
          </h2>
          <p className="mt-4 text-stone-400 max-w-xl mx-auto text-lg leading-relaxed">
            Anniversaires, mariages, baptêmes… Contactez-nous à l&apos;avance pour
            que nous puissions créer votre gâteau personnalisé.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Faire une demande
            </Link>
            <a
              href="tel:+33254464187"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-stone-600 text-stone-300 font-semibold rounded-lg hover:border-brand-400 hover:text-brand-400 transition-colors duration-200 text-base"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              02 54 46 41 87
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
