/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuánto danio hace al chocar
al jugador, además de los parametros comunes x, y, ancho y alto*/
class Obstaculo {
  constructor (sprite, x, y, ancho, alto, potencia) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.potencia = potencia;
  }
  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas

  chocar(potencia){
    Jugador.perderVidas(potencia);
  }
}
