class JugadorModelo {
  constructor(sprite, x, y, ancho, alto, velocidad, vidas){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.velocidad = velocidad;
    this.vidas = vidas;
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  }

  mover(x, y, tecla){
    this.x+=x;
    this.y+=y;
    switch(tecla){
      case 'izq':
        this.sprite='imagenes/auto_rojo_izquierda.png',
        this.ancho=30;
        this.alto=15;
        break;
      case 'der':
        this.sprite='imagenes/auto_rojo_derecha.png',
        this.ancho=30;
        this.alto=15;
        break;
      case 'arriba':
        this.sprite='imagenes/auto_rojo_arriba.png',
        this.ancho=15;
        this.alto=30;
        break;
      case 'abajo':
          this.sprite='imagenes/auto_rojo_abajo.png',
          this.ancho=15;
          this.alto=30;
        break;
                  }
  }

  perderVidas(cantVidas){
    this.vidas -= cantVidas;
  }
}

const Jugador = new JugadorModelo('imagenes/auto_rojo_abajo.png', 130, 120, 15, 30, 10, 5);
