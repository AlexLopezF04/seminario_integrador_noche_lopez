// ── Concepto puro ──
class CuentaBancaria {
  readonly id: string;
  public titular: string;
  private saldo: number;
  protected moneda: string;

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
    if (monto <= 0) throw new Error("Monto inválido");
    this.saldo += monto;
  }
}

const cuenta = new CuentaBancaria("CC-001", "Ana García", 1000);
console.log(cuenta.titular);
console.log(cuenta.id);
console.log(cuenta.obtenerSaldo());
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo());

// Error: 'saldo' is private
// cuenta.saldo = 9999;
// Error: 'id' is readonly
// cuenta.id = "otro";

// ── Ejemplo aplicado ──
class Configuracion {
  private readonly apiKey: string;
  private entorno: "desarrollo" | "produccion";
  public version: string;

  constructor(apiKey: string, entorno: "desarrollo" | "produccion") {
    this.apiKey = apiKey;
    this.entorno = entorno;
    this.version = "1.0.0";
  }

  esProduccion(): boolean {
    return this.entorno === "produccion";
  }

  keyResumida(): string {
    return `***${this.apiKey.slice(-4)}`;
  }
}

const cfg = new Configuracion("sk-ABCDE-12345", "produccion");
console.log(cfg.esProduccion());
console.log(cfg.keyResumida());
console.log(cfg.version);

// ── Mini-ejercicio ──
class Contador {
  private valor: number = 0;

  incrementar(): void {
    this.valor++;
  }

  decrementar(): void {
    if (this.valor > 0) this.valor--;
  }

  obtenerValor(): number {
    return this.valor;
  }
}

const contador = new Contador();
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.obtenerValor()); // 3
contador.decrementar();
console.log(contador.obtenerValor()); // 2

// Error: 'valor' is private
// contador.valor = 99;
