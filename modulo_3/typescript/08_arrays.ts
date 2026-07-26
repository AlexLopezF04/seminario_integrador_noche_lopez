/**
 * ============================================
 * 08 - ARRAYS
 * ============================================
 * Temas:
 *   - Sintaxis: tipo[] y Array<tipo>
 *   - Metodos tipados: map, filter, reduce
 *   - Mutacion: push, pop, shift, unshift
 *   - Busqueda: includes, indexOf, find
 *   - Arrays de objetos
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Sintaxis y metodos basicos tipados
// ──────────────────────────────────────────────

// Dos formas equivalentes de anotar un array:
const numeros: number[] = [1, 2, 3, 4, 5];
const textos: Array<string> = ["a", "b", "c"];   // forma generica

// TypeScript infiere el tipo del array si lo inicializas
const inferido = [10, 20, 30]; // number[] inferido

// Metodos tipados: el compilador conoce el tipo del elemento
const dobles: number[] = numeros.map((n) => n * 2);          // [2, 4, 6, 8, 10]
const pares: number[] = numeros.filter((n) => n % 2 === 0);   // [2, 4]
const suma: number = numeros.reduce((acc, n) => acc + n, 0);   // 15

// Mutacion (cambia el array original)
numeros.push(6);        // agrega al final
numeros.unshift(0);     // agrega al inicio
const ultimo = numeros.pop();    // elimina y devuelve el ultimo
const primero = numeros.shift(); // elimina y devuelve el primero

// Busqueda
const existe: boolean = numeros.includes(3);        // true
const indice: number = numeros.indexOf(3);          // posicion o -1
const encontrado: number | undefined = numeros.find((n) => n > 4); // 5

// ──────────────────────────────────────────────
// B.2: Arrays de objetos
// ──────────────────────────────────────────────

/**
 * Los arrays mas comunes en aplicaciones reales contienen objetos.
 * TypeScript tipa cada propiedad y autocompletara al acceder a ellas.
 */

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 999,  disponible: true },
  { id: 2, nombre: "Mouse",   precio: 25,   disponible: true },
  { id: 3, nombre: "Monitor", precio: 350,  disponible: false },
];

// TypeScript sabe que cada "p" es de tipo Producto
const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log("nombres:", nombres);              // ["Laptop", "Mouse", "Monitor"]
console.log("mas barato:", masBarato?.nombre); // "Mouse"
console.log("disponibles:", disponibles.length); // 2

// ──────────────────────────────────────────────
// EJEMPLO: Procesador de calificaciones
// ──────────────────────────────────────────────

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
// Aprobados: 5 | Reprobados: 2
// Promedio: 77.3 | Max: 98 | Min: 55
