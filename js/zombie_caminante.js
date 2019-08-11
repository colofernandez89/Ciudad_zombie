/* Aca podes encontrar al zombie caminante cuyo codigo esta completo. Podes
modificarlo para hacer que se comporte de la forma que mas te guste.
Este zombie recibe los mismos parametros que el objeto Enemigo. Podes consultar
el archivo Enemigo.js para entender que es cada uno. */


class ZombieCaminante extends Enemigo {
  constructor(sprite, x, y, ancho, alto, velocidad, rangoMov) {
      super(sprite, x, y, ancho, alto, velocidad, rangoMov)
  }
  mover() {
      if (Math.random() < 0.5) {
          this.x -= this.velocidad;
          this.y -= this.velocidad;
      } else {
          //Sino, hace otro movimiento
          this.y += this.velocidad;
          this.x -= this.velocidad;
      }

      /* En esta parte lo que hacemos es invertir la direccion horizontal si
      toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
      velocidad lo que estamos haciendo es invertir su direccion.*/
      if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
          this.velocidad *= -1;
      }
      // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
      if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
          this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY) / 2;
      }
  };
}