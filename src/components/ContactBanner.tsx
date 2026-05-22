import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="py-20 bg-brand-400">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Une commande spéciale ?
        </h2>
        <p className="mt-4 text-white/85 text-lg max-w-xl mx-auto">
          Gâteaux d&apos;anniversaire, pièces montées, commandes en volume… Contactez-nous
          pour que nous puissions préparer votre commande à l&apos;avance.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-500 font-semibold rounded-lg shadow-lg hover:bg-stone-50 transition-colors duration-200 text-lg"
          >
            Formulaire de contact
          </Link>
          <a
            href="tel:+33254464187"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            02 54 46 41 87
          </a>
        </div>
      </div>
    </section>
  );
}
