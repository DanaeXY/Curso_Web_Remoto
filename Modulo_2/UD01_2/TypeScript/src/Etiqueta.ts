abstract class Etiqueta{

    protected etiqueta : string;

    constructor(etiqueta:string){
        this.etiqueta=etiqueta;
    }

    abstract crearReferencia():HTMLParagraphElement;
    abstract introducirTexto(referencia:HTMLElement,texto:string): void;
}

export {Etiqueta}