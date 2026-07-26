/**
 * ============================================
 * 20 - PARAMETROS AVANZADOS Y RETORNOS ESPECIALES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Opcionales (?), por defecto (=), rest (...),
 * void, never
 * Cursos Online: Etiquetas de curso, busqueda de
 * estudiantes, rutas de API educativa.
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Opcionales (?) y por defecto (=)
// ──────────────────────────────────────────────

// Opcional: puede omitirse, dentro es T | undefined
function crearEtiquetaCurso(texto: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return "[" + texto.toUpperCase() + "]";
  }
  return "[" + texto + "]";
}

console.log(crearEtiquetaCurso("typescript"));
console.log(crearEtiquetaCurso("alerta", true));

function repetirModulo(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetirModulo("modulo"));
console.log(repetirModulo("modulo", 5));

// Los opcionales y default van DESPUES de los obligatorios

// ──────────────────────────────────────────────
// B.2: Rest parameters (...)
// ──────────────────────────────────────────────

// Recoge argumentos restantes en un array
function sumarDuracionCursos(...horas: number[]): number {
  return horas.reduce((acc, n) => acc + n, 0);
}

console.log(sumarDuracionCursos(40, 30, 20));
console.log(sumarDuracionCursos(10, 20, 30, 40));
console.log(sumarDuracionCursos());

function construirRutaCurso(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRutaCurso("https://api.cursos.com", "v1", "cursos", "42"));
// https://api.ejemplo.com/v1/usuarios/42

// ──────────────────────────────────────────────
// C.1: void vs never
// ──────────────────────────────────────────────

// void: no devuelve un valor util (efectos secundarios)
function imprimirLinea(texto: string): void {
  console.log(texto);
}

function lanzarErrorCurso(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) { }
}

function dividirNotas(a: number, b: number): number {
  if (b === 0) lanzarErrorCurso("Division por cero en notas");
  return a / b;
}

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de registro de eventos
// ──────────────────────────────────────────────

type NivelLog = "info" | "warn" | "error";

function logCurso(
  mensaje: string,
  nivel: NivelLog = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<NivelLog, string> = {
    info:  "[i] INFO ",
    warn:  "[!] WARN ",
    error: "[X] ERROR",
  };
  const hora = timestamp ? " [" + new Date().toISOString() + "]" : "";
  return prefijos[nivel] + hora + ": " + mensaje;
}

console.log(logCurso("Curso TypeScript iniciado"));
console.log(logCurso("Memoria alta en servidor de cursos", "warn"));
console.log(logCurso("Error al inscribir estudiante", "error", true));

function registrarEventoCurso(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? " | " + detalles.join(" . ") : "";
  console.log("[" + timestamp + "] " + tipo.toUpperCase() + cuerpo);
}

registrarEventoCurso("inicio de curso");
registrarEventoCurso("inscripcion", "estudiante: ana", "curso: TypeScript");
registrarEventoCurso("error", "modulo: pagos", "codigo: 503", "reintento: si");
