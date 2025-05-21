document.addEventListener('DOMContentLoaded', () => {
    mostrarMensaje();
});

async function mostrarMensaje() {
    const tbody = document.getElementById('holaDisplay');
    tbody.innerHTML = await getMensaje();
}

async function getMensaje() {
    try {
        const response = await fetch('http://192.168.100.20:3000/test', {
            method: "GET",
            credentials: "include", // IMPORTANTE para autenticacion y cookies
            headers: {
              "Content-Type": "application/json",
              // "Authorization": "Bearer YOUR_TOKEN" // para cuando usemos tokens
            },
          }); // Ajusta la URL según tu backend
        if (!response.ok) {
            throw new Error('Error al obtener el mensaje');
        }
        let mensaje = await response.text();
        return mensaje;
    } catch (error) {
        console.error('Error:', error);
    }
}

