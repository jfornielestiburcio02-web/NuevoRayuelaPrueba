async function enviar() {
    const titulo = document.getElementById("titulo").value;
    const mensaje = document.getElementById("mensaje").value;

    const res = await fetch("/api/denuncia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, mensaje })
    });

    if (res.ok) {
        alert("Denuncia enviada");
        location.href = "/";
    }
}
