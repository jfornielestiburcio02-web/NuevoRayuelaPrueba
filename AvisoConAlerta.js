function loginError(mensajePersonalizado) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 1000;

    const modal = document.createElement("div");
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.width = "400px";
    modal.style.textAlign = "center";
    modal.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    modal.style.position = "relative";

    const gif = document.createElement("img");
    gif.src = "https://rayuela.educarex.es/modulo_acceso/imagenes/info.gif";
    gif.alt = "Alerta";
    gif.style.width = "80px";
    gif.style.marginBottom = "15px";

    const mensaje = document.createElement("p");
    mensaje.textContent = mensajePersonalizado || 
        "IDENTIFICACION o CONTRASEÑA son incorrectos. Si ha olvidado la contraseña contacte con el ADMINISTRADOR de TESELA";
    mensaje.style.fontSize = "14px";
    mensaje.style.marginBottom = "20px";

    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.style.padding = "8px 16px";
    botonCerrar.style.backgroundColor = "#2196F3";
    botonCerrar.style.color = "#fff";
    botonCerrar.style.border = "none";
    botonCerrar.style.borderRadius = "5px";
    botonCerrar.style.cursor = "pointer";

    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    modal.appendChild(gif);
    modal.appendChild(mensaje);
    modal.appendChild(botonCerrar);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
