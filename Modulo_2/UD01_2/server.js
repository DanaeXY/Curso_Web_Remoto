const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const PORT = 3000;//CAMBIAR EL PUERTO EN CADA SERVIDOR

// 1. Configurar LiveReload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'static'));

app.use(connectLivereload()); // 2. Middleware para LiveReload

// 3. Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// 4. Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// 5. Recargar automáticamente en cambios
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

// 6. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
