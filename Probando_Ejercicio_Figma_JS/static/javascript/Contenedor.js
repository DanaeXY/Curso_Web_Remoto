import { EtiquetaDiv } from "./EtiquetaDiv.js";
import { MenuCentral } from "./MenuCentral.js";
import { NavegacionLateral } from "./NavegacionLateral.js";

class Contenedor{

    constructor() {
        const contenedorPadre = new EtiquetaDiv();
        
        this.contenedor = contenedorPadre.getElemento();
        contenedorPadre.insertarAtributoEnEtiqueta("class", "contenedor");
        contenedorPadre.introduzcoEtiquetaEnHTML();

        const navegacionLateral = new NavegacionLateral();
        const menuCentral = new MenuCentral()

        contenedorPadre.getElemento().appendChild(navegacionLateral);
        contenedorPadre.getElemento().appendChild(menuCentral);
        
        this.contenedor.appendChild(contenedorPadre.getElemento());
    }
}

export {Contenedor}