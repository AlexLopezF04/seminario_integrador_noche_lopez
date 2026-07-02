/**
 * ============================================
 * EJERCICIO 1: Area y perimetro de rectangulo
 * ============================================
 * Tema: Funcion basica tipada (A.1)
 *
 * Enunciado:
 * Escribe function areaRectangulo(base: number, altura: number): number
 * y function perimetroRectangulo(base: number, altura: number): number.
 * Prueba con base 8 y altura 5. Area: 40, Perimetro: 26.
 * ============================================
 */

function areaRectangulo(base: number, altura: number): number {
  return base * altura;
}

function perimetroRectangulo(base: number, altura: number): number {
  return 2 * (base + altura);
}

const base: number = 8;
const altura: number = 5;

console.log("Area:", areaRectangulo(base, altura));         // 40
console.log("Perimetro:", perimetroRectangulo(base, altura)); // 26
