window.onload = () =>{
    const boton = document.getElementById("nuevoBoton");

    if (boton) {
        console.log(boton);//mostrará el botón creado
    }
    else{
        console.error("Imposible encontrar botón");
    }
}