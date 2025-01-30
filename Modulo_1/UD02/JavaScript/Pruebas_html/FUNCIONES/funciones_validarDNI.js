function comprobarNumero (numero, letra){
    
    if (numero <= 99999999) {
        let resto = numero % 23;
        let arrayletras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        let encontrado = arrayletras[resto];//el resto corresponde a la posición de la letra en el array

        if (encontrado === letra.toUpperCase()) {

            return console.log("El DNI introducido " + numero + "-" + letra.toUpperCase() + " ES CORRECTO");
        }
        else{
            return console.log("El DNI introducido " + numero + "-" + letra.toUpperCase() + " ES INCORRECTO");
        }
    }
    else{
        return console.log("El Dni introducido no es válido");
    }
}



export{
    comprobarNumero
}

 //SI NO EXISTIERA "module" EN .JSON PODRÍAMOS UTILIZAR ESTA MANERA
/* module.exports = {
    comprobarNumero
} */