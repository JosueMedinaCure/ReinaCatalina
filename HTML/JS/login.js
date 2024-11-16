document.addEventListener('DOMContentLoaded', () => {
    // Manejo del formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) { // Validamos que exista el formulario antes de agregar el evento
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío por defecto del formulario
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Validación de usuario y contraseña
            if (username === "root" && password === "root") {
                window.location.href = "HTML/dashboard.html";  // Redirige a dashboard si las credenciales son correctas
                console.log("Redirigiendo a: ../HTML/dashboard.html")
            } else {
                alert("Usuario o contraseña incorrectos");  // Muestra alerta si las credenciales son incorrectas
            }
        });
    }
});
