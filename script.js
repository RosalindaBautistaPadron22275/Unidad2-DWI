let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

let cartCount = 0;

function agregarAlCarrito() {
    cartCount++; // Incrementar el contador de productos en el carrito
    document.getElementById('cart-count').textContent = cartCount; // Actualizar el contador en la barra de navegación
    alert("Producto agregado al carrito"); // Mensaje de confirmación
}

function vaciarCarrito() {
    cartCount = 0; // Restablecer el contador del carrito
    document.getElementById('cart-count').textContent = cartCount; // Actualizar el contador en la barra de navegación
    alert("El carrito ha sido vaciado."); // Mensaje de confirmación
}

function cargar(item) {
    quitarBordes(); // Llamar a la función para quitar bordes de los elementos seleccionados
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
    modeloSeleccionado.innerHTML = item.getElementsByClassName("descripcion")[0].innerHTML;
    descripSeleccionada.innerHTML = `Descripción de ${modeloSeleccionado.innerHTML}`; // Descripción personalizada
    precioSeleccionado.innerHTML = item.getElementsByClassName("precio")[0].innerHTML;
}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}

function quitarBordes() {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('toggle-mode');
    button.textContent = document.body.classList.contains('dark-mode') ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro";
}

// Suponiendo que DataTable es un plugin que necesitas inicializar
// new DataTable('#example'); // Asegúrate de que el selector sea correcto y de que el script de DataTable esté cargado
