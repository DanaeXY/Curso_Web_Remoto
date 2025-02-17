package Interfaces_Clases_Abstractas.Ejercicio3_Vehiculos;

/**
 * Acuatico
 */
public class Acuatico implements Motor, Vela{

    int superficie;
    boolean submarino;
    int capacidadViajeros;

    @Override
    public int recomendarVelocidad(int velocidadVento) {
        if (velocidadVento>60 && velocidadVento<10) {
            System.out.println("No se recomienda salir");
            velocidadVento=0;
        }
        return velocidadVento;
    }

    @Override
    public int calculaRevolucionesMotor(int fuerza, int radio) {
        int calculo;
        calculo = fuerza*radio;
        System.out.println("El vehículo tiene "+calculo+" revoluciones");
        return calculo;
    }    

}