import { Etiquetas } from "./Etiquetas.js";
class EtiquetaDiv extends Etiquetas {
    constructor(etiquetaDiv) {
        super();
        this.etiquetaDiv = etiquetaDiv;
    }
    crearEtiqueta(etiqueta) {
        etiqueta = document.createElement("div");
        return etiqueta;
    }
    insertarAtributoEnEtiqueta(nombreAtributo) {
        nombreAtributo = "clase-div";
        this.etiquetaDiv.setAttribute("class", nombreAtributo);
    }
    introduzcoEtiquetaEnHTML() {
        document.body.appendChild(this.etiquetaDiv);
    }
}
export { EtiquetaDiv };
