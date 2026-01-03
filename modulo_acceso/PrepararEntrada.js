// PrepararEntrada.js

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnEntrar");
    const form = document.querySelector("form");

    btn.addEventListener("click", (e) => {
        e.preventDefault(); // Evita envío automático del formulario

        const usuario = form.usuario.value.trim();
        const password = form.password.value.trim();

        // Validación básica
        if (usuario === "" || password === "") {
            mostrarAlerta("Debes completar todos los campos");
            return;
        }

        // Validación AntiSQLi
        if (!validarEntrada(usuario) || !validarEntrada(password)) {
            mostrarAlerta("Entrada no permitida. Caracteres sospechosos detectados.");
            return;
        }

        // Validación de usuario y contraseña
        if (validarUsuario(usuario, password)) {
            // Credenciales correctas → redirigir
            window.location.href = "Contenedor.html";
        } else {
            // Credenciales incorrectas → alerta
            mostrarAlerta("Usuario o contraseña incorrectos");
        }
    });
});