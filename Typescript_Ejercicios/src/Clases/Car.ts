import { TipoCombustible } from "./EnumTipoCombustible";

class Car {
    private marca:string;//nombre del fabricante
    private modelo:string;//año de fabricacion
    private motor:number;//volume en litros de cilindrada de motor
    private tipoCombustible: TipoCombustible;
    private numeroPortas:number;
    public velocidadeActual:number;//axusta a velocidade actual a 0
    private velocidadeMaxima:number;//en km/h

    /* Un construtor para a clase Car onde os valores dos seus atributos se pasan como parámetros*/

    constructor(marca:string, modelo:string, motor:number, tipoCombustible:TipoCombustible, numeroPortas:number, velocidadeActual:number, velocidadeMaxima:number){
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.tipoCombustible = tipoCombustible;
        this.numeroPortas = numeroPortas;
        this.velocidadeActual = velocidadeActual;
        this.velocidadeMaxima = velocidadeMaxima;

    }

    /*Métodos para acelerar a unha determinada velocidade, desacelerar e frear (axustar a velocidade actual a cero). */

    acelerar(velocidadeAceleracion:number):string{
        
        if (this.velocidadeActual >= 0 && this.velocidadeActual+velocidadeAceleracion <= this.velocidadeMaxima) {
            this.velocidadeActual += velocidadeAceleracion;
            return `A velocidade actual é ${this.velocidadeActual}`;
        }
        else{
            return "O coche non pode acelerar máis alá da súa velocidade máxima";
        }
        
    }

    desacelerar(velocidadReducida : number):string{
       
        if (this.velocidadeActual > 0) {
            this.velocidadeActual -= velocidadReducida;
            return `O coche reduciu a sua velocidade a ${this.velocidadeActual}`;
        }
        else{
            return "O coche xa está detido";
        }
    }

    frear():string{

        if (this.velocidadeActual > 0) {
            this.velocidadeActual = 0;
            return "O coche acaba de frear";
        }
        else{
            return "O coche xa estaba detido";
        }
    }

    mostrarDatosCoche(): string{
        return `O coche é marca ${this.marca} e modelo ${this.modelo}, motor ${this.motor}, combustible ${this.tipoCombustible} e ten ${this.numeroPortas} portas`;
    }

}

export { Car, TipoCombustible };