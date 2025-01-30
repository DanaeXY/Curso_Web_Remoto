import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const teclado = readline.createInterface({input, output});

/**## Exercicio 2

> Elabora un programa e algoritmo que calcule e escriba o valor absoluto dun número enteiro dado.  */

let numeroIntroducido = await teclado.question("Introduce un número entero: ");
teclado.close();

/* for (let index = 0; index < numeroIntroducido; index++) {
    console.log("Las posiciones de 0 hasta el número introducido son: ", index);
    
} */
//------------------------------------------
if (numeroIntroducido < 0) {
    let numeroPositivo = numeroIntroducido*(-1);
    console.log("El número absoluto sería ", numeroPositivo);
}
else{
    console.log("El número abosluto sería ", numeroIntroducido);
}

process.exit();