/**
 * ============================================
 * 29 - UNIONES DISCRIMINADAS
 * ============================================
 * Temas:
 *   - Discriminated unions con campo literal comun
 *   - Narrowing automatico con switch
 *   - Switch exhaustivo con never
 * ============================================
 */

// ──────────────────────────────────────────────
// G.1: Discriminated unions con campo kind
// ──────────────────────────────────────────────

/**
 * Una union discriminada es un type union donde cada miembro
 * tiene un campo literal comun (el "discriminador").
 * TypeScript usa ese campo para hacer narrowing automatico.
 */

type Circulo = {
  kind: "circulo";
  radio: number;
};

type Rectangulo = {
  kind: "rectangulo";
  ancho: number;
  alto: number;
};

type Triangulo = {
  kind: "triangulo";
  base: number;
  altura: number;
};

type Forma = Circulo | Rectangulo | Triangulo;

function calcularArea(f: Forma): number {
  switch (f.kind) {
    case "circulo":
      return Math.PI * f.radio ** 2;
    case "rectangulo":
      return f.ancho * f.alto;
    case "triangulo":
      return (f.base * f.altura) / 2;
  }
}

console.log("Area circulo (r=5):", calcularArea({ kind: "circulo", radio: 5 }).toFixed(2));
console.log("Area rectangulo (4x3):", calcularArea({ kind: "rectangulo", ancho: 4, alto: 3 }));

// ──────────────────────────────────────────────
// EJEMPLO: Procesador de eventos de aplicacion
// ──────────────────────────────────────────────

type EventoLogin = {
  tipo: "login";
  usuarioId: number;
  timestamp: Date;
};

type EventoCompra = {
  tipo: "compra";
  usuarioId: number;
  monto: number;
  productoSku: string;
};

type EventoError = {
  tipo: "error";
  codigo: number;
  mensaje: string;
  critico: boolean;
};

type EventoApp = EventoLogin | EventoCompra | EventoError;

function procesarEvento(evento: EventoApp): string {
  switch (evento.tipo) {
    case "login":
      return "Usuario " + evento.usuarioId + " inicio sesion a las " + evento.timestamp.toISOString();
    case "compra":
      return "Usuario " + evento.usuarioId + " compro " + evento.productoSku + " por $" + evento.monto;
    case "error":
      const nivel = evento.critico ? "CRITICO" : "menor";
      return "Error " + nivel + " [" + evento.codigo + "]: " + evento.mensaje;
  }
}

const eventos: EventoApp[] = [
  { tipo: "login",  usuarioId: 1,  timestamp: new Date() },
  { tipo: "compra", usuarioId: 1,  monto: 299, productoSku: "LAP-001" },
  { tipo: "error",  codigo: 500,   mensaje: "DB no disponible", critico: true },
  { tipo: "compra", usuarioId: 7,  monto: 25,  productoSku: "MOU-042" },
  { tipo: "error",  codigo: 404,   mensaje: "Recurso no encontrado", critico: false },
];

for (const e of eventos) {
  console.log(procesarEvento(e));
}
