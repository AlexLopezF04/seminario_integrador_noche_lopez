/**
 * ============================================
 * EJERCICIO 3: formatearPrecio (opcionales y default)
 * ============================================
 * Tema: Parametros opcionales y por defecto (B.1)
 *
 * Enunciado:
 * Escribe function formatearPrecio(monto: number, moneda: string = "USD",
 * decimales: number = 2): string que devuelva "USD 1,234.50".
 * Prueba con (1234.5), (99, "EUR") y (50.125, "MXN", 1).
 * Pista: monto.toFixed(decimales).
 * ============================================
 */

function formatearPrecio(
  monto: number,
  moneda: string = "USD",
  decimales: number = 2
): string {
  return moneda + " " + Number(monto.toFixed(decimales)).toLocaleString("es-MX", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
}

console.log(formatearPrecio(1234.5));              // USD 1,234.50
console.log(formatearPrecio(99, "EUR"));           // EUR 99.00
console.log(formatearPrecio(50.125, "MXN", 1));    // MXN 50.1
