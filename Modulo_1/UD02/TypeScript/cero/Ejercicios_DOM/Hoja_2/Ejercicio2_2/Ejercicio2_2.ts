window.onload = () => {
    const lista = document.getElementById("lista");

    if (lista) {
        
        const elementoLista = lista.getElementsByTagName("li");

        for (let index = 0; index < elementoLista.length; index++) {
            if (elementoLista) {
                console.log(elementoLista[index].textContent);
            }
            else{
                console.log("Elementos de la lista no encontrados");
            }
        } 
    }
}