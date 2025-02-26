import { EtiquetaDiv } from "./EtiquetaDiv.js";
import { EtiquetaA } from "./EtiquetaA.js";
import { EtiquetaImg } from "./EtiquetaImg.js";

class NavegacionLateral {
    private contenedor: HTMLElement;

    constructor() {
        // Crear el contenedor principal
        const divEtiqueta = new EtiquetaDiv(document.createElement("div"));
        this.contenedor = divEtiqueta.crearEtiqueta(document.createElement("div"));
        divEtiqueta.insertarAtributoEnEtiqueta("sidebar"); // Clase para estilos CSS
        divEtiqueta.introduzcoEtiquetaEnHTML();

        // Lista de imágenes y enlaces
        const imagenes = ["../../imagenes/menu_lateral/menu.svg", "../../imagenes/menu_lateral/home.svg", "../../imagenes/menu_lateral/customers.svg", "../../imagenes/menu_lateral/new_invoice.svg", "../../imagenes/menu_lateral/tag.svg"];
        const enlaces = ["#seccion1", "#seccion2", "#seccion3", "#seccion4", "#seccion4"];

        // Crear enlaces con imágenes
        imagenes.forEach((src, index) => {
            const etiquetaA = new EtiquetaA(document.createElement("a"));
            const enlace = etiquetaA.crearEtiqueta(document.createElement("a"));
            etiquetaA.insertarAtributoEnEtiqueta(enlaces[index]);

            const etiquetaImg = new EtiquetaImg(document.createElement("img"));
            const img = etiquetaImg.crearEtiqueta(document.createElement("img"));
            etiquetaImg.insertarAtributoEnEtiqueta(src);

            // Añadir imagen dentro del enlace y el enlace al contenedor
            enlace.appendChild(img);
            this.contenedor.appendChild(enlace);
        });

        // Insertar el contenedor en el HTML
        document.body.appendChild(this.contenedor);
    }
}

export { NavegacionLateral };