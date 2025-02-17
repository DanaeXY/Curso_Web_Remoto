package Interfaces_Clases_Abstractas.Ejercicio3_Vehiculos;

/**
 * Terrestre
 */
public class Terrestre implements Motor {

    int cantidadRuedas;
    String usoVehiculo;//militar o civil
    

    @Override
    public int calculaRevolucionesMotor(int fuerza, int radio){
        int calculo;
        calculo = fuerza*radio;
        System.out.println("El vehículo tiene "+calculo+" revoluciones");
        return calculo;
    }
}