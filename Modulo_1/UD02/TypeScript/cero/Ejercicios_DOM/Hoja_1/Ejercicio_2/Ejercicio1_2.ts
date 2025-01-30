window.onload = () =>{
    const div = document.getElementById("nuevoDiv");

    if (div) {
        console.log(div.textContent);//para que se vea el contenido del div en consola
    }
    else{
        console.error("Imposible encontrar el texto del div");
    }
}