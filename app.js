// app.js
const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Exportas la app para que pueda ser utilizada en server.js
module.exports = app;
