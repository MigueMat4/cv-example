const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Definir la carpeta public para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});