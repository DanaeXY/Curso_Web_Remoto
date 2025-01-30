/*comando para iniciar servidor: node server, puerto 3000*/
const express = require("express");
const path = require("path");
const app = express();


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

/* en el enlace de 'a' llama a 'datos' y le ofrece respuesta (en este caso un string)*/

/* app.get("/datos",(req,res)=>{
    res.send({dato:"isto o envío dende o server"})
})


/* en el enlace 'a' llama a 'paxina' y ofrece la respuesta del archivo ubicado en static */

/* app.get("/paxina",(req,res)=>{
    const rutaDir = {
        root: path.join(__dirname,"./static") //MEJOR CREAR VARIABLE CON LA RUTA PORQUE ES UN POCO ESPECIALITO
    }
    res.sendFile("./outra.html",rutaDir)
})  */

/*------------------------------LLAMADA A PÁGINAS GYM--------------------------------------*/

app.get("/portada", (req, res)=>{
    const rutaDir = {root: path.join(__dirname,"./static")}

    res.sendFile("index.html", rutaDir)

})

app.get("/servicios", (req, res)=>{
    const rutaDir = {root: path.join(__dirname,"./static")}

    res.sendFile("servicios.html", rutaDir)

})

app.get("/testimonials", (req, res)=>{
    const rutaDir = {root: path.join(__dirname,"./static")}

    res.sendFile("testimonials.html", rutaDir)

})

app.get("/trainers", (req, res)=>{
    const rutaDir = {root: path.join(__dirname,"./static")}

    res.sendFile("trainers.html", rutaDir)

})

app.get("/cta", (req, res)=>{
    const rutaDir = {root: path.join(__dirname,"./static")}

    res.sendFile("cta.html", rutaDir)

})
/*--------------------------------------------------------------------*/

//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});