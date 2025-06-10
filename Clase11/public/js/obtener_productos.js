document.addEventListener('DOMContentLoaded', async () => {
  const contenedor = document.getElementById('productos');

  try {
    const response = await fetch('/api/productos');
    const productos = await response.json();

    productos.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'col-md-4';

      card.innerHTML = `
        <div class="card h-100 shadow-sm dark-product">
          <img src="${prod.imagenUrl}" class="card-img-top" alt="${prod.id}">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">Precio: $${prod.precio.toFixed(2)}</p>
            <p class="card-text">${prod.descripcion}</p>
            <p class="card-text">Stock: ${prod.stock}</p>
          </div>
        </div>
      `;

      contenedor.appendChild(card);
    });
  } catch (error) {
    contenedor.innerHTML = '<p class="text-danger">Error al cargar productos</p>';
    console.error('Error:', error);
  }
});
