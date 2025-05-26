async function login() {
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: document.getElementById('usuario').value,
            password: document.getElementById('clave').value
        })
    });

    const data = await res.json();
    document.getElementById('resultado').textContent = data.mensaje || data.error;
}

async function protegido() {
    const res = await fetch('/api/protegido', {
        method: 'GET',
        credentials: 'include' // MUY IMPORTANTE para enviar cookies
    });

    const data = await res.json();
    document.getElementById('resultado').textContent = data.mensaje || data.error;
}