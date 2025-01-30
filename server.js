

const app = require('./app'); // Importas la app desde app.js
const port = process.env.PORT || 3000; // El puerto puede ser tomado de las variables de entorno, como en Render

// Arrancas el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
