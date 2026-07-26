/**
 * 38 - FUNCIONES GENERICAS
 * Temas: motivacion, <T>, inferencia, <K, V>
 */

// ──────────────────────────────────────────────
// Motivacion (antes 37_introduccion_genericos)
// ──────────────────────────────────────────────

// Opcion 1 (mala): duplicar logica para cada tipo
function primerNumero(arr: number[]): number { return arr[0]; }
function primerTexto(arr: string[]): string { return arr[0]; }

// Opcion 2 (mala): any - pierdes seguridad
function primeroAny(arr: any[]): any { return arr[0]; }

// Opcion 3 (correcta): generico
function primero<T>(arr: T[]): T { return arr[0]; }

const n = primero([10, 20, 30]);
const s = primero(["a", "b"]);
console.log("Primero:", n, s);

// Funcion ultimo generica
function ultimo<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log("Ultimo [1,2,3]:", ultimo([1, 2, 3]));
console.log("Ultimo []:", ultimo([]));

// ──────────────────────────────────────────────
// Funcion generica con inferencia
// ──────────────────────────────────────────────

function identidad<T>(valor: T): T { return valor; }

const a = identidad(42);
const b = identidad("hola");
const c = identidad(true);
const d = identidad<number[]>([1, 2, 3]);

console.log("identidad:", a, b, c);

// Flecha generica
const copiar = <T,>(arr: T[]): T[] => [...arr];

// repetir generica
function repetir<T>(valor: T, veces: number): T[] {
  return Array.from({ length: veces }, () => valor);
}

console.log("repetir('eco', 3):", repetir("eco", 3));
console.log("repetir(0, 5):", repetir(0, 5));

// ──────────────────────────────────────────────
// Multiples parametros <K, V>
// ──────────────────────────────────────────────

function crearPar<K, V>(clave: K, valor: V): [K, V] {
  return [clave, valor];
}

const par1 = crearPar("edad", 30);
const par2 = crearPar(1, true);
console.log("par1:", par1, "par2:", par2);

// Mapa de configuraciones
function crearMapa<K extends string, V>(entradas: Array<[K, V]>): Map<K, V> {
  return new Map(entradas);
}

const roles = crearMapa([
  ["admin",   ["leer", "escribir", "borrar"]],
  ["editor",  ["leer", "escribir"]],
  ["lector",  ["leer"]],
]);

console.log("roles editor:", roles.get("editor"));
