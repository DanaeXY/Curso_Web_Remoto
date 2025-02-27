import {Etiquetas} from "./Etiquetas.js";

class EtiquetaDiv extends Etiquetas{

    private etiquetaDiv:HTMLDivElement;
    

    constructor(){
        super();
        this.etiquetaDiv=this.crearEtiqueta();
        
    }

    crearEtiqueta(): HTMLDivElement {
        return document.createElement("div");
         
    }
    insertarAtributoEnEtiqueta(nombreAtributo: string, valor:string): void {

        this.etiquetaDiv.setAttribute(nombreAtributo, valor);
        
    }
    introduzcoEtiquetaEnHTML(): void {
        document.body.appendChild(this.etiquetaDiv);
    }

    getElemento(){
        return this.etiquetaDiv;
    }
    
}


export{EtiquetaDiv}