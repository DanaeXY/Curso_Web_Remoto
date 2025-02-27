/*
Exercicio 1

Crea unha clase que conteña as seguintes propiedades:
nome
apelido1
apelido2
email
data de nacemento

Crea un método o cal utilizarás para sacar os datos introducidos na instancia pola consola.*/
class Empleado {
    constructor(nome, apelido1, apelido2, email, dataNacemento) {
        this.nome = nome;
        this.apelido1 = apelido1;
        this.apelido2 = apelido2;
        this.email = email;
        this.dataNacemento = dataNacemento;
    }
    mostrarDatos() {
        return `El empleado se llama ${this.nome} ${this.apelido1} ${this.apelido2}, su email es ${this.email} y su fecha de nacimiento ${this.dataNacemento}`;
    }
}
/*Exercicio 2

Vas crear unha clase de concatenar texto, para iso, crea dúas propiedades:

Texto_1
Texto_2
Inicialízalas dende o constructor mediante a instancia.

Crea un método onde crearás a concatenación e sacarás o texto por consola.
Instancia a clase e utiliza o método creado.*/
class ConcatenarTexto {
    constructor(texto1, texto2) {
        this.texto1 = texto1;
        this.texto2 = texto2;
    }
    mostrarConcatenacion() {
        return this.texto1 + this.texto2;
    }
}
/*Exercicio 3

Crea unha clase calculadora, onde deberás crear dúas variables privadas:
Crea diferentes métodos:
Suma
Resta
Multiplicación
División
Nun método ( que deberás crear ) o cal deberás introducir unha estructura ‘switch’ para seleccionar qué tipo de operación realizarás.

*/
class Calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    sumar() {
        let resultado = this.numero1 + this.numero2;
        return resultado;
    }
    restar() {
        let resultado = this.numero1 - this.numero2;
        return resultado;
    }
    multiplicar() {
        let resultado = this.numero1 * this.numero2;
        return resultado;
    }
    dividir() {
        let resultado = this.numero1 / this.numero2;
        return resultado;
    }
}
export { Empleado, ConcatenarTexto, Calculadora };
