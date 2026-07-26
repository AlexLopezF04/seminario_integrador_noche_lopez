/**
 * ============================================
 * 01 - INTRODUCCION A TYPESCRIPT
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Tipado basico, inferencia y seguridad de tipos
 * Cursos Online: Calculo de precios de cursos con/sin IVA,
 * descuentos y busqueda de estudiantes por ID.
 * ============================================
 * Temas:
 *   - Que es TypeScript y por que tipos
 *   - El problema que TypeScript resuelve
 *   - Entorno de desarrollo (instalacion)
 *   - tsconfig.json y el modo estricto (strict)
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE A: QUE ES TYPESCRIPT
// ──────────────────────────────────────────────

/**
 * TypeScript es un superconjunto de JavaScript que anade
 * tipos estaticos y un compilador que detecta errores
 * ANTES de que el codigo llegue a produccion.
 *
 * Beneficio clave: los errores aparecen en el editor
 * (linea roja) mientras escribes, no cuando el usuario
 * ya esta usando la aplicacion.
 */

// ──────────────────────────────────────────────
// A.1: El problema que TypeScript resuelve
// ──────────────────────────────────────────────

// --- JavaScript puro (sin tipos) ---

/**
 * En JavaScript, cualquier funcion puede recibir
 * argumentos de cualquier tipo sin que el editor avise.
 * Aplicado a cursos online: calcular precio de curso.
 */

function calcularPrecioCursoJS(precio: any, descuento: any) {
  return precio - precio * (descuento / 100);
}

console.log("JS precio curso:", calcularPrecioCursoJS("250", 10)); // 225 (funciona de casualidad)
console.log("JS precio curso:", calcularPrecioCursoJS(250, "10")); // 225 (idem)

// --- TypeScript (con tipos) ---

function calcularPrecioCursoTS(precio: number, descuento: number): number {
  return precio - precio * (descuento / 100);
}

console.log("TS precio curso:", calcularPrecioCursoTS(250, 10)); // 225

// --- Ejemplo del bug REAL con el operador + ---

function calcularTotalCursoJS(precio: any, impuesto: any) {
  return precio + precio * (impuesto / 100);
}

console.log("JS bug con +:", calcularTotalCursoJS("250", 21)); // "25052.5" - concatenacion

function calcularTotalCursoTS(precio: number, impuesto: number): number {
  return precio + precio * (impuesto / 100);
}

console.log("TS total curso:", calcularTotalCursoTS(250, 21)); // 302.5

// ──────────────────────────────────────────────
// A.2: Ejemplo aplicado - Busqueda de estudiantes
// ──────────────────────────────────────────────

interface Estudiante {
  id: number;
  nombre: string;
  activo: boolean;
}

const estudiantes: Estudiante[] = [
  { id: 1, nombre: "Ana Garcia",   activo: true  },
  { id: 2, nombre: "Luis Perez",   activo: false },
  { id: 3, nombre: "Maria Torres", activo: true  },
];

function buscarEstudiante(id: number): Estudiante | undefined {
  return estudiantes.find((e) => e.id === id);
}

const e = buscarEstudiante(2);
console.log("Estudiante encontrado:", e?.nombre); // Luis Perez

// ──────────────────────────────────────────────
// PARTE B: ENTORNO DE DESARROLLO
// ──────────────────────────────────────────────

/**
 * Para ejecutar TypeScript localmente:
 *
 * 1. npm init -y                          (crear package.json)
 * 2. npm install --save-dev typescript tsx (instalar herramientas)
 * 3. npx tsx archivo.ts                   (ejecutar directo, sin compilar)
 * 4. npx tsc archivo.ts                   (compilar a JavaScript)
 *
 * Tambien puedes usar el TypeScript Playground:
 * https://www.typescriptlang.org/play
 */

// ──────────────────────────────────────────────
// B.1: Primer archivo TypeScript local
// ──────────────────────────────────────────────

const saludo: string = "Hola, Cursos Online TS";
const version: number = 5;

console.log(`${saludo} v${version}`);

// ──────────────────────────────────────────────
// B.2: tsconfig.json y el modo estricto
// ──────────────────────────────────────────────

/**
 * El archivo tsconfig.json controla como se comporta el compilador.
 * La opcion mas importante para codigo robusto es "strict": true.
 *
 * "strict": true activa, entre otras verificaciones:
 *   - strictNullChecks: null y undefined no son asignables a otros tipos
 *   - noImplicitAny: no puedes dejar variables sin tipo sin querer
 *   - strictFunctionTypes: funciones se verifican de forma covariante
 *   - strictPropertyInitialization: las propiedades de clase deben inicializarse
 *
 * Ejemplo de tsconfig.json basico:
 * {
 *   "compilerOptions": {
 *     "target": "ES2022",
 *     "module": "ESNext",
 *     "strict": true
 *   }
 * }
 *
 * Los proyectos sin strict acumulan deuda tecnica:
 * errores que TS podria atrapar pasan desapercibidos.
 * Todos los ejemplos de este curso asumen "strict": true.
 */

// Ejemplo: strictNullChecks evita asignar null a string
let nombre: string = "Luis";
// nombre = null; // Error si strictNullChecks esta activo

// Para admitir null, debes declararlo explicitamente:
let apodo: string | null = null;
apodo = "Lucho"; // ok
