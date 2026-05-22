import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Boulangerie Courtin",
  description:
    "Contactez la Boulangerie Courtin à Bracieux. Formulaire de contact, adresse, téléphone et horaires d'ouverture.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-cream py-16 border-b border-brand-100">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-stone-500 max-w-xl mx-auto">
            Une question ? Une commande spéciale ? N&apos;hésitez pas à nous écrire
            ou à passer nous rendre visite.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact form */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>

            {/* Info + Map */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold text-stone-900 mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Nos informations
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-stone-800">Adresse</p>
                      <p className="text-stone-600">7 Place de la Halle</p>
                      <p className="text-stone-600">41250 Bracieux</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-stone-800">Téléphone</p>
                      <a
                        href="tel:+33254464187"
                        className="text-brand-500 hover:text-brand-600 transition-colors"
                      >
                        02 54 46 41 87
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-stone-800">Horaires</p>
                      <div className="text-stone-600 text-sm space-y-1 mt-1">
                        <p>Lundi — Vendredi : 7h00 – 13h00 / 15h00 – 19h00</p>
                        <p>Samedi : 7h00 – 13h00</p>
                        <p>Dimanche : 7h00 – 12h30</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
