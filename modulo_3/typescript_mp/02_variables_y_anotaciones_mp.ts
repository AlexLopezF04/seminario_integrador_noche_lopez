/**
 * ============================================
 * 02 - VARIABLES Y ANOTACIONES DE TIPO
 * Tematica: Cursos Online
 * ============================================
 * Concepto: const/let, anotacion explicita vs inferencia
 * Cursos Online: Configuracion de plataforma educativa
 * (nombre, version, modo debug, estado de servidor,
 * contador de estudiantes activos, codigos de estado HTTP).
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
const NOMBRE_PLATAFORMA: string = "CursosOnline";
const VERSION_API: string = "v2.0";
const MODO_DEBUG: boolean = false;

// let - valor que puede cambiar
let contadorEstudiantes: number = 0;
let estadoServidor: string = "desconectado";
let plataformaActiva: boolean = false;

contadorEstudiantes++;          // 1
estadoServidor = "conectado";   // ok
plataformaActiva = true;        // ok

// NOMBRE_PLATAFORMA = "Otro";  // Error: Cannot assign to a constant

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
const puertoAPI: number = 3000;
const hostAPI: string = "api.cursosenlinea.com";
const activoAPI: boolean = true;

// Inferencia de tipo: TS deduce el tipo del valor inicial
const puertoAPI2 = 3000;            // TypeScript infiere: number
const hostAPI2 = "localhost";       // TypeScript infiere: string
const activoAPI2 = true;            // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con tipo incorrecto, TS da error en ambos casos:
// puerto2 = "9000";  // Error: Type 'string' is not assignable to type 'number'

// --- Cuando anotar explicitamente ---

// 1. Variables declaradas sin valor inicial:
let duracionCursoSegundos: number;  // sin inicializar - necesita anotacion
duracionCursoSegundos = 7200;

// 2. Cuando quieres un tipo mas amplio que el valor inicial:
let codigoCurso: number | string = 101;  // acepta numero o string
codigoCurso = "CURSO-101";               // valido

// 3. Parametros de funciones (TS no puede inferirlos):
function verEstudiante(nombre: string, curso: string): string {
  return `${nombre} inscrito en ${curso}`;
}

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Dashboard de plataforma educativa
// ──────────────────────────────────────────────

const NOMBRE_SERVIDOR = "cursos-api-01";  // inferido: string
const PUERTO_DEFAULT  = 443;              // inferido: number
const ES_PRODUCCION   = true;             // inferido: boolean

let estudiantesConectados: number = 0;
let ultimoErrorCurso: string | null = null;

function registrarAccionCurso(ruta: string, codigoHttp: number): void {
  estudiantesConectados++;
  console.log(`[${NOMBRE_SERVIDOR}] ${codigoHttp} ${ruta} - conectados: ${estudiantesConectados}`);
}

registrarAccionCurso("/api/cursos", 200);
registrarAccionCurso("/api/inscripciones", 404);
