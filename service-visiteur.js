// ==============================================
// SERVICE VISITEUR — Interaction & infos
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const btnPoserQuestion = document.getElementById('btn_poser_question');
    if (btnPoserQuestion) {
        btnPoserQuestion.addEventListener('click', () => {
            alert("💬 Pose ta question à l'assistant...");
        });
    }

    const btnReponseAuto = document.getElementById('btn_reponse_auto');
    if (btnReponseAuto) {
        btnReponseAuto.addEventListener('click', () => {
            alert("🤖 Liste des réponses automatiques...");
        });
    }

    const btnSignalerProbleme = document.getElementById('btn_signaler_probleme');
    if (btnSignalerProbleme) {
        btnSignalerProbleme.addEventListener('click', () => {
            alert("⚠️ Problème signalé, merci !");
        });
    }

    console.log("✅ service-visiteur.js chargé");
});