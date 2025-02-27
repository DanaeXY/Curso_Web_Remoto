import {Etiquetas} from "./Etiquetas.js";

class EtiquetaImg extends Etiquetas{

    private etiquetaImg:HTMLImageElement;

    constructor(){
        super();
        this.etiquetaImg=this.crearEtiqueta();
        
    }

    crearEtiqueta(): HTMLImageElement {
        return document.createElement("img");
    
    }
    insertarAtributoEnEtiqueta(nombreAtributo: string, valor:string): void {
    
        this.etiquetaImg.setAttribute(nombreAtributo,valor);
        
    }
    introduzcoEtiquetaEnHTML(parent:HTMLElement): void {
        document.body.appendChild(this.etiquetaImg);
    }

    getElemento() {
        return this.etiquetaImg;
      }
}


export{EtiquetaImg}