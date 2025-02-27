import {EtiquetaP } from "./EtiquetaP.js";
import {PintarElemento } from "./PintarElemento.js";

let texto = "Hoy es San Val... \n ¡CÁLLATE! HOY ES VIERNES";

let instanciaEtiquetaP = new EtiquetaP();//OBJETO PARA REALIZAR LA ETIQUETA

let etiquetaPCreada = instanciaEtiquetaP.crearEtiqueta();

instanciaEtiquetaP.introducirTexto(etiquetaPCreada, texto);

let pintoHTML = new PintarElemento(document.body);//PINTAR ETIQUETA
pintoHTML.pintarAlFinal(instanciaEtiquetaP.devolverReferencia());