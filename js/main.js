/* ============================================================
   France Deco : main.js
   1. Carrousel de l'accueil
   2. Menu mobile
   3. Agrandissement des photos (page Réalisations)
   4. Apparition des sections au défilement
   5. Curseur avant / après
   ============================================================ */

/* 1. CARROUSEL ------------------------------------------------ */
(function () {
  var track = document.querySelector(".stage-track");
  var prev = document.querySelector(".stage-prev");
  var next = document.querySelector(".stage-next");
  if (!track || !prev || !next) return;

  function step(direction) {
    var slides = track.querySelectorAll(".stage-slide");
    var width = track.clientWidth;
    if (!slides.length || width < 1) return;
    var current = Math.round(track.scrollLeft / width);
    var index = (current + direction + slides.length) % slides.length;
    track.scrollTo({ left: index * width, behavior: "smooth" });
  }

  prev.addEventListener("click", function () { step(-1); });
  next.addEventListener("click", function () { step(1); });
})();

/* 2. MENU MOBILE ---------------------------------------------- */
(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-principale");
  if (!header || !toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var label = toggle.querySelector(".sr-only");
    if (label) label.textContent = open ? "Fermer le menu" : "Ouvrir le menu";
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

/* 3. AGRANDISSEMENT DES PHOTOS -------------------------------- */
(function () {
  var box = document.getElementById("lightbox");
  if (!box) return;

  var bigImg = box.querySelector("img");
  var caption = box.querySelector(".lightbox-caption");
  var closeBtn = box.querySelector(".lightbox-close");

  function openFrom(shot) {
    var small = shot.querySelector("img");
    if (!small) return;
    var fig = shot.closest("figure");
    var title = fig ? fig.querySelector("h3") : null;

    bigImg.src = small.currentSrc || small.src;
    bigImg.alt = (small.alt || "").replace(/^Agrandir\s*:\s*/i, "");
    if (caption) caption.textContent = title ? title.textContent : bigImg.alt;

    if (typeof box.showModal === "function") {
      box.showModal();
    } else {
      box.setAttribute("open", "");
    }
  }

  function close() {
    if (typeof box.close === "function") {
      box.close();
    } else {
      box.removeAttribute("open");
    }
  }

  document.addEventListener("click", function (e) {
    var shot = e.target.closest(".shot");
    if (shot) openFrom(shot);
  });

  if (closeBtn) closeBtn.addEventListener("click", close);

  // Clic en dehors de l'image (sur le fond sombre) : fermer
  box.addEventListener("click", function (e) {
    if (e.target === box) close();
  });
})();

/* 4. APPARITION DES SECTIONS ---------------------------------- */
(function () {
  var items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(function (el) { io.observe(el); });
})();

/* 5. CURSEUR AVANT / APRES ------------------------------------ */
(function () {
  document.querySelectorAll(".ba").forEach(function (ba) {
    var range = ba.querySelector("input[type=range]");
    if (!range) return;
    function update() { ba.style.setProperty("--pos", range.value + "%"); }
    range.addEventListener("input", update);
    update();
  });
})();


/* 6. CARTE : chargée seulement après un clic */
(function () {
  var btn = document.getElementById("map-load");
  var box = document.getElementById("map-embed");
  if (!btn || !box) return;

  btn.addEventListener("click", function () {
    var f = document.createElement("iframe");
    f.src = "https://www.google.com/maps?q=195+Avenue+Charles+de+Gaulle,+92200+Neuilly-sur-Seine&output=embed";
    f.width = "100%";
    f.height = "360";
    f.style.border = "0";
    f.referrerPolicy = "no-referrer-when-downgrade";
    f.title = "Plan : France Deco, 195 Avenue Charles de Gaulle, Neuilly-sur-Seine";
    box.innerHTML = "";
    box.appendChild(f);
  });
})();