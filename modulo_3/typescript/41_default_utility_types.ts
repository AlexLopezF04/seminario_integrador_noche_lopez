/**
 * ============================================
 * 41 - VALORES POR DEFECTO Y UTILITY TYPES
 * ============================================
 * Temas:
 *   - Valor por defecto <T = string>
 *   - Utility types: Partial, Required, Pick, Omit, Record, Readonly
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Valor por defecto <T = string>
// ──────────────────────────────────────────────

interface Respuesta<T = string> {
  datos: T;
  codigo: number;
}

// Sin anotar: T = string por defecto
const r1: Respuesta = { datos: "Ok", codigo: 200 };
const r2: Respuesta<number[]> = { datos: [1, 2, 3], codigo: 200 };

console.log("Respuesta default:", r1.datos);
console.log("Respuesta explicita:", r2.datos);

// ──────────────────────────────────────────────
// E.2: Utility types
// ──────────────────────────────────────────────

interface Config {
  host: string;
  puerto: number;
  debug: boolean;
  timeout: number;
}

// Partial<T>: todas las propiedades opcionales
function actualizarConfig(base: Config, cambios: Partial<Config>): Config {
  return { ...base, ...cambios };
}

const cfg: Config = { host: "localhost", puerto: 8080, debug: false, timeout: 3000 };
const nuevaConfig = actualizarConfig(cfg, { debug: true, puerto: 9090 });
console.log("Partial:", nuevaConfig);

// Required<T>: todas las propiedades obligatorias
interface OpcionesBusqueda {
  query?: string;
  pagina?: number;
  limite?: number;
}
const opciones: Required<OpcionesBusqueda> = { query: "ts", pagina: 1, limite: 10 };
console.log("Required:", opciones);

// Pick<T, K>: selecciona subconjunto
interface Producto {
  id: number; nombre: string; precio: number; stock: number; proveedor: string;
}
type ProductoResumen = Pick<Producto, "id" | "nombre" | "precio">;
const resumen: ProductoResumen = { id: 1, nombre: "Mouse", precio: 25 };
console.log("Pick:", resumen);

// Omit<T, K>: excluye propiedades
type ProductoNuevo = Omit<Producto, "id">;
const nuevo: ProductoNuevo = { nombre: "Webcam", precio: 120, stock: 15, proveedor: "TechCorp" };
console.log("Omit:", nuevo);

// Record<K, V>: objeto con claves K y valores V
type Rol = "admin" | "editor" | "lector";
const permisos: Record<Rol, string[]> = {
  admin:  ["leer", "escribir", "borrar"],
  editor: ["leer", "escribir"],
  lector: ["leer"],
};
console.log("Record:", permisos);

// Readonly<T>: impide modificar propiedades
const origen: Readonly<{ x: number; y: number }> = { x: 0, y: 0 };
// origen.x = 5;  // Error
console.log("Readonly:", origen);
