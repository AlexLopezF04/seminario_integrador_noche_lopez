/**
 * 10 - ENUMS
 * Temas: enum numerico, enum string, union de literales
 */

// ──────────────────────────────────────────────
// Enum numerico
// ──────────────────────────────────────────────

enum Direccion {
  Norte, Sur, Este, Oeste,
}

const rumbo: Direccion = Direccion.Norte;
console.log("rumbo:", rumbo);
console.log("mapeo inverso:", Direccion[0]);

enum CodigoHTTP {
  OK = 200,
  NoEncontrado = 404,
  Error = 500,
}

// ──────────────────────────────────────────────
// Enum de string
// ──────────────────────────────────────────────

enum Rol {
  Admin  = "ADMIN",
  Editor = "EDITOR",
  Lector = "READER",
}

const miRol: Rol = Rol.Editor;
console.log("miRol:", miRol);

// ──────────────────────────────────────────────
// Union de literales (alternativa moderna)
// ──────────────────────────────────────────────

type Estado = "pendiente" | "procesando" | "completado" | "error";
type Prioridad = "baja" | "media" | "alta";

const estadoPedido: Estado = "procesando";
console.log("Pedido:", estadoPedido);

// ──────────────────────────────────────────────
// Ejemplo: Tickets con Record
// ──────────────────────────────────────────────

type PrioridadTicket = "baja" | "media" | "alta" | "critica";

interface Ticket {
  id: number;
  titulo: string;
  prioridad: PrioridadTicket;
  resuelto: boolean;
}

const prefijos: Record<PrioridadTicket, string> = {
  baja: "[ ]", media: "[!]", alta: "[!!]", critica: "[!!!]",
};

const tickets: Ticket[] = [
  { id: 1, titulo: "Boton no funciona", prioridad: "baja", resuelto: true },
  { id: 2, titulo: "Pago falla", prioridad: "critica", resuelto: false },
  { id: 3, titulo: "Lentitud en carga", prioridad: "media", resuelto: false },
];

for (const t of tickets) {
  const estado = t.resuelto ? "[ok]" : "[...]";
  console.log(`${estado} ${prefijos[t.prioridad]} [#${t.id}] ${t.titulo}`);
}
