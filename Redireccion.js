function iniciarSesion(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    window.auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "admin.html";
        })
        .catch(() => {
            mostrarAviso();
        });
}
