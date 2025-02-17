package Interfaces_Clases_Abstractas.Ejercicio1_Animales;

/*esta es la clase Main donde se instancian las clases y se crean los objetos con new*/

class AppMamifero {
 public static void main(String[] args) {
    Ballena Willy = new Ballena();
    Ballena Pepi = new Ballena();

    Ornitorrinco Perry = new Ornitorrinco();
    Ornitorrinco Terry = new Ornitorrinco();

    Willy.amamantarCrlas();
    Pepi.amamantarCrlas();
System.out.println("-----------------------");
    Perry.amamantarCrlas();
    Perry.porOvos();
System.out.println("-----------------------");
    Terry.amamantarCrlas();
    Terry.porOvos();

    Murcielago m1 = new Murcielago();
    Murcielago m2 = new Murcielago();

    BurroVolador B1 = new BurroVolador();
    BurroVolador B2 = new BurroVolador();

System.out.println("-----------------------");
    m1.vuela();
    m2.vuela();

System.out.println("-----------------------");
    B1.vuela();
    B1.porOvos();
System.out.println("-----------------------");
    B2.vuela();
    B2.porOvos();

 }
    
}