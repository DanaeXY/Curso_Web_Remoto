window.onload = () => {
    const div = document.getElementById("nuevoDiv");

    if (div) {
        const parrafo = div.querySelector("p");
        
        if (parrafo) {
            console.log(parrafo.textContent);
        }
        else{
            console.error("No es posible encontrar el elemento p");
        }
    }
    else{
        console.error("No es posible encontrar el elemento div");
    }
}