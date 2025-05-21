const express = require("express");

const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, {
  connectTimeoutMS: 3000,
  serverSelectionTimeoutMS: 3000
});

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get("/test", (req, res) => {
    res.send("Server OK!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/test-db", async (req, res) => {
  try {

      // Intento conectarme
      await client.connect();

      // Opcionalmente, puedo testear una base en particular:
      const admin = client.db("productos").admin();
      // Testeo el delay de la conexión:
      await admin.ping(); 

      // Si todo salió bien:
      res.status(200).json({ status: "success", message: "Database OK! :)" });
  
  // Si no me pude conectar:
  } catch (error) {
      console.error("Database connection error:", error.message);
      res.status(500).json({ status: "error", message: "Database connection failed", error: error.message });
  }
});


app.get("/object", async (req, res) => {

    let nombre = req.query.nombre;
    let producto = await getProducto(nombre);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }

});

app.get("/stock", async (req, res) => {

    let nombre = req.query.nombre;
    let producto = await getProducto(nombre);

    if (producto) {
        res.json(producto.stock);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }

});



function getHolaMundo() {
    return "Proyecto clase 5";
}

async function getProducto(producto) {

  resultado = {}

  try {

    await client.connect();
    const db = client.db("productos");
    const productos = db.collection("productos");
    resultado = await productos.findOne({nombre: producto});
    
  } finally {
    await client.close();
  }

  console.log(resultado);
  return resultado;

}