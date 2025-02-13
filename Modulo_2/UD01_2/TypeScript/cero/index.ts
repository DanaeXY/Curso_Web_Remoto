class Person {
    #name: string; //¡¡OJO!! ES NECESARIO IMPLANTAR LA ALMOHADILLA EN EL NOMBRE DE LA VARIABLE PARA QUE AL CONVERTIR AL JS LO IMPLANTE COMO MÉTODO PRIVADO
    constructor(name: string) {
    this.#name = name;
    }
    public introduce(): void {
    console.log(`Hello, my name is ${this.#name}.`);
    }
   }

   const person1 = new Person('Alice');
   person1.introduce();