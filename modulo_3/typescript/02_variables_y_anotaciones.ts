/**
 * ============================================
 * 02 - VARIABLES Y ANOTACIONES DE TIPO
 * ============================================
 * Temas:
 *   - const vs let (por que evitar var)
 *   - Anotacion explicita vs inferencia de tipo
 *   - Cuando anotar explicitamente
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE C: VARIABLES
// ──────────────────────────────────────────────

// --- C.1: const vs let ---

/**
 * const: valor que NO cambia (SIEMPRE preferida por defecto).
 * let: valor que SI puede cambiar (usar SOLO si es necesario).
 * var: jamas usar en TypeScript moderno (tiene scope de funcion,
 *      no de bloque, y causa bugs dificiles de rastrear).
 */

// const - valor constante
const PI: number = 3.14159;
const NOMBRE_APP: string = "InventarioApp";
const DEBUG_MODE: boolean = false;

// let - valor que puede cambiar
let contador: number = 0;
let estadoConexion: string = "desconectado";
let usuarioActivo: boolean = false;

contador++;                    // 1
estadoConexion = "conectado";  // ok
usuarioActivo = true;          // ok

// PI = 3;  // Error: Cannot assign to 'PI' because it is a constant

/**
 * Regla practica:
 * 1. Empieza con const siempre
 * 2. Cambia a let SOLO si necesitas reasignar
 * 3. NUNCA uses var en TypeScript moderno
 */

// --- C.2: Anotacion de tipo vs inferencia ---

/**
 * TypeScript puede deducir el tipo automaticamente cuando asignas
 * un valor. No siempre tienes que escribir el tipo explicito.
 */

// Anotacion explicita: tu le dices a TS cual es el tipo
const puerto: number = 8080;
const host: string = "localhost";
const activo: boolean = true;

// Inferencia de tipo: TS deduce el tipo del valor inicial
const puerto2 = 8080;       // TypeScript infiere: number
const host2 = "localhost";  // TypeScript infiere: string
const activo2 = true;       // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con tipo incorrecto, TS da error en ambos casos:
// puerto2 = "9000";  // Error: Type 'string' is not assignable to type 'number'

// --- Cuando anotar explicitamente ---

// 1. Variables declaradas sin valor inicial:
let latencia: number;      // sin inicializar - necesita anotacion
latencia = 45;

// 2. Cuando quieres un tipo mas amplio que el valor inicial:
let codigo: number | string = 200;  // acepta numero o string
codigo = "OK";  // valido

// 3. Parametros de funciones (TS no puede inferirlos):
function ping(host: string, intentos: number): string {
  return `Ping a ${host} - ${intentos} intento(s)`;
}

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Dashboard de servidores
// ──────────────────────────────────────────────

/**
 * Las variables de estado de un servidor:
 * cuando anotar y cuando inferir.
 */

const NOMBRE_SERVIDOR = "web-prod-01";   // inferido: string - claro del valor
const PUERTO_DEFAULT  = 443;             // inferido: number
const ES_PRODUCCION   = true;            // inferido: boolean

// Variables que cambian durante la vida del servidor:
let solicitudesAtendidas: number = 0;    // anotacion: se inicializa en 0 pero cambia
let ultimoError: string | null = null;   // anotacion: puede ser null al inicio

// Funcion con anotaciones completas (necesarias en parametros):
function registrarSolicitud(ruta: string, codigoHttp: number): void {
  solicitudesAtendidas++;
  console.log(`[${NOMBRE_SERVIDOR}] ${codigoHttp} ${ruta} - total: ${solicitudesAtendidas}`);
}

registrarSolicitud("/api/usuarios", 200);
registrarSolicitud("/api/productos", 404);
// [web-prod-01] 200 /api/usuarios - total: 1
// [web-prod-01] 404 /api/productos - total: 2
