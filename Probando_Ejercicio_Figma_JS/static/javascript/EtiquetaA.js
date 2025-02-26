import { Etiquetas } from "./Etiquetas.js";
class EtiquetaA extends Etiquetas {
    constructor(etiquetaA) {
        super();
        this.etiquetaA = etiquetaA;
    }
    crearEtiqueta(etiqueta) {
        etiqueta = document.createElement("a");
        return etiqueta;
    }
    insertarAtributoEnEtiqueta(nombreAtributo) {
        this.etiquetaA.setAttribute("href", nombreAtributo);
    }
    introduzcoEtiquetaEnHTML() {
        document.body.appendChild(this.etiquetaA);
    }
}
export { EtiquetaA };
