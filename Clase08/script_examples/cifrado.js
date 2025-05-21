const crypto = require("crypto");

// Definir clave y algoritmo
const algoritmo = "aes-256-cbc";
const clave = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Función para cifrar
function cifrarTexto(texto) {
  const cipher = crypto.createCipheriv(algoritmo, clave, iv);
  let textoCifrado = cipher.update(texto, "utf-8", "hex");
  textoCifrado += cipher.final("hex");
  return textoCifrado;
}

// Función para descifrar
function descifrarTexto(textoCifrado) {
  const decipher = crypto.createDecipheriv(algoritmo, clave, iv);
  let textoPlano = decipher.update(textoCifrado, "hex", "utf-8");
  textoPlano += decipher.final("utf-8");
  return textoPlano;
}

// Ejemplo de uso
const mensaje = "Hola, esto es un mensaje secreto!";
const mensajeCifrado = cifrarTexto(mensaje);
const mensajeDescifrado = descifrarTexto(mensajeCifrado);

console.log("Mensaje original:", mensaje);
console.log("Mensaje cifrado:", mensajeCifrado);
console.log("Mensaje descifrado:", mensajeDescifrado);