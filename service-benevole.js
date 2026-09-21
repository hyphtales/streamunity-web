// ==============================================
// SERVICE BÉNÉVOLE — Modération & accueil
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnSupprimerMessage = document.getElementById('btn_supprimer_message');
    if (btnSupprimerMessage) {
        btnSupprimerMessage.addEventListener('click', () => {
            if (confirm("🗑️ Supprimer ce message ?")) {
                alert("✅ Message supprimé");
            }
        });
    }

    const btnAccueillir = document.getElementById('btn_accueillir_nouveaux');
    if (btnAccueillir) {
        btnAccueillir.addEventListener('click', () => {
            alert("👋 Message de bienvenue envoyé !");
        });
    }

    const btnRappelerRegles = document.getElementById('btn_rappeler_regles');
    if (btnRappelerRegles) {
        btnRappelerRegles.addEventListener('click', () => {
            alert("📜 Rappel des règles envoyé");
        });
    }

    const btnSignalerFondateur = document.getElementById('btn_signaler_fondateur');
    if (btnSignalerFondateur) {
        btnSignalerFondateur.addEventListener('click', () => {
            alert("📩 Signalement transmis au Fondateur");
        });
    }

    console.log("✅ service-benevole.js chargé");
});