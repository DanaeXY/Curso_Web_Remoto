import { EtiquetaA } from "./EtiquetaA.js";
let etA = new EtiquetaA(document.createElement('a'));
etA.introducirAtributoHref('#');
console.log(etA.valorHrefEtiquetaA);
