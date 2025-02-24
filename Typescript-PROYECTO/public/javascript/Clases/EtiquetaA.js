class EtiquetaA {
    constructor(etiquetaA) {
        this.etiquetaA = etiquetaA;
    }
    get valorHrefEtiquetaA() {
        return this.etiquetaA;
    }
    introducirAtributoHref(direccion) {
        this.etiquetaA.setAttribute('href', direccion);
    }
}
export { EtiquetaA };
