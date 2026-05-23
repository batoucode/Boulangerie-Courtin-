# DesCodes — Prompt maître création de site vitrine artisan

> Copiez-collez ce prompt en remplaçant les variables `{{}}` pour générer un nouveau site complet en une seule fois.

---

## PROMPT À UTILISER

```
Génère un site vitrine complet Next.js 15+ pour un artisan avec ces spécifications :

## ENTREPRISE
- Nom : {{NOM_ENTREPRISE}}
- Métier : {{METIER}} (ex: Boulangerie, Boucherie, Fleuriste…)
- Ville : {{VILLE}}
- Adresse complète : {{ADRESSE}}
- Téléphone : {{TELEPHONE}}
- Email contact (optionnel) : {{EMAIL}}

## HORAIRES
{{HORAIRES}}

## PHOTOS
Utilise uniquement ces photos locales (à placer dans public/photos/) :
{{LISTE_PHOTOS_ET_DESCRIPTIONS}}

## DESIGN
- Couleur principale (hex) : {{COULEUR_HEX}}
- Police : Roboto (corps) + Playfair Display (titres)
- Style : Classique, artisanal

## PAGES
1. Accueil : Hero plein écran + À propos + Produits (3 cartes) + Horaires + Bannière CTA
2. /produits : Galerie avec filtres par catégorie (tabs sticky)
3. /contact : Formulaire avancé (flou + overlay "bientôt disponible" si pas d'email) + Google Maps

## CONTRAINTES TECHNIQUES
- Next.js App Router, TypeScript strict, Tailwind CSS
- next/image avec fill + sizes pour toutes les images (jamais de <img>)
- Apostrophes JSX : &apos; — Pas de ' dans le JSX
- Header : transparent sur hero, blanc+shadow au scroll, menu burger mobile
- Formulaire : react-hook-form + Zod, validation client ET serveur, API route /api/contact
- Envoi email via Resend si RESEND_API_KEY défini, sinon console.log
- Google Maps embed sans clé API (iframe avec adresse en URL)
- Adresse cliquable → Google Maps, téléphone cliquable → tel:
- Signature en pied de page : "Site conçu par : DesCodes" avec "Des" en orange #f97316 et "Codes" en bleu #3b82f6, lien vers descodes.com
- .npmrc avec legacy-peer-deps=true
- vercel.json avec region cdg1
- .gitignore, .env.example

## LIVRABLES
- Build `next build` doit passer sans erreur ni warning
- Commit et push sur la branche fournie
- README.md avec stack, structure, infos client, déploiement Vercel
```

---

## CHECKLIST POST-GÉNÉRATION

- [ ] Photos réelles uploadées et utilisées (aucune photo Unsplash)
- [ ] Horaires corrects partout (Hours.tsx, contact/page.tsx, Hero.tsx strip, Footer.tsx)
- [ ] Adresse → lien Google Maps
- [ ] Téléphone → lien tel:
- [ ] Formulaire flou si pas d'email, actif si email configuré
- [ ] Signature DesCodes visible en footer
- [ ] Build Vercel sans erreur (Next.js version non vulnérable, eslint compatible)
- [ ] README.md créé

---

## POUR ACTIVER LE FORMULAIRE (quand email disponible)

Variables Vercel à ajouter :
```
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL=email@domaine.fr
```

Dans `src/app/contact/page.tsx`, remplacer le wrapper flou par :
```tsx
<div>
  <h2 style={{ fontFamily: "'Playfair Display', serif" }} ...>
    Envoyez-nous un message
  </h2>
  <ContactForm />
</div>
```

---

## SITES RÉALISÉS

| Client | Repo | URL | Date |
|---|---|---|---|
| Boulangerie Courtin — Bracieux | batoucode/Boulangerie-Courtin- | boulangerie-courtin.vercel.app | Mai 2026 |
```
