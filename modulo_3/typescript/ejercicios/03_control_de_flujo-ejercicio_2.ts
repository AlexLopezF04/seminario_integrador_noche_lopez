/**
 * ============================================
 * EJERCICIO 2: Par o impar (if/else + ternario)
 * ============================================
 * Tema: if/else, operador ternario (A.2)
 *
 * Enunciado:
 * Declara const n: number = 7. Usa if/else para imprimir
 * "par" o "impar" (n % 2 === 0). Luego reescribe con operador
 * ternario y guarda en const paridad: string.
 * Prueba con 4, 7 y 0.
 * ============================================
 */

const n1: number = 4;
if (n1 % 2 === 0) {
  console.log(n1 + " es par");
} else {
  console.log(n1 + " es impar");
}
const paridad1: string = n1 % 2 === 0 ? "par" : "impar";
console.log("Ternario:", n1, "es", paridad1);

const n2: number = 7;
if (n2 % 2 === 0) {
  console.log(n2 + " es par");
} else {
  console.log(n2 + " es impar");
}
const paridad2: string = n2 % 2 === 0 ? "par" : "impar";
console.log("Ternario:", n2, "es", paridad2);

const n3: number = 0;
if (n3 % 2 === 0) {
  console.log(n3 + " es par");
} else {
  console.log(n3 + " es impar");
}
const paridad3: string = n3 % 2 === 0 ? "par" : "impar";
console.log("Ternario:", n3, "es", paridad3);
