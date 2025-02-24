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

    pintoHTML(){
        document.body.appendChild(this.etiquetaH);
    }
}


export{EtiquetaH}