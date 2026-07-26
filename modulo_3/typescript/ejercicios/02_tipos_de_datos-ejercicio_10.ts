/**
 * Ejercicio: Type narrowing completo
 * unknown con typeof + discriminated union con switch.
 */

// typeof narrowing
function procesarUnknown(valor: unknown): void {
  if (typeof valor === "number") console.log("Numero:", valor);
  else if (typeof valor === "string") console.log("Texto de", valor.length, "caracteres:", valor);
  else if (typeof valor === "boolean") console.log("Booleano:", valor);
  else console.log("Tipo desconocido:", typeof valor);
}
procesarUnknown(42);
procesarUnknown("hola");
procesarUnknown(true);
procesarUnknown(null);

// Discriminated union + switch
type PagoTarjeta = { metodo: "tarjeta"; ultimos4: string; marca: "visa" | "mastercard" };
type PagoTransferencia = { metodo: "transferencia"; banco: string; referencia: string };
type PagoEfectivo = { metodo: "efectivo"; cambioRequerido: number };
type MedioPago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

function confirmarPago(m: MedioPago): string {
  switch (m.metodo) {
    case "tarjeta": return "Pago tarjeta " + m.marca + " ****" + m.ultimos4;
    case "transferencia": return "Transferencia " + m.banco + " ref: " + m.referencia;
    case "efectivo": return "Efectivo, cambio: $" + m.cambioRequerido;
  }
}
console.log(confirmarPago({ metodo: "tarjeta", ultimos4: "1234", marca: "visa" }));
console.log(confirmarPago({ metodo: "transferencia", banco: "BBVA", referencia: "REF-001" }));
console.log(confirmarPago({ metodo: "efectivo", cambioRequerido: 50 }));
