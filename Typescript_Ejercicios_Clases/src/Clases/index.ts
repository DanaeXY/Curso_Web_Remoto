/* import {Empleado, ConcatenarTexto, Calculadora } from "./Clases_exercicio0.js"
import { Consola, Variables, Coche, Curso } from "./Clases_exercicio1.js" */
/*
--------EJERCICIOS CLASE 0-----------
Exercicio 1

Crea unha clase que conteña as seguintes propiedades:
nome
apelido1
apelido2
email
data de nacemento

Crea un método o cal utilizarás para sacar os datos introducidos na instancia pola consola.*/

/* let empleado1 = new Empleado("Obdulia", "Abad", "Sánchez", "obduabad@gmail.com", 1980);

console.log(empleado1.mostrarDatos()); */

/*Exercicio 2

Vas crear unha clase de concatenar texto, para iso, crea dúas propiedades:

Texto_1
Texto_2
Inicialízalas dende o constructor mediante a instancia.

Crea un método onde crearás a concatenación e sacarás o texto por consola.
Instancia a clase e utiliza o método creado.*/

/* let texto1 = "Alors ";
let texto2 = "On Dance!";

let textoCompleto = new ConcatenarTexto(texto1, texto2);

console.log(textoCompleto.mostrarConcatenacion()); */

/*Exercicio 3

Crea unha clase calculadora, onde deberás crear dúas variables privadas:
Crea diferentes métodos:
Suma
Resta
Multiplicación
División
Nun método ( que deberás crear ) o cal deberás introducir unha estructura ‘switch’ para seleccionar qué tipo de operación realizarás.

*/
/* let calculo = new Calculadora(12,6);

console.log(`El resultado de la suma es: ${calculo.sumar()}`);
console.log(`El resultado de la resta es: ${calculo.restar()}`);
console.log(`El producto de la multiplicacion es ${calculo.multiplicar()}`);
console.log(`El resultado de la división es ${calculo.dividir()}`); */

/**
 * EJERCICIOS CLASE 1
 * 
 * /*Exercicio 1

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

/* let mostrarConsola = new Consola("Buenas tardes", 12);
console.log("El texto introducido es: ", mostrarConsola.mostrarTextoPorConsola(), " y el número es: ", mostrarConsola.mostrarNumeroPorConsola()); */

/**
 * Exercicio 2

Crea unha nova clase, crea varios métodos:

Un deles terá que devolver a suma de dous números.
Outro, deberás utilizar unha variable de entrada (non no constructor) a ese método e visualizala por consola nese método.
Outro, utilizando o constructor, introduce unha variable de entrada a cal, deberás devolvela noutro método.
Utilizando a instancia á clase, saca por consola o texto ou número introducido.
 */

/* let mostrandoDatos = new Variables(3, 121);

console.log("La suma de los dos números es: ", mostrandoDatos.sumaDeDosNumeros());
console.log("La variable introducida por el método es: ", mostrandoDatos.mostrarVariableEntrada("Coquetas")); */

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

/* let coche1 = new Coche("Seat", "Supermirafiori", 5);

console.log(`El coche marca ${coche1.Marca} y modelo ${coche1.Modelo} tiene ${coche1.Puertas} puertas`); */
 
/**
 * /**
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

/* let miCurso = new Curso();
console.log(miCurso.factura.producto.tipoClase);

const meuCurso = new Curso();
meuCurso.visualizarFactura();

const arrayDeObxectos = [
    { nome: "Obxecto1", valor: 10 },
    { nome: "Obxecto2", valor: 20 },
];


meuCurso.lerArray(arrayDeObxectos);
meuCurso.visualizarArray; */
import { UnXenerico } from "./Genericos.js";
let generico1 = new UnXenerico(5);
let generico2 = new UnXenerico("paralelepipedo");
let generico3 = new UnXenerico(document.createElement("a"));