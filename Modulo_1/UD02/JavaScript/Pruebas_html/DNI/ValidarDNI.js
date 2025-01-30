//PROGRAMA QUE COMPRUEBE LOS DATOS DE UN DNI

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
//al tener en .json "module" es mejor traer las funciones como import

import{
    comprobarNumero
 } from "../FUNCIONES/funciones_validarDNI.js"; 

const teclado = readline.createInterface({input, output});

 //SI NO EXISTIERA "module" EN .JSON PODRÍAMOS UTILIZAR ESTA MANERA
/* const {
    comprobarNumero
    
} = require("../FUNCIONES/funciones_validarDNI.js"); */


let numero = await teclado.question("Introduce los número del DNI: ");
let letra = await teclado.question("Introduce la letra: ");

//llamamos a la función que deseamos utilizar
comprobarNumero(numero, letra);

teclado.close();
