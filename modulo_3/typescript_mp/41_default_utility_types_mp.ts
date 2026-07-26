/**
 * ============================================
 * 41 - VALORES POR DEFECTO Y UTILITY TYPES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: <T = string>, Partial, Required, Pick,
 * Omit, Record, Readonly
 * Cursos Online: Config de plataforma, opciones de
 * busqueda de cursos, crear/editar cursos con
 * Partial/Omit/Pick, roles con Record.
 * ============================================
 */

interface RespuestaCurso<T = string> {
  datos: T;
  codigo: number;
}

const r1Curso: RespuestaCurso = { datos: "Curso encontrado", codigo: 200 };
const r2Curso: RespuestaCurso<number[]> = { datos: [101, 102, 103], codigo: 200 };

console.log("Respuesta default:", r1Curso.datos);
console.log("Respuesta explicita:", r2Curso.datos);

interface ConfigPlataforma {
  host: string;
  puerto: number;
  debug: boolean;
  timeout: number;
}

function actualizarConfigCurso(base: ConfigPlataforma, cambios: Partial<ConfigPlataforma>): ConfigPlataforma {
  return { ...base, ...cambios };
}

const cfgCurso: ConfigPlataforma = { host: "api.cursos.com", puerto: 8080, debug: false, timeout: 3000 };
const nuevaConfigCurso = actualizarConfigCurso(cfgCurso, { debug: true, puerto: 9090 });
console.log("Partial:", nuevaConfigCurso);

interface OpcionesBusquedaCurso {
  query?: string;
  pagina?: number;
  limite?: number;
}
const opcionesCurso: Required<OpcionesBusquedaCurso> = { query: "TypeScript", pagina: 1, limite: 10 };
console.log("Required:", opcionesCurso);

interface CursoCompleto {
  id: number; nombre: string; precio: number; cupos: number; instructor: string;
}
type CursoResumen = Pick<CursoCompleto, "id" | "nombre" | "precio">;
const resumenCurso: CursoResumen = { id: 1, nombre: "TypeScript", precio: 2500 };
console.log("Pick:", resumenCurso);

type CursoNuevo = Omit<CursoCompleto, "id">;
const nuevoCursoRecurso: CursoNuevo = { nombre: "React", precio: 1200, cupos: 15, instructor: "Ana" };
console.log("Omit:", nuevoCursoRecurso);

type RolPlataforma = "admin" | "instructor" | "estudiante";
const permisosCurso: Record<RolPlataforma, string[]> = {
  admin:      ["crear", "editar", "borrar"],
  instructor: ["crear", "editar"],
  estudiante: ["ver"],
};
console.log("Record:", permisosCurso);

const origenCursoReadonly: Readonly<{ x: number; y: number }> = { x: 0, y: 0 };
console.log("Readonly:", origenCursoReadonly);
