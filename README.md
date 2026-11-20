# France Deco — Site vitrine

Site vitrine officiel de **France Deco**, entreprise du bâtiment spécialisée dans les travaux de rénovation intérieure, la peinture et la pose de revêtements de sol.

## 🏢 À propos de France Deco

**France Deco** accompagne les particuliers et les professionnels dans leurs projets d'aménagement, de remise à neuf et d'embellissement d'espaces intérieurs. Reconnue pour le soin apporté aux finitions et le respect des délais, l'entreprise intervient aussi bien sur des rénovations ciblées que sur des transformations complètes.

### Savoir-faire & Prestations
* **Peinture & Finitions** : Préparation des supports, enduits, peinture décorative et remise en état des murs et plafonds.
* **Revêtements de sol** : Pose et rénovation de parquets, sols stratifiés, sols souples (PVC/vinyle) et carrelages.
* **Rénovation intérieure globale** : Réaménagement complet de pièces de vie, locaux commerciaux ou bureaux (cloisonnement, coordination des travaux et finitions).

---

## 🗂️ Pages du site

* **Accueil** (`/`) : Présentation de l'entreprise, de ses valeurs et de ses domaines d'intervention.
* **Réalisations** (`/realisation`) : Vue d'ensemble des chantiers livrés, incluant un comparatif interactif avant/après (chantier de Sèvres) et l'accès aux études de cas.
* **Études de cas (Projets détaillés)** :
  * `/projet-sevres` — Rénovation à Sèvres
  * `/projet-mederic` — Chantier Médéric
  * `/projet-concorde` — Chantier Concorde
  * `/projet-sources` — Chantier Les Sources
  * `/projet-barber` — Aménagement d'un salon Barber
* **Galerie** (`/galerie`) : Portfolio photographique mettant en valeur la qualité des finitions et des matériaux.
* **Contact** (`/contact`) : Coordonnées directes de l'entreprise et formulaire de demande de devis gratuit.

## 🛠️ Architecture & Technologies

Conçu en **HTML5, CSS3 et JavaScript natif (Vanilla)**, le site privilégie la rapidité de chargement, la sobriété technique et une compatibilité optimale sur ordinateur comme sur mobile.

```text
├── index.html               # Page d'accueil
├── realisation.html         # Page des réalisations (avant/après)
├── galerie.html             # Galerie photo des chantiers
├── contact.html             # Coordonnées et formulaire de devis
├── projet-*.html            # Fiches détaillées des réalisations
├── css/
│   └── style.css            # Feuille de style principale
├── js/
│   └── main.js              # Interactions UI et gestion du formulaire
├── fonts/                   # Police Sans Serif FLF auto-hébergée (RGPD / performances)
└── images/                  # Logo officiel et visuels des réalisations (real-*.jpg)
