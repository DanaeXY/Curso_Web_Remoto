var refBody2 = document.body;
var elementoDiv = document.createElement("div");
var elementoP = document.createElement("p");
/**
 * No exercicio 1 e 2, debedes crear un elemento calquera, sexa ‘div’ outro ‘p’ ou o que queirades para ter unha referencia para realizar os seguintes exercicios. Por exemplo:
 *
 * Exercicio 1

    O seguinte exercicio trata de ejecutar un script,o cal, modifica o arquivo index.html

    Utiliza before
    Escribe unha etiqueta ‘p’ con texto:
    Insértalle un atributo de selector de estilo, asociándolle un valor para podelo referenciar.
    Mediante javascript, crea a referencia do elemento ‘p’
    Mediante ‘INNERHTML’ ou ‘textContent’, cámbialle o texto o contido inicial
    Ejecutar o script cando teñas realizado o anterior.
    Neste exercicio, utiliza before para insertar o elemento creado.
 */
/* elementoP.innerHTML = "I left my heart in Amsterdam";
elementoP.className = "elemento-p";
elementoDiv.appendChild(elementoP);

refBody2.appendChild(elementoDiv);

elementoP.innerHTML = "I hit my head up against de wall";

refBody2.after(elementoDiv); */
/*
*Exercicio 2

    O seguinte exercicio trata de ejecutar un script,o cal, modifica o arquivo index.html

    Utiliza after
    Escribe unha etiqueta ‘p’ con texto:
    Insértalle un atributo de selector de estilo, asociándolle un valor para podelo referenciar.
    Mediante javascript, crea a referencia do elemento ‘p’
    Mediante ‘INNERHTML’ ou ‘textContent’, cámbialle o texto o contido inicial
    Ejecutar o script cando teñas realizado o anterior.
    Neste exercicio, utiliza after para insertar o elemento creado.

    #########################################
    O longo destes días, estivemos a falar de:
    Crear etiquetas e establecer atributos nunha etiqueta.
    Lembra que crear unha etiqueta era:
    ‘document.createElement(<etiqueta a crear>)’
    E establecer un atributo era:
    ‘<referencia>.setAttribute(<tributo>,<valor>)

*/
/*=*/
/**
 * Exercicio 3

Crea un documento ‘index.html’, e mediante javascript:
Crea unha etiqueta ‘p’ que o cargar o documento se visualize, de tal xeito que deberás:
Créarlle un atributo ‘class’ co valor ‘estilo-p’
Insértalle un texto
Insértaa no body
 */
/* elementoP.className = "estilo-p";
elementoP.innerHTML = "I left my heart in Amsterdam"; */
//refBody2.after(elementoP);
/**
 * Exercicio 4

Crea un botón no ‘index.html’. Utiliza este botón para crear un evento, mediante o cal insertas a etiqueta creada no exercicio anterior.*/
/* let botonEvento : HTMLButtonElement = document.createElement("button");
botonEvento.textContent = "Púlsame!";

refBody2.appendChild(botonEvento);

botonEvento.addEventListener("click", ():void =>{
    refBody2.after(elementoP);
}); */
/*Exercicio 5

No mesmo botón creado no exercicio anterior, ao mesmo tempo que creas a etiqueta ‘p’, inserta dentro da mesma unha imaxen.

A etiqueta da imaxen, terás que creala no momento que creas a etiqueta ‘p’.
Escolle a imaxe que queiras.*/
/* let imagen = document.createElement("img");
imagen.setAttribute("src", "./cosa_mona.jpg");
elementoP.appendChild(imagen);*/
/* let botonEvento : HTMLButtonElement = document.createElement("button");
botonEvento.textContent = "Púlsame!";

refBody2.appendChild(botonEvento); */
/*botonEvento.addEventListener("click", ():void =>{
    refBody2.after(elementoP);
}); */
/*Exercicio 6

Crea un lista de 5 elementos cun texto e imaxen asociada mediante un botón.*/
/* let listaImagenes : HTMLUListElement = document.createElement("ul");
let imagenes : string [] = ["./cosa_mona.jpg", "./pig.jpg", "./mariquita.jpg", "./conill.jpg", "./erizo.jpg"];

imagenes.forEach((item : string) => {
    let listItem : HTMLLIElement = document.createElement("li");
    let imgItem :HTMLImageElement = document.createElement("img");
    imgItem.setAttribute("src", item);
    imgItem.setAttribute("alt", "foto_animales");

    listItem.appendChild(imgItem);
    listaImagenes.appendChild(listItem);
});

botonEvento.addEventListener("click", ():void =>{
    refBody2.appendChild(listaImagenes);
}); */
/*Exercicio 7

Inserta nun documento ‘index.html’ unha etiqueta ‘input’ ‘type=text’ e un botón.

Dito botón deberá realizar o seguinte:
Ler o contido
Unha vez que lea o contido deberás crear unha etiqueta ‘p’ e insertar na mesma o contido lido.
Insérta no documento a etiqueta creada
 */
var elementoInput = document.createElement("input");
elementoInput.setAttribute("type", "text");
var botonLeer = document.createElement("button");
botonLeer.textContent = "Mostrar datos";
refBody2.appendChild(elementoInput);
refBody2.appendChild(botonLeer);
botonLeer.addEventListener("click", function () {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = elementoInput.value;
    refBody2.appendChild(paragrafo);
});
