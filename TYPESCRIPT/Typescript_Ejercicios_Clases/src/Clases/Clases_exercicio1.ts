/*Exercicio 1

Crea unha clase, dentro da mesma:

Crea un método/función ‘mostrarTextoPorConsola’:
Deberemos pasar un texto a través do constructor, é dicir, deberemo ter creado unha variable ( de clase ou estado ou instancia )
Dito método deberá escribilo texto insertado por consola.
Crea un método/función ‘mostrarNumeroPorConsola’, segue os mesmos pasos que o anterior, pero pasándolle un número.

Crea un método/función ‘sumaONumero’, inserta un número o cal deberás usalo para sumar neste método, é dicir, ‘this.numero + 5’ por exemplo. 
Visualiza dito número por consola, tal como temos feito nos exemplos vistos.

Lembra : 
Instanciala clase e pasarlle as variables
Crear unha variable para gardalo texto ou número no interior da clase (variable clase ou instancia …)
Executa o método onde se mostra o texto*/

class Consola{

	private texto1:string;
	private numero:number;

	constructor(texto1:string, numero:number) {
		this.texto1 = texto1;
		this.numero = numero;	
	}
	
	mostrarTextoPorConsola (): string{

		return this.texto1;
	}

	mostrarNumeroPorConsola():number{
		return this.numero;
	}
}

/**
 * Exercicio 2

Crea unha nova clase, crea varios métodos:

Un deles terá que devolver a suma de dous números.
Outro, deberás utilizar unha variable de entrada (non no constructor) a ese método e visualizala por consola nese método.
Outro, utilizando o constructor, introduce unha variable de entrada a cal, deberás devolvela noutro método.
Utilizando a instancia á clase, saca por consola o texto ou número introducido.
 */

class Variables {

	numero1:number;
	numero2:number;
	
	constructor(numero1:number, numero2:number){
		this.numero1 = numero1;
		this.numero2 = numero2;
		
	}
	

	sumaDeDosNumeros():number{
		return this.numero1+this.numero2;
	}

	mostrarVariableEntrada(variable:string):string{
		return variable;
	}

}


/**
 * Exercicio 3

	Aquí vamos seguir traballando co concepto de instancia.
Un exemplo moi clasico en clases, é crear unha clase ‘Coche’. Polo que:
Crea as seguintes variables de clase ou de estado:
marca, modelo, numPortas
Introduce na clase creada, os valores ‘marca’, ‘modelo’ e ‘numPortas’
Crea un método onde deberás sacar por consola ditos datos introducidos, ca seguinte mensaxe:
“O coche é un modelo … marca … e ten … portas”
Na seguinte imaxe, aparecen dúas novas funcións que están iniciadas coa palabra set e get. 
Lembras para que se usan?
Saberías utilizar e crear na clase que tes esas funcións de tal xeito que utilices eses conceptos?
*/

class Coche{

	marca:string;
	modelo:string;
	puertas:number;

	constructor(marca:string, modelo:string, puertas:number){
		this.marca = marca;
		this.modelo = modelo;
		this.puertas = puertas;
	}

	
	public get Marca() : string {
		return this.marca;
	}
	public get Modelo() : string {
		return this.modelo;
	}
	public get Puertas() : number {
		return this.puertas;
	}
	
	public set Marca(mar : string) {
		this.marca = mar;
	}
	public set Modelo(mod : string) {
		this.modelo = mod;
	}
	public set Puertas(puer : number) {
		this.puertas = puer;
	}	
}

/**
 * ----EJERCICIO CLASES 2------
 * Exercicio 1

Crea unha clase con diferentes métodos:
Un dos métodos deberá conter un obxeto tipo este: 

Lembra que para acceder, por exemplo a “presencial”, deberemos utilizar o “.”, a medida que avanzamos entre os diferentes obxetos debemos utilizalo.


Se quero utilizar o obxeto definido previamente en calquer método interno da clase,¿cómo debo definilo?.
Crea o método de tal xeito que este visualice por consola os seus valores utilizando un blucle tipo ‘for … in’

Crea un método que lea un array de obxetos,este array deberás introducilo dende fora, é dicir, este novo método terá unha variable de entrada.
Cómo farías para que esta variable a poda ler outro método?
Crea un método onde lea esta variable
Executa o método creado no paso anterior, onde visualices dito array

 */

class Curso {
    // Definición do obxecto
    factura = {
        producto: {
            numDias: 5,
            tipoClase: "presencial",
            asignatura: "programación"
        }
    };
	arrayDeObxectos: { nome: string; valor: number; }[] = [];

    // Método para visualizar os valores do obxecto utilizando un bucle 'for...in'
    visualizarFactura() {
        for (let key in this.factura.producto) {
            console.log(`${key}: ${this.factura.producto[key as keyof typeof this.factura.producto]}`);
        }
	}

    // Método para ler un array de obxectos dende fora (variable de entrada)
    lerArray(arrayDeObxectos: { nome: string; valor: number; }[]) {
        this.arrayDeObxectos = arrayDeObxectos;
    
	}
    // Método para visualizar o array de obxectos lido anteriormente
    visualizarArray() {
        if (this.arrayDeObxectos.length > 0) {
            for (let obxecto of this.arrayDeObxectos) {
                console.log(obxecto);
            }
        } else {
            console.log("Non se atopou ningún array de obxectos.");
        }
	}
    
}

export { Consola, Variables, Coche, Curso };