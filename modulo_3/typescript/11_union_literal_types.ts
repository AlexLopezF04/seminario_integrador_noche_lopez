/**
 * ============================================
 * 11 - UNION TYPES Y LITERAL TYPES
 * ============================================
 * Temas:
 *   - Union types: un valor de varios tipos posibles
 *   - Union con tipos compuestos (objetos)
 *   - Literal types: valores exactos como tipos
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Union types
// ──────────────────────────────────────────────

/**
 * El operador | permite que una variable o parametro
 * acepte mas de un tipo.
 */

type Id = string | number;

const idNumerico: Id = 42;
const idTexto: Id = "abc-123";
console.log("Buscando con id:", idNumerico, "(tipo:", typeof idNumerico + ")");
console.log("Buscando con id:", idTexto, "(tipo:", typeof idTexto + ")");

// Union con tipos compuestos (objetos)
type Respuesta =
  | { exito: true;  datos: string[] }
  | { exito: false; error: string  };

const respuestaOk: Respuesta = { exito: true, datos: ["item1", "item2"] };
const respuestaError: Respuesta = { exito: false, error: "No se pudo conectar" };

// ──────────────────────────────────────────────
// E.2: Literal types
// ──────────────────────────────────────────────

/**
 * Un literal type restringe una variable a un valor
 * especifico (no solo un tipo amplio como string).
 */

type Direccion = "izquierda" | "derecha" | "arriba" | "abajo";
type Dado = 1 | 2 | 3 | 4 | 5 | 6;
type Activado = true;  // solo puede ser true

let movimiento: Direccion = "arriba";  // ok
// movimiento = "diagonal";            // Error: no es Direccion valido

let tirada: Dado = 4;                  // ok
// tirada = 7;                         // Error: 7 no es un Dado valido

// Uso directo con template literal
const dir: Direccion = "izquierda";
const pasos: number = 3;
console.log("Moviendose", pasos, "paso(s) hacia", dir);
