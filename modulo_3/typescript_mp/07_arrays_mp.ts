/**
 * ============================================
 * 08 - ARRAYS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Arrays, metodos tipados map/filter/reduce,
 * arrays de objetos
 * Cursos Online: Catalogo de cursos, precios,
 * calificaciones de estudiantes, estadisticas.
 * ============================================
 */

const precios: number[] = [1500, 2500, 3500, 4500, 5500];
const nombres: Array<string> = ["TS", "JS", "Python", "Java", "Go"];

const inferido = [10, 20, 30]; // number[]

const dobles: number[] = precios.map((n) => n * 2);
const pares: number[] = precios.filter((n) => n % 2 === 0);
const suma: number = precios.reduce((acc, n) => acc + n, 0);

precios.push(6500);
precios.unshift(500);
const ultimo = precios.pop();
const primero = precios.shift();

const existe: boolean = precios.includes(2500);
const indice: number = precios.indexOf(2500);
const encontrado: number | undefined = precios.find((n) => n > 4000);

type CursoCatalogo = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};

const catalogo: CursoCatalogo[] = [
  { id: 1, nombre: "TypeScript", precio: 999,  disponible: true },
  { id: 2, nombre: "Node.js",    precio: 25,   disponible: true },
  { id: 3, nombre: "React",      precio: 350,  disponible: false },
];

const disponibles: CursoCatalogo[] = catalogo.filter((c) => c.disponible);
const nombresCursos: string[] = catalogo.map((c) => c.nombre);
const masBarato: CursoCatalogo | undefined = catalogo.reduce((min, c) =>
  c.precio < min.precio ? c : min
);

console.log("nombres:", nombresCursos);
console.log("mas barato:", masBarato?.nombre);
console.log("disponibles:", disponibles.length);

const calificaciones: number[] = [85, 92, 70, 55, 98, 63, 78];

const aprobados: number[] = calificaciones.filter((n) => n >= 70);
const reprobados: number[] = calificaciones.filter((n) => n < 70);
const promedio: number = Number(
  (calificaciones.reduce((acc, n) => acc + n, 0) / calificaciones.length).toFixed(1)
);
const maxima: number = Math.max(...calificaciones);
const minima: number = Math.min(...calificaciones);

console.log("Aprobados:", aprobados.length, "| Reprobados:", reprobados.length);
console.log("Promedio:", promedio, "| Max:", maxima, "| Min:", minima);
