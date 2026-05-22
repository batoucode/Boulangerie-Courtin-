import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Pains artisanaux",
    description:
      "Pain de campagne, baguette tradition, pain de seigle, pain aux céréales… Cuits sur sole pour une croûte bien dorée.",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    tag: "Spécialité",
    id: undefined as string | undefined,
  },
  {
    name: "Viennoiseries",
    description:
      "Croissants pur beurre, pains au chocolat, pains aux raisins et brioches feuilletées préparés chaque matin.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    tag: "Coup de cœur",
    id: undefined as string | undefined,
  },
  {
    name: "Gâteaux sur commande",
    description:
      "Anniversaires, mariages, occasions spéciales… Nous réalisons vos gâteaux personnalisés avec soin.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    tag: "Sur commande",
    id: "gateau",
  },
];

export default function Products() {
  return (
    <section id="produits" className="py-24 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">
            Ce que nous proposons
          </span>
          <h2 className="section-title mt-3">Nos produits</h2>
          <p className="section-subtitle">
            Des produits faits maison chaque jour, avec des ingr&eacute;dients de qualit&eacute;
            et tout le soin d&apos;un artisan passion&eacute;.
          </p>
        </div>

        {/* Grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <article
              key={product.name}
              id={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-brand-400 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-md uppercase tracking-wide">
                  {product.tag}
                </span>
              </div>
              <div className="p-7 lg:p-8">
                <h3
                  className="font-bold text-stone-900 text-xl mb-3"
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

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base"
          >
            Voir tous nos produits
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
