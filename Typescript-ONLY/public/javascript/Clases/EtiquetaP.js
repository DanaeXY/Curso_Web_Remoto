import { Etiqueta } from "./Etiqueta.js";
class EtiquetaP extends Etiqueta {
    crearEtiqueta() {
        return document.createElement("p");
    }
    introducirTexto(referencia, texto) {
        this.referencia = referencia;
        this.referencia.innerHTML = texto;
    }
    devolverReferencia() {
        return this.referencia;
    }
}
export { EtiquetaP };
