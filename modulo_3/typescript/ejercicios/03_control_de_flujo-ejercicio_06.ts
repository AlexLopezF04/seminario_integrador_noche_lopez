/**
 * ============================================
 * EJERCICIO 6: Temperaturas (maximo y promedio)
 * ============================================
 * Tema: for...of (B.2)
 *
 * Enunciado:
 * Dado const temps = [18, 22, 25, 30, 19, 27], usa for...of
 * para encontrar e imprimir la temperatura maxima y el promedio.
 * Pista: arranca con let max = temps[0] y let suma = 0.
 * ============================================
 */

const temps: number[] = [18, 22, 25, 30, 19, 27];

let max: number = temps[0];
let suma: number = 0;

for (const t of temps) {
  if (t > max) max = t;
  suma += t;
}

const promedio: number = Number((suma / temps.length).toFixed(1));

console.log("Maximo:", max);        // 30
console.log("Promedio:", promedio); // 23.5
