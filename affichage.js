// ==============================================
// AFFICHAGE — Ajustements & préférences d'écran
// ==============================================
const prefAffichage = {
    theme: localStorage.getItem('theme') || 'sombre',
    tailleTexte: localStorage.getItem('tailleTexte') || 'normale'
};

function appliquerTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function appliquerTailleTexte(taille) {
    document.documentElement.style.fontSize = 
        taille === 'petit' ? '14px' :
        taille === 'grand' ? '18px' : '16px';
    localStorage.setItem('tailleTexte', taille);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    appliquerTheme(prefAffichage.theme);
    appliquerTailleTexte(prefAffichage.tailleTexte);
    console.log("✅ Affichage chargé :", prefAffichage);
});