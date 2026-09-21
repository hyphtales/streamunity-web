// ==============================================
// TRADUCTIONS
// ==============================================
const traductions = {
    fr: {
        accueil: "Accueil",
        regarder: "Regarder",
        discuter: "Discuter",
        soutenir: "Soutenir",
        profil: "Mon Profil",
        espace_createur: "Espace Créateur",
        regles: "Règles",
        bienvenue: "Bienvenue sur Stream Unity",
        lire_charte: "📜 Lire la Charte",
        valider: "Valider l'inscription",
        accepter_charte: "J'ai lu et j'accepte la Charte",
        langue: "Langue"
    },
    en: {
        accueil: "Home",
        regarder: "Watch",
        discuter: "Chat",
        soutenir: "Support",
        profil: "My Profile",
        espace_createur: "Creator Space",
        regles: "Rules",
        bienvenue: "Welcome to Stream Unity",
        lire_charte: "📜 Read the Charter",
        valider: "Sign Up",
        accepter_charte: "I have read and accept the Charter",
        langue: "Language"
    },
    es: {
        accueil: "Inicio",
        regarder: "Ver",
        discuter: "Charlar",
        soutenir: "Apoyar",
        profil: "Mi Perfil",
        espace_createur: "Espacio Creador",
        regles: "Reglas",
        bienvenue: "Bienvenido a Stream Unity",
        lire_charte: "📜 Leer la Carta",
        valider: "Registrarse",
        accepter_charte: "He leído y acepto la Carta",
        langue: "Idioma"
    }
};

// ==============================================
// GESTION DES PAGES
// ==============================================
const boutonsNav = document.querySelectorAll('.btn-nav');
const pages = document.querySelectorAll('.page');

function afficherPage(nomPage) {
    // Cacher toutes les pages
    pages.forEach(p => p.classList.remove('active'));
    boutonsNav.forEach(b => b.classList.remove('active'));
    
    // Afficher la page demandée
    document.getElementById(`page-${nomPage}`).classList.add('active');
    document.querySelector(`[data-page="${nomPage}"]`).classList.add('active');
    
    // Sauvegarder la page dans les préférences
    localStorage.setItem('pageActuelle', nomPage);
}

// Connexion des boutons du menu
boutonsNav.forEach(btn => {
    btn.addEventListener('click', () => {
        afficherPage(btn.dataset.page);
    });
});

// ==============================================
// LANGUE
// ==============================================
const selectLangue = document.getElementById('select-langue');
let langueActuelle = localStorage.getItem('langue') || 'fr';

function appliquerLangue(codeLangue) {
    const t = traductions[codeLangue] || traductions.fr;
    document.getElementById('titre-bienvenue').textContent = t.bienvenue;
    localStorage.setItem('langue', codeLangue);
}

if (selectLangue) {
    selectLangue.value = langueActuelle;
    selectLangue.addEventListener('change', (e) => {
        langueActuelle = e.target.value;
        appliquerLangue(langueActuelle);
    });
}

// ==============================================
// VALIDATION DE LA CHARTE
// ==============================================
const btnValider = document.getElementById('valider-inscription');
const caseAccepter = document.getElementById('accepter-charte');

if (btnValider && caseAccepter) {
    btnValider.addEventListener('click', () => {
        if (caseAccepter.checked) {
            alert("✅ Charte acceptée — Bienvenue sur Stream Unity !");
            localStorage.setItem('inscrit', 'oui');
        } else {
            alert("⚠️ Veuillez accepter la Charte d'abord");
        }
    });
}

// ==============================================
// CHARGEMENT AU DÉMARRAGE
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    appliquerLangue(langueActuelle);
    
    // Revenir à la dernière page visitée
    const dernierePage = localStorage.getItem('pageActuelle') || 'accueil';
    afficherPage(dernierePage);
    
    console.log("✅ STREAM UNITY — Prêt !");
    console.log("💾 Préférences chargées :", langueActuelle);
});