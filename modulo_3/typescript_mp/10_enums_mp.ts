/**
 * 10 - ENUMS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Enum numerico, enum string, union de literales
 * Cursos Online: NivelCurso (Principiante/Intermedio/Avanzado),
 * RolUsuario (Admin/Instructor/Estudiante), EstadoInscripcion
 * (pendiente/activa/completada/cancelada), TipoContenido.
 * ============================================
 */

enum NivelCurso {
  Principiante, Intermedio, Avanzado,
}

const nivel: NivelCurso = NivelCurso.Intermedio;
console.log("nivel:", nivel);                     // 1
console.log("mapeo inverso:", NivelCurso[1]);     // "Intermedio"

enum CodigoHTTP {
  OK = 200,
  NoEncontrado = 404,
  Error = 500,
}

enum RolUsuario {
  Admin       = "ADMIN",
  Instructor  = "INSTRUCTOR",
  Estudiante  = "ESTUDIANTE",
}

const miRol: RolUsuario = RolUsuario.Instructor;
console.log("miRol:", miRol);

type EstadoInscripcion = "pendiente" | "activa" | "completada" | "cancelada";
type Prioridad = "baja" | "media" | "alta";

const estadoInscripcion: EstadoInscripcion = "activa";
console.log("Inscripcion:", estadoInscripcion);

type PrioridadCurso = "baja" | "media" | "alta" | "critica";

interface CursoPlataforma {
  id: number;
  titulo: string;
  prioridad: PrioridadCurso;
  publicado: boolean;
}

const prefijos: Record<PrioridadCurso, string> = {
  baja: "[ ]", media: "[!]", alta: "[!!]", critica: "[!!!]",
};

const cursos: CursoPlataforma[] = [
  { id: 1, titulo: "TypeScript Basico", prioridad: "baja", publicado: true },
  { id: 2, titulo: "Arquitectura Avanzada", prioridad: "critica", publicado: false },
  { id: 3, titulo: "Node.js Intermedio", prioridad: "media", publicado: false },
];

for (const c of cursos) {
  const estado = c.publicado ? "[ok]" : "[...]";
  console.log(`${estado} ${prefijos[c.prioridad]} [#${c.id}] ${c.titulo}`);
}
