/**
 * ============================================
 * EJERCICIO 5: Strict mode en accion
 * ============================================
 * Enunciado:
 * En el Playground, activa strict (Config → Strict).
 * 1. Escribe function saludar(nombre) { return "Hola " + nombre; }
 *    y observa el error "Parameter 'nombre' implicitly has an 'any' type".
 *    Corrigelo anotando el tipo.
 * 2. Declara let usuario: string = null; y observa el error.
 *    Corrigelo con string | null.
 * ============================================
 */

// --- Parte 1: noImplicitAny ---
// Con strict activado, NO puedes omitir el tipo en parametros:

// ❌ Esto produce error en modo strict:
// function saludar(nombre) {
//   return "Hola " + nombre;
// }
// Error: Parameter 'nombre' implicitly has an 'any' type.

// ✅ Corregido con anotacion de tipo:
function saludar(nombre: string): string {
  return "Hola " + nombre;
}
console.log(saludar("Ana")); // Hola Ana

// --- Parte 2: strictNullChecks ---
// Con strict activado, NO puedes asignar null a string:

// ❌ Esto produce error:
// let usuario: string = null;
// Error: Type 'null' is not assignable to type 'string'.

// ✅ Corregido con union de tipos:
let usuario: string | null = null;
usuario = "Luis";
console.log("Usuario:", usuario);
