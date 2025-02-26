abstract class Etiquetas{


    abstract crearEtiqueta(etiqueta:HTMLElement):HTMLElement;
    abstract insertarAtributoEnEtiqueta(nombreAtributo:string):void;
    abstract introduzcoEtiquetaEnHTML():void;

}

export {Etiquetas}