abstract class Navegacion implements BloqueLinkNavegacion{
    abstract etiquetaA: HTMLAnchorElement;
    abstract etiquetaImg: HTMLImageElement;
    abstract etiquetaDiv: HTMLDivElement;

    /* constructor(etiquetaA: HTMLAnchorElement, etiquetaImg: HTMLImageElement,etiquetaDiv: HTMLDivElement ){
        this.etiquetaA=etiquetaA;
        this.etiquetaImg=etiquetaImg;
        this.etiquetaDiv=etiquetaDiv;

    } */
    
}
class NavegacionPrincipal extends Navegacion{
    etiquetaA: HTMLAnchorElement;
    etiquetaImg: HTMLImageElement;
    etiquetaDiv: HTMLDivElement;

    constructor(etiquetaA: HTMLAnchorElement, etiquetaImg: HTMLImageElement,etiquetaDiv: HTMLDivElement ){
        super();
        this.etiquetaA=etiquetaA;
        this.etiquetaImg=etiquetaImg;
        this.etiquetaDiv=etiquetaDiv;
    }

}