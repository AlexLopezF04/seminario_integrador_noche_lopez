/**
 * ============================================
 * EJERCICIO 3: type vs interface (error con union)
 * ============================================
 * Tema: type vs interface (C.1)
 *
 * Enunciado:
 * Intenta crear interface Color = "rojo" | "verde" | "azul".
 * Observa el error. Corrige usando type.
 * ============================================
 */

// Esto NO compila - las interfaces no pueden ser uniones:
// interface Color = "rojo" | "verde" | "azul";
// Error: '=' expected.

// Corregido con type:
type Color = "rojo" | "verde" | "azul";

const c1: Color = "rojo";
const c2: Color = "verde";
const c3: Color = "azul";

console.log("Colores:", c1, c2, c3);
