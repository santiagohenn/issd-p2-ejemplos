const http = require("http");

const server = http.createServer((req, res) => {
 res.writeHead(200, { "Content-Type": "text/html" });
 res.end("<h1>¡Hola mundo, desde Node.js!</h1>");
});

server.listen(5000, () => {
 console.log("Servidor corriendo en http://localhost:5000");
});