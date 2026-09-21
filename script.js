// ==============================================
// SCRIPT PRINCIPAL — Chargement global
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("🌐 Stream Unity — Chargement complet");
    
    // Langue
    const selectLangue = document.getElementById('select-langue');
    if (selectLangue) {
        selectLangue.addEventListener('change', (e) => {
            localStorage.setItem('langue', e.target.value);
            console.log("🌍 Langue changée :", e.target.value);
        });
        
        const langueSauvegardee = localStorage.getItem('langue');
        if (langueSauvegardee) {
            selectLangue.value = langueSauvegardee;
        }
    }

    // Page d'accueil par défaut
    if (typeof chargerPage === 'function') {
        chargerPage('pages/accueil.html');
    }
});