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

    // ✅ CORRIGÉ : sans "pages/" car tout est à la racine
    if (typeof chargerPage === 'function') {
        chargerPage('accueil.html');
    }
});
