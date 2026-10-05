const zoneContenu = document.getElementById('contenu');
const boutonsMenu = document.querySelectorAll('.btn-nav');

async function chargerPage(cheminFichier) {
    try {
        const reponse = await fetch(cheminFichier);
        if (!reponse.ok) throw new Error("Page introuvable");
        const html = await reponse.text();

        zoneContenu.innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const scripts = zoneContenu.querySelectorAll('script');
        scripts.forEach(ancien => {
            const nouveau = document.createElement('script');
            if (ancien.src) {
                nouveau.src = ancien.src;
            } else {
                nouveau.textContent = ancien.textContent;
            }
            document.body.appendChild(nouveau).remove();
        });

        console.log("✅ Page chargée :", cheminFichier);
    } catch (erreur) {
        zoneContenu.innerHTML = `<p style="color:red;">Erreur : ${erreur.message}</p>`;
        console.error("❌", erreur);
    }
}

boutonsMenu.forEach(bouton => {
    bouton.addEventListener('click', () => {
        boutonsMenu.forEach(b => b.classList.remove('active'));
        bouton.classList.add('active');
        chargerPage(bouton.dataset.chemin);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    chargerPage('accueil.html');
});
