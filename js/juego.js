/* El objeto Juego sera el encargado del control de todo el resto de los Objetos
existentes.
Le dara ordenes al Dibujante para que dibuje entidades en la pantalla. Cargara
el mapa, chequeara colisiones entre los objetos y actualizara sus movimientos
y ataques. Gran parte de su implementacion esta hecha, pero hay espacios con el
texto COMPLETAR que deben completarse segun lo indique la consigna.

El objeto Juego contiene mucho codigo. Tomate tu tiempo para leerlo tranquilo
y entender que es lo que hace en cada una de sus partes. */

const Juego = {
  // Aca se configura el tamanio del canvas del juego
  anchoCanvas: 961,
  altoCanvas: 577,
  jugador: Jugador,
  vidasInicial: Jugador.vidas,
  // Indica si el jugador gano
  ganador: false,

  obstaculosCarretera: [
    /*Aca se van a agregar los obstaculos visibles. Tenemos una valla horizontal
    de ejemplo, pero podras agregar muchos mas. */
    new Obstaculo('imagenes/bache.png', 150, 80, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 140, 80, 30, 30, 1),
    new Obstaculo('imagenes/valla_horizontal.png', 70, 200, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 155, 275, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 165, 295, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 70, 460, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 90, 460, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 110, 460, 30, 30, 2),
    new Obstaculo('imagenes/bache.png', 170, 475, 30, 30, 1),
    new Obstaculo('imagenes/auto_verde_abajo.png', 70, 430, 15, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 555, 400, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 555, 420, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 555, 440, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 300, 385, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 300, 415, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 90, 430, 30, 30, 2),
    new Obstaculo('imagenes/auto_verde_abajo.png', 430, 480, 15, 30, 2),
    new Obstaculo('imagenes/auto_verde_derecha.png', 395, 490, 30, 15, 2),
    new Obstaculo('imagenes/bache.png', 435, 380, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 450, 280, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 530, 215, 30, 30, 1),
    new Obstaculo('imagenes/auto_verde_derecha.png', 285, 85, 30, 15, 2),
    new Obstaculo('imagenes/bache.png', 285, 240, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 490, 120, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 480, 120, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 470, 120, 30, 30, 1),
    new Obstaculo('imagenes/auto_verde_abajo.png', 870, 100, 15, 30, 2),
    new Obstaculo('imagenes/auto_verde_derecha.png', 840, 100, 30, 15, 2),
    new Obstaculo('imagenes/auto_verde_abajo.png', 760, 200, 15, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 760, 220, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 760, 240, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 835, 430, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 835, 410, 30, 30, 2),
    new Obstaculo('imagenes/bache.png', 800, 430, 30, 30, 1),
  ],
  /* Estos son los bordes con los que se puede chocar, por ejemplo, la vereda.
   Ya estan ubicados en sus lugares correspondientes. Ya aparecen en el mapa, ya
   que son invisibles. No tenes que preocuparte por ellos.*/
  bordes: [
    // // Bordes
    new Obstaculo('', 0, 5, 961, 18, 0),
    new Obstaculo('', 0, 559, 961, 18, 0),
    new Obstaculo('', 0, 5, 18, 572, 0),
    new Obstaculo('', 943, 5, 18, 572, 0),
    // Veredas
    new Obstaculo('', 18, 23, 51, 536, 2),
    new Obstaculo('', 69, 507, 690, 52, 2),
    new Obstaculo('', 587, 147, 173, 360, 2),
    new Obstaculo('', 346, 147, 241, 52, 2),
    new Obstaculo('', 196, 267, 263, 112, 2),
    new Obstaculo('', 196, 23, 83, 244, 2),
    new Obstaculo('', 279, 23, 664, 56, 2),
    new Obstaculo('', 887, 79, 56, 480, 2)
  ],
  // Los enemigos se agregaran en este arreglo.
  enemigos: [

  ]

}

/* Se cargan los recursos de las imagenes, para tener un facil acceso
a ellos. No hace falta comprender esta parte. Pero si queres agregar tus propies
imagenes tendras que poner su ruta en la lista para que pueda ser precargada como
todas las demas. */
Juego.iniciarRecursos = function() {
  Resources.load([
    'imagenes/mapa.png',
    'imagenes/mensaje_gameover.png',
    'imagenes/Splash.png',
    'imagenes/bache.png',
    'imagenes/tren_horizontal.png',
    'imagenes/tren_vertical.png',
    'imagenes/valla_horizontal.png',
    'imagenes/valla_vertical.png',
    'imagenes/zombie1.png',
    'imagenes/zombie2.png',
    'imagenes/zombie3.png',
    'imagenes/zombie4.png',
    'imagenes/auto_rojo_abajo.png',
    'imagenes/auto_rojo_arriba.png',
    'imagenes/auto_rojo_derecha.png',
    'imagenes/auto_rojo_izquierda.png',
    'imagenes/auto_verde_abajo.png',
    'imagenes/auto_verde_derecha.png'
  ]);
  Resources.onReady(this.comenzar.bind(Juego));
};

