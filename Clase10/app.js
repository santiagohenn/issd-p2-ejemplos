const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola Mundo!' });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});