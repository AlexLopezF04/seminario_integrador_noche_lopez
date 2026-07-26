/**
 * ============================================
 * 19 - DECLARACION DE FUNCIONES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Parametros tipados, tipo de retorno,
 * funciones flecha, retorno implicito/explicito
 * Cursos Online: Calculo de descuento en cursos,
 * resumen de compra, saludo al estudiante.
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Declaracion con parametros tipados
// ──────────────────────────────────────────────

// Cada parametro lleva :Tipo, y tras el parentesis va :TipoRetorno
function sumaNotas(a: number, b: number): number {
  return a + b;
}

function saludarEstudiante(nombre: string): string {
  return "Hola, " + nombre + " - Bienvenido al curso";
}

console.log(sumaNotas(85, 92));
console.log(saludarEstudiante("Sofia"));

// Error en compilacion:
// suma("3", 4);  // string no asignable a number

/**
 * El tipo de retorno explicito actua como contrato.
 * Si olvidas un return, el error aparece en la definicion,
 * no en quien llama la funcion.
 */

// ──────────────────────────────────────────────
// A.2: Funciones flecha (arrow functions)
// ──────────────────────────────────────────────

// Declaracion tradicional
function duplicarPrecioCurso(n: number): number {
  return n * 2;
}

const duplicarPrecioFlecha = (n: number): number => {
  return n * 2;
};

const duplicarPrecioCorto = (n: number): number => n * 2;

const ahora = (): string => new Date().toLocaleTimeString();

const doblePrecio = (n: number): number => n * 2;

console.log(duplicarPrecioCurso(500));
console.log(duplicarPrecioFlecha(500));
console.log(duplicarPrecioCorto(500));
console.log(doblePrecio(7));
console.log(ahora());

/**
 * Recomendacion:
 * - Declaracion tradicional para funciones principales (hoisting,
 *   stack traces mas legibles).
 * - Flecha para callbacks, metodos de array y cuando necesites
 *   capturar el this del contexto lexico.
 */

// ──────────────────────────────────────────────
// EJEMPLO: Calculadora de descuento
// ──────────────────────────────────────────────

function aplicarDescuentoCurso(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenCurso(curso: string, precio: number, descuento: number): string {
  const final = aplicarDescuentoCurso(precio, descuento);
  return curso + ": $" + precio + " -> $" + final + " (" + descuento + "% off)";
}

console.log(resumenCurso("TypeScript Basico", 120, 15));
console.log(resumenCurso("Node.js", 350, 20));
console.log(resumenCurso("Python", 45, 0));
