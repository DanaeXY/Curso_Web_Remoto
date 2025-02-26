class EtiquetaH {
    constructor() {
        this.etiquetaH1 = document.createElement("h1");
        this.etiquetaH3 = document.createElement("h3");
    }
    get valorEtiquetaH() {
        return this.etiquetaH1;
    }
    introducirAtributo(clase) {
        this.etiquetaH1.setAttribute('class', clase);
        this.etiquetaH3.setAttribute('class', clase);
    }
    pintoHTML() {
        document.body.appendChild(this.etiquetaH1);
        //document.body.appendChild(this.etiquetaH3);
    }
}
export { EtiquetaH };
