const hours = [
  { day: "Lundi",    morning: "7h00 – 13h00", afternoon: "15h30 – 19h00", open: true },
  { day: "Mardi",    morning: "7h00 – 13h00", afternoon: "15h30 – 19h00", open: true },
  { day: "Mercredi", morning: null,            afternoon: null,            open: false },
  { day: "Jeudi",    morning: "7h00 – 13h00", afternoon: "15h30 – 19h00", open: true },
  { day: "Vendredi", morning: "7h00 – 13h00", afternoon: "15h30 – 19h00", open: true },
  { day: "Samedi",   morning: "7h00 – 13h00", afternoon: "15h30 – 19h00", open: true },
  { day: "Dimanche", morning: "7h00 – 13h00", afternoon: null,            open: true },
];

export default function Hours() {
  return (
    <section id="horaires" className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">
              Quand nous rendre visite
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mt-2 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Horaires d&apos;ouverture
            </h2>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Ouvert 6 jours sur 7 — fermé le mercredi. N&apos;hésitez pas à nous
              appeler pour les commandes spéciales.
            </p>

            <a
              href="tel:+33254464187"
              className="mt-8 inline-flex items-center gap-3 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 py-4 rounded-xl transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              02 54 46 41 87
            </a>
          </div>

          {/* Schedule table */}
          <div className="bg-stone-800 rounded-2xl overflow-hidden">
            <div className="bg-brand-400 px-6 py-4">
              <h3 className="font-bold text-white text-lg">Planning hebdomadaire</h3>
            </div>
            <div className="divide-y divide-stone-700">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="font-medium text-white w-28">{h.day}</span>
                  <div className="text-right">
                    {h.open ? (
                      <>
                        <span className="text-stone-300 text-sm">{h.morning}</span>
                        {h.afternoon && (
                          <span className="text-stone-300 text-sm ml-2">/ {h.afternoon}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-stone-500 text-sm italic">Fermé</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
