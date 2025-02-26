import { Etiquetas } from "./Etiquetas.js";
class EtiquetaImg extends Etiquetas {
    constructor(etiquetaImg) {
        super();
        this.etiquetaImg = etiquetaImg;
    }
    crearEtiqueta(etiqueta) {
        etiqueta = document.createElement("img");
        return etiqueta;
    }
    insertarAtributoEnEtiqueta(nombreAtributo) {
        this.etiquetaImg.setAttribute("src", nombreAtributo);
    }
    introduzcoEtiquetaEnHTML() {
        document.body.appendChild(this.etiquetaImg);
    }
}
export { EtiquetaImg };
