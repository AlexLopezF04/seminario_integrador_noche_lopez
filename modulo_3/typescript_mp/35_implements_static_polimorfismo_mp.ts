/**
 * 35 - IMPLEMENTS, STATIC Y POLIMORFISMO
 * Tematica: Cursos Online
 * ============================================
 * Concepto: implements, static, polimorfismo
 * Cursos Online: CursoPedido (Serializable/Validable),
 * Matematica (PI, potencia), Forma geometrica
 * con polimorfismo de areas.
 * ============================================
 */

// ──────────────────────────────────────────────
// implements
// ──────────────────────────────────────────────

interface Serializable { serializar(): string; }
interface Validable { esValido(): boolean; }

class CursoPedidoExport implements Serializable, Validable {
  constructor(
    public id: string,
    public modulos: string[],
    public precio: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, modulos: this.modulos, precio: this.precio });
  }
  esValido(): boolean { return this.modulos.length > 0 && this.precio > 0; }
}

const cursoPedidoExport = new CursoPedidoExport("C-001", ["TS Basico", "TS Avanzado"], 150);
console.log("Valido:", cursoPedidoExport.esValido());
console.log("Serializado:", cursoPedidoExport.serializar());

// ──────────────────────────────────────────────
// Miembros estaticos (static)
// ──────────────────────────────────────────────

class Matematica {
  static readonly PI: number = 3.14159265;
  static circunferencia(radio: number): number { return 2 * Matematica.PI * radio; }
  static potencia(base: number, exp: number): number { return base ** exp; }
}

console.log("PI:", Matematica.PI);
console.log("Circunferencia r=5:", Matematica.circunferencia(5));
console.log("2^10:", Matematica.potencia(2, 10));

// ──────────────────────────────────────────────
// Polimorfismo
// ──────────────────────────────────────────────

class Forma {
  nombre(): string { return "Forma"; }
  area(): number { return 0; }
}

class Circulo3 extends Forma {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Circulo"; }
  override area(): number { return Math.PI * this.r ** 2; }
}

class Triangulo extends Forma {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Triangulo"; }
  override area(): number { return (this.base * this.altura) / 2; }
}

class Cuadrado extends Forma {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Cuadrado"; }
  override area(): number { return this.lado ** 2; }
}

const formas: Forma[] = [
  new Circulo3(3), new Triangulo(6, 4), new Cuadrado(5),
];

for (const f of formas) {
  console.log(`${f.nombre()}: area = ${f.area().toFixed(2)}`);
}
