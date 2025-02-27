import { Etiquetas } from "./Etiquetas.js";
class EtiquetaImg extends Etiquetas {
    constructor() {
        super();
        this.etiquetaImg = this.crearEtiqueta();
    }
    crearEtiqueta() {
        return document.createElement("img");
    }
    insertarAtributoEnEtiqueta(nombreAtributo, valor) {
        this.etiquetaImg.setAttribute(nombreAtributo, valor);
    }
    introduzcoEtiquetaEnHTML(parent) {
        document.body.appendChild(this.etiquetaImg);
    }
    getElemento() {
        return this.etiquetaImg;
    }
}
export { EtiquetaImg };
