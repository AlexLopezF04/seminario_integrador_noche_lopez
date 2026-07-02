/**
 * Ejercicio: Rectangulo - funcion vs clase
 * Mismas formulas (area, perimetro) implementadas de dos formas.
 */

// Como funcion
function areaRectangulo(base: number, altura: number): number {
  return base * altura;
}
function perimetroRectangulo(base: number, altura: number): number {
  return 2 * (base + altura);
}
console.log("Funcion 8x5: area=" + areaRectangulo(8, 5) + " perimetro=" + perimetroRectangulo(8, 5));

// Como clase
class Rectangulo {
  constructor(public ancho: number, public alto: number) {}
  area(): number { return this.ancho * this.alto; }
  perimetro(): number { return 2 * (this.ancho + this.alto); }
}
const r1 = new Rectangulo(5, 3);
const r2 = new Rectangulo(10, 4);
console.log("Clase 5x3: area=" + r1.area() + " perimetro=" + r1.perimetro());
console.log("Clase 10x4: area=" + r2.area() + " perimetro=" + r2.perimetro());
