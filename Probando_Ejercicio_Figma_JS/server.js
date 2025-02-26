/*comando para iniciar servidor: node server, puerto 3000*/
const express = require("express");
const path = require("path");
const app = express();


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});