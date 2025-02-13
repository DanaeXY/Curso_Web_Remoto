export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    #saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    presentarse() {
        return this.#saludar();
    }
}

export class UIManager {
    constructor() {
        this.container = document.body;
    }

    #crearElemento(tag, texto, estilos) {
        const elemento = document.createElement(tag);
        elemento.textContent = texto;
        Object.assign(elemento.style, estilos);
        return elemento;
    }

    agregarElemento(tag, texto, estilos = {}) {
        const nuevoElemento = this.#crearElemento(tag, texto, estilos);
        this.container.appendChild(nuevoElemento);
    }
}
