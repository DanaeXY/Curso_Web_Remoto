/* import { UnXenerico } from "./Genericos";
let generico1 = new UnXenerico(5);
let generico2 = new UnXenerico("paralelepipedo");
let generico3 = new UnXenerico(document.createElement("a"));

document.body.appendChild(generico3); */

import { BLoqueHTML } from "./Persona.js";
class BloqueNavegacion {
    constructor(etiqueta) {
        this.etiqueta = etiqueta;
    }
}
let etiquetaA = new BLoqueHTML(document.createElement("a"));
//si ponemos p traga igualmente OJO

etiquetaA.etiquetaA.textContent = "Ir a Google";
etiquetaA.etiquetaA.href = "https://www.google.com";
etiquetaA.etiquetaA.target = "_blank";

let etiqueta = new BloqueNavegacion(etiquetaA);

document.body.appendChild(etiquetaA.etiquetaA);