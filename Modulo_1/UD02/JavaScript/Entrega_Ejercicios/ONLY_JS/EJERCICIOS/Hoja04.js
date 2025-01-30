/**
 * Estructura if
Exemplo:
Imaxinemos que temos nunha fábrica un proceso ou línea sacando unha peza dun vehículo.
 * Temos un tempo máximo de 60"
 * Fai un programa que me indique si :
 * O tempo transcurrido é superior, saque por consola unha mensaxe de emerxencia, o contrario, saque unha mensaxe de todo va ok */

let tiempoManufactura=45;

if (tiempoManufactura < 60) {
    console.log("¡Todo va OK!");
}
else{
    console.log("El tiempo de manufactura de la pieza es superior a 60' ¡ALARMA!");
}

/**
 * Exercicio 1
Suma dous variables, unha que valga 4 e outra que valga 16. Para poder sumar, tes que integrar unha condición:
 Esta suma vai depender doutra variable numérica, esta debe ser maior de 40, polo que integra esta para que se faga posible.*/
 console.log("---------EJERCICIO 1--------");

let numero1= 4;
let numero2= 16;
let numero3=43;
let resultado;

if (numero3 > 40) {
    resultado = numero1+numero2;
    console.log("El resultado de la suma es", resultado);

}
else{
    console.log("Imposible sumar!");

}

/*Exercicio 2
Resta dúas varibles, unha que valga 2 e outra que valga 15. Para poder restar, tes que integrar unha condición:
Esta resta vai depender doutra variable numérica, esta debe ser menor de 40, polo que integra esta para que se faga posible.*/
console.log("---------EJERCICIO 2--------");

let num1= 2;
let num2= 15;
let num3=43;
let resta;

if (num3 > 40) {
    resta = num1+num2;
    console.log("El resultado de la suma es", resta);

}
else{
    console.log("Imposible restar!");

}

/*Exercicio 3
Multiplica dous números. Para poder multiplicar, tes que integrar unha condición:
Esta multiplicación vai depender se a suma do exercicio 1 foi posible.
Pista: tal vez teñas que integrar unha nova variable dándolle un valor booleano.
 */
console.log("---------EJERCICIO 3--------");
let numero_1= 5;
let numero_2= 20;
let variableBool = true;
let resultado_multi;

if (resultado && variableBool) {
    resultado_multi = numero_1*numero_2;

    console.log("La multiplicación fue posible, el resultado es", resultado_multi);

}
else{
    console.log("Imposible multiplicar!");

}
