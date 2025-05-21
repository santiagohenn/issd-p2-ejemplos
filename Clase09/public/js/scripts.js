async function obtenerInfo() {
  const res = await fetch('/api/user');
  const data = await res.json();
  const msg = data.theme ? data.theme : 'Sin cookie';
  document.getElementById('status').textContent = msg;
}

async function crearCookie() {
  await fetch('/api/set');
  obtenerInfo();
}

/*
async function crearCookie(theme) {
  await fetch('/api/set', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ theme })
  });
  obtenerInfo();
}
  */

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const [k, val] = v.split('=');
    return k === name ? val : r
  }, '');
}

async function borrarCookie() {
  await fetch('/api/delete');
  obtenerInfo();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(current);
  document.cookie = `theme=${current}; path=/; max-age=${60 * 60 * 24 * 30}`;
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getCookie('theme') || 'light';
  applyTheme(savedTheme);
});

function hola() {
  fetch('/api/hello')
    .then(response => response.json())
    .then(data => {
      document.getElementById('areaDeMensaje').textContent = data.message;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}