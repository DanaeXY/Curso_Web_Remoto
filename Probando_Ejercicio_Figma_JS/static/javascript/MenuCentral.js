import { EtiquetaDiv } from "./EtiquetaDiv.js";
import { EtiquetaA } from "./EtiquetaA.js";
import { EtiquetaImg } from "./EtiquetaImg.js";
import {EtiquetaTexto} from "./EtiquetaTexto.js";

class MenuCentral {
    constructor() {
        //instancia contenedor
        const etiquetaDiv = new EtiquetaDiv();

        //contenedor
        this.divContenedor = etiquetaDiv.getElemento();
        etiquetaDiv.insertarAtributoEnEtiqueta("class", "menu_central");
        etiquetaDiv.introduzcoEtiquetaEnHTML();//OK introduce la etiqueta div con clase menu_central

        //array de objetos con nombres, imagenes y enlaces
        const imagenes_enlaces = [
            {texto: "Inovices", src: "../imagenes/menu_central/invoices.svg", href: "#invoices"},
            {texto: "Customers", src: "../imagenes/menu_central/customers.svg", href: "#customers"},
            {texto: "Products", src: "../imagenes/menu_central/productos.svg", href: "#products"},
            {texto: "New Product", src: "../imagenes/menu_central/new_product.svg", href: "#new_product"},
            {texto: "Finance", src: "../imagenes/menu_central/finance.svg", href: "#finance"},
            {texto: "Settings", src: "../imagenes/menu_central/settings.svg", href: "#settings"}
        ];

        imagenes_enlaces.forEach(({texto, src, href})=> {
            //etiqueta para cada cuadro
            const etiquetaCuadro = new EtiquetaDiv();
            etiquetaCuadro.insertarAtributoEnEtiqueta("class", "cuadro");

            //incluir texto
            const etiquetaTexto = new EtiquetaTexto();
            etiquetaTexto.getElemento().textContent =texto;

            //instanciar etiqueta para enlace y darle el atributo href
            const etiquetaA = new EtiquetaA();
            etiquetaA.insertarAtributoEnEtiqueta("href", href);

            //intanciar etiquta imagen para darse src
            const etiquetaImg = new EtiquetaImg();
            etiquetaImg.insertarAtributoEnEtiqueta("src", src);


            
            etiquetaA.getElemento().appendChild(etiquetaImg.getElemento());
            etiquetaCuadro.getElemento().appendChild(etiquetaA.getElemento())
            etiquetaCuadro.getElemento().appendChild(etiquetaTexto.getElemento());

            this.divContenedor.appendChild(etiquetaCuadro.getElemento());
            
        });

    }
    getElemento() {
        return this.divContenedor;
    }

}

export { MenuCentral }




