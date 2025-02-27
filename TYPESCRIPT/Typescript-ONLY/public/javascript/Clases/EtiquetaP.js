

import { Etiqueta } from "./Etiqueta.js";
//CLASE ESPECIFICA PARA CREAR SOLO UN ETIQUETA P
class EtiquetaP extends Etiqueta {
    //CREO LA ETIQUETA QUE DESEO
    crearEtiqueta() {
        return document.createElement("p");
    }
    //MÉTODO PARA INTRODUCIR UN TEXTO, CON 2 PARAMETROS LA REFERENCIA Y EL TEXTO
    introducirTexto(referencia, texto) {
        this.referencia = referencia;
        this.referencia.innerHTML = texto; //ESCRIBIR EL TEXTO EN EL HTML
    }
    devolverReferencia() {
        return this.referencia;
    }
}
export { EtiquetaP };
