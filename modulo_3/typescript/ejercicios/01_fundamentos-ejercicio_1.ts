/**
 * ============================================
 * EJERCICIO 1: JavaScript vs TypeScript
 * ============================================
 * Enunciado:
 * Escribe una funcion JS sin tipos sumar(a, b) que devuelva a + b.
 * Llama con sumar(5, "3") y observa el resultado ("53", concatenacion).
 * Luego conviertela a TypeScript anotando a: number, b: number
 * y observa como el error aparece al escribir la llamada incorrecta.
 * ============================================
 */

// --- Version JavaScript (sin tipos) ---
// En JS no hay restriccion de tipos, el operador + CONCATENA si
// alguno de los operandos es un string.

function sumarJS(a, b) {
  return a + b;
}

console.log("JS: sumar(5, 3)  =", sumarJS(5, 3));    // 8 (suma correcta)
console.log("JS: sumar(5, '3') =", sumarJS(5, "3")); // "53" (concatenacion, bug)

// --- Version TypeScript (con tipos) ---
// Con tipos, TS obliga a que ambos parametros sean number.

function sumarTS(a: number, b: number): number {
  return a + b;
}

console.log("TS: sumar(5, 3) =", sumarTS(5, 3));  // 8

// La siguiente linea NO compila - TS lo detecta antes de ejecutar:
// sumarTS(5, "3");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'
