window.onload = () => {
    const lista = document.getElementById("lista");

    if(lista) {
        const parrafo = lista.getElementsByTagName("p");


    for (let index = 0; index < parrafo.length; index++) {
        
        if(parrafo){
            console.log(parrafo[index].textContent);
        }
        else{
            console.error("No se ha encontrado el elemento");
        }
    }
        
    }
    else{
        console.error("No se ha encontrado la lista");
    }
}