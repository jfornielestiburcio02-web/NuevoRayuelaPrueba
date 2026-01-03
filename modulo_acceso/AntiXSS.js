// AntiXSS.js

function limpiarXSS(texto) {
    if (typeof texto !== "string") return "";

    // Reemplazos básicos para evitar inyección de HTML o JS
    return texto
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/\(/g, "&#40;")
        .replace(/\)/g, "&#41;")
        .replace(/\//g, "&#47;");
}

// Validador que detecta patrones peligrosos
function esSeguroXSS(texto) {
    const patronesPeligrosos = [
        /<script/i,
        /<\/script/i,
        /javascript:/i,
        /onerror=/i,
        /onload=/i,
        /alert\(/i,
        /document\.cookie/i,
        /eval\(/i
    ];

    for (let patron of patronesPeligrosos) {
        if (patron.test(texto)) {
            return false;
        }
    }
    return true;
}