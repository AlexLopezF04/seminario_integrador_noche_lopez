// ── Concepto puro: forma larga vs. atajo ──
class PuntoLargo {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Punto {
  constructor(public x: number, public y: number) {}

  distanciaAlOrigen(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const p = new Punto(3, 4);
console.log(p.x);
console.log(p.distanciaAlOrigen());

// ── Ejemplo aplicado ──
class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public rol: "admin" | "editor" | "lector"
  ) {}

  saludo(): string {
    return `Hola, ${this.nombre}. Tienes rol "${this.rol}".`;
  }
}

const ana = new Usuario("Ana", "ana@ejemplo.com", "admin");
const luis = new Usuario("Luis", "luis@ejemplo.com", "lector");

console.log(ana.saludo());
console.log(luis.email);

// ── Mini-ejercicio ──
class Libro {
  constructor(
    public titulo: string,
    public autor: string,
    public paginas: number
  ) {}

  resumen(): string {
    return `"${this.titulo}" de ${this.autor} (${this.paginas} páginas)`;
  }
}

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", 496);
console.log(libro.resumen());
