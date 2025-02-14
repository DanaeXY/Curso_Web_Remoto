class PintarElemento{
    //DECLARAR VARIBALE PARA UBICAR EL ELEMENTO
    private referencia;

    constructor(referenciaEtiqueta:HTMLElement){
        this.referencia = referenciaEtiqueta;
    }

    pintarAntes(lugarPintarAntes : HTMLElement){
        this.referencia.after(lugarPintarAntes);
    }
    pintarDespues(lugarPintarDespues : HTMLElement){
        this.referencia.after(lugarPintarDespues);
    }
    pintarAlComenzo(lugarPintarComienzo : HTMLElement){
        this.referencia.after(lugarPintarComienzo);
    }
    pintarAlFinal(lugarPintarAlFinal : HTMLElement){
        this.referencia.after(lugarPintarAlFinal);
    }
}

export {PintarElemento}