// Agrega los bordes de las veredas a los obstaculos de la carretera
Juego.obstaculos = function() {
  return this.obstaculosCarretera.concat(this.bordes);
};

Juego.comenzar = function() {
  // Inicializar el canvas del juego
  Dibujante.inicializarCanvas(this.anchoCanvas, this.altoCanvas);
  /* El bucle principal del juego se llamara continuamente para actualizar
  los movimientos y el pintado de la pantalla. Sera el encargado de calcular los
  ataques, colisiones, etc*/
  this.buclePrincipal();
};

Juego.buclePrincipal = function() {

  // Con update se actualiza la logica del juego, tanto ataques como movimientos
  this.update();
  // Funcion que dibuja por cada fotograma a los objetos en pantalla.
  this.dibujar();
  // Esto es una forma de llamar a la funcion Juego.buclePrincipal() repetidas veces
  window.requestAnimationFrame(this.buclePrincipal.bind(this));
};

Juego.update = function() {
  this.calcularAtaques();
  this.moverEnemigos();
}
// Captura las teclas y si coincide con alguna de las flechas tiene que
// hacer que el jugador principal se mueva
Juego.capturarMovimiento = function(tecla) {
  let movX = 0;
  let movY = 0;
  let velocidad = this.jugador.velocidad;

  // El movimiento esta determinado por la velocidad del jugador
  if (tecla == 'izq') {
    movX = -velocidad;
  }

  if (tecla == 'arriba') {
    movY = -velocidad;
  }

  if (tecla == 'der') {
    movX = velocidad;
  }

  if (tecla == 'abajo') {
    movY = velocidad;
  }
  // Si se puede mover hacia esa posicion hay que hacer efectivo este movimiento
  if (this.chequearColisiones(movX + this.jugador.x, movY + this.jugador.y)) {
    /* Aca tiene que estar la logica para mover al jugador invocando alguno
    de sus metodos  */
      this.jugador.mover(movX, movY, tecla);
    /* COMPLETAR */
  }
};

Juego.dibujar = function() {
  // Borrar el fotograma actual
  Dibujante.borrarAreaDeJuego();
  //Se pinta la imagen de fondo segun el estado del juego
  this.dibujarFondo();


  /* Aca hay que agregar la logica para poder dibujar al jugador principal
  utilizando al dibujante y los metodos que nos brinda.
  "Dibujante dibuja al jugador" */

    Dibujante.dibujarEntidad(Jugador);

  // DIbuja la linea a la que el jugador debe llegar.
  
    Dibujante.dibujarRectangulo("white", 759, 530, 9, 10);
    Dibujante.dibujarRectangulo("black", 769, 530, 10, 10);
    Dibujante.dibujarRectangulo("white", 779, 530, 10, 10);
    Dibujante.dibujarRectangulo("black", 789, 530, 10, 10);
    Dibujante.dibujarRectangulo("white", 799, 530, 10, 10);
    Dibujante.dibujarRectangulo("black", 809, 530, 10, 10);
    Dibujante.dibujarRectangulo("white", 819, 530, 10, 10);
    Dibujante.dibujarRectangulo("black", 829, 530, 10, 10);
    Dibujante.dibujarRectangulo("white", 839, 530, 10, 10);
    Dibujante.dibujarRectangulo("black", 849, 530, 10, 10);
    Dibujante.dibujarRectangulo("white", 859, 530, 10, 10);
    Dibujante.dibujarRectangulo("black", 869, 530, 10, 10);
    Dibujante.dibujarRectangulo("white", 879, 530, 8, 10);
    Dibujante.dibujarRectangulo("black", 759, 540, 9, 10);
    Dibujante.dibujarRectangulo("white", 769, 540, 10, 10);
    Dibujante.dibujarRectangulo("black", 779, 540, 10, 10);
    Dibujante.dibujarRectangulo("white", 789, 540, 10, 10);
    Dibujante.dibujarRectangulo("black", 799, 540, 10, 10);
    Dibujante.dibujarRectangulo("white", 809, 540, 10, 10);
    Dibujante.dibujarRectangulo("black", 819, 540, 10, 10);
    Dibujante.dibujarRectangulo("white", 829, 540, 10, 10);
    Dibujante.dibujarRectangulo("black", 839, 540, 10, 10);
    Dibujante.dibujarRectangulo("white", 849, 540, 10, 10);
    Dibujante.dibujarRectangulo("black", 859, 540, 10, 10);
    Dibujante.dibujarRectangulo("white", 869, 540, 10, 10);
    Dibujante.dibujarRectangulo("black", 879, 540, 8, 10);


  // Se recorren los obstaculos de la carretera pintandolos
  this.obstaculosCarretera.forEach(function(obstaculo) {
    Dibujante.dibujarEntidad(obstaculo);
  });

  // Se recorren los enemigos pintandolos
  this.enemigos.forEach(function(enemigo) {
    /* Completar */
  });

  // El dibujante dibuja las vidas del jugador
  let tamanio = this.anchoCanvas / this.vidasInicial;
  Dibujante.dibujarRectangulo('white', 0, 0, this.anchoCanvas, 8);
  for (let i = 0; i < this.jugador.vidas; i++) {
    let x = tamanio * i
    Dibujante.dibujarRectangulo('red', x, 0, tamanio, 8);
  }
};



