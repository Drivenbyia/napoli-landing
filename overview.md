# Napoli Landing Page — Overview

## Projet

Landing page pour **Napoli**, une application de santé prédictive pour chiens. Hébergée sur `napolicare.com`, elle cible deux audiences via un toggle B2C/B2B.

---

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| React | 18.3.1 | UI |
| Vite | 5.2.11 | Dev server + build |
| Tailwind CSS | 3.4.4 | Styling |
| Lucide React | 0.400 | Icônes |
| Netlify | — | Déploiement |

---

## Structure des fichiers

```
napoli-landing/
├── src/
│   ├── main.jsx          # Point d'entrée React
│   ├── App.jsx           # Composant racine unique (476 lignes)
│   └── index.css         # Styles globaux + directives Tailwind
├── public/
│   ├── images/
│   │   ├── badge-bouclier.png    # Badge Harmony Rings
│   │   ├── badge-gamelle.png     # Badge Nutrition
│   │   ├── badge-sniffari.png    # Badge Gamification
│   │   ├── bg-abstrait.png       # Background Hero
│   │   └── iphone-napoli.png     # Mockup iPhone (1.3 MB)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── index.html            # HTML + SEO meta + JSON-LD
├── tailwind.config.js    # Design system (couleurs, animations)
├── vite.config.js
├── postcss.config.js
└── netlify.toml
```

---

## Architecture

**Single-component app** — toute l'UI est dans `App.jsx`.

**State :**
- `isVetMode` — toggle entre la vue Maître (B2C) et Vétérinaire (B2B)
- `isLoaded` — animation de fade-in au chargement

**Layout :** Bento Grid responsive avec cartes arrondies, ombres, et hover effects.

---

## Design System

Palette définie dans `tailwind.config.js` :

| Nom | Hex | Usage |
|---|---|---|
| Sage | `#8A9A86` | Couleur primaire |
| Deep Sage | `#4A5D4E` | Textes / accents sombres |
| Cream | `#FAF9F6` | Fond principal |
| Terracotta | `#E27D60` | Alertes / SOS |
| Taupe | `#B5A397` | Fonds secondaires |

Animation custom : `float` (4s, boucle infinie sur le mockup iPhone).

---

## Fonctionnalités

### Mode Maître (B2C)
- Harmony Rings — suivi santé quotidien
- Scan nutrition
- Gamification avec badges
- CTA : rejoindre la liste d'attente

### Mode Vétérinaire (B2B)
- Intégration Smart Split
- Prescription calorique
- Suivi des traitements / médications
- CTA : partenariat clinique

### Commun
- Témoignages (500+ maîtres, 50+ cliniques)
- Pricing (gratuit en bêta)
- FAQ contextuelle selon le mode
- RGPD

---

## SEO

- Meta tags complets + Open Graph + Twitter Cards
- JSON-LD (schema.org `SoftwareApplication`)
- `sitemap.xml` et `robots.txt`
- Langue : `fr`
- URL canonique : racine du domaine

---

## Déploiement

- **Netlify** — build via `npm run build`, output dans `dist/`
- Règle SPA dans `netlify.toml` : `/* → index.html`

---

## Scripts

```bash
npm run dev      # Dev server (Vite)
npm run build    # Build production
npm run preview  # Preview local du build
```
