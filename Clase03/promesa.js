// Una Promise representa un resultado que llegará más adelante.
function buscarUsuario() {
  return new Promise((resolve) => {
    // Simulamos una tarea lenta, como consultar una base de datos.
    setTimeout(() => {
      resolve({ id: 1, nombre: 'Ana' });
    }, 500);
  });
}

// then recibe el resultado cuando la Promise se cumple.
buscarUsuario()
  .then((usuario) => {
    console.log('Usuario encontrado:', usuario.nombre);
  })
  // catch recibiría un error si la Promise fuera rechazada.
  .catch((error) => {
    console.error('No se pudo buscar el usuario:', error.message);
  });