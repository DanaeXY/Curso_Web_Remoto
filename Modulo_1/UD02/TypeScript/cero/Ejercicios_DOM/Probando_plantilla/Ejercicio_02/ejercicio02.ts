/*
    1.- Crea un botón que xenere por consola “boas a todos”. Emprega o evento “click”

*/

 let refBody1: HTMLBodyElement = document.body as HTMLBodyElement;

/*if (refBody1 !== null) {
    let etiquetaDiv: HTMLDivElement = document.createElement("div");
    let botonButton: HTMLButtonElement = document.createElement("button");
    let etiquetaLabel: HTMLLabelElement = document.createElement("label");

    let divBoton: HTMLDivElement = document.createElement("div");
    let divLabel: HTMLDivElement = document.createElement("div");

    etiquetaDiv.innerHTML = "Boton para saludar:";
    botonButton.textContent = "Te saludo?";

    botonButton.addEventListener("click", () => {
        etiquetaLabel.innerHTML = "Boas a todos!";
    });

    divBoton.appendChild(botonButton);
    divLabel.appendChild(etiquetaLabel);

    etiquetaDiv.appendChild(divBoton);
    etiquetaDiv.appendChild(divLabel);

    refBody1.appendChild(etiquetaDiv);
} else {
    console.log("No ha podido añadirse los elementos");
} */

/* 2.- Introduce dentro do “index.html”, unha etiqueta ‘p’,insertando nela un texto calquera.
    Crea un botón que conteña unha función que saque por consola a etiqueta e o texto dela.
    Emprega o evento “click”.
    Deberías ter unha referencia na etiqueta ‘p’?, neste caso tal vez sólo teñas unha. */

   /*  if (refBody1 !== null) {
        
        let etiquetaP : HTMLParagraphElement = document.createElement("p");
        let elementoBoton : HTMLButtonElement = document.createElement("button");
        let elementoLabel : HTMLLabelElement = document.createElement("label");

        let divElementos1 : HTMLDivElement = document.createElement("div");
        let divElementos2 : HTMLDivElement = document.createElement("div");

        etiquetaP.innerHTML = "Un texto cualquiera";
        elementoBoton.textContent = "Púlsame";

        elementoBoton.addEventListener( "click", ()=>{
            console.log("La frase es: " + elementoLabel.appendChild(etiquetaP).textContent);
            
        });

        divElementos1.appendChild(etiquetaP);
        divElementos2.appendChild(elementoBoton);
        divElementos2.appendChild(elementoLabel);

        refBody1.appendChild(divElementos1);
        refBody1.appendChild(divElementos2);
        
    }
    else{
        console.log("elemento no encontrado");
    }
 */
/* 
    3.- Introduce dentro do “index.html”, unha lista,insertando nela textos calqueras.
    Crea un botón que conteña unha función que saque por consola a etiqueta, ca lista creada.
    Emprega o evento “click”. */

    /* let elementoLista : HTMLUListElement = document.createElement("ul");
    let elementosDeLaLista : string [] = ["Hola", "Hello", "Ça va?"];

    elementosDeLaLista.forEach((item : string) => { //DOBLE PARÉNTESIS RECUERDA!   
        let listItem : HTMLLIElement = document.createElement("li");
        listItem.textContent = item;
        elementoLista.appendChild(listItem);
    });

    let botonMostrarDatos : HTMLButtonElement = document.createElement("button");
    botonMostrarDatos.textContent = "Te mostraré la lista";

    botonMostrarDatos.addEventListener("click", () =>{
        console.log(elementoLista);
    });
    
    refBody1.appendChild(elementoLista);
    refBody1.appendChild(botonMostrarDatos); */

/**
 * Exercicio 4
    Introduce na lista anterior un evento “click” cada vez que lle des no primeiro elemento da lista, saca por consola:
    Toda a lista creada
    O texto dese elemento*/

   /*  let lista : HTMLUListElement = document.createElement("ul");
    let elementoLista : string [] = ["Un", "Dos", "Tres"]; 

    elementoLista.forEach((item : string) => {
        let listItem : HTMLLIElement = document.createElement("li");
        listItem.textContent = item;
        lista.appendChild(listItem);

    });

    let primerElementoLista : HTMLLIElement = lista.querySelector("li")!;//la exclamación evita que pete por el nulo
    primerElementoLista.addEventListener("click", ():void =>{//click en el primer elemento de la lista
        console.log(lista);
        console.log(primerElementoLista.textContent);
    });

    refBody1.appendChild(lista); */
        

/*
Exercicio 5
Introduce na lista anterior un evento “click” cada vez que lle des no terceiro elemento da lista (tes que ter máis de 5 elementos creados), saca por consola:
Toda a lista creada
O texto dese elemento
 */

    let lista : HTMLUListElement = document.createElement("ul");
    let elementoLista : string [] = ["Une", "Due", "Tre", "Cuatro", "Cinque", "Sei"]; 

    elementoLista.forEach((item : string) => {
        let listItem : HTMLLIElement = document.createElement("li");
        listItem.textContent = item;
        lista.appendChild(listItem);

    });

    let primerElementoLista : HTMLLIElement = lista.querySelectorAll("li")[2]!;//la exclamación evita que pete por el nulo, [2] para el tercer elemento de la lista
    primerElementoLista.addEventListener("click", ():void =>{
        console.log(lista);
        console.log(primerElementoLista.textContent);
    });

    refBody1.appendChild(lista); 