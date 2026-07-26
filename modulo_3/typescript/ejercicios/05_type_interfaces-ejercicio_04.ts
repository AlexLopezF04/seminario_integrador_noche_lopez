/**
 * ============================================
 * EJERCICIO 1: Moneda y Precio (type alias)
 * ============================================
 * Tema: type alias (A.1)
 *
 * Enunciado:
 * Define type Moneda = "USD" | "EUR" | "MXN".
 * Define type Precio = { monto: number; moneda: Moneda }.
 * Crea tres objetos Precio con monedas distintas y muestralos.
 * ============================================
 */

type Moneda = "USD" | "EUR" | "MXN";
type Precio = { monto: number; moneda: Moneda };

const p1: Precio = { monto: 100, moneda: "USD" };
const p2: Precio = { monto: 200, moneda: "EUR" };
const p3: Precio = { monto: 150, moneda: "MXN" };

console.log("P1:", p1.monto, p1.moneda);
console.log("P2:", p2.monto, p2.moneda);
console.log("P3:", p3.monto, p3.moneda);
