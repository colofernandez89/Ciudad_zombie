/* Enemigo sera un objeto que tiene las funcionalidades basicas de todo Enemigo
en el juego. Pero no va a existir realmente en nuestro juego. Solo existiran
instancias que tengan de protitipo a este objeto. Por ejemplo, zombies. Si se te
ocurren nuevos enemigos para agregar y queres ser un Hacker, podes hacerlo!

Los parametros que recibe para su construccion son los siguientes:
sprite: contiene la ruta a la imagen que lo representa.
x: posicion x actual del enemigo en el mapa
y: posicion y actual del enemigo en el mapa
ancho: el ancho del enemigo
alto: el alto del enemigo
velocidad: es la velocidad de movimiento, pixeles que podra moverse en cada mov
rangoMov: los limites en el mapa donde se puede mover, sera un diccionario con la
siguiente forma: {desdeX: valor, hastaX: valor, desdeY: valor, hastaY: valor} */

class Enemigo {
  constructor (sprite, x, y, ancho, alto, velocidad, rangoMov) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.velocidad = velocidad;
    this.rangoMov = rangoMov;
  }

  atacar(Jugador){
    Jugador.perderVidas(1);
  }

  comenzarAtaque(Jugador){
    if (!this.atacando) {
      this.atacar(Jugador);
    }
    this.atacando = true;
  }

  dejarDeAtacar(){
    this.atacando = false;
  }
}

