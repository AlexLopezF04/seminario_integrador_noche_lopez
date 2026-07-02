/**
 * ============================================
 * EJERCICIO 4: Template literals con formatearPrecio
 * ============================================
 * Enunciado:
 * Escribe function formatearPrecio(producto: string,
 * precio: number, moneda: string): string que devuelva algo como
 * "Laptop → $1,299.00 USD". Llama con tres productos distintos.
 * Extra: anade parametro descuentoPct: number y muestra
 * el precio con descuento.
 * ============================================
 */

function formatearPrecio(producto: string, precio: number, moneda: string): string {
  return `${producto} → $${precio.toFixed(2)} ${moneda}`;
}

console.log(formatearPrecio("Laptop", 1299.00, "USD"));
console.log(formatearPrecio("Mouse", 45.50, "USD"));
console.log(formatearPrecio("Teclado", 89.99, "USD"));

// Extra: con descuento
function formatearPrecioConDescuento(
  producto: string,
  precio: number,
  moneda: string,
  descuentoPct: number
): string {
  const precioFinal = precio * (1 - descuentoPct / 100);
  return `${producto} → $${precioFinal.toFixed(2)} ${moneda} (${descuentoPct}% desc.)`;
}

console.log(formatearPrecioConDescuento("Monitor", 450.00, "USD", 10));
// Monitor → $405.00 USD (10% desc.)
