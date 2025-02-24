class EtiquetaH{
    private etiquetaH;

    constructor(etiquetaH:HTMLHeadingElement){
        this.etiquetaH = etiquetaH;
    }

    
    public get valorEtiquetaH() {
        return this.etiquetaH;
    }
    

    introducirAtributo(clase:string){
        this.etiquetaH.setAttribute('class', clase);
    }
}


export{EtiquetaH}