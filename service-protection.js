// ==============================================
// SERVICE PROTECTION — Sécurité & signalements
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnVerifAge = document.getElementById('btn_verif_age');
    if (btnVerifAge) {
        btnVerifAge.addEventListener('click', () => {
            alert("🔒 Vérification de l'âge...");
        });
    }

    const btnSignalerContenu = document.getElementById('btn_signaler_contenu');
    if (btnSignalerContenu) {
        btnSignalerContenu.addEventListener('click', () => {
            alert("🚫 Contenu signalé — Merci pour ta vigilance");
        });
    }

    console.log("✅ service-protection.js chargé");
});