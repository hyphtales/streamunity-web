// Charger la page demandée sans rafraîchir tout le site
const zoneContenu = document.getElementById('contenu');
const boutonsMenu = document.querySelectorAll('.btn-nav');

async function chargerPage(cheminFichier) {
    try {
        const reponse = await fetch(cheminFichier);
        const html = await reponse.text();
        zoneContenu.innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (erreur) {
        zoneContenu.innerHTML = `<p>Erreur de chargement</p>`;
    }
}

// Au clic sur un bouton du menu
boutonsMenu.forEach(bouton => {
    bouton.addEventListener('click', () => {
        boutonsMenu.forEach(b => b.classList.remove('active'));
        bouton.classList.add('active');
        chargerPage(bouton.dataset.chemin);
    });
});

// Page d'accueil par défaut au démarrage
document.addEventListener('DOMContentLoaded', () => {
    chargerPage('pages/accueil.html');
});