import Image from "next/image";

const products = [
  {
    name: "Pains artisanaux",
    description:
      "Pain de campagne, baguette tradition, pain de seigle, pain aux céréales… Cuits sur sole pour une croûte bien dorée.",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
    tag: "Spécialité",
  },
  {
    name: "Viennoiseries",
    description:
      "Croissants pur beurre, pains au chocolat, pains aux raisins et brioches feuilletées préparés chaque matin.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    tag: "Coup de cœur",
  },
  {
    name: "Pâtisseries",
    description:
      "Tartes, éclairs, mille-feuilles et entremets de saison. Des créations gourmandes qui raviront petits et grands.",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&q=80",
    tag: "Gourmandise",
  },
  {
    name: "Gâteaux sur commande",
    description:
      "Anniversaires, mariages, occasions spéciales… Nous réalisons vos gâteaux personnalisés sur commande.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    tag: "Sur commande",
  },
];

export default function Products() {
  return (
    <section id="produits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">
            Ce que nous proposons
          </span>
          <h2 className="section-title mt-2">Nos produits</h2>
          <p className="section-subtitle">
            Des produits faits maison chaque jour, avec des ingrédients de qualité
            et tout le soin d&apos;un artisan passionné.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-stone-100"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute top-3 left-3 bg-brand-400 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-900 text-lg mb-2">
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
}
