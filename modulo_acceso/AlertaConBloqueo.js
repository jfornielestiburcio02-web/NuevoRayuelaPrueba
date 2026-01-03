// AlertaConBloqueo.js

// Inyectar CSS automáticamente
(function () {
    const css = `
    #alertaBloqueo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.45);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .alerta-bloqueo .alerta-contenido {
        background: #fff;
        border: 2px solid #d4b100;
        padding: 20px;
        width: 420px;
        display: flex;
        gap: 15px;
        border-radius: 8px;
        animation: parpadeo 1.5s infinite alternate;
    }

    .alerta-icono {
        width: 48px;
        height: 48px;
    }

    .alerta-texto {
        font-size: 15px;
        color: #333;
        line-height: 1.4;
    }

    .alerta-enlace {
        color: #005bbb;
        text-decoration: underline;
        cursor: pointer;
    }

    .alerta-cerrar {
        margin-top: 15px;
        padding: 8px 15px;
        background: #d4b100;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        color: #000;
        display: block;
        width: 100%;
        transition: background 0.3s;
    }

    .alerta-cerrar:hover {
        background: #e8c800;
    }

    @keyframes parpadeo {
        0% { background-color: #ffffff; }
        100% { background-color: #fff7c2; }
    }
    `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
})();

// Función de alerta
function mostrarAlerta() {
    if (document.getElementById("alertaBloqueo")) return;

    const contenedor = document.createElement("div");
    contenedor.id = "alertaBloqueo";
    contenedor.className = "alerta-bloqueo";

    contenedor.innerHTML = `
        <div class="alerta-contenido">
            <img src="https://rayuela.educarex.es/modulo_acceso/imagenes/info.gif" class="alerta-icono">
            <div class="alerta-texto">
                <strong>IDENTIFICACIÓN o CONTRASEÑA incorrectos.</strong><br>
                Si ha olvidado las claves pulse <span class="alerta-enlace">OLVIDÉ MIS CREDENCIALES</span>.
            </div>
        </div>
        <button class="alerta-cerrar">Cerrar</button>
    `;

    document.body.appendChild(contenedor);

    document.querySelector(".alerta-cerrar").addEventListener("click", () => {
        contenedor.remove();
    });
}