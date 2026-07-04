/**
 * 07 - TIPOS PRIMITIVOS (DETALLE)
 * Tematica: Cursos Online
 * ============================================
 * Concepto: number, string, boolean, null, undefined
 * Cursos Online: IDs de curso, emails de instructores,
 * estado activo de plataforma, fechas de publicacion.
 * ============================================
 */

const precioCurso: number = 299.99;
const duracionHoras: number = 40;
const codigoHex: number = 0xff5733;

const emailInstructor: string = "instructor@cursosenlinea.com";
const rutaAPI: string = `/api/v2/cursos`;

const plataformaActiva: boolean = true;
const requierePago: boolean = false;

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

const simple: string = "Curso TS";
const doble: string = 'Curso JS';
const template: string = `Curso ${"Python"}`;
const saludo: string = `Hola, ${"Ana"}. Curso: ${"TypeScript"}.`;
const mayor: string = `El curso es ${40 >= 20 ? "largo" : "corto"}.`;

const multilinea: string = `
  Modulo 1: Introduccion
  Modulo 2: Tipos basicos
  Modulo 3: Clases
`.trim();

console.log("  TypeScript  ".trim());
console.log("typescript".toUpperCase());
console.log("2024-06-15".split("-"));
console.log("error: curso no encontrado".includes("error"));
console.log("curso.ts".endsWith(".ts"));

const activo: boolean = true;
const eliminado: boolean = false;
const esLargo = 40 >= 20;
const tieneEstudiantes = 0 > 0;

if (!tieneEstudiantes) console.log("Sin estudiantes");

let sinAsignar: undefined = undefined;
let sinValor: null = null;

const idBuscado: number = 5;
const cursoEncontrado: string | null = idBuscado === 1 ? "TypeScript" : null;

const nom: string = cursoEncontrado ?? "Curso no encontrado";
console.log("nom:", nom);

const longitud: number | undefined = cursoEncontrado?.length;
console.log("longitud:", longitud);
