/**
 * Ejercicio 1: JS vs TS
 * Observa como JS permite sumar(5, "3") = "53" (bug).
 * Con tipos, TS lo detecta en compilacion.
 */

function sumarJS(a: any, b: any): any { return a + b; }
console.log("JS: sumar(5, 3) =", sumarJS(5, 3));
console.log("JS: sumar(5, '3') =", sumarJS(5, "3"));

function sumarTS(a: number, b: number): number { return a + b; }
console.log("TS: sumar(5, 3) =", sumarTS(5, 3));
