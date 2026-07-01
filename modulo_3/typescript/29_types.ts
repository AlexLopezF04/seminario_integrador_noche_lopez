// Concepto puro
type ID = string | number;           // unión de primitivos
type Nombre = string;                // alias de primitivo (documenta intención)
type Coordenadas = [number, number]; // alias de tupla

// Alias de objeto
type Punto = {
  x: number;
  y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;          // válido
const id2: ID = "usr-001";  // también válido

// ────────── Sistema de tickets de soporte ──────────
type TicketID = string | number;
type Prioridad = "baja" | "media" | "alta" | "critica";

type Ticket = {
  id: TicketID;
  titulo: string;
  prioridad: Prioridad;
  resuelta: boolean;
};

function imprimirTicket(t: Ticket): void {
  const estrella = t.prioridad === "critica" ? " ⚠️" : "";
  console.log(`[${t.id}] ${t.titulo} — ${t.prioridad}${estrella}`);
}

const t1: Ticket = { id: "T-001", titulo: "Error de login",  prioridad: "critica", resuelta: false };
const t2: Ticket = { id: 42,      titulo: "Ajuste de fuente", prioridad: "baja",    resuelta: true  };

imprimirTicket(t1); // [T-001] Error de login — critica ⚠️
imprimirTicket(t2); // [42] Ajuste de fuente — baja

// ────────── Mini-ejercicio ──────────
type Moneda = "USD" | "EUR" | "MXN";

type Precio = {
  monto: number;
  moneda: Moneda;
};

function mostrarPrecio(p: Precio): void {
  const simbolos: Record<Moneda, string> = { USD: "$", EUR: "€", MXN: "$" };
  console.log(`${simbolos[p.moneda]}${p.monto.toFixed(2)} ${p.moneda}`);
}

const p1: Precio = { monto: 99.99, moneda: "USD" };
const p2: Precio = { monto: 49.50, moneda: "EUR" };
const p3: Precio = { monto: 200.00, moneda: "MXN" };

mostrarPrecio(p1);
mostrarPrecio(p2);
mostrarPrecio(p3);
