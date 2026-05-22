import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1600&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/55 to-stone-950/75" />

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center pt-20">
        <span className="inline-block bg-brand-400/20 border border-brand-400/50 text-brand-200 text-sm font-medium px-5 py-2 rounded-full mb-8 tracking-wide">
          Artisan Boulanger depuis 1982 &mdash; Bracieux
        </span>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          L&apos;Artisan Boulanger
          <br />
          <span className="text-brand-400">de Bracieux</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pains, viennoiseries et p&acirc;tisseries artisanales pr&eacute;par&eacute;s chaque matin
          avec passion au c&oelig;ur de Bracieux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/produits" className="btn-primary text-lg px-8 py-4">
            Voir nos produits
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white hover:text-stone-900 transition-all duration-200"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="relative z-10 w-full mt-auto">
        <div className="bg-stone-950/70 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-stretch justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {/* Address */}
              <div className="flex items-center gap-3 px-8 py-5 sm:flex-1 sm:justify-center">
                <svg className="w-5 h-5 text-brand-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">7 Place de la Halle</p>
                  <p className="text-white/60 text-xs mt-0.5">41250 Bracieux</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 px-8 py-5 sm:flex-1 sm:justify-center">
                <svg className="w-5 h-5 text-brand-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">02 54 46 41 87</p>
                  <p className="text-white/60 text-xs mt-0.5">Appelez-nous</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 px-8 py-5 sm:flex-1 sm:justify-center">
                <svg className="w-5 h-5 text-brand-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">Ouvert d&egrave;s 7h00</p>
                  <p className="text-white/60 text-xs mt-0.5">Du lundi au dimanche</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/40 animate-bounce hidden sm:block pointer-events-none">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
