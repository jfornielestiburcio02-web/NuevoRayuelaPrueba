// AntiSQLi.js

// Lista básica de patrones sospechosos
const patronesPeligrosos = [
    /select/i,
    /insert/i,
    /delete/i,
    /update/i,
    /drop/i,
    /--/g,
    /;/g,
    /\*/g,
    /=/g,
    /'/g,
    /"/g
];

function validarEntrada(texto) {
    for (let patron of patronesPeligrosos) {
        if (patron.test(texto)) {
            return false;
        }
    }
    return true;
}