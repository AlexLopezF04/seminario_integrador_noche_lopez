/**
 * ============================================
 * 19 - DECLARACION DE FUNCIONES
 * ============================================
 * Temas:
 *   - Parametros tipados y tipo de retorno explicito
 *   - Funciones flecha (arrow functions)
 *   - Retorno implicito vs explicito
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Declaracion con parametros tipados
// ──────────────────────────────────────────────

// Cada parametro lleva :Tipo, y tras el parentesis va :TipoRetorno
function suma(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): string {
  return "Hola, " + nombre;
}

console.log(suma(3, 4));        // 7
console.log(saludar("Sofia"));  // Hola, Sofia

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
function cuadrado(n: number): number {
  return n * n;
}

// Flecha con cuerpo explicito
const cuadradoFlecha = (n: number): number => {
  return n * n;
};

// Flecha con retorno implicito (sin llaves, una sola expresion)
const cuadradoCorto = (n: number): number => n * n;

// Sin parametros
const ahora = (): string => new Date().toLocaleTimeString();

// Un solo parametro
const doble = (n: number): number => n * 2;

console.log(cuadrado(5));        // 25
console.log(cuadradoFlecha(5));  // 25
console.log(cuadradoCorto(5));   // 25
console.log(doble(7));           // 14
console.log(ahora());            // ej: "10:34:22"

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

function calcularDescuento(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenCompra(producto: string, precio: number, descuento: number): string {
  const final = calcularDescuento(precio, descuento);
  return producto + ": $" + precio + " -> $" + final + " (" + descuento + "% off)";
}

console.log(resumenCompra("Teclado", 120, 15));
console.log(resumenCompra("Monitor", 350, 20));
console.log(resumenCompra("Mouse", 45, 0));
