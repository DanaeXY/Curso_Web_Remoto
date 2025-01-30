window.onload = () =>{
    const lista = document.getElementById("lista");

    if (lista) {
        console.log(lista.textContent);//cuando se compile a js con tsc aparecerá el contenido en consola
    }
    else{
        console.error("No se ha podido encontrar la lista");
    }
}