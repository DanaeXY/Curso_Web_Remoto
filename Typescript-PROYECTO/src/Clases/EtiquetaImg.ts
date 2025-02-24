class EtiquetaImg{
    private etiquetaImg;

    constructor(){
        this.etiquetaImg = document.createElement("img");
    }

    
    public get valorEtiquetaImg() {
        return this.etiquetaImg;
    }
    

    introducirAtributo(clase:string){
        this.etiquetaImg.setAttribute('class', clase);
    }

    pintoHTML(){
        document.body.appendChild(this.etiquetaImg);
    }
}


export{EtiquetaImg}