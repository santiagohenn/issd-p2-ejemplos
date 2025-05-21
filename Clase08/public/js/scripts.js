document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
  
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || 'Credenciales inválidas');
      }
  
      localStorage.setItem('token', data.token);
  
      message.style.color = 'green';
      message.innerHTML = `
        ✅ ¡Inicio de sesión exitoso!<br/><br/>
        <strong>Token JWT:</strong><br/>
        <code style="display:block; text-align:left; word-wrap:break-word; background:#f1f1f1; padding:1rem; border-radius:8px;">
          ${data.token}
        </code>
      `;
  
    } catch (err) {
      message.style.color = 'red';
      message.innerHTML = `
        😭 ¡Error! <br/><br/>
        <strong>${err.message}</strong><br/>
      `;
    }
  });
  