/**
 * ============================================
 * 12 - ANY, UNKNOWN Y NEVER
 * Tematica: Cursos Online
 * ============================================
 * Concepto: any (desactiva tipos), unknown (version segura),
 * never (codigo inalcanzable), switch exhaustivo
 * Cursos Online: Validacion de datos de cursos de fuentes
 * externas, tipos de contenido educativo, agotamiento de casos.
 * ============================================
 */

let cualquierCurso: any = "TypeScript";
cualquierCurso = 42;
cualquierCurso = true;
cualquierCurso.metodoFalso(); // Sin error en compilacion

let datoCurso: unknown = "hola";
datoCurso = 42;

if (typeof datoCurso === "string") {
  console.log(datoCurso.toUpperCase());
}

type SinValor = string & number;

type TipoCurso = "grabado" | "en-vivo" | "mixto";

function obtenerTipoCurso(): TipoCurso {
  return "grabado";
}
const tipoCurso: TipoCurso = obtenerTipoCurso();
const duracionTotal: number = 40;
let areaCurso: number;

switch (tipoCurso) {
  case "grabado":
    areaCurso = duracionTotal * 1.0;
    break;
  case "en-vivo":
    areaCurso = duracionTotal * 1.5;
    break;
  case "mixto":
    areaCurso = duracionTotal * 2.0;
    break;
  default:
    const _agotado: never = tipoCurso;
    areaCurso = 0;
}
console.log("Duracion total:", areaCurso.toFixed(2), "h");
