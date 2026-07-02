/**
 * ============================================
 * 05 - EL COMPILADOR COMO RED DE SEGURIDAD
 * ============================================
 * Temas:
 *   - Por que evitar any
 *   - unknown como alternativa segura
 *   - Strict mode en accion
 *     o  strictNullChecks
 *     o  noImplicitAny
 *     o  strictPropertyInitialization
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE F: EL COMPILADOR COMO RED DE SEGURIDAD
// ──────────────────────────────────────────────

// --- F.1: Por que evitar any ---

/**
 * any le dice a TS "no verifiques este valor".
 * Es el equivalente a apagar el sistema de seguridad del auto.
 * Cada any que escribes es una zona sin proteccion.
 */

let dato: any = "hola";
dato = 42;        // any acepta cualquier cosa
dato = true;      // ok
dato = { x: 1 };  // ok - TS no protesta pero tampoco ayuda

// El peligro: los errores vuelven a ser silenciosos
function duplicar(valor: any): any {
  return valor * 2;  // si valor es un string, devuelve NaN y TS no avisa
}

console.log("any con numero:", duplicar(5));      // 10
console.log("any con string:", duplicar("hola")); // NaN - bug silencioso

// La alternativa correcta: anotar el tipo real
function duplicarSeguro(valor: number): number {
  return valor * 2;
}
// duplicarSeguro("hola");  // Error: Argument of type 'string' is not assignable
//                          // to parameter of type 'number'

// --- F.1.b: unknown - alternativa segura a any ---

/**
 * unknown es como any, pero NO puedes operar con el
 * sin verificar el tipo primero. Es "any seguro".
 *
 * Si no conoces el tipo todavia, usa unknown en lugar de any.
 */

function procesarValor(valor: unknown): string {
  // Esto NO compila: no podemos operar con unknown sin verificar
  // return valor.toUpperCase();

  // Debemos verificar el tipo primero (type narrowing):
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return `Valor no es string, es: ${typeof valor}`;
}

console.log(procesarValor("hola"));      // HOLA
console.log(procesarValor(42));          // Valor no es string, es: number

// --- F.2: Strict mode en accion ---

/**
 * Con "strict": true en tsconfig.json, el compilador activa
 * estas verificaciones automaticamente.
 */

// 1. strictNullChecks: null y undefined se tratan como tipos propios
let nombre: string = "Luis";
// nombre = null;  // Error: Type 'null' is not assignable to type 'string'

let apodo: string | null = null;  // para admitir null, debes declararlo
apodo = "Lucho";  // ok

// 2. noImplicitAny: no puedes olvidar el tipo en parametros
// function procesar(datos) { ... }  // Error: Parameter 'datos' implicitly has an 'any' type

function procesar(datos: string): string {
  return datos.toUpperCase();  // ok, TS sabe que datos es string
}

// 3. strictPropertyInitialization: propiedades de clase deben inicializarse
class Servidor {
  nombre: string;
  puerto: number;

  constructor(nombre: string, puerto: number) {
    this.nombre = nombre;
    this.puerto = puerto;
  }
}

const s = new Servidor("api-01", 3000);
console.log(`${s.nombre}:${s.puerto}`);  // api-01:3000
