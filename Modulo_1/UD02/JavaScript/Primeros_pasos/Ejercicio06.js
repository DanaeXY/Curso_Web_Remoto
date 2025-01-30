import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const teclado = readline.createInterface({input, output});

/*## Exercicio 6
> Elabora un programa e algoritmo que desenrole e escriba a táboa de multiplicar dun número enteiro positivo lido por polo teclado. */

let numeroSolicitado = await teclado.question("Introduce un número: ");
teclado.close();

console.log("TABLA DE MULTIPLICAR DEL ", parseInt(numeroSolicitado));

for (let index = 0; index <= 10; index++) {
    
    console.log(parseInt(numeroSolicitado), " x " , index, " = ", index*numeroSolicitado);
    
}
process.exit();
