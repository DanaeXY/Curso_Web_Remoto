import {Etiquetas} from "./Etiquetas.js";

class EtiquetaImg extends Etiquetas{

    private etiquetaImg:HTMLImageElement;

    constructor(etiquetaImg:HTMLImageElement){
        super();
        this.etiquetaImg=etiquetaImg;
        
    }

    crearEtiqueta(etiqueta:HTMLImageElement): HTMLElement {
        etiqueta = document.createElement("img");
        return etiqueta;
    }
    insertarAtributoEnEtiqueta(nombreAtributo: string): void {
    
        this.etiquetaImg.setAttribute("src", nombreAtributo);
        
    }
    introduzcoEtiquetaEnHTML(): void {
        document.body.appendChild(this.etiquetaImg);
    }

   
}


export{EtiquetaImg}