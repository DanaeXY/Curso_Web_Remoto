import {Etiquetas} from "./Etiquetas.js";

class EtiquetaA extends Etiquetas{
        
    private etiquetaA:HTMLAnchorElement;
    

    constructor(etiquetaA:HTMLAnchorElement){
        super();
        this.etiquetaA=etiquetaA;
        
    }

    crearEtiqueta(etiqueta: HTMLAnchorElement): HTMLElement {
        etiqueta = document.createElement("a");
        return etiqueta;
    }
    insertarAtributoEnEtiqueta(nombreAtributo: string): void {
        this.etiquetaA.setAttribute("href", nombreAtributo);
        
    }
    introduzcoEtiquetaEnHTML(): void {
        document.body.appendChild(this.etiquetaA);
    }
    
}


export{EtiquetaA}

