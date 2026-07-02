/**
 * ============================================
 * 34 - HERENCIA Y CLASES ABSTRACTAS
 * ============================================
 * Temas:
 *   - extends, super(), override
 *   - Clases abstractas y metodos abstractos
 * ============================================
 */

// ──────────────────────────────────────────────
// C.1: Herencia
// ──────────────────────────────────────────────

class Animal {
  constructor(public nombre: string) {}

  hablar(): string {
    return this.nombre + " hace un sonido.";
  }
}

class Perro extends Animal {
  constructor(nombre: string, public raza: string) {
    super(nombre); // llama al constructor del padre
  }

  override hablar(): string {
    return this.nombre + " ladra: Guau!";
  }

  buscar(objeto: string): string {
    return this.nombre + " busca el " + objeto + ".";
  }
}

const a = new Animal("Criatura");
const d = new Perro("Rex", "Labrador");

console.log(a.hablar());
console.log(d.hablar());
console.log(d.buscar("palo"));
console.log("Raza:", d.raza);

// ──────────────────────────────────────────────
// C.2: Clases abstractas
// ──────────────────────────────────────────────

/**
 * Una clase abstracta NO puede instanciarse directamente.
 * Sirve como contrato que obliga a las subclases a implementar
 * ciertos metodos (abstract), mientras que los metodos concretos
 * si tienen implementacion y se heredan.
 */

abstract class Figura {
  abstract area(): number;
  abstract perimetro(): number;

  describir(): string {
    return "Area: " + this.area().toFixed(2) + " | " +
           "Perimetro: " + this.perimetro().toFixed(2);
  }
}

class Circulo2 extends Figura {
  constructor(private radio: number) {
    super();
  }

  override area(): number {
    return Math.PI * this.radio ** 2;
  }

  override perimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

class Rectangulo2 extends Figura {
  constructor(private ancho: number, private alto: number) {
    super();
  }

  override area(): number {
    return this.ancho * this.alto;
  }

  override perimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

// const f = new Figura();  // Error: abstracta, no se puede instanciar

const circulo = new Circulo2(5);
const rect = new Rectangulo2(4, 6);

console.log(circulo.describir());
console.log(rect.describir());

// ──────────────────────────────────────────────
// EJEMPLO: Jerarquia de empleados
// ──────────────────────────────────────────────

class Empleado {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return this.nombre + " - Salario: $" + this.calcularSalario();
  }
}

class Gerente extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    private bonificacion: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonificacion;
  }
}

class Vendedor extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    private comision: number,
    private ventasMes: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.ventasMes;
  }
}

const emp = new Empleado("Carlos", 2000);
const ger = new Gerente("Laura", 3000, 1500);
const vend = new Vendedor("Pedro", 1500, 50, 30);

console.log(emp.infoLaboral());
console.log(ger.infoLaboral());
console.log(vend.infoLaboral());

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de pagos (abstract)
// ──────────────────────────────────────────────

abstract class MetodoPago {
  constructor(protected titular: string) {}

  abstract procesar(monto: number): string;
  abstract validar(): boolean;

  resumen(monto: number): string {
    if (!this.validar()) return "[" + this.titular + "] Pago rechazado: datos invalidos.";
    return this.procesar(monto);
  }
}

class TarjetaCredito extends MetodoPago {
  constructor(
    titular: string,
    private ultimos4: string,
    private saldoDisponible: number
  ) {
    super(titular);
  }

  override validar(): boolean {
    return this.ultimos4.length === 4 && this.saldoDisponible > 0;
  }

  override procesar(monto: number): string {
    if (monto > this.saldoDisponible) return "Fondos insuficientes en tarjeta.";
    this.saldoDisponible -= monto;
    return "Tarjeta ****" + this.ultimos4 + ": $" + monto +
           " aprobado. Saldo restante: $" + this.saldoDisponible;
  }
}

class TransferenciaBancaria extends MetodoPago {
  constructor(
    titular: string,
    private clabe: string
  ) {
    super(titular);
  }

  override validar(): boolean {
    return this.clabe.length === 18;
  }

  override procesar(monto: number): string {
    return "Transferencia de $" + monto + " para " + this.titular +
           " a CLABE " + this.clabe.slice(-4).padStart(18, "*") + ".";
  }
}

const tarjeta = new TarjetaCredito("Ana", "4321", 500);
const transferencia = new TransferenciaBancaria("Luis", "123456789012345678");

console.log(tarjeta.resumen(200));
console.log(transferencia.resumen(1000));
