/**
 * ============================================
 * 07 - TIPOS PRIMITIVOS (DETALLE)
 * ============================================
 * Temas:
 *   - number: enteros, decimales, hex, binario, octal
 *   - string: comillas, metodos, template literals
 *   - boolean: truthy/falsy, comparacion estricta
 *   - null y undefined, ?? y ?.
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: number
// ──────────────────────────────────────────────

// TypeScript usa un unico tipo number para todos los numeros
// (no hay int ni float separados como en otros lenguajes).

const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;    // 255 en base 16
const binario: number = 0b1010;      // 10 en base 2
const octal: number = 0o17;          // 15 en base 8
const grande: number = 1_000_000; // _ como separador visual (ES2021)

console.log("hexadecimal:", hexadecimal); // 255
console.log("binario:", binario);         // 10
console.log("grande:", grande);           // 1000000

// Constantes especiales de number
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("isFinite(1/0):", Number.isFinite(1 / 0));     // false (Infinity)
console.log("isNaN(0/0):", Number.isNaN(0 / 0));           // true

// ──────────────────────────────────────────────
// A.2: string
// ──────────────────────────────────────────────

const simple: string = "Hola TypeScript";
const doble: string = 'Tambien funciona';
const template: string = `Hola ${"mundo"}`;

const nombre: string = "Ana";
const edad: number = 28;

const saludo: string = `Hola, ${nombre}. Tienes ${edad} anios.`;
const mayoria: string = `Eres ${edad >= 18 ? "mayor" : "menor"} de edad.`;

// Multilinea sin caracteres de escape
const mensaje: string = `
  Linea 1
  Linea 2
  Linea 3
`.trim();

// Metodos comunes (tipados, el editor autocompleta)
console.log("  hola  ".trim());             // "hola"
console.log("hola".toUpperCase());          // "HOLA"
console.log("2024-06-15".split("-"));       // ["2024", "06", "15"]
console.log("error: fallo".includes("error")); // true
console.log("archivo.ts".endsWith(".ts"));  // true

// ──────────────────────────────────────────────
// A.3: boolean
// ──────────────────────────────────────────────

const activo: boolean = true;
const eliminado: boolean = false;

// Se infiere sin anotacion explicita
const esMayor = 25 >= 18;    // boolean inferido -> true
const tieneStock = 0 > 0;    // boolean inferido -> false

// Valores "falsy" en JS: false, 0, "", null, undefined, NaN
// Todos se comportan como false en un if
if (!tieneStock) {
  console.log("Sin stock disponible");
}

// Usa === (igualdad estricta), NO ==
// Con ==, 0 == false es true; con === es false

// ──────────────────────────────────────────────
// A.4: null y undefined
// ──────────────────────────────────────────────

/**
 * undefined: la variable existe pero no tiene valor asignado.
 * null: asignacion intencional de "sin valor".
 * TypeScript los distingue como tipos diferentes.
 */

let sinAsignar: undefined = undefined;
let sinValor: null = null;

// En la practica: busqueda que puede no encontrar nada
const idBuscado: number = 5;
const usuarioEncontrado: string | null = idBuscado === 1 ? "Ana" : null;

// Operador ?? (coalescencia nula): usa el lado derecho si el izquierdo es null/undefined
const nom: string = usuarioEncontrado ?? "Invitado";
console.log("nom:", nom); // "Invitado"

// Encadenamiento opcional ?.: no lanza error si es null/undefined
const longitud: number | undefined = usuarioEncontrado?.length;
console.log("longitud:", longitud); // undefined (no lanza error)
