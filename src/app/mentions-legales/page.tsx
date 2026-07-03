import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Boulangerie Courtin",
  description:
    "Mentions légales et politique de confidentialité du site de la Boulangerie Courtin à Bracieux.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-cream py-16 border-b border-brand-100">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mentions légales
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l&apos;économie numérique.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-stone max-w-none space-y-10">

            {/* 1. Éditeur */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                1. Éditeur du site
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Le site <strong>www.boulangerie-courtin.fr</strong> est édité par :
              </p>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li><strong>Raison sociale :</strong> Boulangerie Courtin</li>
                <li><strong>Adresse :</strong> 7 Place de la Halle, 41250 Bracieux</li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:+33254464187" className="text-brand-500 hover:text-brand-600">
                    02 54 46 41 87
                  </a>
                </li>
                <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
              </ul>
            </div>

            {/* 2. Directeur de la publication */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                2. Directeur de la publication
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Le directeur de la publication est le responsable de la Boulangerie Courtin,
                dont le siège est situé au 7 Place de la Halle, 41250 Bracieux.
              </p>
            </div>

            {/* 3. Hébergement */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                3. Hébergement
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Le site est hébergé par :
              </p>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li><strong>Société :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis</li>
                <li>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-500 hover:text-brand-600"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. Conception */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                4. Conception & développement
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Site conçu et développé par{" "}
                <a
                  href="https://www.descodes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  <span style={{ color: "#f97316" }}>Des</span>
                  <span style={{ color: "#3b82f6" }}>Codes</span>
                </a>
                .
              </p>
            </div>

            {/* 5. Propriété intellectuelle */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                5. Propriété intellectuelle
              </h2>
              <p className="text-stone-600 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, photographies, visuels, logo)
                est la propriété exclusive de la Boulangerie Courtin et est protégé par
                les lois françaises et internationales relatives à la propriété
                intellectuelle.
              </p>
              <p className="mt-3 text-stone-600 leading-relaxed">
                Toute reproduction, représentation, modification, publication ou adaptation
                de tout ou partie des éléments du site, quel que soit le moyen ou le procédé
                utilisé, est interdite sans l&apos;autorisation écrite préalable de la
                Boulangerie Courtin.
              </p>
            </div>

            {/* 6. Données personnelles */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                6. Données personnelles (RGPD)
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD —
                Règlement UE 2016/679), la Boulangerie Courtin s&apos;engage à protéger
                vos données personnelles.
              </p>

              <h3 className="text-lg font-semibold text-stone-800 mt-5 mb-2">
                Données collectées
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Via le formulaire de contact, nous collectons les informations suivantes :
                nom, adresse email, numéro de téléphone (optionnel), sujet et contenu du
                message.
              </p>

              <h3 className="text-lg font-semibold text-stone-800 mt-5 mb-2">
                Finalité du traitement
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Ces données sont utilisées exclusivement pour répondre à vos demandes de
                contact et ne sont jamais cédées, vendues ou louées à des tiers.
              </p>

              <h3 className="text-lg font-semibold text-stone-800 mt-5 mb-2">
                Durée de conservation
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Vos données sont conservées le temps nécessaire au traitement de votre
                demande, et supprimées ensuite dans un délai de 3 ans maximum.
              </p>

              <h3 className="text-lg font-semibold text-stone-800 mt-5 mb-2">
                Vos droits
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Conformément à la loi Informatique et Libertés et au RGPD, vous disposez
                d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition
                concernant vos données. Pour exercer ces droits, contactez-nous par
                téléphone au{" "}
                <a href="tel:+33254464187" className="text-brand-500 hover:text-brand-600">
                  02 54 46 41 87
                </a>{" "}
                ou en vous rendant directement à notre boulangerie.
              </p>
            </div>

            {/* 7. Cookies */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                7. Cookies
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Ce site ne dépose aucun cookie de traçage ou de suivi publicitaire.
                La carte Google Maps intégrée peut déposer des cookies fonctionnels
                de la part de Google LLC. Pour en savoir plus, consultez la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-500 hover:text-brand-600"
                >
                  politique de confidentialité de Google
                </a>
                .
              </p>
            </div>

            {/* 8. Responsabilité */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                8. Limitation de responsabilité
              </h2>
              <p className="text-stone-600 leading-relaxed">
                La Boulangerie Courtin s&apos;efforce de maintenir les informations
                présentes sur ce site à jour (horaires, disponibilités). Toutefois, nous
                ne pouvons garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité
                des informations diffusées. En cas de doute, merci de nous contacter
                directement.
              </p>
            </div>

            {/* 9. Loi applicable */}
            <div>
              <h2
                className="text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                9. Droit applicable
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Le présent site et ses mentions légales sont soumis au droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
