// ==============================================
// UI — Notifications, chargements, effets
// ==============================================
function afficherNotification(message, type = "info") {
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.textContent = message;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        background: ${type === "succes" ? "#00c853" : type === "alerte" ? "#ff5252" : "#00d9ff"};
        color: white;
        font-weight: 600;
        z-index: 9999;
        animation: glisser 0.3s ease;
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.remove(), 4000);
}

// Animation d'apparition
const styleAnim = document.createElement('style');
styleAnim.textContent = `
    @keyframes glisser {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(styleAnim);

console.log("✅ ui.js prêt");