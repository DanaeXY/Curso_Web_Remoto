import {Etiqueta} from "./Etiqueta";

class EtiquetaP extends Etiqueta{

    private referencia:any;

    crearEtiqueta(): HTMLParagraphElement {
        return document.createElement("p");
    }

    introducirTexto(referencia:HTMLParagraphElement, texto: string):void {
        this.referencia = referencia;
        this.referencia.innerHTML = texto;
    }

    devolverReferencia(): HTMLParagraphElement{
        return this.referencia;
    }
    
}

export {EtiquetaP}