class PintarElemento {
    constructor(referenciaEtiqueta) {
        this.referencia = referenciaEtiqueta;
    }
    pintarAntes(lugarPintarAntes) {
        this.referencia.after(lugarPintarAntes);
    }
    pintarDespues(lugarPintarDespues) {
        this.referencia.after(lugarPintarDespues);
    }
    pintarAlComenzo(lugarPintarComienzo) {
        this.referencia.after(lugarPintarComienzo);
    }
    pintarAlFinal(lugarPintarAlFinal) {
        this.referencia.after(lugarPintarAlFinal);
    }
}
export { PintarElemento };
