window.onload = () => {
    const parrafo = document.getElementById("miParrafo");

    if(parrafo){
        console.log(parrafo.textContent);//mostrará el texto contenido en el párrafo
    }
    else{
        console.error("No se encontró el elemento 'div'");
    }
}