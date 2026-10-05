document.addEventListener('DOMContentLoaded', () => {
    // Recevoir un code
    const btnCode = document.getElementById('btn_recevoir_code');
    if (btnCode) btnCode.addEventListener('click', () => {
        alert("📧 Un code va être envoyé à ton adresse e-mail !");
    });

    // Valider la connexion
    const btnValider = document.getElementById('btn_valider_connexion');
    if (btnValider) btnValider.addEventListener('click', () => {
        alert("✅ Connexion réussie ! Bienvenue sur Stream Unity !");
        if (typeof chargerPage === 'function') chargerPage('accueil.html');
    });

    // Connexion par code
    const btnCodeConn = document.getElementById('btn_connexion_code');
    if (btnCodeConn) btnCodeConn.addEventListener('click', () => {
        alert("🔑 Saisis le code reçu par e-mail ou SMS.");
    });

    // Connexion par téléphone
    const btnTel = document.getElementById('btn_connexion_tel');
    if (btnTel) btnTel.addEventListener('click', () => {
        alert("📞 Saisis ton numéro de téléphone pour recevoir un lien.");
    });

    // Mot de passe oublié
    const btnMdp = document.getElementById('btn_mdp_oublie');
    if (btnMdp) btnMdp.addEventListener('click', () => {
        alert("🔄 Saisis ton e-mail → lien de réinitialisation envoyé !");
    });

    console.log("✅ Connexion : tous les boutons actifs");
});
