import { TipoCombustible } from "./EnumTipoCombustible.js";
class Car {
    /* Un construtor para a clase Car onde os valores dos seus atributos se pasan como parámetros*/
    constructor(marca, modelo, motor, tipoCombustible, numeroPortas, velocidadeActual, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.tipoCombustible = tipoCombustible;
        this.numeroPortas = numeroPortas;
        this.velocidadeActual = velocidadeActual;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    /*Métodos para acelerar a unha determinada velocidade, desacelerar e frear (axustar a velocidade actual a cero). */
    acelerar(velocidadeAceleracion) {
        if (this.velocidadeActual >= 0 && this.velocidadeActual + velocidadeAceleracion <= this.velocidadeMaxima) {
            this.velocidadeActual += velocidadeAceleracion;
            return `A velocidade actual é ${this.velocidadeActual}`;
        }
        else {
            return "O coche non pode acelerar máis alá da súa velocidade máxima";
        }
    }
    desacelerar(velocidadReducida) {
        if (this.velocidadeActual > 0) {
            this.velocidadeActual -= velocidadReducida;
            return `O coche reduciu a sua velocidade a ${this.velocidadeActual}`;
        }
        else {
            return "O coche xa está detido";
        }
    }
    frear() {
        if (this.velocidadeActual > 0) {
            this.velocidadeActual = 0;
            return "O coche acaba de frear";
        }
        else {
            return "O coche xa estaba detido";
        }
    }
    mostrarDatosCoche() {
        return `O coche é marca ${this.marca} e modelo ${this.modelo}, motor ${this.motor}, combustible ${this.tipoCombustible} e ten ${this.numeroPortas} portas`;
    }
}
export { Car, TipoCombustible };
