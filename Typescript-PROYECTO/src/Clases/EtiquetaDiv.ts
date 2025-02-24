class EtiquetaDiv{
    private etiquetaDiv;

    constructor(etiquetaDiv:HTMLDivElement){
        this.etiquetaDiv = etiquetaDiv;
    }

    
    public get valorEtiquetaDiv() {
        return this.etiquetaDiv;
    }
    

    introducirAtributo(clase:string){
        this.etiquetaDiv.setAttribute('class', clase);
    }
    pintoHTML(){
        document.body.appendChild(this.etiquetaDiv);
    }
}


export{EtiquetaDiv}