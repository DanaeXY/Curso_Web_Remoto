/**
 * Como sabemos, podemos escoller as veces con qué tipo de función traballar. Utiliza ambas:
Coa palabra clave “function <nome de función>”, lembra utilizar para devolver o resultado a palabra clave ‘return’
Sendo Arrow-functions “ ( ) => { <instruccións> } “ , se ten máis dunha línea esta tamén debe levar a palabra clave “return”

Lembra que toda función, devolve un resultado que terá que ser almacenado noutra variable.

Nos seguintes exercicios, podes tratar de comenzar a integrar “import” e “export”*/

/*Exercicio 1
Suma dous variables, unha que valga 4 e outra que valga 16. Para iso, crea as funcións A e B para sumar estas dúas variables.*/
console.log("---------EJERCICIO 1-------");

function A (){
    return 4;
}

function B (){
    return 16;
}

function Sumar(a,b){
    a = A();
    b = B();

    return a + b;

}

console.log("La suma de las dos variables es", Sumar());

/*Exercicio 2
Resta dúas varibles, unha que valga 2 e outra que valga 15. Para iso, crea as funcións A e B para restar estas dúas variables.*/
console.log("---------EJERCICIO 2-------");

function AA (){
    return 2;
}

function BB (){
    return 15;
}

function Resta(a,b){
    a = AA();
    b = BB();

    return a - b;

}

console.log("La resta de las dos variables es", Resta());

/*Exercicio 3
Multiplica dous números. Para iso, crea as funcións A e B para multiplicar estas dúas variables.*/
console.log("---------EJERCICIO 3-------");

function AAA (){
    return 2;
}

function BBB (){
    return 15;
}

function Multiplicacion(a,b){
    a = AAA();
    b = BBB();

    return a * b;

}

console.log("El producto de las dos variables es", Multiplicacion());

/*Repite os exercicios anteriores, pasando como parámetros os valores numéricos COS EXERCICIOS DA ESTRUCTURA IF

Realiza de novo estes exercicios integrándoo nunha función.
Ves posible realizar diferentes funcións dentro destas??, se é así, trata de implementalas*/
console.log("---------EJERCICIO 4-------");

//EJERCICIOS DE LA HOJA 4
/**
 * Exercicio 1
Suma dous variables, unha que valga 4 e outra que valga 16. Para poder sumar, tes que integrar unha condición:
 Esta suma vai depender doutra variable numérica, esta debe ser maior de 40, polo que integra esta para que se faga posible.*/
 console.log("---------EJERCICIO 1.4--------");

function SumarDosVariables(a,b,c,resultado) {
    a=4;
    b=16;
    c=43;

    if (c > 40) {
        resultado = a+b;
        return "El resultado de la suma es "+ resultado;
    
    }
    else{
        return "Imposible sumar!";
    
    }

}

console.log(SumarDosVariables());

/*Exercicio 2
Resta dúas varibles, unha que valga 2 e outra que valga 15. Para poder restar, tes que integrar unha condición:
Esta resta vai depender doutra variable numérica, esta debe ser menor de 40, polo que integra esta para que se faga posible.*/
console.log("---------EJERCICIO 2.4--------");

function RestarDosVariables(a,b,c,resultado) {
    a=2;
    b=15;
    c=43;

    if (c > 40) {
        resultado = a+b;
        return "El resultado de la suma es "+ resultado;
    
    }
    else{
        return "Imposible restar!";
    
    }
}

console.log(RestarDosVariables());

/*Exercicio 3
Multiplica dous números. Para poder multiplicar, tes que integrar unha condición:
Esta multiplicación vai depender se a suma do exercicio 1 foi posible.
Pista: tal vez teñas que integrar unha nova variable dándolle un valor booleano.
 */
console.log("---------EJERCICIO 3.4--------");

function MultiplicaDosVariables(a,b,resultadoProducto,variableControl) {
    a=5;
    b=20;
    variableControl=true;

    if (SumarDosVariables() && variableControl) {
        resultadoProducto = a*b;
    
        return "La multiplicación fue posible, el resultado es "+ resultadoProducto;
    
    }
    else{
        return "Imposible multiplicar!";
    
    }
}

console.log(MultiplicaDosVariables());