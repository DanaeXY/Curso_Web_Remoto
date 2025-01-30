import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const teclado = readline.createInterface({input, output});

/* ## Exercicio 5
> Elabora un programa e algoritmo que verifique se un valor enteiro lido polo teclado é positivo. En caso afirmativo, escribilo por pantalla, no caso contrario, volver repetila lectura do número.*/

let numeroUsuario = await teclado.question("Introduce un número: ");

do {
    
    if(numeroUsuario > 0){
        console.log("El número introducido es positivo", numeroUsuario);
    }
    else{
        console.log("El número es negativo, vuelve a introducir un número: ");
    }

} while (!numeroUsuario > 0);

teclado.close();
process.exit(); 


    