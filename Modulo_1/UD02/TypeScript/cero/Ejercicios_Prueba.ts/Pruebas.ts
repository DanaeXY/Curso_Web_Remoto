//ts-node

let arrayMisce : [number, string, boolean]; //tupla

arrayMisce = [12, "Armario", false];

arrayMisce.push("Julia");

console.log("La tupla tiene los siguientes datos: ", arrayMisce);

interface Coche {
    modelo: string,
    marca : string,
    diesel: boolean,
}

let CaracteristicaCoche : Coche = {
    modelo: "C3" ,
    marca: "Citröen",
    diesel: true
}

if (CaracteristicaCoche.diesel == true) {
    console.log("El coche " + CaracteristicaCoche.marca + " es del modelo " + CaracteristicaCoche.modelo + " y ¿es diesel? Sí");
}
else{
    console.log("El coche " + CaracteristicaCoche.marca + " es del modelo " + CaracteristicaCoche.modelo + " y ¿es diesel? No, es gasolina");
}