/* Recorre los enemigos haciendo que se muevan. De la misma forma que hicimos
un recorrido por los enemigos para dibujarlos en pantalla ahora habra que hacer
una funcionalidad similar pero para que se muevan.*/
Juego.moverEnemigos = function() {
  /* COMPLETAR */
};

/* Recorre los enemigos para ver cual esta colisionando con el jugador
Si colisiona empieza el ataque el zombie, si no, deja de atacar.
Para chequear las colisiones estudiar el metodo posicionValida. Alli
se ven las colisiones con los obstaculos. En este caso sera con los zombies. */
Juego.calcularAtaques = function() {
  this.enemigos.forEach(function(enemigo) {
    if (this.intersecan(enemigo, this.jugador, this.jugador.x, this.jugador.y)) {
      /* Si el enemigo colisiona debe empezar su ataque
      COMPLETAR */
    } else {
      /* Sino, debe dejar de atacar
      COMPLETAR */
    }
  }, this);
};



/* Aca se chequea si el jugador se puede mover a la posicion destino.
 Es decir, que no haya obstaculos que se interpongan. De ser asi, no podra moverse */
Juego.chequearColisiones = function(x, y) {
  let puedeMoverse = true
  this.obstaculos().forEach(function(obstaculo) {
    if (this.intersecan(obstaculo, this.jugador, x, y)) {

      /*COMPLETAR, obstaculo debe chocar al jugador*/
      obstaculo.chocar(obstaculo.potencia);
      obstaculo.potencia = 0;
      puedeMoverse = false;
    }
  }, this)
  return puedeMoverse
};

/* Este metodo chequea si los elementos 1 y 2 si cruzan en x e y
 x e y representan la coordenada a la cual se quiere mover el elemento2*/
Juego.intersecan = function(elemento1, elemento2, x, y) {
  let izquierda1 = elemento1.x
  let derecha1 = izquierda1 + elemento1.ancho
  let techo1 = elemento1.y
  let piso1 = techo1 + elemento1.alto
  let izquierda2 = x
  let derecha2 = izquierda2 + elemento2.ancho
  let techo2 = y
  let piso2 = y + elemento2.alto

  return ((piso1 >= techo2) && (techo1 <= piso2) &&
    (derecha1 >= izquierda2) && (izquierda1 <= derecha2))
};

Juego.dibujarFondo = function() {
  // Si se termino el juego hay que mostrar el mensaje de game over de fondo
  if (this.terminoJuego()) {
    Dibujante.dibujarImagen('imagenes/mensaje_gameover.png', 0, 5, this.anchoCanvas, this.altoCanvas);
    document.getElementById('reiniciar').style.visibility = 'visible';
  }

  // Si se gano el juego hay que mostrar el mensaje de ganoJuego de fondo
  else if (this.ganoJuego()) {
    Dibujante.dibujarImagen('imagenes/Splash.png', 190, 113, 500, 203);
    document.getElementById('reiniciar').style.visibility = 'visible';
  } else {
    Dibujante.dibujarImagen('imagenes/mapa.png', 0, 5, this.anchoCanvas, this.altoCanvas);
  }
};

Juego.terminoJuego = function() {
  return this.jugador.vidas <= 0;
};

/* Se gana el juego si se sobre pasa cierto altura y */
Juego.ganoJuego = function() {
  return (this.jugador.y + this.jugador.alto) > 530;
};

Juego.iniciarRecursos();

// Activa las lecturas del teclado al presionar teclas
// Documentacion: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
document.addEventListener('keydown', function(e) {
  let allowedKeys = {
    37: 'izq',
    38: 'arriba',
    39: 'der',
    40: 'abajo'
  };

  Juego.capturarMovimiento(allowedKeys[e.keyCode]);
});
