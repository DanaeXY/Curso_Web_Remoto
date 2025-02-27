import { Etiquetas } from "./Etiquetas.js";
class EtiquetaA extends Etiquetas {

    etiquetaA;

    constructor() {
        super();
        this.etiquetaA = this.crearEtiqueta();
    }
    crearEtiqueta() {
        return document.createElement("a");
        
    }
    insertarAtributoEnEtiqueta(nombreAtributo, valor) {
        this.etiquetaA.setAttribute(nombreAtributo, valor);
    }

    introduzcoEtiquetaEnHTML(parent) {
    parent.appendChild(this.etiquetaA);
  }

    getElemento(){
        return this.etiquetaA;
    }
}
export { EtiquetaA };
