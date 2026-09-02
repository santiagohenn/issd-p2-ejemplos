const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Create an endpoint that returns a Hello World
app.get('/', (req, res) => {
  res.send('Hello World');
});