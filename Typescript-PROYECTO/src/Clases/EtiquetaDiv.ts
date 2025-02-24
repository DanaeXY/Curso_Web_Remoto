class EtiquetaDiv{
    private etiquetaDiv;

    constructor(){
        this.etiquetaDiv = document.createElement("div");
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