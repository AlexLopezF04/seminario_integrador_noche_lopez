/**
 * ============================================
 * 11 - UNION TYPES Y LITERAL TYPES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Union types (string | number), union con
 * objetos (discriminada), literal types (valores exactos)
 * Cursos Online: TipoContenido ('video'|'pdf'|'quiz'),
 * IdCurso (string|number), nivel de dificultad exacto.
 * ============================================
 */

type IdCurso = string | number;

const idNumerico: IdCurso = 42;
const idTexto: IdCurso = "CURSO-123";
console.log("Buscando curso con id:", idNumerico, "(tipo:", typeof idNumerico + ")");
console.log("Buscando curso con id:", idTexto, "(tipo:", typeof idTexto + ")");

type RespuestaCurso =
  | { exito: true;  cursos: string[] }
  | { exito: false; error: string  };

const respuestaOk: RespuestaCurso = { exito: true, cursos: ["TS", "JS", "Python"] };
const respuestaError: RespuestaCurso = { exito: false, error: "No se pudo conectar" };

type TipoContenido = "video" | "pdf" | "quiz" | "examen";
type Dificultad = 1 | 2 | 3 | 4 | 5;
type NivelMinimo = 1;  // solo puede ser 1 (principiante minimo)

let tipoContenido: TipoContenido = "video";
let dificultad: Dificultad = 3;
let nivelMinimo: NivelMinimo = 1;

const contenido: TipoContenido = "pdf";
const duracionMinutos: number = 45;
console.log("Contenido:", contenido, "- Duracion:", duracionMinutos, "min");
