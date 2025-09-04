const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("¡Hola mundo desde Express!");
});

app.get("/otraruta/", (req, res) => {
    res.send("¡Hola mundo desde otra ruta!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http: localhost:${PORT}`);
});