/**
 * Operadores lóxicos

Exercicio 1
Utiliza o operador > para comparar dous números, declarando previamente dúas variables numéricas.

Fai a proba:
Se é menor.
Se é igual.
E se é maior.*/
console.log("------------EJERCICIO 1------");


let numero1 = 12;
let numero2 = 23;



if (numero1 < numero2) {
    console.log("El número menor es el numero1");
}
else{
    console.log("El número menor es el numero2");
}

if (numero1 == numero2) {
    console.log("El numero1 es igual al numero2");
}
else{
    console.log("El numero1 no es igual al numero2");
}

if (numero1 > numero2) {
    console.log("El número mayor es el numero1");
}
else{
    console.log("El número mayor es el numero2");
}

/*Exercicio 2
Utiliza o operador < para comparar tres números, é dicir, inicialmente podemos comparar dous números e posteriormente o resultado desta.

Compróbao para diferentes casos.
Exemplo:
Tendo num1, num2 e num3, poderíamos comparar:

Primeiro num1 e num2, e almaceno o resultado nunha variable result1
Segundo comparo result1 e num3, almacenándoo en result2
Finalizando ca comparación destes resultados previos, result1 con result2 
Nota:
A comparación dos números darán un resultado lóxico, polo que deberemos facer a comparación final mediante === ou == ou != ou !== , xa que os resultados previos foron ou TRUE ou FALSE*/
console.log("------------EJERCICIO 2------");


let num1=10;
let num2=66;
let num3=5;
let resultado1 = num1 < num2;
let resultado2 = resultado1 < num3;

if (resultado1) {
    console.log("num1 es menor que num2");
}
else{
    console.log("num1 no es menor que num2");
}

if (resultado2) {
    console.log("num3 es menor que num1 y num2");
}
else{
    console.log("num3 no es menor que num1 y num2");
}

//ESCUPE TRUE PORQUE RESULTADO1 ES TRUE Y RESULTADO2 ES TRUE, POR TANTO ESCUPE TRUE TAMBIÉN, AL SER RESULTADOS LÓGICOS COMPARA SU RESPUESTA LÓGICA
if(resultado1 == resultado2){
    console.log("Los 3 números son iguales");
}
else{
    console.log("Los 3 números no son iguales");
}

/*Exercicio 3
Utiliza o operador ! para cambiar o resultado seguinte: 
*** let resultado = true && true *** 
É dicir, aplícao sobre resultado*/
console.log("------------EJERCICIO 3------");


let resultado = true && true;
let resultadoNegado = !resultado;

console.log("Resultado contiene", resultado);
console.log("Resultado negado contiene", resultadoNegado);


/*Exercicio 4
Utiliza o operador ! para cambiar o resultado seguinte: 
*** let resultado = true && false *** 

É dicir, aplícao sobre resultado*/

console.log("------------EJERCICIO 4------");

let resultado_2 = true && false;
let resultadoNegado_2 = !resultado_2

console.log("Resultado contiene", resultado_2);
console.log("Resultado negado contiene", resultadoNegado_2);

/*Exercicio 5
Utiliza o operador axeitado para indicar que un operando é maior e igual a outro, e sácao por consola.

Fai a proba para que sexa igual
Fai a proba para maior
Fai a proba para menor*/
console.log("------------EJERCICIO 5------");

let numero_1 = 2;
let numero_2 = 12;

if (numero_1 === numero_2) {
    console.log("Los números son iguales");
}
else{
    console.log("Los números no son iguales");
}

if (numero_1 > numero_2) {
    console.log("El número 1 es mayor que el numero 2");
}
else{
    console.log("El número 2 es mayor que el numero 1");
}

if (numero_1 < numero_2) {
    console.log("El número 1 es menor que el numero 2");
}
else{
    console.log("El número 2 es menor que el numero 1");
}

console.log("");

/*Exercicio 6
Utiliza o operador axeitado para indicar que un operando é menor e igual a outro, e sácao por consola*/
console.log("------------EJERCICIO 6------");

let operador1 = 24;
let operador2 = 34;

if (operador1 <= operador2) {
    console.log("El número 1 es menor que el número 2");
}
else{
    console.log("El número 2 es menor que el número 1");
}

/*Exercicio 7
Se tivéramos dous valores os cales queremos saber se ambos son iguais, pero un deles é tipo string, qué operador lóxicos relacionáis utilizarías? SE EMPLEARÍAN LOS 3 IGUALE YA QUE COMPARAN EL VALOR Y EL TIPO DE DATO

Fai unha demostración sacándo o resultado por consola.*/
console.log("------------EJERCICIO 7------");

let valor1 = "a";
let valor2 = 12;
let valor3 = "a";//para hacer la comprobación de tipo

if (valor1 === valor2) {
    console.log("Los valores son iguales");
}
else{
    console.log("Los valores NO son iguales");
}
//PARA COMPROBAR LO QUE HACEN LOS 3 IGUALES:

if (valor1 === valor3) {
    console.log("Los valores son iguales");
}
else{
    console.log("Los valores NO son iguales");
}

/*Exercicio 8
Temos varios resultados que nos veñen de diferentes funcións, pero nos indican que temos que forzar o resultado TOTAL de comparar TODOS a true. Qué farías?

Datos:
Resultado da funcion1 = true
Resultado da funcion2 = false
Resultado da funcion3 = false */
console.log("------------EJERCICIO 8------");

let resultado_1 = true;
let resultado__2 = false;
let resultado_3 = false;

let resultadoTotal = resultado_1 || resultado__2 || resultado_3;
;

if (resultadoTotal) {
    console.log("Todos los resultados han sido forzados a TRUE.");
}