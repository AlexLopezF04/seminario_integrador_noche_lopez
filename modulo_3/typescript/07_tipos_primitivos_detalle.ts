/**
 * 07 - TIPOS PRIMITIVOS (DETALLE)
 * number, string, boolean, null/undefined, ?? y ?.
 */

// ──────────────────────────────────────────────
// REFERENCIA RAPIDA (antes 03_tipos_primitivos)
// ──────────────────────────────────────────────

// number: enteros, decimales, negativos, hex
const precioNum: number = 299.99;
const puertoNum: number = 8080;
const hexColor: number = 0xff5733;

// string: comillas simples, dobles o backtick
const emailStr: string = "soporte@empresa.com";
const rutaStr: string = `/api/v2/usuarios`;

// boolean: solo true o false
const activoBool: boolean = true;
const requiereAuth: boolean = false;

// Operaciones tipicas
const subtotal = 1500;
const descuento = 150;
const total = subtotal - descuento;

// Los tres usan type inference al asignar un literal

// ──────────────────────────────────────────────
// number (detalle)
// ──────────────────────────────────────────────

const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;
const binario: number = 0b1010;
const octal: number = 0o17;
const grande: number = 1_000_000;

console.log("hex:", hexadecimal, "bin:", binario, "grande:", grande);

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("isFinite(1/0):", Number.isFinite(1 / 0));
console.log("isNaN(0/0):", Number.isNaN(0 / 0));

// ──────────────────────────────────────────────
// string (detalle)
// ──────────────────────────────────────────────

const simple: string = "Hola";
const doble: string = 'Tambien';
const template: string = `Hola ${"mundo"}`;
const saludo: string = `Hola, ${"Ana"}. Tiene ${28} anios.`;
const mayor: string = `Es ${28 >= 18 ? "mayor" : "menor"} de edad.`;

const multilinea: string = `
  Linea 1
  Linea 2
  Linea 3
`.trim();

console.log("  hola  ".trim());
console.log("hola".toUpperCase());
console.log("2024-06-15".split("-"));
console.log("error: fallo".includes("error"));
console.log("archivo.ts".endsWith(".ts"));

// ──────────────────────────────────────────────
// boolean (detalle)
// ──────────────────────────────────────────────

const activo: boolean = true;
const eliminado: boolean = false;
const esMayor = 25 >= 18;
const tieneStock = 0 > 0;

// Valores "falsy": false, 0, "", null, undefined, NaN
if (!tieneStock) console.log("Sin stock");

// Usa ===, no == (0 == false es true, pero 0 === false es false)

// ──────────────────────────────────────────────
// null y undefined
// ──────────────────────────────────────────────

let sinAsignar: undefined = undefined;
let sinValor: null = null;

const idBuscado: number = 5;
const usuarioEncontrado: string | null = idBuscado === 1 ? "Ana" : null;

// ?? (coalescencia nula): usa el derecho si izquierdo es null/undefined
const nom: string = usuarioEncontrado ?? "Invitado";
console.log("nom:", nom);

// ?. (encadenamiento opcional): no lanza error si es null/undefined
const longitud: number | undefined = usuarioEncontrado?.length;
console.log("longitud:", longitud);
