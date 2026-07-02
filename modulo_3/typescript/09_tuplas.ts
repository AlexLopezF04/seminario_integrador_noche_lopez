/**
 * ============================================
 * 09 - TUPLAS
 * ============================================
 * Temas:
 *   - Tuplas basicas: array de longitud fija con tipos por posicion
 *   - Tuplas con nombre (TS 4.0+)
 *   - Desestructuracion
 *   - Retorno multiple con tupla
 * ============================================
 */

// ──────────────────────────────────────────────
// C.1: Tuplas basicas y con nombre
// ──────────────────────────────────────────────

/**
 * Una tupla es un array con numero fijo de elementos y
 * tipos definidos por posicion. A diferencia de un array normal,
 * cada posicion puede tener un tipo distinto.
 */

type Coordenada = [number, number];           // [x, y]
type RGB = [number, number, number];          // [rojo, verde, azul]
type Entrada = [string, number];              // [clave, valor]

const punto: Coordenada = [10.5, -3.2];
const color: RGB = [255, 128, 0];            // naranja
const par: Entrada = ["temperatura", 36.6];

// Desestructuracion (la forma mas comoda de usar tuplas)
const [x, y] = punto;
const [rojo, verde, azul] = color;
const [clave, valor] = par;

console.log("Punto: x=", x, "y=", y);
console.log("Color: rgb(", rojo, ",", verde, ",", azul, ")");
console.log("Par:", clave, "=", valor);

// Tuplas con nombre (TS 4.0+) - mejoran la legibilidad
type Rango = [inicio: number, fin: number];
const horario: Rango = [9, 18];

/**
 * Recomendacion:
 * Usa tuplas para datos posicionales breves (coordenadas, rangos,
 * pares clave-valor). Si tienes 3+ campos con significado propio,
 * es mejor un objeto { x, y, z } que una tupla [x, y, z].
 */

// ──────────────────────────────────────────────
// EJEMPLO: Retorno multiple con tupla
// ──────────────────────────────────────────────

// Division segura expresada con tupla
const a: number = 10;
const b: number = 2;

const divisionResultado: [number, string] = b === 0
  ? [0, "Error: division por cero"]
  : [a / b, "ok"];

const [resultado, estado] = divisionResultado;
console.log(estado + ":", resultado);  // ok: 5

// Caso de division por cero
const d: number = 0;
const divisionResultado2: [number, string] = d === 0
  ? [0, "Error: division por cero"]
  : [5 / d, "ok"];

const [res2, estado2] = divisionResultado2;
console.log(estado2 + ":", res2);  // Error: division por cero: 0

// Patron comun en React: [valor, setter] (como useState)
type EstadoTupla = [string, (v: string) => void];
