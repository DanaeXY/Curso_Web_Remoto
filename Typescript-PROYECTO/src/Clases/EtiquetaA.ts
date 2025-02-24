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
    pintoHTML(){
        document.body.appendChild(this.etiquetaA);
    }
}


export{EtiquetaA}