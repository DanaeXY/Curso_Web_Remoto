import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const teclado = readline.createInterface({input, output});

/*## Exercicio 1

> Elabora un programa e algoritmo, no que se lea de teclado dous números enteiros 'a' e 'b' e evalúe cal dos dous é maior. */
let a = await teclado.question("Introduce un primer número: ");
let b = await teclado.question("Introduce un segundo número: ");
teclado.close();

if (a > b) {
    console.log("El primer número es mayor que el segundo introducido");
}
if (a < b) {
    console.log("El segundo número es mayor que el primero introducido");
}

process.exit();