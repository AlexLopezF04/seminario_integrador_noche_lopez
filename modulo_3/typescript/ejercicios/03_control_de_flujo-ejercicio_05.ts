/**
 * Ejercicio 5: Suma 1..100 con for
 */

let sumaTotal: number = 0;
for (let i = 1; i <= 100; i++) sumaTotal += i;
console.log("Suma 1..100:", sumaTotal);

let sumaPares: number = 0;
for (let i = 2; i <= 100; i += 2) sumaPares += i;
console.log("Suma pares 1..100:", sumaPares);
