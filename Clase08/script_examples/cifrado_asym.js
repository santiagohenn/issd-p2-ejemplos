const crypto = require("crypto");

// 1. Generar un par de claves RSA (Pública y Privada)
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048, // Tamaño de la clave en bits (seguro y eficiente)
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

// Descomentar para ver las claves!
console.log("Clave Pública:\n", publicKey);
console.log("Clave Privada:\n", privateKey);

// 2. Función para cifrar un mensaje usando la clave pública
function cifrarMensaje(mensaje, publicKey) {
  return crypto.publicEncrypt(
    publicKey,
    Buffer.from(mensaje) // Convertimos el mensaje a Buffer
  ).toString("base64"); // Convertimos el cifrado a base64 para facilitar su lectura
}

// 3. Función para descifrar el mensaje usando la clave privada
function descifrarMensaje(mensajeCifrado, privateKey) {
  return crypto.privateDecrypt(
    privateKey,
    Buffer.from(mensajeCifrado, "base64") // Convertimos de base64 a Buffer
  ).toString("utf-8"); // Convertimos de Buffer a texto plano
}

// 4. Prueba del cifrado y descifrado
const mensajeOriginal = "Este es un mensaje secreto con cifrado RSA";
const mensajeCifrado = cifrarMensaje(mensajeOriginal, publicKey);
const mensajeDescifrado = descifrarMensaje(mensajeCifrado, privateKey);

console.log("Mensaje original:", mensajeOriginal);
console.log("Mensaje cifrado:", mensajeCifrado);
console.log("Mensaje descifrado:", mensajeDescifrado);