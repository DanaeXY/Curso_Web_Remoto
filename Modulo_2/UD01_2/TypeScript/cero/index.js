"use strict";
class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }
    introduce() {
        console.log(`Hello, my name is ${this.#name}.`);
    }
}
const person1 = new Person('Alice');
person1.introduce();
