// ListadoUsuario.js

// Base de datos simple en el frontend (solo para pruebas)
const usuariosRegistrados = [
    { usuario: "admin", password: "1234" },
    { usuario: "juan", password: "abcd" },
    { usuario: "maria", password: "pass" }
];

// Función para comprobar si existe el usuario y contraseña
function validarUsuario(usuario, password) {
    return usuariosRegistrados.some(
        (u) => u.usuario === usuario && u.password === password
    );
}