/**
 * Ejercicio: Implementaciones de interface
 * Interface con metodo, implementada como objeto literal y como clase.
 */

interface Validador {
  validar(valor: string): boolean;
  mensajeError: string;
}

// Como objeto literal
const emailValidator: Validador = {
  validar(valor) { return valor.includes("@"); },
  mensajeError: "El email debe contener @",
};

// Como clase implementando interface
interface Imprimible { imprimir(): void; }

class Factura implements Imprimible {
  constructor(public numero: string, public total: number) {}
  imprimir(): void {
    console.log("=== FACTURA #" + this.numero + " ===");
    console.log("Total: $" + this.total.toFixed(2));
  }
}
class Recibo implements Imprimible {
  constructor(public producto: string, public monto: number) {}
  imprimir(): void {
    console.log("RECIBO: " + this.producto + " - $" + this.monto.toFixed(2));
  }
}

function ejecutarValidacion(val: string, v: Validador): void {
  console.log(v.validar(val) ? "OK" : v.mensajeError);
}

ejecutarValidacion("ana@mail.com", emailValidator);
ejecutarValidacion("123", emailValidator);

new Factura("F-001", 250.50).imprimir();
new Recibo("Teclado mecanico", 120.00).imprimir();
