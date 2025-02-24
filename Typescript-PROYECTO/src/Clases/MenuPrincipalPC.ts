import { EtiquetaDiv } from "./EtiquetaDiv.js";
import { EtiquetaA } from "./EtiquetaA.js";
import { EtiquetaImg } from "./EtiquetaImg.js";

class NavegacionMenuPrincipal{
    private etiquetaDiv: EtiquetaDiv;
    private etiquetaA: EtiquetaA;
    private etiquetaImg: EtiquetaImg;
    

    constructor(etiquetaDiv: HTMLDivElement, etiquetaA: HTMLAnchorElement, etiquetaImg: HTMLImageElement){
        //super(etiquetaDiv, etiquetaA,etiquetaImg);
        this.etiquetaDiv= new EtiquetaDiv(etiquetaDiv);
        this.etiquetaA=new EtiquetaA(etiquetaA);
        this.etiquetaImg= new EtiquetaImg(etiquetaImg);
    }
    
}

export{NavegacionMenuPrincipal}