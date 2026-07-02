/**
 * ============================================
 * 33 - MODIFICADORES DE ACCESO, GETTERS Y SETTERS
 * ============================================
 * Temas:
 *   - public, private, protected, readonly
 *   - Getters (get) y setters (set) con validacion
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Modificadores de acceso
// ──────────────────────────────────────────────

class CuentaBancaria {
  readonly id: string;           // no cambia tras la creacion
  public titular: string;        // visible desde fuera
  private saldo: number;         // solo accesible dentro de la clase
  protected moneda: string;      // accesible tambien en subclases

  constructor(id: string, titular: string, saldoInicial: number) {
    this.id = id;
    this.titular = titular;
    this.saldo = saldoInicial;
    this.moneda = "MXN";
  }

  obtenerSaldo(): number {
    return this.saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto invalido");
    this.saldo += monto;
  }
}

const cuenta = new CuentaBancaria("CC-001", "Ana Garcia", 1000);
console.log("Titular:", cuenta.titular);
console.log("ID:", cuenta.id);
console.log("Saldo:", cuenta.obtenerSaldo());
cuenta.depositar(500);
console.log("Saldo tras deposito:", cuenta.obtenerSaldo());

// cuenta.saldo = 9999;  // Error: private
// cuenta.id = "otro";   // Error: readonly

// ──────────────────────────────────────────────
// B.2: Getters y setters (get / set)
// ──────────────────────────────────────────────

/**
 * Los get/set permiten acceder a una propiedad con logica integrada,
 * manteniendo sintaxis de acceso natural (sin parentesis al leer).
 * Convencion: propiedad privada _nombre, getter/setter nombre.
 */

class Circulo {
  private _radio: number;

  constructor(radio: number) {
    this._radio = radio;
  }

  get radio(): number {
    return this._radio;
  }

  set radio(valor: number) {
    if (valor <= 0) throw new Error("El radio debe ser positivo");
    this._radio = valor;
  }

  get area(): number {
    return Math.PI * this._radio ** 2;
  }
}

const c = new Circulo(5);
console.log("Radio:", c.radio);       // 5
console.log("Area:", c.area.toFixed(2)); // 78.54

c.radio = 10;                          // usa el setter
console.log("Area (nuevo radio):", c.area.toFixed(2)); // 314.16

// c.radio = -3;  // Error

// ──────────────────────────────────────────────
// EJEMPLO: Clase Porcentaje
// ──────────────────────────────────────────────

class Porcentaje {
  private _valor: number;

  constructor(valor: number) {
    this._valor = 0;
    this.valor = valor; // pasa por el setter para validar
  }

  get valor(): number {
    return this._valor;
  }

  set valor(v: number) {
    if (v < 0 || v > 100) {
      throw new Error("Porcentaje invalido: " + v + ". Debe estar entre 0 y 100.");
    }
    this._valor = v;
  }

  get complemento(): number {
    return 100 - this._valor;
  }

  toString(): string {
    return this._valor + "% (complemento: " + this.complemento + "%)";
  }
}

const descuento = new Porcentaje(25);
console.log(descuento.toString());
descuento.valor = 40;
console.log(descuento.toString());

// new Porcentaje(150);  // Error
