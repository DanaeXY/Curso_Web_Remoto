package Interfaces_Clases_Abstractas.Ejercicio3_Vehiculos;

/**
 * AppVehiculos
 */
public class AppVehiculos {

    public static void main(String[] args) {
        Terrestre camion1 = new Terrestre();
        Terrestre camion2 = new Terrestre();

        Acuatico barca1 = new Acuatico();
        Acuatico barca2 = new Acuatico();

        camion1.calculaRevolucionesMotor(55, 15);
        camion1.calculaRevolucionesMotor(55, 36);
System.out.println("----------------------");
        camion2.calculaRevolucionesMotor(22, 14);
        camion2.calculaRevolucionesMotor(12, 85);
System.out.println("----------------------");
        barca1.calculaRevolucionesMotor(12, 105);
        barca1.recomendarVelocidad(10);
System.out.println("----------------------");
        barca2.calculaRevolucionesMotor(85, 55);
        barca2.recomendarVelocidad(55);

    }
}