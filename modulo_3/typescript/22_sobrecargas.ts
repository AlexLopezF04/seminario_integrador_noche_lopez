/**
 * ============================================
 * 22 - SOBRECARGAS DE FUNCION (OVERLOADS)
 * ============================================
 * Temas:
 *   - Firmas multiples, una implementacion
 *   - Distinto retorno segun la firma
 *   - Implementacion compatible con todas las firmas
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

type Producto = { id: number; nombre: string; precio: number };

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 1200 },
  { id: 2, nombre: "Teclado", precio: 80   },
  { id: 3, nombre: "Monitor", precio: 350  },
];

// Sobrecargas
function buscar(id: number): Producto | undefined;
function buscar(nombre: string): Producto[];

// Implementacion
function buscar(criterio: number | string): Producto | Producto[] | undefined {
  if (typeof criterio === "number") {
    return catalogo.find((p) => p.id === criterio);
  }
  const termino = criterio.toLowerCase();
  return catalogo.filter((p) => p.nombre.toLowerCase().includes(termino));
}

// TS sabe el retorno exacto por la firma elegida
const porId     = buscar(2);        // Producto | undefined
const porNombre = buscar("o");      // Producto[]

console.log("Buscar por id 2:", porId);
console.log("Buscar por nombre 'o':", porNombre);
