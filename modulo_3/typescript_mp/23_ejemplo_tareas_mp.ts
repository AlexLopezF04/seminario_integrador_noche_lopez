/**
 * ============================================
 * 23 - EJEMPLO COMBINADO: GESTION DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Sobrecargas, rest, opcionales, void/never,
 * orden superior, closures
 * Cursos Online: CRUD de cursos con busqueda por
 * prioridad, acumulador de estudiantes, validacion.
 * ============================================
 */

type PrioridadCurso = "alta" | "media" | "baja";
type CursoGestion = { id: number; titulo: string; prioridad: PrioridadCurso; horas: number };

function buscarCursoGestion(id: number): CursoGestion | undefined;
function buscarCursoGestion(prioridad: PrioridadCurso): CursoGestion[];
function buscarCursoGestion(criterio: number | PrioridadCurso): CursoGestion | CursoGestion[] | undefined {
  if (typeof criterio === "number") {
    return cursosGestion.find((c) => c.id === criterio);
  }
  return cursosGestion.filter((c) => c.prioridad === criterio);
}

function crearCursos(prioridad: PrioridadCurso = "media", ...titulos: string[]): CursoGestion[] {
  return titulos.map((titulo, i) => ({
    id: Date.now() + i,
    titulo,
    prioridad,
    horas: 0,
  }));
}

type AnalizadorCurso = (c: CursoGestion) => string;

const formatearCurso: AnalizadorCurso = (c) =>
  "[" + c.prioridad.toUpperCase().padEnd(5) + "] #" + c.id + ' "' + c.titulo + '" (' + c.horas + "h)";

function generarReporteCursos(lista: CursoGestion[], analizar: AnalizadorCurso): void {
  console.log("=== Reporte de Cursos ===");
  lista.forEach((c) => console.log(analizar(c)));
  const totalHoras = lista.reduce((acc, c) => acc + c.horas, 0);
  console.log("Total: " + lista.length + " cursos . " + totalHoras + "h estimadas");
}

function crearAcumuladorHoras() {
  let total = 0;
  return {
    agregar: (horas: number): void => { total += horas; },
    obtener: (): number => total,
  };
}

function validarCurso(c: CursoGestion): void {
  if (c.titulo.trim() === "") lanzarValidacionCurso("El titulo no puede estar vacio");
  if (c.horas < 0)            lanzarValidacionCurso("Las horas no pueden ser negativas");
}

function lanzarValidacionCurso(msg: string): never {
  throw new Error("Validacion fallida: " + msg);
}

const cursosGestion: CursoGestion[] = [
  { id: 1, titulo: "Diseniar API",       prioridad: "alta",  horas: 8 },
  { id: 2, titulo: "Escribir pruebas",   prioridad: "media", horas: 4 },
  { id: 3, titulo: "Actualizar docs",    prioridad: "baja",  horas: 2 },
  { id: 4, titulo: "Code review curso",  prioridad: "alta",  horas: 3 },
];

const acum = crearAcumuladorHoras();
cursosGestion.forEach((c) => {
  validarCurso(c);
  acum.agregar(c.horas);
});

generarReporteCursos(cursosGestion, formatearCurso);
console.log("Horas totales (closure): " + acum.obtener() + "h");

const altaPrioridad = buscarCursoGestion("alta");
const cursoId1      = buscarCursoGestion(1);

console.log("Cursos de alta prioridad:", altaPrioridad.map((c) => c.titulo));
console.log("Curso #1:", cursoId1?.titulo);
