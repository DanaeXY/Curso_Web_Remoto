class Calculadora{
    suma(valor1, valor2){
        return valor1 + valor2;
    }
}

let objeto = new Calculadora(6,4);
console.log(objeto.suma);