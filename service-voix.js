// ==============================================
// SERVICE VOIX — Réglages vocaux
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnReglerVitesse = document.getElementById('btn_regler_vitesse');
    if (btnReglerVitesse) {
        btnReglerVitesse.addEventListener('click', () => {
            alert("🔊 Réglage de la vitesse de la voix");
        });
    }

    const btnReglerTon = document.getElementById('btn_regler_ton');
    if (btnReglerTon) {
        btnReglerTon.addEventListener('click', () => {
            alert("🎵 Réglage du ton de la voix");
        });
    }

    const btnChoisirSexeVoix = document.getElementById('btn_choisir_sexe_voix');
    if (btnChoisirSexeVoix) {
        btnChoisirSexeVoix.addEventListener('click', () => {
            alert("👤 Choix du genre de la voix");
        });
    }

    const btnPropreVoix = document.getElementById('btn_propre_voix');
    if (btnPropreVoix) {
        btnPropreVoix.addEventListener('click', () => {
            alert("🎤 Utilisation de votre propre voix");
        });
    }

    const btnEnregistrer = document.getElementById('btn_enregistrer_echantillon');
    if (btnEnregistrer) {
        btnEnregistrer.addEventListener('click', () => {
            alert("⏺️ Enregistrement en cours...");
        });
    }

    const btnEcouter = document.getElementById('btn_ecouter_echantillon');
    if (btnEcouter) {
        btnEcouter.addEventListener('click', () => {
            alert("🎧 Lecture de l'échantillon...");
        });
    }

    const btnValiderVoix = document.getElementById('btn_valider_voix');
    if (btnValiderVoix) {
        btnValiderVoix.addEventListener('click', () => {
            alert("✅ Voix validée !");
        });
    }

    const btnReinitialiserVoix = document.getElementById('btn_reinitialiser_voix');
    if (btnReinitialiserVoix) {
        btnReinitialiserVoix.addEventListener('click', () => {
            if (confirm("🔄 Réinitialiser la voix par défaut ?")) {
                alert("✅ Voix réinitialisée");
            }
        });
    }

    console.log("✅ service-voix.js chargé");
});