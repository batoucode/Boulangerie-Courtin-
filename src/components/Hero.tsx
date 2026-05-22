import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-brand-400/20 border border-brand-400/40 text-brand-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Artisan Boulanger — Bracieux
        </span>

        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Boulangerie
          <br />
          <span className="text-brand-400">Courtin</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pains, viennoiseries et pâtisseries artisanales préparés chaque matin
          avec passion au cœur de Bracieux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Nous contacter
          </Link>
          <a
            href="#produits"
            className="inline-flex items-center justify-center px-8 py-4 text-lg border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-stone-900 transition-colors duration-200"
          >
            Découvrir nos produits
          </a>
        </div>

        {/* Info bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "🕖", label: "Ouvert dès 7h00", sub: "Du lundi au dimanche" },
            { icon: "📍", label: "7 Pl. de la Halle", sub: "41250 Bracieux" },
            { icon: "📞", label: "02 54 46 41 87", sub: "Prenez contact" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="font-semibold mt-1">{item.label}</p>
              <p className="text-white/70 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
