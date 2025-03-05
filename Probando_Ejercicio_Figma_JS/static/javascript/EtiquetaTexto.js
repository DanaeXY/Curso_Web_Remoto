import { Etiquetas } from "./Etiquetas.js";

class EtiquetaTexto extends Etiquetas{

    etiquetaTexto;

    constructor(){
        super();
        this.etiquetaTexto = this.crearEtiqueta();
    }
    crearEtiqueta(){
        return document.createElement("h3");
    }
    insertarAtributoEnEtiqueta(nombreAtributo, valor){
        this.etiquetaTexto.setAttribute(nombreAtributo,valor);
    }
    introduzcoEtiquetaEnHTML(){
        document.body.appendChild(this.etiquetaTexto);
    }
    getElemento(){
        return this.etiquetaTexto;
    }
}

export {EtiquetaTexto}