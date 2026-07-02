/**
 * ============================================
 * 10 - ENUMS Y UNION DE LITERALES
 * ============================================
 * Temas:
 *   - Enum numerico (valores 0, 1, 2... por defecto)
 *   - Enum numerico con valor de inicio personalizado
 *   - Enum de string (valores legibles)
 *   - Union de literales (alternativa moderna)
 *   - Record con union de literales
 * ============================================
 */

// ──────────────────────────────────────────────
// D.1: Enum numerico
// ──────────────────────────────────────────────

// Los valores son 0, 1, 2... por defecto
enum Direccion {
  Norte,  // 0
  Sur,    // 1
  Este,   // 2
  Oeste,  // 3
}

const rumbo: Direccion = Direccion.Norte;
console.log("rumbo:", rumbo);           // 0
console.log("mapeo inverso:", Direccion[0]); // "Norte"

// Enum numerico con valor de inicio personalizado
enum CodigoHTTP {
  OK = 200,
  NoEncontrado = 404,
  Error = 500,
}

// ──────────────────────────────────────────────
// D.1.b: Enum de string
// ──────────────────────────────────────────────

// Recomendado: los valores son legibles en logs y redes
enum Rol {
  Admin    = "ADMIN",
  Editor   = "EDITOR",
  Lector   = "READER",
}

const miRol: Rol = Rol.Editor;
console.log("miRol:", miRol); // "EDITOR"

// ──────────────────────────────────────────────
// D.2: Union de literales (alternativa moderna)
// ──────────────────────────────────────────────

/**
 * Para muchos casos, una union de literales es mas simple y liviana
 * que un enum. TypeScript la recomienda cuando no necesitas el objeto
 * enum en tiempo de ejecucion (no genera codigo JS).
 */

type Estado = "pendiente" | "procesando" | "completado" | "error";
type Prioridad = "baja" | "media" | "alta";

const idPedido: number = 1;
const estadoPedido: Estado = "procesando";
console.log("Pedido #" + idPedido + ":", estadoPedido);

// Error en compilacion si usas un valor no valido:
// const estadoInvalido: Estado = "cancelado";

/**
 * Truco:
 * Prefiere union de literales cuando los valores son strings conocidos
 * y no necesitas iterar sobre ellos.
 * Usa enum cuando necesites mapeo inverso numerico o vengas de C#/Java.
 */

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de tickets de soporte
// ──────────────────────────────────────────────

type PrioridadTicket = "baja" | "media" | "alta" | "critica";

interface Ticket {
  id: number;
  titulo: string;
  prioridad: PrioridadTicket;
  resuelto: boolean;
}

const prefijos: Record<PrioridadTicket, string> = {
  baja:    "[ ]",
  media:   "[!]",
  alta:    "[!!]",
  critica: "[!!!]",
};

const tickets: Ticket[] = [
  { id: 1, titulo: "Boton no funciona",  prioridad: "baja",    resuelto: true  },
  { id: 2, titulo: "Pago falla",         prioridad: "critica", resuelto: false },
  { id: 3, titulo: "Lentitud en carga",  prioridad: "media",   resuelto: false },
];

for (const t of tickets) {
  const estado = t.resuelto ? "[ok]" : "[...]";
  const etiqueta = estado + " " + prefijos[t.prioridad] + " [#" + t.id + "] " + t.titulo;
  console.log(etiqueta);
}
