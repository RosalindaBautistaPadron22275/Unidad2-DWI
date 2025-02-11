function mostrarFormularioAgregar() {
    document.getElementById("product-form").style.display = "block";
    document.getElementById("form-title").textContent = "Agregar Nuevo Producto";
    document.getElementById("form-producto").reset();
}

function cancelarFormulario() {
    document.getElementById("product-form").style.display = "none";
}

function guardarProducto(event) {
    event.preventDefault();
    // Aquí puedes implementar la lógica para guardar el producto
    alert("Producto guardado correctamente.");
    cancelarFormulario();
}

// Función para editar un producto
function editarProducto(id) {
    // Lógica para cargar los datos del producto en el formulario y mostrarlo
}

// Función para eliminar un producto
function eliminarProducto(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        // Lógica para eliminar el producto
        alert("Producto eliminado.");
    }
}