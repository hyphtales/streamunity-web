// ==============================================
// SERVICE AVATAR — Apparence & image
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnChoisirAvatar = document.getElementById('btn_choisir_avatar');
    if (btnChoisirAvatar) {
        btnChoisirAvatar.addEventListener('click', () => {
            alert("🖼️ Choix d'un avatar...");
        });
    }

    const btnImporterAvatar = document.getElementById('btn_importer_avatar');
    if (btnImporterAvatar) {
        btnImporterAvatar.addEventListener('click', () => {
            alert("📁 Import d'une image...");
        });
    }

    const btnReglerTaille = document.getElementById('btn_regler_taille_avatar');
    if (btnReglerTaille) {
        btnReglerTaille.addEventListener('click', () => {
            alert("📐 Réglage de la taille...");
        });
    }

    const btnChoisirExpression = document.getElementById('btn_choisir_expression');
    if (btnChoisirExpression) {
        btnChoisirExpression.addEventListener('click', () => {
            alert("😊 Choix de l'expression...");
        });
    }

    const btnSansAvatar = document.getElementById('btn_sans_avatar');
    if (btnSansAvatar) {
        btnSansAvatar.addEventListener('click', () => {
            alert("👤 Mode sans avatar activé");
        });
    }

    console.log("✅ service-avatar.js chargé");
});