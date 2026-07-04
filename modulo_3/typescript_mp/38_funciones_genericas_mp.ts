/**
 * 38 - FUNCIONES GENERICAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: <T>, inferencia, <K, V>, funciones
 * genericas, flechas genericas
 * Cursos Online: primero/ultimo de listas de cursos,
 * crearPar clave-valor, copiar arrays, crearMapa
 * de estudiantes por rol.
 * ============================================
 */

function primerCurso(arr: number[]): number { return arr[0]; }
function primerCursoTexto(arr: string[]): string { return arr[0]; }
function primeroAnyCurso(arr: any[]): any { return arr[0]; }

function primero<T>(arr: T[]): T { return arr[0]; }

const nCurso = primero([10, 20, 30]);
const sCurso = primero(["TypeScript", "Node"]);
console.log("Primero:", nCurso, sCurso);

function ultimo<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log("Ultimo [1,2,3]:", ultimo([1, 2, 3]));
console.log("Ultimo []:", ultimo([]));

function identidad<T>(valor: T): T { return valor; }

const aG = identidad(42);
const bG = identidad("TypeScript");
const cG = identidad(true);
const dG = identidad<number[]>([1, 2, 3]);

console.log("identidad:", aG, bG, cG);

const copiarCurso = <T,>(arr: T[]): T[] => [...arr];

function repetirCurso<T>(valor: T, veces: number): T[] {
  return Array.from({ length: veces }, () => valor);
}

console.log("repetirCurso('Leccion', 3):", repetirCurso("Leccion", 3));
console.log("repetirCurso(0, 5):", repetirCurso(0, 5));

function crearParCurso<K, V>(clave: K, valor: V): [K, V] {
  return [clave, valor];
}

const par1G = crearParCurso("duracion", 40);
const par2G = crearParCurso(1, true);
console.log("par1:", par1G, "par2:", par2G);

function crearMapaCursos<K extends string, V>(entradas: Array<[K, V]>): Map<K, V> {
  return new Map(entradas);
}

const rolesCurso = crearMapaCursos([
  ["instructor", ["crear", "editar", "borrar"]],
  ["estudiante", ["ver", "completar"]],
]);

console.log("roles instructor:", rolesCurso.get("instructor"));
