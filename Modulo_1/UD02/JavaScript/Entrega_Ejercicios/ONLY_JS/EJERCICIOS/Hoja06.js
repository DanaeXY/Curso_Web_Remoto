/**
 * Exercicio 1
Se temos que almacenar un lista de datos de temperatura dun sensor de temperatura, qué tipo de variable utilizarías se os datos son os seguintes: 40 º, 23º, 13º?. 

Impleméntao nun programa, sacando a variable elexida cos valores por consola.*/
console.log("------EJERCICIO 1------");

let arrayTemperatura = [40,23,13];

arrayTemperatura.forEach(dato => {

    console.log("Las temperatura captada es",dato);

});

/*Exercicio 2
Tendo o exercicio 1 resolto, píden que determines a media alcanzada deses valores.
Impleméntao, e sáca o resultado por consola.*/
console.log("------EJERCICIO 2------");

function MediaTemperaturas(arrayTemp) {
    let suma = 0;

    for (let i = 0; i < arrayTemp.length; i++) {
        suma+=arrayTemp[i];
    }
    return suma / arrayTemp.length;
}

console.log("El resultado de la media es ", MediaTemperaturas(arrayTemperatura));

/*Exercicio 3
Observando cómo resolviches o anterior, implementa unha función que devolva a media. HECHO EN EL ANTERIOR
O resultado devolto debes introducilo nunha variable */
console.log("------EJERCICIO 3------");

let variableMedia = MediaTemperaturas(arrayTemperatura);

console.log("La media de las temperaturas es ", variableMedia);

/*Exercicio 4
Se tes feito o exercicio 3, terás feita unha función. Agora , dinche que tes uns datos que veñen dun tensiómetro dun paciente dun hospital, poderías utilizala función anterior para sacala media? SÍ, CAMBIANDO LOS VALORES DEL ARRAY SIMPLEMENTE

Utiliza a función para os datos de tensión seguintes: 14,12,13*/
console.log("------EJERCICIO 4------");

let arrayTension=[14,12,13];

function MediaTension(arrayTension) {
    let suma = 0;

    for (let i = 0; i < arrayTension.length; i++) {
        suma+=arrayTension[i];
    }
    return suma / arrayTension.length;
}

console.log("El resultado de la media es ", MediaTemperaturas(arrayTension));


/*Exercicio 5
Dende unha fábrica de coches, coméntanche que tes nunha línea de espellos, a cal ten diferentes tempos na línea. A línea consta de varias partes:
frontal, que ten un tempo de 5”
retrovisor, cun tempo de 4”
lateral dereito, cun tempo de 3”
Pídenche crear un dato que englobe estes datos:
 cómo podes implementalo?,
tés diferentes opcións?*/
console.log("------EJERCICIO 5------");

let arrayTiempoProduccion = {
    frontal:5,
    retrovisor:4,
    lateralDerecho:3
};

console.log(arrayTiempoProduccion);

//OTRA MANERA:

let arrayProduccion = [
    {parte: "frontal", tiempo : 5},
    {parte: "retrovisor", tiempo : 4},
    {parte: "lateralDerecho", tiempo : 3}
];

console.log(arrayProduccion);

/*Exercicio 6
Do exercicio anterior, saca os elementos asociados dos datos por consola. */
console.log("------EJERCICIO 6------");

//HECHOS EN EL EJERCICIO ANTERIOR

/*Exercicio 7
Crea un array de obxetos e sácaos por consola.
Os datos poden ser dun estudante, onde ten a súa nota, unha asignatura,o curso e un profesor */
console.log("------EJERCICIO 7------");

let arrayAlumno = [
    {nombre: "Obdulia", nota : 6, asignatura : "Programación", curso : 1, profesor : "Nacho"},
    {nombre: "Sofía", nota : 8, asignatura : "Diseño de interfaces", curso : 2, profesor : "Raúl"},
    {nombre: "Alessandra", nota : 5, asignatura : "Entorno Cliente", curso : 2, profesor : "César"}
];

//arrayAlumno.push({nombre: "Juanito", nota:3, asignatura: "Sistemas", curso: 1, profesor:"Gerardo" });

console.log(arrayAlumno);