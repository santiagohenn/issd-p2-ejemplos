const crypto = require('crypto');

// Función para generar un hash con SHA-256 y salt
function hashPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt)  // HMAC con SHA-256 y sal
                       .update(password)            // Datos a hashear
                       .digest('hex');              // Formato de salida en hexadecimal
    return hash;
}

// Generar un salt aleatorio
const salt = crypto.randomBytes(16).toString('hex');

// Ejemplo de uso
const password = "mi_super_secret_contraseña";
const hashedPassword = hashPassword(password, salt);

console.log(`Salt: ${salt}`);
console.log(`Hash: ${hashedPassword}`);
