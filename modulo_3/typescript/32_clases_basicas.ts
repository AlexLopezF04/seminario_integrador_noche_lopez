/**
 * ============================================
 * 32 - CLASES Y CONSTRUCTORES
 * ============================================
 * Temas:
 *   - Clase basica: propiedades, constructor, metodos
 *   - Parameter properties (atajo en constructor)
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Clase basica
// ──────────────────────────────────────────────

class Producto {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return this.nombre + " - $" + this.precio + " (" + estado + ")";
  }
}

const teclado = new Producto("Teclado mecanico", 120, true);
const monitor = new Producto("Monitor 4K", 450, false);

console.log(teclado.describir());
console.log(monitor.describir());

// ──────────────────────────────────────────────
// A.2: Parameter properties (atajo)
// ──────────────────────────────────────────────

// Forma larga (sin atajo)
class PuntoLargo {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// Forma corta con parameter properties (equivalente exacto)
class Punto {
  constructor(
    public x: number,
    public y: number
  ) {}

  distanciaAlOrigen(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const p = new Punto(3, 4);
console.log("Punto:", p.x, p.y, "distancia:", p.distanciaAlOrigen()); // 5

// ──────────────────────────────────────────────
// EJEMPLO: clase Temperatura
// ──────────────────────────────────────────────

class Temperatura {
  valorCelsius: number;

  constructor(celsius: number) {
    this.valorCelsius = celsius;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return this.valorCelsius + "°C = " +
      this.aFahrenheit() + "°F = " +
      this.aKelvin() + "K";
  }
}

const hervor = new Temperatura(100);
const congelacion = new Temperatura(0);

console.log(hervor.describir());
console.log(congelacion.describir());

// ──────────────────────────────────────────────
// EJEMPLO: clase Usuario con atajo
// ──────────────────────────────────────────────

class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public rol: "admin" | "editor" | "lector"
  ) {}

  saludo(): string {
    return "Hola, " + this.nombre + ". Tienes rol \"" + this.rol + "\".";
  }
}

const ana = new Usuario("Ana", "ana@ejemplo.com", "admin");
const luis = new Usuario("Luis", "luis@ejemplo.com", "lector");

console.log(ana.saludo());
console.log(luis.email);
