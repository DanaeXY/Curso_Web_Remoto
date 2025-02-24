class EtiquetaA{
    private etiquetaA;

    constructor(etiquetaA:HTMLAnchorElement){
        this.etiquetaA = etiquetaA;
    }

    
    public get valorHrefEtiquetaA() {
        return this.etiquetaA;
    }
    

    introducirAtributoHref(direccion:string){
        this.etiquetaA.setAttribute('href', direccion);
    }
}


export{EtiquetaA}