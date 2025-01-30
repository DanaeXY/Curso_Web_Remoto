const express = require('express');
const app = express();
const PORT = 3001; // Cambia el puerto para cada servidor

app.get('/', (req, res) => {
    res.send('Servidor en ejecución en la carpeta UD02_2');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
