/**
 * ============================================
 * 01 - INTRODUCCION A TYPESCRIPT
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
 *
 * NOTA DEL CORRECTOR:
 * El profesor escribe que aplicarDescuento("250", 10) produce NaN.
 * En realidad, JavaScript CONVIERTE automaticamente strings a
 * numeros con los operadores -, * y /. Por lo tanto:
 *   "250" * 0.1 = 25  y  "250" - 25 = 225
 * El resultado es 225 (NO NaN). Funciona "de casualidad".
 *
 * El peligro real esta en el operador +, que CONCATENA en lugar
 * de sumar cuando hay un string de por medio.
 */

function aplicarDescuentoJS(precio, pct) {
  return precio - precio * (pct / 100);
}

// En JS estas llamadas "funcionan" por coercion automatica
// pero es un comportamiento accidental e inseguro:
console.log("JS con string:", aplicarDescuentoJS("250", 10)); // 225 (funciona de casualidad)
console.log("JS con string:", aplicarDescuentoJS(250, "10")); // 225 (idem)

// --- TypeScript (con tipos) ---
// Anadimos :number a los parametros para que TS verifique los tipos.

function aplicarDescuentoTS(precio: number, pct: number): number {
  return precio - precio * (pct / 100);
}

// La siguiente linea NO compila - TS la rechaza antes de ejecutar:
// aplicarDescuentoTS("250", 10);
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log("TS correcto:", aplicarDescuentoTS(250, 10)); // 225

// --- Ejemplo del bug REAL con el operador + ---
// El operador + SI causa concatenacion cuando hay un string:

function calcularTotalJS(precio, impuesto) {
  return precio + precio * (impuesto / 100);
}

// En JS, "250" + 25 = "25025" (concatenacion) - BUG REAL
console.log("JS bug con +:", calcularTotalJS("250", 10)); // "25025" - error

function calcularTotalTS(precio: number, impuesto: number): number {
  return precio + precio * (impuesto / 100);
}

// calcularTotalTS("250", 10); // Error: TS lo detecta
console.log("TS correcto:", calcularTotalTS(250, 10)); // 275

// ──────────────────────────────────────────────
// A.2: Ejemplo aplicado - API de usuarios
// ──────────────────────────────────────────────

/**
 * Imagina un endpoint que recibe el ID de usuario y devuelve su nombre.
 * En JS es facil pasar accidentalmente un objeto en lugar de un numero.
 * TS atrapa ese error antes de ejecutar.
 */

interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana Garcia",   activo: true  },
  { id: 2, nombre: "Luis Perez",   activo: false },
  { id: 3, nombre: "Maria Torres", activo: true  },
];

function buscarUsuario(id: number): Usuario | undefined {
  return usuarios.find((u) => u.id === id);
}

const u = buscarUsuario(2);
console.log("Usuario encontrado:", u?.nombre); // Luis Perez

// TS detecta el error si pasamos un objeto en lugar de numero:
// buscarUsuario({ id: 2 });
// Error: Argument of type '{ id: number; }' is not assignable to parameter of type 'number'.

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

const saludo: string = "Hola, TypeScript";
const version: number = 5;

console.log(`${saludo} v${version}`);
// Hola, TypeScript v5

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
