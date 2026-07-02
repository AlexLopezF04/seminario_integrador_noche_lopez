/**
 * ============================================
 * EJERCICIO 5: Suma del 1 al 100 con for
 * ============================================
 * Tema: for clasico (B.1)
 *
 * Enunciado:
 * Usa un for clasico para sumar todos los numeros del 1 al 100
 * y mostrar el total (debe dar 5050).
 * Extra: suma solo los pares.
 * ============================================
 */

let sumaTotal: number = 0;
for (let i = 1; i <= 100; i++) {
  sumaTotal += i;
}
console.log("Suma 1..100:", sumaTotal); // 5050

// Extra: suma solo pares
let sumaPares: number = 0;
for (let i = 2; i <= 100; i += 2) {
  sumaPares += i;
}
console.log("Suma pares 1..100:", sumaPares); // 2550
