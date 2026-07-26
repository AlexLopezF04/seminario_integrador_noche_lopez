/**
 * ============================================
 * 22 - SOBRECARGAS DE FUNCION (OVERLOADS)
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Firmas multiples, distinto retorno segun firma
 * Cursos Online: Buscar curso por ID (number) o por
 * nombre (string), formatear precio o texto de curso.
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Function overloads
// ──────────────────────────────────────────────

/**
 * Las sobrecargas permiten que una misma funcion acepte
 * distintas combinaciones de tipos de parametros, con
 * retornos distintos segun la firma usada.
 *
 * 1. Se declaran varias firmas de sobrecarga (sin cuerpo)
 * 2. Una sola implementacion (no visible para quien llama)
 */

// Firmas de sobrecarga
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

// Implementacion (debe ser compatible con todas las firmas)
function formatear(valor: number | string | boolean): string {
  if (typeof valor === "number") {
    return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
  }
  if (typeof valor === "boolean") {
    return valor ? "Si" : "No";
  }
  return '"' + valor + '"';
}

// TS conoce el retorno exacto segun la firma usada
console.log(formatear(1234567.5)); // 1,234,567.50
console.log(formatear(true));      // Si
console.log(formatear("activo"));  // "activo"

// ──────────────────────────────────────────────
// EJEMPLO: Buscador polimorfico
// ──────────────────────────────────────────────

type CursoBusqueda = { id: number; titulo: string; precio: number };

const catalogoCursos: CursoBusqueda[] = [
  { id: 1, titulo: "TypeScript", precio: 1200 },
  { id: 2, titulo: "Node.js",    precio: 80   },
  { id: 3, titulo: "React",      precio: 350  },
];

function buscarCurso(id: number): CursoBusqueda | undefined;
function buscarCurso(titulo: string): CursoBusqueda[];

function buscarCurso(criterio: number | string): CursoBusqueda | CursoBusqueda[] | undefined {
  if (typeof criterio === "number") {
    return catalogoCursos.find((c) => c.id === criterio);
  }
  const termino = criterio.toLowerCase();
  return catalogoCursos.filter((c) => c.titulo.toLowerCase().includes(termino));
}

const porIdCurso     = buscarCurso(2);
const porNombreCurso = buscarCurso("React");

console.log("Buscar por id 2:", porIdCurso);
console.log("Buscar por nombre 'React':", porNombreCurso);
