// ==============================================
// SERVICE SOUTIENS — Dons & niveaux
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const boutonsNiveaux = document.querySelectorAll('.carte-niveau .btn-primaire');
    boutonsNiveaux.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            alert(`💖 Niveau ${index + 1} sélectionné — Merci pour ton soutien !`);
        });
    });

    const btnDonLibre = document.getElementById('btn_don_libre');
    if (btnDonLibre) {
        btnDonLibre.addEventListener('click', () => {
            alert("💳 Montant libre — Procéder au paiement");
        });
    }

    const btnPaypal = document.getElementById('btn_paiement_paypal');
    if (btnPaypal) {
        btnPaypal.addEventListener('click', () => {
            window.open("https://paypal.me", "_blank");
        });
    }

    console.log("✅ service-soutiens.js chargé");
});