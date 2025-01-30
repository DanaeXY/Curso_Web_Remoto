window.onload = function () {
    var div = document.getElementById("nuevoDiv");
    if (div) {
        console.log(div.textContent);
    }
    else {
        console.error("Imposible encontrar el texto del div");
    }
};
