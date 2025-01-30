window.onload = function () {
    var parrafo = document.getElementById("miParrafo");
    if (parrafo) {
        console.log(parrafo.textContent);
    }
    else {
        console.error("No se encontró el elemento 'div'");
    }
};
