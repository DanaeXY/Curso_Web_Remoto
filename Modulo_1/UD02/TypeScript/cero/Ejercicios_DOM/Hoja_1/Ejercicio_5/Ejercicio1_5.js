window.onload = function () {
    var tabla = document.getElementById("tablaWeb");
    var th = document.getElementById("chris");
    var td = document.getElementById("interes");
    if (tabla && th && td) {
        console.log(tabla);
        console.log(th.textContent);
        console.log(td.textContent);
    }
    else {
        console.error("No se pudieron encontrar lo elementos");
    }
};
