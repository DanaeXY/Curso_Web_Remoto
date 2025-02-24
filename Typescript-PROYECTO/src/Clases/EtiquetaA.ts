class EtiquetaA{
    private etiquetaA;

    constructor(){
        this.etiquetaA = document.createElement("a");
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