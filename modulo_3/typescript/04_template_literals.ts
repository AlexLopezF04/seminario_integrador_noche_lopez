/**
 * ============================================
 * 04 - TEMPLATE LITERALS
 * ============================================
 * Temas:
 *   - Sintaxis de template literals (backtick `)
 *   - Interpolacion de expresiones con ${ }
 *   - Strings multi-linea sin concatenacion
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE E: TEMPLATE LITERALS Y OPERACIONES TIPADAS
// ──────────────────────────────────────────────

// --- E.1: Template literals con tipos ---

/**
 * Concepto puro - template literals con backtick ``.
 * Permiten interpolar cualquier expresion dentro de ${ }.
 */

const nombre: string = "Ana";
const rol: string    = "administradora";
const sesiones: number = 42;

// Interpolacion basica:
const bienvenida: string = `Bienvenida, ${nombre}. Rol: ${rol}. Sesiones: ${sesiones}.`;
console.log(bienvenida);
// Bienvenida, Ana. Rol: administradora. Sesiones: 42.

// Expresiones dentro de ${ }:
const precio: number = 1200;
const iva: number    = 0.19;
const total: string  = `Precio con IVA: $${(precio * (1 + iva)).toFixed(2)}`;
console.log(total);
// Precio con IVA: $1428.00

// Multi-linea - sin concatenacion ni \n:
const reporte: string = `
=== Reporte del sistema ===
Servidor : web-01
Estado   : activo
Uptime   : 99.9%
`;
console.log(reporte);

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Generador de logs de servidor
// ──────────────────────────────────────────────

/**
 * Los sistemas de backend generan miles de lineas de log por hora.
 * TypeScript asegura que los campos siempre sean del tipo correcto.
 */

type NivelLog = "INFO" | "WARN" | "ERROR";

function log(nivel: NivelLog, servicio: string, mensaje: string): string {
  const timestamp = new Date().toISOString();
  const prefijo   = nivel === "ERROR" ? "[X]" : nivel === "WARN" ? "[!]" : "[✓]";
  return `[${timestamp}] ${prefijo} [${nivel}] [${servicio}] ${mensaje}`;
}

console.log(log("INFO",  "AuthService",  "Usuario 'ana' ha iniciado sesion"));
console.log(log("WARN",  "DbPool",       "Conexiones al 80% de capacidad"));
console.log(log("ERROR", "PaymentGW",    "Timeout al procesar pago #4821"));

// TS detecta el error si pasas un nivel invalido:
// log("DEBUG", "Cache", "Hit");
// Error: Argument of type '"DEBUG"' is not assignable to parameter of type 'NivelLog'
