// Lista de usuarios con sus roles
const usuarios = [
    { username: "admin", rol: "Administrador" },
    { username: "juan", rol: "Estudiante" },
    { username: "maria", rol: "Profesor" },
    { username: "miguel", rol: "Tutor" }
];

// Función para obtener el rol de un usuario
function obtenerRol(username) {
    const usuario = usuarios.find(u => u.username === username);
    return usuario ? usuario.rol : null;
}

// Función para mostrar el módulo según rol
function mostrarModulo(username) {
    const rol = obtenerRol(username);
    const contenedor = document.getElementById("modulo-container");
    contenedor.innerHTML = ""; // Limpiar contenido anterior

    if (!rol) {
        contenedor.innerHTML = `<p>Usuario no encontrado o sin rol asignado.</p>`;
        return;
    }

    let contenido = "";
    switch (rol) {
        case "Administrador":
            contenido = `<h2>Módulo Administrador</h2>
                        <p>Puede gestionar todo el sistema.</p>
                        <button id="btn-admin">Acceder como Administrador</button>`;
            break;
        case "Estudiante":
            contenido = "<h2>Módulo Estudiante</h2><p>Acceso a tus cursos y tareas.</p>";
            break;
        case "Profesor":
            contenido = "<h2>Módulo Profesor</h2><p>Gestiona clases y alumnos.</p>";
            break;
        case "Tutor":
            contenido = "<h2>Módulo Tutor</h2><p>Supervisa el progreso de los estudiantes.</p>";
            break;
        default:
            contenido = `<p>Rol "${rol}" sin módulo asignado.</p>`;
            break;
    }

    contenedor.innerHTML = contenido;

    // Botón para administrador
    if (rol === "Administrador") {
        const btnAdmin = document.getElementById("btn-admin");
        btnAdmin.addEventListener("click", () => {
            // Redirige al JS de PrepararAccesoAplicacionADMINISTRADOR
            PrepararAccesoAplicacionADMINISTRADOR.js();
        });
    }
}

// Ejemplo de usuario activo (se puede reemplazar por el login real)
mostrarModulo("admin");
