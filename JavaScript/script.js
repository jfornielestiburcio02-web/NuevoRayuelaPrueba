// script.js 
const CLIENT_ID = '1455599484095561840'; // Pon tu ID del Developer Portal
const REDIRECT_URI = "http://mi-ip/carpeta-ciudadana.html";

const authBtn = document.getElementById('auth-btn');

if (authBtn) {
    authBtn.onclick = () => {
        const discordUrl = https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify;
        window.location.href = discordUrl;
    };
}

// Lógica para detectar si regresamos de Discord
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('code')) {
        const authContent = document.getElementById('auth-content');
        const successContent = document.getElementById('success-content');

        if (authContent && successContent) {
            authContent.classList.add('hidden');
            successContent.classList.remove('hidden');

            // Aquí ya tienes el código para enviarlo a un backend si quisieras
            console.log("Token de acceso recibido: " + params.get('code'));

            setTimeout(() => {
                window.history.replaceState({}, document.title, window.location.pathname);
            }, 3000);
        }
    }
});