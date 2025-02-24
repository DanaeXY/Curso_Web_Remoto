class EtiquetaImg{
    private etiquetaImg;

    constructor(etiquetaImg:HTMLImageElement){
        this.etiquetaImg = etiquetaImg;
    }

    
    public get valorEtiquetaImg() {
        return this.etiquetaImg;
    }
    

    introducirAtributo(clase:string){
        this.etiquetaImg.setAttribute('class', clase);
    }
}


export{EtiquetaImg}