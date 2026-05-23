import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-brand-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                C
              </span>
              <div>
                <p
                  className="text-white font-bold text-lg leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Boulangerie Courtin
                </p>
                <p className="text-brand-400 text-xs tracking-widest uppercase">
                  Artisan boulanger
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Boulangerie artisanale au cœur de Bracieux, en Loir-et-Cher.
              Pains, viennoiseries et pâtisseries faits maison depuis de
              nombreuses années.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Accueil" },
                { href: "/#produits", label: "Nos produits" },
                { href: "/#horaires", label: "Horaires" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nous trouver</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>7 Place de la Halle<br />41250 Bracieux</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33254464187" className="hover:text-brand-400 transition-colors">
                  02 54 46 41 87
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ouvert 7j/7 dès 7h00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">© {year} Boulangerie Courtin — Bracieux. Tous droits réservés.</p>
          <a
            href="https://www.descodes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
          >
            <span className="text-sm text-stone-400 font-medium">Conçu par</span>
            <span className="text-base font-bold tracking-tight">
              <span style={{ color: "#f97316" }}>Des</span><span style={{ color: "#3b82f6" }}>Codes</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
