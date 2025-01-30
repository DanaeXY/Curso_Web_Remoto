window.onload = function () {
    var lista = document.getElementById("lista");
    if (lista) {
        var elementoLista = lista.getElementsByTagName("li");
        for (var index = 0; index < elementoLista.length; index++) {
            if (elementoLista) {
                console.log(elementoLista[index].textContent);
            }
            else {
                console.log("Elementos de la lista no encontrados");
            }
        }
    }
};
