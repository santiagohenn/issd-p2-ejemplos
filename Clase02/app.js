const express = require("express");
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("¡Nueva pagina de inicio!");
});

app.get("/catalogo", (req, res) => {
  res.send("Ud. esta accediendo al catalogo de productos");
});

app.get("/endpoint/v2", (req, res) => {
  res.send();
});