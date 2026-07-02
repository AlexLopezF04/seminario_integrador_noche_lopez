/**
 * ============================================
 * 24 - TYPE ALIAS
 * ============================================
 * Temas:
 *   - type alias para objetos, uniones y primitivos
 *   - Nombrar cualquier tipo para reutilizar
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: type alias basico
// ──────────────────────────────────────────────

/**
 * Un type alias crea un nombre reutilizable para cualquier tipo:
 * objetos, uniones, primitivos, tuplas, etc.
 * Desaparece en tiempo de ejecucion (solo existe para el compilador).
 */

type ID = string | number;           // union de primitivos
type Nombre = string;                // alias de primitivo
type Coordenadas = [number, number]; // alias de tupla

type Punto = {
  x: number;
  y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;
const id2: ID = "usr-001";

console.log("Origen:", origen);
console.log("ID:", id, id2);

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de tickets de soporte
// ──────────────────────────────────────────────

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
  console.log("[" + t.id + "]", t.titulo, "-", t.prioridad + estrella);
}

const t1: Ticket = { id: "T-001", titulo: "Error de login",  prioridad: "critica", resuelta: false };
const t2: Ticket = { id: 42,      titulo: "Ajuste de fuente", prioridad: "baja",    resuelta: true  };

imprimirTicket(t1);
imprimirTicket(t2);
