import { EtiquetaP } from "./EtiquetaP.js";
import { PintarElemento } from "./PintarElemento.js";


let texto = "¡HOY ES VIERNES!";
let instanciaEtiquetaP = new EtiquetaP();
let etiquetaPCreada = instanciaEtiquetaP.crearEtiqueta();

instanciaEtiquetaP.introducirTexto(etiquetaPCreada, texto);

let pintoHTML = new PintarElemento(document.body);
pintoHTML.pintarAlFinal(instanciaEtiquetaP.devolverReferencia());
