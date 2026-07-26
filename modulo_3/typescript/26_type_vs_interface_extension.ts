/**
 * ============================================
 * 26 - TYPE VS INTERFACE, EXTENSION Y COMPOSICION
 * ============================================
 * Temas:
 *   - type vs interface (diferencias y criterios)
 *   - extends con interface
 *   - Interseccion con type &
 *   - Herencia multiple con interface
 * ============================================
 */

// ──────────────────────────────────────────────
// C.1: type vs interface - tabla comparativa
// ──────────────────────────────────────────────

/**
 * Ambos describen la forma de un objeto, pero tienen diferencias:
 *
 * Caracteristica        | type  | interface
 * ----------------------|-------|-----------
 * Objetos               | Si    | Si
 * Uniones (A | B)       | Si    | No
 * Intersecciones (A & B)| Si    | Solo via extends
 * Extender otra def     | Solo &| extends (legible)
 * Declaration merging   | No    | Si
 * Alias de primitivo    | Si    | No
 * Alias de tupla        | Si    | No
 *
 * Regla practica:
 * - interface para objetos y contratos de clase
 * - type para uniones, tuplas, primitivos y alias complejos
 */

type Resultado = "exito" | "error" | "pendiente";  // type para union
type Par = [string, number];                        // type para tupla

// type y producen el mismo tipo de objeto:
type PuntoT = { x: number; y: number };

interface PuntoI {
  x: number;
  y: number;
}

const a: PuntoT = { x: 1, y: 2 };
const b: PuntoI = { x: 1, y: 2 };

console.log("Mismo tipo:", JSON.stringify(a) === JSON.stringify(b));

// ──────────────────────────────────────────────
// D.1: interface extends y composicion con &
// ──────────────────────────────────────────────

// Extends con interface:
interface Animal {
  nombre: string;
  edad: number;
}

interface Mascota extends Animal {
  duenio: string;
  vacunado: boolean;
}

const miMascota: Mascota = {
  nombre: "Rex",
  edad: 3,
  duenio: "Ana",
  vacunado: true,
};

console.log("Mascota:", miMascota.nombre, "de", miMascota.duenio);

// Composicion con type & (interseccion):
type Auditable = {
  creadoEn: Date;
  actualizadoEn: Date;
};

type ProductoInterseccion = {
  sku: string;
  precio: number;
} & Auditable;

const prod: ProductoInterseccion = {
  sku: "LAP-001",
  precio: 1299,
  creadoEn: new Date(),
  actualizadoEn: new Date(),
};

console.log("Producto auditable:", prod.sku, "$" + prod.precio);

// Herencia multiple con interface:
interface Serializable {
  toJSON(): string;
}

interface Cloneable {
  clonar(): this;
}

interface Entidad extends Serializable, Cloneable {
  id: number;
}

// ──────────────────────────────────────────────
// EJEMPLO: Jerarquia de usuarios
// ──────────────────────────────────────────────

interface EntidadBase {
  readonly id: number;
  creadoEn: Date;
}

interface UsuarioSist extends EntidadBase {
  nombre: string;
  email: string;
}

interface Administrador extends UsuarioSist {
  permisos: string[];
  nivel: 1 | 2 | 3;
}

type AdminConLog = Administrador & { ultimoAcceso: Date };

const admin: AdminConLog = {
  id: 1,
  creadoEn: new Date("2024-01-01"),
  nombre: "Sandra",
  email: "sandra@empresa.com",
  permisos: ["users:read", "users:write", "reports:read"],
  nivel: 2,
  ultimoAcceso: new Date(),
};

console.log("Admin:", admin.nombre, "(nivel", admin.nivel + ")");
console.log("Permisos:", admin.permisos.join(", "));
