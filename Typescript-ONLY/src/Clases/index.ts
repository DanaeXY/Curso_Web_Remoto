import {EtiquetaP } from "./EtiquetaP";
import {PintarElemento } from "./PintarElemento";

let texto = "Hoy es San Val... \n ¡CÁLLATE! HOY ES VIERNES";
let instanciaEtiquetaP = new EtiquetaP();
let etiquetaPCreada = instanciaEtiquetaP.crearEtiqueta();

instanciaEtiquetaP.introducirTexto(etiquetaPCreada, texto);

let pintoHTML = new PintarElemento(document.body);
pintoHTML.pintarAlFinal(instanciaEtiquetaP.devolverReferencia());