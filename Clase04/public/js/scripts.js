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

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});

async function cargarProductos() {
    try {
        const response = await fetch('http://localhost:3000/api/productos'); // Ajusta la URL según tu backend
        if (!response.ok) {
            throw new Error('Error al cargar los productos');
        }
        const productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudieron cargar los productos');
    }
}

function mostrarProductos(productos) {
    const tbody = document.getElementById('productos-body');
    tbody.innerHTML = '';

    productos.forEach(producto => {
        const row = document.createElement('tr');
        
        const nombreCell = document.createElement('td');
        nombreCell.textContent = producto.nombre || 'Sin nombre';
        
        const precioCell = document.createElement('td');
        precioCell.textContent = `$${producto.precio?.toFixed(2) || '0.00'}`;
        
        const stockCell = document.createElement('td');
        stockCell.textContent = producto.stock || '0';
        
        row.appendChild(nombreCell);
        row.appendChild(precioCell);
        row.appendChild(stockCell);
        
        tbody.appendChild(row);
    });
}