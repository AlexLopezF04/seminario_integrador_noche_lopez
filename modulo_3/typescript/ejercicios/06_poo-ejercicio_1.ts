/**
 * ============================================
 * EJERCICIO 1: Clase Rectangulo
 * ============================================
 * Tema: Clase basica (A.1)
 *
 * Enunciado:
 * Crea la clase Rectangulo con ancho: number y alto: number.
 * Metodos area(): number y perimetro(): number.
 * Instancia dos rectangulos e imprime sus resultados.
 * ============================================
 */

class Rectangulo {
  constructor(
    public ancho: number,
    public alto: number
  ) {}

  area(): number {
    return this.ancho * this.alto;
  }

  perimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

const r1 = new Rectangulo(5, 3);
const r2 = new Rectangulo(10, 4);

console.log("R1 (5x3): area=" + r1.area() + " perimetro=" + r1.perimetro());
console.log("R2 (10x4): area=" + r2.area() + " perimetro=" + r2.perimetro());
