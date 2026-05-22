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
    name: "Baguette tradition",
    category: "Pains",
    image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80",
    description:
      "Notre baguette signature, croustillante et savoureuse, pétrie et façonnée à la main chaque matin.",
  },
  {
    name: "Pain de campagne",
    category: "Pains",
    image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&q=80",
    description:
      "Pain rustique à la mie dense et parfumée, idéal pour accompagner tous vos repas.",
  },
  {
    name: "Pain aux céréales",
    category: "Pains",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    description:
      "Mélange de céréales sélectionnées pour une saveur riche et une texture moelleuse.",
  },
  {
    name: "Croissant",
    category: "Viennoiseries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    description:
      "Croissant pur beurre, feuilleté à la perfection, doré et croustillant.",
  },
  {
    name: "Pain au chocolat",
    category: "Viennoiseries",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description:
      "Pâte feuilletée beurrée garnie de deux barres de chocolat noir de qualité.",
  },
  {
    name: "Brioche",
    category: "Viennoiseries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    description:
      "Brioche moelleuse et dorée, préparée avec du beurre frais et des oeufs.",
  },
  {
    name: "Éclair chocolat",
    category: "Pâtisseries",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80",
    description:
      "Pâte à choux garnie de crème pâtissière au chocolat et nappée de fondant.",
  },
  {
    name: "Tarte aux fruits",
    category: "Pâtisseries",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?w=800&q=80",
    description:
      "Fond de tarte sablé, crème pâtissière onctueuse et fruits frais de saison.",
  },
  {
    name: "Mille-feuille",
    category: "Pâtisseries",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80",
    description:
      "Feuilletage caramélisé alterné avec une généreuse crème mousseline à la vanille.",
  },
  {
    name: "Gâteau décoré",
    category: "Gâteaux",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    description:
      "Gâteaux sur mesure conçus avec soin pour vos anniversaires et célébrations.",
  },
  {
    name: "Letter cake",
    category: "Gâteaux",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80",
    description:
      "Gâteau lettre personnalisé, décoré de fleurs et de gourmandises assorties.",
  },
  {
    name: "Macarons",
    category: "Pâtisseries",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80",
    description:
      "Coques légères et colorées, garnies de ganaches et crèmes raffinées.",
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
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/70 to-stone-950/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <span className="inline-block bg-brand-400/20 border border-brand-400/50 text-brand-200 text-sm font-medium px-5 py-2 rounded-full mb-6 tracking-wide">
            Fait maison chaque matin
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos Cr&eacute;ations
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            D&eacute;couvrez l&apos;ensemble de nos pains, viennoiseries, p&acirc;tisseries et
            g&acirc;teaux, pr&eacute;par&eacute;s avec passion par notre &eacute;quipe d&apos;artisans.
          </p>
        </div>
      </section>

      {/* Category Tabs — sticky below header */}
      <div className="sticky top-20 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
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

      {/* Gallery */}
      <section className="py-16 bg-cream min-h-[60vh]">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section heading */}
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

          {/* Product grid */}
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category badge */}
                  <span
                    className={`absolute top-3 left-3 ${categoryBadgeColor[product.category]} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm uppercase tracking-wide`}
                  >
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="font-bold text-stone-900 text-lg mb-2 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="inline-block text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Commande personnalis&eacute;e
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Commander un g&acirc;teau sur mesure
          </h2>
          <p className="text-stone-500 text-lg mb-8 leading-relaxed">
            Anniversaire, mariage, bapt&ecirc;me&hellip; Nous cr&eacute;ons votre g&acirc;teau unique
            avec les saveurs et la d&eacute;coration de votre choix.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base"
          >
            Nous contacter pour une commande
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
