function obtenerCarrito() {
    const data = localStorage.getItem("carrito");
    return data ? JSON.parse(data) : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarProducto() {
    const input = document.getElementById("productoInput");
    const producto = input.value.trim();
    if (!producto) return;

    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    input.value = "";
    verCarrito();
}

function verCarrito() {
    const carrito = obtenerCarrito();
    const contenedor = document.getElementById("carrito");
    if (carrito.length === 0) {
        contenedor.textContent = "El carrito está vacío.";
    } else {
        contenedor.innerHTML = "<strong>Productos en el carrito:</strong><ul>" +
            carrito.map(p => `<li>${p}</li>`).join("") +
            "</ul>";
    }
}