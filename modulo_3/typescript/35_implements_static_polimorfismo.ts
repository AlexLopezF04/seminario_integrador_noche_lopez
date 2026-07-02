/**
 * 35 - IMPLEMENTS, STATIC Y POLIMORFISMO
 * Temas: implements, static, polimorfismo
 */

// ──────────────────────────────────────────────
// implements
// ──────────────────────────────────────────────

interface Serializable { serializar(): string; }
interface Validable { esValido(): boolean; }

class Pedido implements Serializable, Validable {
  constructor(
    public id: string,
    public productos: string[],
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, productos: this.productos, total: this.total });
  }
  esValido(): boolean { return this.productos.length > 0 && this.total > 0; }
}

const pedido = new Pedido("P-001", ["Mouse", "Teclado"], 150);
console.log("Valido:", pedido.esValido());
console.log("Serializado:", pedido.serializar());

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
