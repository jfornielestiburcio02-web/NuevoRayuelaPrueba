// PrepararModuloAccesoLoginDiscord.js

function loginDiscord() {
    const authContent = document.getElementById('auth-content');
    const successContent = document.getElementById('success-content');

    // Ocultar login
    authContent.classList.add('hidden');

    // Mostrar mensaje de éxito
    successContent.classList.remove('hidden');

    // Redirigir después de 2 segundos
    setTimeout(() => {
        // Cambia esta URL por tu login de Discord
        window.location.href = "https://discord.com/oauth2/authorize?client_id=TU_CLIENT_ID&scope=identify&response_type=code&redirect_uri=TU_REDIRECT_URI";
    }, 2000);
}