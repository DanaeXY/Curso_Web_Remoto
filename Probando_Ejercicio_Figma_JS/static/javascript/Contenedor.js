import { EtiquetaDiv } from "./EtiquetaDiv.js";
import { MenuCentral } from "./MenuCentral.js";
import { NavegacionLateral } from "./NavegacionLateral.js";

class Contenedor{

    constructor() {
        const contenedorPadre = new EtiquetaDiv();
        
        this.contenedor = contenedorPadre.getElemento();
        contenedorPadre.insertarAtributoEnEtiqueta("class", "contenedor");
        contenedorPadre.introduzcoEtiquetaEnHTML();//ok crea el div contenedor

        const navegacionLateral = new NavegacionLateral().getElemento();
        const menuCentral = new MenuCentral().getElemento();

        this.contenedor.appendChild(navegacionLateral);
        this.contenedor.appendChild(menuCentral);

        document.body.appendChild(this.contenedor);
    }
    
}

export {Contenedor}