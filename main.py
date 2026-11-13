#!/usr/bin/env python3
"""
Télécharge les photos des 4 projets d'Atelier Aim dans des dossiers séparés.
À lancer SUR TON ORDINATEUR (pas besoin d'installer quoi que ce soit) :

    python3 telecharger_images.py

Résultat : un dossier  images/atelieraim/<projet>/  par projet.
Ensuite, tu regardes les photos et tu gardes les plus belles.
"""
import os
import re
import urllib.request

PROJETS = {
    "sevres":   "https://atelieraim.com/projet-sevres/",
    "mederic":  "https://atelieraim.com/projet-mederic/",
    "concorde": "https://atelieraim.com/projet-concorde/",
    "sources":  "https://atelieraim.com/sources/",
}

HEADERS = {"User-Agent": "Mozilla/5.0"}
MOTIF = re.compile(
    r'(https?:)?//[^\s"\'()<>]*wp-content/uploads/[^\s"\'()<>]+?\.(?:jpe?g|png|webp)',
    re.IGNORECASE,
)


def lire(url):
    req = urllib.request.Request(url, headers=HEADERS)
    return urllib.request.urlopen(req, timeout=30).read()


def images_de_la_page(html):
    trouvees = []
    for m in MOTIF.finditer(html):
        u = m.group(0)
        if u.startswith("//"):
            u = "https:" + u
        u = u.replace("http://", "https://")
        nom = u.rsplit("/", 1)[-1]
        if "Design-sans-titre" in nom:          # logo du site
            continue
        if re.search(r"-\d+x\d+\.(jpe?g|png|webp)$", nom, re.I):  # miniatures
            continue
        if u not in trouvees:
            trouvees.append(u)
    return trouvees


for slug, page in PROJETS.items():
    dossier = os.path.join("images", "atelieraim", slug)
    os.makedirs(dossier, exist_ok=True)
    try:
        html = lire(page).decode("utf-8", errors="ignore")
    except Exception as e:
        print("Erreur page", slug, e)
        continue

    liste = images_de_la_page(html)
    print(f"{slug} : {len(liste)} images trouvées")
    for i, u in enumerate(liste, 1):
        nom = f"{i:02d}-" + u.rsplit("/", 1)[-1]
        chemin = os.path.join(dossier, nom)
        if os.path.exists(chemin):
            continue
        try:
            with open(chemin, "wb") as f:
                f.write(lire(u))
        except Exception as e:
            print("  échec :", u, e)

print("Terminé. Regarde le dossier images/atelieraim/")