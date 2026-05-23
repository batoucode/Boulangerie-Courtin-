# Boulangerie Courtin — Site vitrine

Site vitrine artisanal pour la **Boulangerie Courtin** à Bracieux (41250).  
Conçu par [DesCodes](https://www.descodes.com).

---

## Stack technique

| Technologie | Version |
|---|---|
| Next.js (App Router) | ^16.2.6 |
| React | ^19 |
| TypeScript | ^5 |
| Tailwind CSS | ^3.4 |
| react-hook-form + Zod | validation formulaire |
| Resend | envoi email (optionnel) |

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout global (Header + Footer)
│   ├── page.tsx            # Page accueil
│   ├── contact/page.tsx    # Page contact
│   ├── produits/page.tsx   # Page galerie produits
│   └── api/contact/route.ts # API formulaire de contact
├── components/
│   ├── Header.tsx          # Navigation fixe (transparent → blanc au scroll)
│   ├── Hero.tsx            # Section hero plein écran
│   ├── About.tsx           # Section présentation artisan
│   ├── Products.tsx        # Grille 3 produits (accueil)
│   ├── Hours.tsx           # Tableau horaires
│   ├── ContactBanner.tsx   # Bannière CTA commandes
│   ├── ContactForm.tsx     # Formulaire avancé (react-hook-form + Zod)
│   ├── GoogleMap.tsx       # Carte Google Maps intégrée
│   └── Footer.tsx          # Pied de page + signature DesCodes
public/
└── photos/                 # Photos réelles de la boulangerie
    ├── brioche.png
    ├── chocolat-paques.png
    ├── fraisier.png
    ├── gateau-anniversaire.png
    ├── pain-cereales.png
    ├── tarte-fraises.png
    ├── tartelettes-peche.png
    └── viennoiseries.png
```

---

## Informations boulangerie

- **Nom** : Boulangerie Courtin
- **Adresse** : 7 Place de la Halle, 41250 Bracieux
- **Téléphone** : 02 54 46 41 87
- **Google Maps** : https://maps.google.com/?q=7+Place+de+la+Halle+41250+Bracieux

### Horaires

| Jour | Matin | Après-midi |
|---|---|---|
| Lundi | 7h00 – 13h00 | 15h30 – 19h00 |
| Mardi | 7h00 – 13h00 | 15h30 – 19h00 |
| Mercredi | **Fermé** | — |
| Jeudi | 7h00 – 13h00 | 15h30 – 19h00 |
| Vendredi | 7h00 – 13h00 | 15h30 – 19h00 |
| Samedi | 7h00 – 13h00 | 15h30 – 19h00 |
| Dimanche | 7h00 – 13h00 | — |

---

## Design

- **Couleur principale** : `#e69437` (brand-400)
- **Polices** : Roboto (corps) + Playfair Display (titres)
- **Style** : Classique, chaud, artisanal

---

## Déploiement Vercel

### 1. Importer le repo
Connecter le repo GitHub sur [vercel.com/new](https://vercel.com/new).

### 2. Variables d'environnement (optionnel — pour activer le formulaire)

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=email@boulangerie-courtin.fr
```

### 3. Activer le formulaire de contact
Une fois l'email configuré :
1. Ajouter `RESEND_API_KEY` et `CONTACT_EMAIL` dans Vercel → Settings → Environment Variables
2. Dans `src/app/contact/page.tsx`, remplacer le bloc `relative` flou par simplement :
```tsx
<div>
  <h2 ...>Envoyez-nous un message</h2>
  <ContactForm />
</div>
```

---

## Branche de développement

`claude/courtin-boulangerie-site-DlaEp`
