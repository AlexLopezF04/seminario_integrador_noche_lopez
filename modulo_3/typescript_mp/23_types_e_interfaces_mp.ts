/**
 * 24 - TYPE ALIAS E INTERFACES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: type alias, interface, opcionales,
 * readonly, arrays inmutables
 * Cursos Online: ID de curso, Ticket de soporte,
 * Usuario del sistema, Curso como Producto,
 * ConfigAPI educativa.
 * ============================================
 */

type IDCurso = string | number;
type CoordenadasCurso = [number, number];

type PuntoCurso = {
  x: number;
  y: number;
};

const origenCurso: PuntoCurso = { x: 0, y: 0 };
const idCurso1: IDCurso = 42;
const idCurso2: IDCurso = "CUR-001";

console.log("Origen:", origenCurso, "IDs:", idCurso1, idCurso2);

type TicketID = string | number;
type PrioridadTicket = "baja" | "media" | "alta" | "critica";

type TicketSoporte = {
  id: TicketID;
  titulo: string;
  prioridad: PrioridadTicket;
  resuelta: boolean;
};

function imprimirTicket(t: TicketSoporte): void {
  const estrella = t.prioridad === "critica" ? " [!]" : "";
  console.log("[" + t.id + "] " + t.titulo + " - " + t.prioridad + estrella);
}

const tk1: TicketSoporte = { id: "T-001", titulo: "Error de login en curso", prioridad: "critica", resuelta: false };
const tk2: TicketSoporte = { id: 42, titulo: "Ajuste de fuente", prioridad: "baja", resuelta: true };

imprimirTicket(tk1);
imprimirTicket(tk2);

interface UsuarioPlataforma {
  readonly id: number;
  nombre: string;
  email: string;
  avatar?: string;
}

const u1: UsuarioPlataforma = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const u2: UsuarioPlataforma = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

console.log("Usuario 1:", u1.nombre, u1.email);
console.log("Usuario 2:", u2.nombre, u2.email, u2.avatar);

interface CursoProducto {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  disponible: boolean;
}

function mostrarCurso(p: CursoProducto): void {
  const desc = p.descripcion ? " - " + p.descripcion : "";
  const stock = p.disponible ? "Disponible" : "Agotado";
  console.log("[" + p.sku + "] " + p.nombre + " $" + p.precio + desc + " (" + stock + ")");
}

const cursoProducto1: CursoProducto = { sku: "TS-001", nombre: "TypeScript Pro", precio: 1299, descripcion: "40h, avanzado", disponible: true };
const cursoProducto2: CursoProducto = { sku: "NJS-042", nombre: "Node.js Basico", precio: 25, disponible: false };

mostrarCurso(cursoProducto1);
mostrarCurso(cursoProducto2);

interface ConfiguracionPlataforma {
  readonly host: string;
  readonly puerto: number;
  readonly secreto: string;
  reintentos: number;
}

const cfg: ConfiguracionPlataforma = { host: "db.cursos.com", puerto: 5432, secreto: "abc-xyz-123", reintentos: 3 };
cfg.reintentos = 5;

const ESTADOS_PERMITIDOS: readonly string[] = ["activo", "inactivo", "suspendido"];

console.log("Estados:", ESTADOS_PERMITIDOS);

type MetodoHTTP = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ConfigAPICursos {
  readonly baseUrl: string;
  readonly version: string;
  readonly metodosPermitidos: readonly MetodoHTTP[];
  timeoutMs: number;
}

const apiConfigCursos: ConfigAPICursos = {
  baseUrl: "https://api.cursos.com",
  version: "v2",
  metodosPermitidos: ["GET", "POST", "PUT", "DELETE"],
  timeoutMs: 5000,
};

function construirUrlCursos(config: ConfigAPICursos, ruta: string): string {
  return config.baseUrl + "/" + config.version + "/" + ruta.replace(/^\//, "");
}

console.log(construirUrlCursos(apiConfigCursos, "/cursos"));
