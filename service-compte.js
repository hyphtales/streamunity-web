// ==============================================
// SERVICE COMPTE — Informations & gestion
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnModifierEmail = document.getElementById('btn_modifier_email');
    if (btnModifierEmail) {
        btnModifierEmail.addEventListener('click', () => {
            alert("✏️ Modifier mon adresse email");
        });
    }

    const btnModifierMdp = document.getElementById('btn_modifier_mdp');
    if (btnModifierMdp) {
        btnModifierMdp.addEventListener('click', () => {
            alert("🔑 Modifier mon mot de passe");
        });
    }

    const btnDeconnexion = document.getElementById('btn_deconnexion');
    if (btnDeconnexion) {
        btnDeconnexion.addEventListener('click', () => {
            if (confirm("Se déconnecter ?")) {
                localStorage.removeItem('inscrit');
                localStorage.removeItem('utilisateur');
                alert("✅ Déconnexion réussie");
                window.location.reload();
            }
        });
    }

    const btnSupprimerCompte = document.getElementById('btn_supprimer_compte');
    if (btnSupprimerCompte) {
        btnSupprimerCompte.addEventListener('click', () => {
            if (confirm("⚠️ Supprimer définitivement mon compte ? Cette action est irréversible.")) {
                localStorage.clear();
                alert("😢 Compte supprimé — À bientôt peut-être...");
                window.location.reload();
            }
        });
    }

    console.log("✅ service-compte.js chargé");
});