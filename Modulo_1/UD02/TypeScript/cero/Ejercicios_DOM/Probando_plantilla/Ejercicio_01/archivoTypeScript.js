var refBody = document.body;
if (refBody !== null) {
    var etiquetaDiv = document.createElement("div");
    var etiquetaHeader = document.createElement("header");
    var newDiv = document.createElement('div');
    // escribo nas etiquetas
    etiquetaDiv.innerHTML = "Hola Mundo";
    newDiv.style.backgroundColor = 'pink';
    etiquetaHeader.innerHTML = "isto é o header";
    // establezco a cor azul claro
    newDiv.innerHTML = 'Isto é un Div';
    // engado no body
    refBody.append(etiquetaDiv);
    refBody.append(etiquetaHeader);
    refBody.append(newDiv);
}
else {
    console.log("document.body is null");
}
