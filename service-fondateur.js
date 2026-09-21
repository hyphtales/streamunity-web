// ==============================================
// SERVICE FONDATEUR — Espace Fondateur
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnConfigurer = document.getElementById('btn_configurer');
    if (btnConfigurer) {
        btnConfigurer.addEventListener('click', () => {
            alert("⚙️ Ouverture de la configuration...");
        });
    }

    const btnValiderConfig = document.getElementById('btn_valider_config');
    if (btnValiderConfig) {
        btnValiderConfig.addEventListener('click', () => {
            alert("✅ Configuration validée !");
        });
    }

    const btnVoirStats = document.getElementById('btn_voir_stats');
    if (btnVoirStats) {
        btnVoirStats.addEventListener('click', () => {
            alert("📊 Chargement des statistiques...");
        });
    }

    const btnGererModerateurs = document.getElementById('btn_gerer_moderateurs');
    if (btnGererModerateurs) {
        btnGererModerateurs.addEventListener('click', () => {
            alert("👥 Gestion de l'équipe de modération...");
        });
    }

    console.log("✅ service-fondateur.js chargé");
});