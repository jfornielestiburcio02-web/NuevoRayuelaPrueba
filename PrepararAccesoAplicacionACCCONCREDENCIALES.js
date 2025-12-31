document.getElementById("conCredenciales").addEventListener("click", function() {
    // Mostramos el nombre del script activo en la esquina inferior izquierda
    document.getElementById("jsInfo").innerText = "Script activo: PrepararAccesoAplicacionACCCONCREDENCIALES.js";

    alert("Acceso con credenciales activado");
    // Aquí redirigirías a la página correspondiente:
    // window.location.href = "inicio_con_credenciales.html";
});
if (document.getElementById("sinCredenciales")) {
    document.getElementById("sinCredenciales").addEventListener("click", function() {
        // Mostramos el nombre del script activo en la esquina inferior izquierda
        document.getElementById("jsInfo").innerText = "Script activo: PrepararAccesoAplicacionACCCONCREDENCIALES.js";
        if (confirm("No tienes credenciales. ¿Deseas continuar sin ellas?")) {
            alert("Acceso sin credenciales activado");
            // Aquí redirigirías a la página correspondiente:
            // window.location.href = "inicio_sin_credenciales.html";
        
        }
    });
}   