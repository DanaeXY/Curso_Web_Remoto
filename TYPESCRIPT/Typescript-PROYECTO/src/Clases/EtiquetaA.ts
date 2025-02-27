import {Etiquetas} from "./Etiquetas.js";

class EtiquetaA extends Etiquetas{
        
    private etiquetaA:HTMLAnchorElement;
    

    constructor(){
        super();
        this.etiquetaA=this.crearEtiqueta();
        
    }

    crearEtiqueta(): HTMLAnchorElement {
        return  document.createElement("a");
         
    }
    insertarAtributoEnEtiqueta(nombreAtributo: string, valor:string): void {
        this.etiquetaA.setAttribute(nombreAtributo, valor);
        
    }
    introduzcoEtiquetaEnHTML(parent:HTMLElement): void {
        document.body.appendChild(this.etiquetaA);
    }
    getElemento(){
       return this.etiquetaA;
    }
}


export{EtiquetaA}

