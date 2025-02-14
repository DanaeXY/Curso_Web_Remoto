abstract class Etiqueta{

    abstract crearEtiqueta():HTMLElement;
    abstract introducirTexto(referencia:HTMLElement, texto:string):void;
    abstract devolverReferencia(): HTMLParagraphElement;
}

export {Etiqueta}