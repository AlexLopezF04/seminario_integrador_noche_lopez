/**
 * ============================================
 * EJERCICIO 7: Medios de pago (union discriminada)
 * ============================================
 * Tema: Uniones discriminadas (G.1)
 *
 * Enunciado:
 * Modela medios de pago con union discriminada campo "metodo":
 * - "tarjeta" con ultimos4: string, marca: "visa" | "mastercard"
 * - "transferencia" con banco: string, referencia: string
 * - "efectivo" con cambioRequerido: number
 * Une en type MedioPago.
 * Escribe function confirmarPago(m: MedioPago): string con switch.
 * Prueba con un objeto de cada tipo.
 * ============================================
 */

type PagoTarjeta = {
  metodo: "tarjeta";
  ultimos4: string;
  marca: "visa" | "mastercard";
};

type PagoTransferencia = {
  metodo: "transferencia";
  banco: string;
  referencia: string;
};

type PagoEfectivo = {
  metodo: "efectivo";
  cambioRequerido: number;
};

type MedioPago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

function confirmarPago(m: MedioPago): string {
  switch (m.metodo) {
    case "tarjeta":
      return "Pago con tarjeta " + m.marca + " ****" + m.ultimos4;
    case "transferencia":
      return "Transferencia desde " + m.banco + " ref: " + m.referencia;
    case "efectivo":
      return "Pago en efectivo, cambio req.: $" + m.cambioRequerido;
  }
}

console.log(confirmarPago({ metodo: "tarjeta", ultimos4: "1234", marca: "visa" }));
console.log(confirmarPago({ metodo: "transferencia", banco: "BBVA", referencia: "REF-001" }));
console.log(confirmarPago({ metodo: "efectivo", cambioRequerido: 50 }));
