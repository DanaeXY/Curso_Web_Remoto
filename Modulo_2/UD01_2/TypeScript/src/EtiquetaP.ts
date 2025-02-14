import {Etiqueta} from "./Etiqueta";

class EtiquetaP extends Etiqueta {
    crearReferencia(): HTMLParagraphElement {
        return document.createElement("p");
    }

    introducirTexto(referencia: HTMLElement, texto:string): void {
        referencia.innerHTML=texto
    }
}

export {EtiquetaP}