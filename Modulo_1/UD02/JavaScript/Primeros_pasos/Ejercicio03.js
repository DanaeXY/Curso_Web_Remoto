import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const teclado = readline.createInterface({input, output});

/* ## Exercicio 3

> Elabora un programa e algoritmo que solucione o seguinte:
> en función do valor que sexa lido por teclado, escribir os seguintes menxaxes: 
>  - N < 1 : " Menor que un"
>  - N = 1 : " Un "
>  - N = 2 : " Dous "
>  - N = 3 : " Tres "
>  - N >= 4 : " Maior ou igual a catro "*/

let N = await teclado.question("Introduce un número: ");
teclado.close();

if (N < 1){
    console.log("Menor que un");
}
else if (N == 1) {
    console.log("Un");
}
else if (N == 2) {
    console.log("Dous");
}
else if (N == 3) {
    console.log("Tres");
}
else if (N >= 4) {
    console.log("Cuatro");
}
else{
    console.log("El valor introducido debe ser un número");
}

process.exit(); 