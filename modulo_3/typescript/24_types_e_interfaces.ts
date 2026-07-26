/**
 * 24 - TYPE ALIAS E INTERFACES
 * Temas: type, interface, opcionales, readonly, arrays inmutables
 */

// ──────────────────────────────────────────────
// type alias
// ──────────────────────────────────────────────

type ID = string | number;
type Coordenadas = [number, number];

type Punto = {
  x: number;
  y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id1: ID = 42;
const id2: ID = "usr-001";

console.log("Origen:", origen, "IDs:", id1, id2);

// Ejemplo: tickets
type TicketID = string | number;
type PrioridadTk = "baja" | "media" | "alta" | "critica";

type Ticket = {
  id: TicketID;
  titulo: string;
  prioridad: PrioridadTk;
  resuelta: boolean;
};

function imprimirTicket(t: Ticket): void {
  const estrella = t.prioridad === "critica" ? " [!]" : "";
  console.log(`[${t.id}] ${t.titulo} - ${t.prioridad}${estrella}`);
}

const tk1: Ticket = { id: "T-001", titulo: "Error de login", prioridad: "critica", resuelta: false };
const tk2: Ticket = { id: 42,      titulo: "Ajuste de fuente", prioridad: "baja",    resuelta: true };

imprimirTicket(tk1);
imprimirTicket(tk2);

// ──────────────────────────────────────────────
// interface
// ──────────────────────────────────────────────

interface Usuario {
  readonly id: number;
  nombre: string;
  email: string;
  avatar?: string;
}

const u1: Usuario = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const u2: Usuario = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

console.log("Usuario 1:", u1.nombre, u1.email);
console.log("Usuario 2:", u2.nombre, u2.email, u2.avatar);

// Ejemplo: productos
interface Producto {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  enStock: boolean;
}

function mostrarProducto(p: Producto): void {
  const desc = p.descripcion ? ` - ${p.descripcion}` : "";
  const stock = p.enStock ? "Disponible" : "Agotado";
  console.log(`[${p.sku}] ${p.nombre} $${p.precio}${desc} (${stock})`);
}

const laptop: Producto = { sku: "LAP-001", nombre: "Laptop Pro 15", precio: 1299, descripcion: "Pantalla 4K, 16 GB RAM", enStock: true };
const mouse: Producto = { sku: "MOU-042", nombre: "Mouse Inalambrico", precio: 25, enStock: false };

mostrarProducto(laptop);
mostrarProducto(mouse);

// ──────────────────────────────────────────────
// readonly en tipos, interfaces y arrays
// ──────────────────────────────────────────────

interface Configuracion {
  readonly host: string;
  readonly puerto: number;
  readonly secreto: string;
  reintentos: number;
}

const cfg: Configuracion = { host: "db.empresa.com", puerto: 5432, secreto: "abc-xyz-123", reintentos: 3 };
cfg.reintentos = 5;
// cfg.host = "otro"; // Error: readonly

const ESTADOS_PERMITIDOS: readonly string[] = ["activo", "inactivo", "suspendido"];
// ESTADOS_PERMITIDOS.push("eliminado"); // Error

console.log("Estados:", ESTADOS_PERMITIDOS);

type MetodoHTTP = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ConfigAPI {
  readonly baseUrl: string;
  readonly version: string;
  readonly metodosPermitidos: readonly MetodoHTTP[];
  timeoutMs: number;
}

const apiConfig: ConfigAPI = { baseUrl: "https://api.empresa.com", version: "v2", metodosPermitidos: ["GET", "POST", "PUT", "DELETE"], timeoutMs: 5000 };

function construirUrl(config: ConfigAPI, ruta: string): string {
  return `${config.baseUrl}/${config.version}/${ruta.replace(/^\//, "")}`;
}

console.log(construirUrl(apiConfig, "/usuarios"));
