// ==============================================
// SERVICE LIENS — Réseaux externes
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    // Discord
    const btnDiscord = document.getElementById('btn_discord');
    if (btnDiscord) {
        btnDiscord.addEventListener('click', () => {
            window.open('https://discord.gg/Xx2Dsw4Y', '_blank');
        });
    }

    // YouTube
    const btnYoutube = document.getElementById('btn_youtube');
    if (btnYoutube) {
        btnYoutube.addEventListener('click', () => {
            window.open('https://www.youtube.com/@hyphtales.officiel', '_blank');
        });
    }

    // Twitch
    const btnTwitch = document.getElementById('btn_twitch');
    if (btnTwitch) {
        btnTwitch.addEventListener('click', () => {
            window.open('https://twitch.tv/hyphtales', '_blank');
        });
    }

    console.log("✅ service-liens.js chargé");
});