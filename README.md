# France Deco

Site vitrine de **France Deco**, entreprise de bâtiment spécialisée dans la rénovation et la peinture.

Le site présente l’entreprise, le revêtement de sol, les autres interventions, et les chantiers. Les coordonnées publiées sont celles transmises pour France Deco.

## Lancer le site

Depuis la racine du projet :

```bash
python3 -m http.server 8742
```

Puis ouvrir [http://127.0.0.1:8742](http://127.0.0.1:8742).

Les pages :

- `/` — accueil
- `realisation` — réalisations (avant/après Sèvres et accès aux projets)
- `galerie` — galerie de photos
- `projet-sevres`, `projet-mederic`, `projet-concorde`, `projet-sources`, `projet-barber` — pages détaillées des projets
- `contact` — demande de devis

## Formulaire

Dans `js/main.js`, l’adresse de réception est `francedeco@live.fr`. Le formulaire envoie le message depuis le navigateur. La première demande déclenche un e-mail de confirmation FormSubmit sur cette adresse : il faut l’activer une fois pour que les messages suivants arrivent.

## Visuels

Les photos `images/real-*.jpg` sont des chantiers (pièces et sols, sans personne). Le logo reprend le visuel fourni pour France Deco.

## Structure

```
/
realisation
contact
css/style.css
js/main.js
fonts/
images/
```

La police (Sans Serif FLF) est auto-hébergée dans `fonts/`, afin de ne pas dépendre d’un service tiers.
