import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="py-24 bg-brand-400 relative overflow-hidden">
      {/* Subtle decorative background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 text-center max-w-3xl">
        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 tracking-wider uppercase">
          Commandes sp&eacute;ciales
        </span>

        <h2
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Une commande sp&eacute;ciale&nbsp;?
        </h2>
        <p className="text-white/85 text-lg max-w-xl mx-auto leading-relaxed">
          G&acirc;teaux d&apos;anniversaire, pi&egrave;ces mont&eacute;es, commandes en volume&hellip; Contactez-nous
          pour que nous puissions pr&eacute;parer votre commande &agrave; l&apos;avance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-500 font-semibold rounded-lg shadow-lg hover:bg-stone-50 transition-colors duration-200 text-base"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Formulaire de contact
          </Link>
          <a
            href="tel:+33254464187"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/15 transition-colors duration-200 text-base"
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
