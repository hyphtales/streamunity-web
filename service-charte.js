// ==============================================
// SERVICE CHARTE — Règles & inscription
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnLireCharte = document.getElementById('btn_lire_charte');
    if (btnLireCharte) {
        btnLireCharte.addEventListener('click', () => {
            alert("📜 Ouverture de la Charte...");
        });
    }

    const btnValiderInscription = document.getElementById('btn_valider_inscription');
    if (btnValiderInscription) {
        btnValiderInscription.addEventListener('click', () => {
            const caseAccepter = document.getElementById('accepter-charte');
            if (caseAccepter && caseAccepter.checked) {
                alert("✅ Charte acceptée — Bienvenue sur Stream Unity !");
                localStorage.setItem('inscrit', 'oui');
            } else {
                alert("⚠️ Veuillez d'abord accepter la Charte");
            }
        });
    }

    console.log("✅ service-charte.js chargé");
});