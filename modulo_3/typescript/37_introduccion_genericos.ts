/**
 * ============================================
 * 37 - INTRODUCCION A GENERICOS
 * ============================================
 * Temas:
 *   - Problema: duplicar codigo vs any vs generico
 *   - Funcion generica basica <T>
 *   - Inferencia de tipo
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Motivacion
// ──────────────────────────────────────────────

// Opcion 1 (mala): duplicar la misma logica para cada tipo
function primerNumero(arr: number[]): number { return arr[0]; }
function primerTexto(arr: string[]): string { return arr[0]; }

// Opcion 2 (mala): usar any - pierdes seguridad de tipos
function primeroAny(arr: any[]): any {
  return arr[0];
}

// Opcion 3 (correcta): generico - una funcion, tipo preservado
function primero<T>(arr: T[]): T {
  return arr[0];
}

const n = primero([10, 20, 30]);   // T = number
const s = primero(["a", "b"]);     // T = string
// n.toUpperCase();  // Error: number no tiene toUpperCase

console.log("Primero number:", n);
console.log("Primero string:", s);

// ──────────────────────────────────────────────
// EJEMPLO: funcion ultimo generica
// ──────────────────────────────────────────────

function ultimo<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log("Ultimo [1,2,3]:", ultimo([1, 2, 3]));
console.log("Ultimo ['x','y','z']:", ultimo(["x", "y", "z"]));
console.log("Ultimo []:", ultimo([]));
console.log("Ultimo [true, false]:", ultimo([true, false, true]));
