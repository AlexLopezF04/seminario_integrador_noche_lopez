/**
 * ============================================
 * EJERCICIO 8: Tallas con literales
 * ============================================
 * Tema: Literal types
 *
 * Enunciado:
 * Define type Talla = "XS" | "S" | "M" | "L" | "XL".
 * Declara variables const talla1: Talla = "XS", talla2 = "S",
 * talla3 = "M", talla4 = "L", talla5 = "XL".
 * Para cada una, calcula const extra: number usando if/else
 * (0 para S/M, 5 para XS/L, 10 para XL) e imprimelo.
 * ============================================
 */

type Talla = "XS" | "S" | "M" | "L" | "XL";

const talla1: Talla = "XS";
const talla2: Talla = "S";
const talla3: Talla = "M";
const talla4: Talla = "L";
const talla5: Talla = "XL";

function calcularExtra(talla: Talla): number {
  if (talla === "XS" || talla === "L") return 5;
  if (talla === "XL") return 10;
  return 0; // S, M
}

console.log("XS -> extra:", calcularExtra(talla1)); // 5
console.log("S  -> extra:", calcularExtra(talla2)); // 0
console.log("M  -> extra:", calcularExtra(talla3)); // 0
console.log("L  -> extra:", calcularExtra(talla4)); // 5
console.log("XL -> extra:", calcularExtra(talla5)); // 10
