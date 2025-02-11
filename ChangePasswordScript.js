function changePassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validar que ambos campos tengan valores
    if (!newPassword || !confirmPassword) {
        alert("Por favor, complete ambos campos.");
        return;
    }

    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden. Intente de nuevo.");
        return;
    }

    // Validar la longitud mínima de la contraseña
    if (newPassword.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Simular el cambio de contraseña (puedes agregar la lógica del servidor aquí)
    alert("¡Contraseña cambiada exitosamente!");
    
    // Redirigir al usuario al login o a otra página
    window.location.href = "index.html"; // Cambia esto si deseas redirigir a otra página
}
