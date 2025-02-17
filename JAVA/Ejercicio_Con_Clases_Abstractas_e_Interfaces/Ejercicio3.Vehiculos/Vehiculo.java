/* Define unha clase Vehículo, con atributos velocidadeActual, e velocidadeMáxima. Terá 2 métodos abstractos:
• acelerar(): permitirá incrementar a velocidade actual sumando a velocidade pasada como parámetro. A
velocidade actualizada non poderá superar a velocidade máxima.
• O método frear( ) permite baixar a velocidade restando a cantidade pasada como parámetro. A velocidade
actualizada non pode ser negativa.
O método imprimir mostra en pantalla a velocidade actual e a velocidade máxima do vehículo.
Teremos 2 tipos de vehículos: terrestres e acuáticos. Os terrestres teñen tamén cantidade de rodas, e uso do
vehículo (militar ou civil). Os acuáticos terán como atributos o tipo (superficie ou submarinos) e capacidade de
viaxeiros.
Existen tamén 2 interfaces: Motor e Vela. A clase Vehículo terrestre implementa a interface Motor. A clase
VehiculoAcuatico implementa as dúas interfaces. Estas son do seguinte modo:
• A interface Motor ten o método calculaRevolucionsMotor(int forza, int radio): o número de revolucións
vén calculado pola multiplicacións de ambos.
• A interface Vela ten o método recomendarVelocidade(int velocidadeVento), se a velocidade do vento é
superior a 60 km/h non se recomenda saír, polo que a velocidade actual actualizase a 0. Se é menor
que 10 km/h tampouco se recomenda saír, polo que fará o mesmo.
Define unha clase appVehiculos que cree 2 camións e dúas barcas (as dúas con vela e motor), que chaman
aos métodos de cada clase e mostren os resultados por pantalla. Debes comprobar que funcionan
correctamente todos os métodos.*/
package Interfaces_Clases_Abstractas.Ejercicio3_Vehiculos;

/**
 * Vehiculo
 */
abstract class Vehiculo {

    int velocidadActual;
    int velocidadMaxima;

    abstract int acelerar();
    abstract int frenar();
    void imprimir(){
        System.out.println("El vehículo tiene una velocidad actual de "+velocidadActual+" y tiene una velocidad máxima de "+velocidadMaxima);
    }
    
}