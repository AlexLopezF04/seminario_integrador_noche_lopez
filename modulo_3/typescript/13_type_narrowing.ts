/**
 * ============================================
 * 13 - TYPE NARROWING (ESTRECHAMIENTO DE TIPOS)
 * ============================================
 * Temas:
 *   - typeof
 *   - Truthiness
 *   - Igualdad (===)
 *   - Array.isArray
 *   - Operador "in"
 *   - Discriminated union con switch
 * ============================================
 */

// ──────────────────────────────────────────────
// G.1: Tecnicas de narrowing
// ──────────────────────────────────────────────

/**
 * Narrowing es el proceso por el que TypeScript reduce el tipo
 * de una variable dentro de un bloque gracias a comprobaciones.
 */

// --- typeof ---
let valorFormateado: string | number = "hola mundo";
let resultadoFormato: string;
if (typeof valorFormateado === "string") {
  resultadoFormato = valorFormateado.toUpperCase(); // TS sabe que es string
} else {
  resultadoFormato = valorFormateado.toFixed(2);    // TS sabe que es number
}
console.log(resultadoFormato);

// --- Truthiness ---
const nombreOpcional: string | null = null;
const saludo: string = nombreOpcional
  ? "Hola, " + nombreOpcional  // aqui nombreOpcional es string (no null)
  : "Hola, invitado";
console.log(saludo);

// --- Igualdad (===) ---
const valorA: string | number = 42;
const valorB: string | number = 42;
if (valorA === valorB) {
  console.log("Iguales:", valorA);
} else {
  console.log("Distintos");
}

// --- Array.isArray ---
const datoArray: string | string[] = ["uno", "dos", "tres"];
const conteo: number = Array.isArray(datoArray) ? datoArray.length : 1;
console.log("conteo:", conteo); // 3

// --- Operador "in" ---
type Perro = { nombre: string; raza: string };
type Gato  = { nombre: string; vidas: number };

const animal: Perro | Gato = { nombre: "Rex", raza: "Labrador" };

if ("raza" in animal) {
  // TS sabe que aqui animal es Perro (solo Perro tiene "raza")
  console.log("Perro:", animal.nombre, "raza", animal.raza);
} else {
  // TS sabe que aqui animal es Gato
  console.log("Gato:", animal.nombre, "vidas:", (animal as Gato).vidas);
}

// ──────────────────────────────────────────────
// EJEMPLO: Procesador de pagos multi-metodo
// ──────────────────────────────────────────────

type PagoTarjeta  = { metodo: "tarjeta";  numero: string; cvv: number };
type PagoTransfer = { metodo: "transferencia"; banco: string; cuenta: string };
type PagoEfectivo = { metodo: "efectivo"; moneda: string };

type Pago = PagoTarjeta | PagoTransfer | PagoEfectivo;

const pagos: Array<{ pago: Pago; monto: number }> = [
  { pago: { metodo: "tarjeta", numero: "4111111111111234", cvv: 123 }, monto: 500 },
  { pago: { metodo: "transferencia", banco: "BBVA", cuenta: "ES12345" }, monto: 200 },
  { pago: { metodo: "efectivo", moneda: "MXN" }, monto: 150 },
];

for (const { pago, monto } of pagos) {
  let descripcion: string;
  switch (pago.metodo) {
    case "tarjeta":
      descripcion = "Cobrando $" + monto + " a tarjeta ****" + pago.numero.slice(-4);
      break;
    case "transferencia":
      descripcion = "Transfiriendo $" + monto + " via " + pago.banco + " a " + pago.cuenta;
      break;
    case "efectivo":
      descripcion = "Recibiendo $" + monto + " en " + pago.moneda;
      break;
  }
  console.log(descripcion);
}
