// ==============================================
// TRADUCTIONS — Toutes les langues
// ==============================================
const traductions = {
  fr: {
    accueil: "Accueil",
    reseaux: "Réseaux",
    questionnaire: "Donner mon avis",
    fondateur: "Espace Fondateur",
    soutenir: "Soutenir",
    connexion: "Se connecter",
    retour: "Retour à l'accueil",
    // Ajoute TOUS tes textes ici
    titreSite: "Stream Unity — La porte vers l'ailleurs"
  },
  en: {
    accueil: "Home",
    reseaux: "Socials",
    questionnaire: "Give feedback",
    fondateur: "Founder Area",
    soutenir: "Support",
    connexion: "Log in",
    retour: "Back to home",
    titreSite: "Stream Unity — The door to elsewhere"
  },
  es: {
    accueil: "Inicio",
    reseaux: "Redes",
    questionnaire: "Dar mi opinión",
    fondateur: "Espacio Fundador",
    soutenir: "Apoyar",
    connexion: "Conectar",
    retour: "Volver al inicio",
    titreSite: "Stream Unity — La puerta hacia otro lugar"
  }
};

// Langue par défaut
let langueActuelle = localStorage.getItem("langue") || "fr";

// Appliquer la langue
function appliquerLangue(langue) {
  langueActuelle = langue;
  localStorage.setItem("langue", langue);
  const elements = document.querySelectorAll("[data-trad]");
  elements.forEach(el => {
    const cle = el.getAttribute("data-trad");
    if (traductions[langue][cle]) {
      el.textContent = traductions[langue][cle];
    }
  });
}

// Quand la page charge
document.addEventListener("DOMContentLoaded", () => {
  appliquerLangue(langueActuelle);
  const selecteur = document.getElementById("select-langue");
  if (selecteur) {
    selecteur.value = langueActuelle;
    selecteur.addEventListener("change", (e) => {
      appliquerLangue(e.target.value);
    });
  }
});
