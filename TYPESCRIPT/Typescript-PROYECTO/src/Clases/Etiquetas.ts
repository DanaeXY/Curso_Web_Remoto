abstract class Etiquetas{


    abstract crearEtiqueta():HTMLElement;
    abstract insertarAtributoEnEtiqueta(nombreAtributo:string, valor:string):void;
    abstract introduzcoEtiquetaEnHTML(parent:HTMLElement):void;
    abstract getElemento():void;

}

export {Etiquetas}