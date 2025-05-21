const express = require("express");
const cors = require("cors");

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.static('public'));

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Acceso no permitido por CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Permite enviar cookies y headers de autenticación
  optionsSuccessStatus: 204, // Respuesta para preflight OPTIONS
};

app.use(cors(corsOptions));

app.get("/test", (req, res) => {
    res.send("Server OK!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});