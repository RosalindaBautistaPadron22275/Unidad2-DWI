// Generar un captcha simple
function generateCaptcha() {
    const captcha = Math.random().toString(36).substring(2, 7).toUpperCase();
    document.getElementById('captcha').innerText = captcha;
}

// Simular validación de login
function login() {
    // Credenciales para usuarios
    const userCredentials = [
        { username: "Usuario.Prueba@gmail.com", password: "UP.12345", redirectUrl: "Index.html" },
        { username: "Admin.Prueba@gmail.com", password: "Admin.12345", redirectUrl: "IndexAdmin.html" }
    ];
    
    // Valores ingresados por el usuario
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const enteredCaptcha = document.getElementById("captchaInput").value;
    const actualCaptcha = document.getElementById("captcha").innerText;

    // Verificar captcha
    if (enteredCaptcha !== actualCaptcha) {
        alert("Captcha incorrecto. Intente de nuevo.");
        generateCaptcha(); // Generar un nuevo captcha
        return;
    }

    // Verificar credenciales
    const user = userCredentials.find(u => u.username === enteredUsername && u.password === enteredPassword);
    
    if (user) {
        alert("Acceso concedido. Bienvenido a Joyeria Encanto.");
        // Redirigir a la página correspondiente
        window.location.href = user.redirectUrl;
    } else {
        alert("Usuario o contraseña incorrectos. Intente de nuevo.");
    }
}

// Redirigir a la página de recuperación de contraseña
function forgotPassword() {
    window.location.href = "forgot-password.html"; // Cambia la URL según corresponda
}

// Generar captcha al cargar la página
window.onload = generateCaptcha;
