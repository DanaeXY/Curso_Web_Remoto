/**
 * Operadores incremento_decremento

Exercicio 1
Utilizando o operador ++, incrementa o valor da varible:

Colocándoo posterior á variable, é dicir: variable++,
Colocándoo anterior á variable, é dicir: ++variable
Cáles son as variacións de utilizar unha opción respecto a outra?*/
console.log("--------EJERCICIO 1--------");
let i = 0;

while (i < 3) {
    console.log(i);
    i++;//recorre tantas veces como le diga la condición
}

console.log("Probando ++i",(++i));//le sumará 1 al número de la condición


/*Exercicio 2
Utilizando o operador --:

Colocándoo posterior á variable, é dicir: variable--
Colocándoo anterior á variable, é dicir: --variable
Cáles son as variacións de utilizar unha opción respecto a outra?

 */

console.log("--------EJERCICIO 2--------");

let ii = 10;

while (ii > 0) {
    console.log(ii);
    ii--;//recorre tantas veces como le diga la variable en decreciente
}

console.log("Probando --i",(--ii));//resta 1 al valor de la condición