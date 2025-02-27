import { EtiquetaDiv } from "./EtiquetaDiv.js";
import { EtiquetaA } from "./EtiquetaA.js";
import { EtiquetaImg } from "./EtiquetaImg.js";

class NavegacionLateral {
    private contenedor: HTMLElement;

    constructor() {
        // Crear el contenedor principal
        const divEtiqueta = new EtiquetaDiv();
        this.contenedor = divEtiqueta.getElemento();
        divEtiqueta.insertarAtributoEnEtiqueta("class","sidebar"); // Clase 
        divEtiqueta.introduzcoEtiquetaEnHTML();

        // Lista de imágenes y enlaces
        const imagenes = ["../../imagenes/menu_lateral/menu.svg", "../../imagenes/menu_lateral/home.svg", "../../imagenes/menu_lateral/customers.svg", "../../imagenes/menu_lateral/new_invoice.svg", "../../imagenes/menu_lateral/tag.svg"];
        const enlaces = ["#seccion1", "#seccion2", "#seccion3", "#seccion4", "#seccion4"];

        // Crear enlaces con imágenes
        imagenes.forEach((src, index) => {
            const etiquetaA = new EtiquetaA();
            etiquetaA.insertarAtributoEnEtiqueta("href", enlaces[index]);

            const etiquetaImg = new EtiquetaImg();
            etiquetaImg.insertarAtributoEnEtiqueta("src", src);

            etiquetaA.getElemento().appendChild(etiquetaImg.getElemento());
            this.contenedor.appendChild(etiquetaA.getElemento());
        });

        // Insertar el contenedor en el HTML
        document.body.appendChild(this.contenedor);
    }
}

export { NavegacionLateral };