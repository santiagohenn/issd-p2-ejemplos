async function consultarStock() {

    let nombre = document.getElementById('nombre').value;
    let display = document.getElementById('stockDisplay');

    if (!nombre) {
        display.textContent = "Por favor ingresa un nombre de producto.";
        return;
    }

    try {
        const res = await fetch(`/stock?nombre=${encodeURIComponent(nombre)}`);
        if (res.ok) {
            const stock = await res.json();
            display.textContent = `Stock disponible: ${stock}`;
        } else if (res.status === 404) {
            display.textContent = "Producto no encontrado.";
        } else {
            display.textContent = "Error al consultar el stock.";
        }
    } catch (error) {
        console.error(error);
        display.textContent = "Error de conexión con el servidor.";
    }

}