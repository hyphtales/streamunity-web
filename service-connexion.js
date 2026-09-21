// ==============================================
// SERVICE CONNEXION — Code & accès
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnRecevoirCode = document.getElementById('btn_recevoir_code');
    if (btnRecevoirCode) {
        btnRecevoirCode.addEventListener('click', () => {
            alert("📩 Code envoyé par message !");
        });
    }

    const btnValiderConnexion = document.getElementById('btn_valider_connexion');
    if (btnValiderConnexion) {
        btnValiderConnexion.addEventListener('click', () => {
            alert("✅ Connexion réussie — Bienvenue !");
            localStorage.setItem('inscrit', 'oui');
        });
    }

    console.log("✅ service-connexion.js chargé");
});