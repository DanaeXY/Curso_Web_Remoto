/**PETICIÓN DE DATOS POR TECLADO EN NODE */

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const teclado = readline.createInterface({input, output});

let numero1 = await teclado.question("Introduce un número: "); 
let numero2 = await teclado.question("Introduce otro número: ");
    
console.log("El valor de la suma es ", parseInt(numero1) + parseInt(numero2)); 
    
teclado.close();
process.exit();