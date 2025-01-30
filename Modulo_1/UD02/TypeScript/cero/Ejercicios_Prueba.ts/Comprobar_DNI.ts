// PROGRAMA QUE COMPRUEBE LOS DATOS DE UN DNI

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {//EL MÉTODO AWAIT DEBE ESTAR EN UNA FUNCIÓN ASÍNCRONA
    const teclado = readline.createInterface({ input, output });

    const dni: string = await teclado.question("Introduce el DNI (8 números seguidos de una letra): ");
    teclado.close();

    comprobarDNI(dni);
}

function comprobarDNI(dni: string): void {
    const regex = /^[0-9]{8}[A-Za-z]$/;//comenzará por números, tendrá 8, continúa letra mayúsculas y minúsculas válidas

    if (regex.test(dni)) {
        const numero: number = parseInt(dni.slice(0, 8), 10);
        const letra: string = dni.slice(8).toUpperCase();
        const resto: number = numero % 23;
        const arrayLetras: string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        const letraCorrecta: string = arrayLetras[resto];

        if (letra === letraCorrecta) {
            console.log(`El DNI introducido ${dni} ES CORRECTO`);
        } else {
            console.log(`El DNI introducido ${dni} ES INCORRECTO`);
        }
    } else {
        console.log("El formato del DNI introducido no es válido.");
    }
}

// Llamar a la función principal
main().then(() => process.exit()).catch(err => console.error(err));