window.onload = function () {
    var lista = document.getElementById("lista");
    if (lista) {
        console.log(lista.textContent);
    }
    else {
        console.error("No se ha podido encontrar la lista");
    }
};
