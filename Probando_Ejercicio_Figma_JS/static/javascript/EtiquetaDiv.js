import { Etiquetas } from "./Etiquetas.js";
class EtiquetaDiv extends Etiquetas {

    etiquetaDiv;
    constructor() {
        super();
        this.etiquetaDiv = this.crearEtiqueta();
    }
    crearEtiqueta() {
        return document.createElement("div");
         
    }
    insertarAtributoEnEtiqueta(nombreAtributo, valor) {
        this.etiquetaDiv.setAttribute(nombreAtributo, valor);
    }
    introduzcoEtiquetaEnHTML() {
        document.body.appendChild(this.etiquetaDiv);
    }

    getElemento(){
        return this.etiquetaDiv;
    }
}
export { EtiquetaDiv };
