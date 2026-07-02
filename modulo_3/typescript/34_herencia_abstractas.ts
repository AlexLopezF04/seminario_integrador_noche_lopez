/**
 * 34 - HERENCIA Y CLASES ABSTRACTAS
 * Temas: extends, super(), override, abstract
 */

// ──────────────────────────────────────────────
// Herencia
// ──────────────────────────────────────────────

class Animal {
  constructor(public nombre: string) {}
  hablar(): string { return `${this.nombre} hace un sonido.`; }
}

class Perro extends Animal {
  constructor(nombre: string, public raza: string) { super(nombre); }
  override hablar(): string { return `${this.nombre} ladra: Guau!`; }
  buscar(objeto: string): string { return `${this.nombre} busca el ${objeto}.`; }
}

const a = new Animal("Criatura");
const d = new Perro("Rex", "Labrador");
console.log(a.hablar());
console.log(d.hablar());
console.log(d.buscar("palo"));

// ──────────────────────────────────────────────
// Clases abstractas
// ──────────────────────────────────────────────

abstract class Figura {
  abstract area(): number;
  abstract perimetro(): number;
  describir(): string {
    return `Area: ${this.area().toFixed(2)} | Perimetro: ${this.perimetro().toFixed(2)}`;
  }
}

class Circulo2 extends Figura {
  constructor(private radio: number) { super(); }
  override area(): number { return Math.PI * this.radio ** 2; }
  override perimetro(): number { return 2 * Math.PI * this.radio; }
}

class Rectangulo2 extends Figura {
  constructor(private ancho: number, private alto: number) { super(); }
  override area(): number { return this.ancho * this.alto; }
  override perimetro(): number { return 2 * (this.ancho + this.alto); }
}

// const f = new Figura(); // Error: abstracta

const circulo = new Circulo2(5);
const rect = new Rectangulo2(4, 6);
console.log(circulo.describir());
console.log(rect.describir());

// ──────────────────────────────────────────────
// Sistema de pagos (abstract)
// ──────────────────────────────────────────────

abstract class MetodoPago {
  constructor(protected titular: string) {}
  abstract procesar(monto: number): string;
  abstract validar(): boolean;

  resumen(monto: number): string {
    if (!this.validar()) return `[${this.titular}] Pago rechazado`;
    return this.procesar(monto);
  }
}

class TarjetaCredito extends MetodoPago {
  constructor(titular: string, private ultimos4: string, private saldoDisponible: number) {
    super(titular);
  }
  override validar(): boolean { return this.ultimos4.length === 4 && this.saldoDisponible > 0; }
  override procesar(monto: number): string {
    if (monto > this.saldoDisponible) return "Fondos insuficientes";
    this.saldoDisponible -= monto;
    return `Tarjeta ****${this.ultimos4}: $${monto} aprobado. Restante: $${this.saldoDisponible}`;
  }
}

class TransferenciaBancaria extends MetodoPago {
  constructor(titular: string, private clabe: string) { super(titular); }
  override validar(): boolean { return this.clabe.length === 18; }
  override procesar(monto: number): string {
    return `Transferencia de $${monto} a CLABE ${this.clabe.slice(-4).padStart(18, "*")}`;
  }
}

const tarjeta = new TarjetaCredito("Ana", "4321", 500);
const transferencia = new TransferenciaBancaria("Luis", "123456789012345678");
console.log(tarjeta.resumen(200));
console.log(transferencia.resumen(1000));
