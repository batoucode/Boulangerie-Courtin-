import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/photos/brioche.png"
                alt="Brioche artisanale en cours de préparation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-400 text-white rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>4.2★</p>
              <p className="text-sm font-medium text-white/90">61 avis Google</p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-8 lg:pt-0">
            <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">
              Notre histoire
            </span>
            <h2 className="section-title mt-2">
              Un savoir-faire artisanal au cœur de Bracieux
            </h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Installée au cœur de Bracieux, sur la Place de la Halle, la Boulangerie
              Courtin perpétue la tradition du pain artisanal. Chaque jour, nos boulangers
              se lèvent tôt pour pétrir, façonner et cuire les produits qui garniront
              vos tables.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Du pain de campagne croustillant aux viennoiseries dorées, en passant par
              nos pâtisseries de saison, tout est préparé sur place avec des ingrédients
              soigneusement sélectionnés, dans le respect des recettes traditionnelles.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "Chaque jour", label: "Fraîcheur garantie" },
                { value: "Artisanal", label: "Fait maison" },
                { value: "Local", label: "Produits du terroir" },
                { value: "Passion", label: "Métier de cœur" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-stone-100">
                  <p className="font-bold text-brand-400 text-lg">{stat.value}</p>
                  <p className="text-stone-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
