/**
 * ============================================
 * 04 - TEMPLATE LITERALS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Template strings, interpolacion de expresiones,
 * strings multi-linea sin concatenacion
 * Cursos Online: Logs del sistema de cursos con niveles
 * (INFO/WARN/ERROR), resumenes de compra de cursos,
 * reportes de plataforma educativa.
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
const rol: string    = "estudiante";
const cursos: number = 5;

const bienvenida: string = `Bienvenida, ${nombre}. Rol: ${rol}. Cursos: ${cursos}.`;
console.log(bienvenida);

const precioCurso: number = 1200;
const iva: number         = 0.19;
const total: string       = `Precio del curso con IVA: $${(precioCurso * (1 + iva)).toFixed(2)}`;
console.log(total);

const reporte: string = `
=== Reporte de la plataforma ===
Nombre    : CursosOnline
Servidor  : api-01
Estado    : activo
Uptime    : 99.9%
`;
console.log(reporte);

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Logs de la plataforma de cursos
// ──────────────────────────────────────────────

type NivelLog = "INFO" | "WARN" | "ERROR";

function log(nivel: NivelLog, servicio: string, mensaje: string): string {
  const timestamp = new Date().toISOString();
  const prefijo   = nivel === "ERROR" ? "[X]" : nivel === "WARN" ? "[!]" : "[✓]";
  return `[${timestamp}] ${prefijo} [${nivel}] [${servicio}] ${mensaje}`;
}

console.log(log("INFO",  "AuthService",    "Estudiante 'ana' ha iniciado sesion"));
console.log(log("WARN",  "CursoService",   "Capacidad de estudiantes al 80% en curso #12"));
console.log(log("ERROR", "PagoService",    "Error al procesar inscripcion #4821"));

// log("DEBUG", "Cache", "Hit"); // Error: 'DEBUG' no es NivelLog
