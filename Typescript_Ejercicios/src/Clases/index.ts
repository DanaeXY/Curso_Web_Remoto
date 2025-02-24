/**
 * EJERCICIOS SOBRE CLASES EN TYPESCRIPT:
 * Requírese un programa que modele o concepto de coche.

- Marca: o nome do fabricante.
- Modelo: ano de fabricación.
- Motor: volume en litros da cilindrada do motor dun coche.
- Tipo de combustible: valor indicado cos posibles valores de gasolina, bioetanol, gasóleo, biodiesel, gas natural. (use un tipo de variable ENUM)
- Número de portas: número de portas
- Velocidade actual: velocidade do vehículo nun momento determinado
- Velocidade máxima: velocidade máxima sostida polo vehículo en km/h

## A clase debe incluír os seguintes métodos
 Un construtor para a clase Car onde os valores dos seus atributos se pasan como parámetros
 Métodos para acelerar a unha determinada velocidade, desacelerar e frear (axustar a velocidade actual a cero).
 Método para mostrar os valores dos atributos dun coche na pantalla.


Establece a súa velocidade actual en 100 km/h, aumenta a súa velocidade en 20 km/h, diminúe a túa velocidade en 50 km/h e despois frea. Con cada cambio de velocidade, a velocidade actual debería mostrarse na pantalla.

- Con cada cambio de velocidad, se debe mostrar en pantalla la velocidad actual.
- Con cada cambio de marcha, a velocidade actual debería mostrarse na pantalla.
 */
/* 
import { Car,TipoCombustible } from "./Car.js";

let coche = new Car("Citroën", "C3", 75, TipoCombustible.gasoleo, 5, 100, 180);
console.log(coche.acelerar(20));
console.log(`Velocidade actual é: ${coche.velocidadeActual} km/h`);

console.log(coche.desacelerar(50));
console.log(`Velocidade actual é: ${coche.velocidadeActual} km/h`);

console.log(coche.frear());
console.log(`Velocidade actual é: ${coche.velocidadeActual} km/h`); */

import { UnXenerico } from "./Genericos.js";

let generico1 = new UnXenerico<number>(5);
let generico2 = new UnXenerico<string>("paralelepipedo");
let generico3 = new UnXenerico<HTMLAnchorElement>(document.createElement(("a")));