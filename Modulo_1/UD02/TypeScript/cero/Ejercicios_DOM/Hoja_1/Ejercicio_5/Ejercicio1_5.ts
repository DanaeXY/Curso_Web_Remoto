window.onload = () => {
    const tabla = document.getElementById("tablaWeb");
    const th = document.getElementById("chris");
    const td = document.getElementById("interes");

    if (tabla && th && td) {
        console.log(tabla);
        console.log(th.textContent);
        console.log(td.textContent);
    }
    else{
        console.error("No se pudieron encontrar lo elementos");
    }
}