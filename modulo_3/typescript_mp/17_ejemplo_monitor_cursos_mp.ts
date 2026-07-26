/**
 * ============================================
 * 18 - EJEMPLO COMBINADO: MONITOR DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: if anidado, switch, for...of, while,
 * break/continue, estados tipados
 * Cursos Online: Monitoreo del estado de cursos
 * activos, rendimiento y alertas.
 * ============================================
 */

type EstadoCurso = "publicado" | "lento" | "inactivo";

interface CursoMonitor {
  titulo: string;
  estado: EstadoCurso;
  estudiantes: number;
}

const cursosMonit: CursoMonitor[] = [
  { titulo: "TypeScript Basico",   estado: "publicado", estudiantes: 125 },
  { titulo: "Arquitectura",        estado: "lento",     estudiantes: 320 },
  { titulo: "Node Avanzado",       estado: "inactivo",  estudiantes: 0 },
  { titulo: "React Pro",           estado: "publicado", estudiantes: 80 },
];

console.log("=== Diagnostico de Cursos ===");
let inactivos = 0;

for (const c of cursosMonit) {
  if (c.estado === "inactivo") inactivos++;

  let icono: string;
  switch (c.estado) {
    case "publicado": icono = "[ok]";    break;
    case "lento":     icono = "[!]";     break;
    case "inactivo":  icono = "[XX]";    break;
    default:          icono = "[?]";
  }

  let diagnostico: string;
  if (c.estado === "publicado") {
    if (c.estudiantes < 100) {
      diagnostico = icono + " " + c.titulo + ": pocos estudiantes (" + c.estudiantes + ")";
    } else {
      diagnostico = icono + " " + c.titulo + ": buena inscripcion (" + c.estudiantes + ")";
    }
  } else {
    diagnostico = icono + " " + c.titulo + ": requiere atencion (" + c.estado + ")";
  }

  console.log(diagnostico);
}

let alertaInactivos = inactivos;
while (alertaInactivos > 0) {
  console.log("[!] Quedan " + alertaInactivos + " curso(s) inactivo(s) - notificando...");
  alertaInactivos--;
}

console.log("Resumen: " + inactivos + "/" + cursosMonit.length + " inactivos");
