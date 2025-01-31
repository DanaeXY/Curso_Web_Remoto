const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// Ruta principal que envía el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});