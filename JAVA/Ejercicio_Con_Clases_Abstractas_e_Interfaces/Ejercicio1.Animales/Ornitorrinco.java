package Interfaces_Clases_Abstractas.Ejercicio1_Animales;

class Ornitorrinco extends Mamifero implements Oviparo{

    @Override
    void amamantarCrlas() {
        System.out.println("El ornitorrinco amamanta a sus crías");
    }

    @Override
    public void porOvos() {
        System.out.println("El ornitorrinco pone huevos");
    }
    
}