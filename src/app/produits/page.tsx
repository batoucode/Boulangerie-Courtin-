import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits — Boulangerie Courtin",
  description:
    "Découvrez toutes les créations artisanales de la Boulangerie Courtin à Bracieux : pains, viennoiseries, pâtisseries et gâteaux sur commande.",
};

type Product = {
  name: string;
  description: string;
  image: string;
  category: "Pains" | "Viennoiseries" | "Pâtisseries" | "Gâteaux";
};

const products: Product[] = [
  // Pains
  {
    name: "Baguette Tradition",
    description: "Cuite sur sole, dorée à souhait. Notre baguette tradition est préparée selon la méthode artisanale.",
    image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80",
    category: "Pains",
  },
  {
    name: "Pain de Campagne",
    description: "Mie alvéolée, croûte rustique. Le grand classique de nos boulangers, cuit en four à sole.",
    image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&q=80",
    category: "Pains",
  },
  {
    name: "Pain aux Céréales",
    description: "Un mélange généreux de graines et céréales sélectionnées pour une saveur riche et un pain nutritif.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    category: "Pains",
  },
  // Viennoiseries
  {
    name: "Croissant Pur Beurre",
    description: "Feuilleté, croustillant, fondant. Nos croissants sont fabriqués avec un beurre de qualité supérieure.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    category: "Viennoiseries",
  },
  {
    name: "Pain au Chocolat",
    description: "Deux barres de chocolat noir enveloppées dans une pâte feuilletée beurrée et bien dorée.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Viennoiseries",
  },
  {
    name: "Brioche",
    description: "Moelleuse, légèrement sucrée, avec une belle dorure. Notre brioche maison ravit petits et grands.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    category: "Viennoiseries",
  },
  // Pâtisseries
  {
    name: "Éclair au Chocolat",
    description: "Pâte à choux garnie d'une crème pâtissière onctueuse et nappée d'un glaçage au chocolat noir.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80",
    category: "Pâtisseries",
  },
  {
    name: "Tarte aux Fruits",
    description: "Fond de tarte sablé, crème pâtissière et fruits de saison frais. Une fraîcheur incomparable.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?w=800&q=80",
    category: "Pâtisseries",
  },
  {
    name: "Mille-feuille",
    description: "Trois couches de pâte feuilletée caramélisée, garnies d'une crème diplomate à la vanille.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80",
    category: "Pâtisseries",
  },
  // Gâteaux
  {
    name: "Gâteau d'Anniversaire",
    description: "Personnalisé selon vos envies, réalisé avec des ingrédients frais. Sur commande uniquement.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    category: "Gâteaux",
  },
  {
    name: "Letter Cake",
    description: "Gâteau lettres décoré de crème, fleurs et fruits. Idéal pour les anniversaires et occasions spéciales.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80",
    category: "Gâteaux",
  },
  {
    name: "Macarons",
    description: "Assortiment de macarons aux saveurs variées. Disponibles à la pièce ou en coffret cadeau.",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80",
    category: "Gâteaux",
  },
];

const categories = ["Pains", "Viennoiseries", "Pâtisseries", "Gâteaux"] as const;

const categoryColors: Record<Product["category"], string> = {
  Pains: "bg-amber-700",
  Viennoiseries: "bg-brand-400",
  Pâtisseries: "bg-rose-500",
  Gâteaux: "bg-violet-500",
};

export default function ProduitsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <span className="inline-block bg-brand-400/20 border border-brand-400/40 text-brand-200 text-sm font-medium px-5 py-2 rounded-full mb-6">
            Fait maison chaque jour
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos Créations
          </h1>
          <p className="mt-4 text-xl text-white/75 max-w-2xl mx-auto">
            Du four à votre table — pains, viennoiseries, pâtisseries et gâteaux
            préparés chaque matin avec des ingrédients soigneusement choisis.
          </p>
        </div>
      </section>

      {/* Products by category */}
      <div className="bg-cream">
        {categories.map((cat, catIndex) => {
          const catProducts = products.filter((p) => p.category === cat);
          return (
            <section
              key={cat}
              id={cat.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}
              className={catIndex % 2 === 0 ? "py-20 bg-cream" : "py-20 bg-white"}
            >
              <div className="container mx-auto px-4 lg:px-8">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-12">
                  <span
                    className={`w-3 h-10 rounded-full ${categoryColors[cat]}`}
                  />
                  <div>
                    <h2
                      className="text-3xl md:text-4xl font-bold text-stone-900"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {cat}
                    </h2>
                    <p className="text-stone-500 text-sm mt-1">
                      {catProducts.length} produit{catProducts.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Products grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProducts.map((product) => (
                    <div
                      key={product.name}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span
                          className={`absolute top-4 left-4 ${categoryColors[product.category]} text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 shadow-md`}
                        >
                          {product.category}
                        </span>
                      </div>
                      <div className="p-6">
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
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

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
