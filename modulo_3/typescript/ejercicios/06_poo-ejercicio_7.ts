/**
 * ============================================
 * EJERCICIO 7: Factura y Recibo (implements)
 * ============================================
 * Tema: implements (D.1)
 *
 * Enunciado:
 * Define interfaz Imprimible con metodo imprimir(): void.
 * Crea clases Factura y Recibo implementando Imprimible.
 * Cada una imprime formato distinto.
 * Crea instancias y llama a imprimir().
 * ============================================
 */

interface Imprimible {
  imprimir(): void;
}

class Factura implements Imprimible {
  constructor(
    public numero: string,
    public total: number
  ) {}

  imprimir(): void {
    console.log("=== FACTURA #" + this.numero + " ===");
    console.log("Total: $" + this.total.toFixed(2));
    console.log("Gracias por su compra.");
  }
}

class Recibo implements Imprimible {
  constructor(
    public producto: string,
    public monto: number
  ) {}

  imprimir(): void {
    console.log("RECIBO: " + this.producto + " - $" + this.monto.toFixed(2));
  }
}

const factura = new Factura("F-001", 250.50);
const recibo = new Recibo("Teclado mecanico", 120.00);

factura.imprimir();
console.log("");
recibo.imprimir();
