import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const teclado = readline.createInterface({input, output});
/*## Exercicio 4
> Elabora un programa para calculalo prezo dunha partida de artículos aplicando un desconto crecente según as seguintes regras:


Unidades | Precio Unitario |
:-----------: | :-----------: |
|1 | 1€ | 
|2 | 0.80 € 
|3 | 0.75 €
| >= 4 | 0.70 €
> ... introduciremos por teclado un número de artigos e en base o número total calculará o precio total */

let precioUnitario = 1;
let unidadesSolicitadas = await teclado.question("Introduce las unidades que deseas: ");
let precioTotal;

teclado.close();

/* if (unidadesSolicitadas == 1) {
    
    console.log("El precio por 1 unidad es ", precioUnitario);
}
else if (unidadesSolicitadas == 2) {
    precioTotal = unidadesSolicitadas * (precioUnitario*0.80);
    console.log("El precio por 2 unidades es ", precioTotal);
}
else if (unidadesSolicitadas == 3) {
    precioTotal = unidadesSolicitadas * (precioUnitario*0.75);
    console.log("El precio por 3 unidades es ", precioTotal);
}
else if (unidadesSolicitadas >= 4) {
    precioTotal = unidadesSolicitadas * (precioUnitario*0.70);
    console.log("El precio por 4 o más unidades es ", precioTotal);
}

process.exit();  */

//ALTERNATIVA SWITCH

 switch (unidadesSolicitadas>0) {//SI UTILIZASEMOS TRUE EL CONDICIONAL DE LOS CASOS FUNCIONA
    case (unidadesSolicitadas == 1):
        console.log("El precio por 1 unidad es ", precioUnitario);
        break;

    case (unidadesSolicitadas == 2):
        precioTotal = unidadesSolicitadas * (precioUnitario*0.80);
        console.log("El precio por 2 unidades es ", precioTotal,", precio/unidad 0.80€");
        break;
    case (unidadesSolicitadas == 3):
        precioTotal = unidadesSolicitadas * (precioUnitario*0.75);
        console.log("El precio por 3 unidades es ", precioTotal," precio/unidad 0.75€");
        break;
    case (unidadesSolicitadas >= 4):
        precioTotal = unidadesSolicitadas * (precioUnitario*0.70);
        console.log("El precio por 4 o más unidades es ", precioTotal," precio/unidad 0.70€");
        break;

    default:

        break;
}
process.exit();