/**
 * ============================================
 * 03 - TIPOS PRIMITIVOS
 * ============================================
 * Temas:
 *   - number
 *   - string
 *   - boolean
 *   - Operaciones con cada tipo
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE D: TIPOS PRIMITIVOS
// ──────────────────────────────────────────────

/**
 * Los tres tipos primitivos mas usados en TypeScript.
 * El detalle completo (arrays, tuplas, enums, union types,
 * any, unknown, never) se ve en la Pagina 2 del tutorial.
 */

// --- D.1: number ---
// Acepta enteros, decimales, negativos y hexadecimales

const precio: number      = 299.99;
const puerto: number      = 8080;
const temperatura: number = -5.3;
const hexColor: number    = 0xff5733;  // tambien acepta hexadecimal

// --- string ---
// Se puede usar comillas simples, dobles o backtick (template literals)

const email: string    = "soporte@empresa.com";
const protocolo: string = 'HTTPS';
const ruta: string     = `/api/v2/usuarios`;

// --- boolean ---
// Solo acepta true o false

const estaActivo: boolean  = true;
const requiereAuth: boolean = false;
const esAdmin: boolean      = false;

// ──────────────────────────────────────────────
// OPERACIONES COMUNES
// ──────────────────────────────────────────────

// Aritmetica con number:
const subtotal = 1500;
const descuento = 150;
const total = subtotal - descuento;  // 1350

// Metodos de string:
const usuario = "  admin@corp.com  ";
console.log(usuario.trim().toLowerCase()); // "admin@corp.com"
console.log(email.includes("empresa"));    // true
console.log(email.split("@")[1]);          // "empresa.com"

// Logica con boolean:
const puedeAcceder: boolean = estaActivo && !requiereAuth;
console.log("Puede acceder:", puedeAcceder); // true

/**
 * Tip extra:
 * Los tres tipos usan "type inference" (inferencia de tipos)
 * cuando asignas un valor literal. Por ejemplo:
 *   const ciudad = "Lima";  // TS infiere: string
 *   const habitantes = 9_000_000;  // TS infiere: number
 *   const esCapital = true;  // TS infiere: boolean
 */
