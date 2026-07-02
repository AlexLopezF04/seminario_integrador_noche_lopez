/**
 * ============================================
 * 38 - FUNCIONES GENERICAS Y MULTIPLES PARAMETROS
 * ============================================
 * Temas:
 *   - Funcion generica con inferencia
 *   - Anotacion explicita de tipo
 *   - Multiples parametros <K, V>
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Funcion generica - inferencia
// ──────────────────────────────────────────────

function identidad<T>(valor: T): T {
  return valor;
}

const a = identidad(42);        // T = number
const b = identidad("hola");    // T = string
const c = identidad(true);      // T = boolean

// Anotacion explicita
const d = identidad<number[]>([1, 2, 3]);

console.log("identidad:", a, b, c);

// Flecha generica:
const copiar = <T,>(arr: T[]): T[] => [...arr];

// ──────────────────────────────────────────────
// EJEMPLO: repetir generica
// ──────────────────────────────────────────────

function repetir<T>(valor: T, veces: number): T[] {
  return Array.from({ length: veces }, () => valor);
}

console.log("repetir('eco', 3):", repetir("eco", 3));
console.log("repetir(0, 5):", repetir(0, 5));

// ──────────────────────────────────────────────
// B.2: Multiples parametros <K, V>
// ──────────────────────────────────────────────

function crearPar<K, V>(clave: K, valor: V): [K, V] {
  return [clave, valor];
}

const par1 = crearPar("edad", 30);     // [string, number]
const par2 = crearPar(1, true);        // [number, boolean]

console.log("par1:", par1, "par2:", par2);

// ──────────────────────────────────────────────
// EJEMPLO: Mapa de configuraciones
// ──────────────────────────────────────────────

function crearMapa<K extends string, V>(
  entradas: Array<[K, V]>
): Map<K, V> {
  return new Map(entradas);
}

const roles = crearMapa<string, string[]>([
  ["admin",   ["leer", "escribir", "borrar"]],
  ["editor",  ["leer", "escribir"]],
  ["lector",  ["leer"]],
]);

console.log("roles editor:", roles.get("editor"));
