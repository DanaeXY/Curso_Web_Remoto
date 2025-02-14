import {Etiqueta} from "./Etiqueta";
//CLASE ESPECIFICA PARA CREAR SOLO UN ETIQUETA P

class EtiquetaP extends Etiqueta{
    //DECLARO UNA REFERENCIA  PARA PODER UBICAR EL TEXTO
    private referencia:any;

    //CREO LA ETIQUETA QUE DESEO
    crearEtiqueta(): HTMLParagraphElement {
        return document.createElement("p");
    }

    //MÉTODO PARA INTRODUCIR UN TEXTO, CON 2 PARAMETROS LA REFERENCIA Y EL TEXTO
    introducirTexto(referencia:HTMLParagraphElement, texto: string):void {
        this.referencia = referencia;
        this.referencia.innerHTML = texto;//ESCRIBIR EL TEXTO EN EL HTML
    }

    devolverReferencia(): HTMLParagraphElement{
        return this.referencia;
    }
    
}

export {EtiquetaP}