window.onload = function () {
    var lista = document.getElementById("lista");
    if (lista) {
        var parrafo = lista.getElementsByTagName("p");
        for (var index = 0; index < parrafo.length; index++) {
            if (parrafo) {
                console.log(parrafo[index].textContent);
            }
            else {
                console.error("No se ha encontrado el elemento");
            }
        }
    }
    else {
        console.error("No se ha encontrado la lista");
    }
};
