/* import { UnXenerico } from "./Genericos";
let generico1 = new UnXenerico(5);
let generico2 = new UnXenerico("paralelepipedo");
let generico3 = new UnXenerico(document.createElement("a")); */


import { BLoqueHTML } from "./Persona.js";

class BloqueNavegacion<T>{
    private etiqueta:T;
    constructor(etiqueta:T){
        this.etiqueta = etiqueta;
    }
}

let etiquetaA = new BLoqueHTML(document.createElement("a"));
let etiqueta = new BloqueNavegacion<BLoqueHTML>(etiquetaA);