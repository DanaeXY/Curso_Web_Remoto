import {Etiquetas} from "./Etiquetas.js";

class EtiquetaDiv extends Etiquetas{

    private etiquetaDiv:HTMLDivElement;
    

    constructor(etiquetaDiv:HTMLDivElement){
        super();
        this.etiquetaDiv=etiquetaDiv;
        
    }

    crearEtiqueta(etiqueta: HTMLDivElement): HTMLElement {
        etiqueta = document.createElement("div");
        return etiqueta;
    }
    insertarAtributoEnEtiqueta(nombreAtributo: string): void {
        nombreAtributo= "clase-div";
        this.etiquetaDiv.setAttribute("class", nombreAtributo);
        
    }
    introduzcoEtiquetaEnHTML(): void {
        document.body.appendChild(this.etiquetaDiv);
    }
    
}


export{EtiquetaDiv}