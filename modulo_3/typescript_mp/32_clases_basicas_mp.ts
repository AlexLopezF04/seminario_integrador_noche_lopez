/**
 * ============================================
 * 32 - CLASES Y CONSTRUCTORES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Clases, constructor, propiedades,
 * metodos, parameter properties
 * Cursos Online: Clase Curso, Punto de control,
 * Temperatura de servidor, Usuario del sistema.
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Clase basica
// ──────────────────────────────────────────────

class CursoOnlineClase {
  titulo: string;
  precio: number;
  disponible: boolean;

  constructor(titulo: string, precio: number, disponible: boolean) {
    this.titulo = titulo;
    this.precio = precio;
    this.disponible = disponible;
  }

  describir(): string {
    const estado = this.disponible ? "disponible" : "no disponible";
    return this.titulo + " - $" + this.precio + " (" + estado + ")";
  }
}

const cursoClaseTS = new CursoOnlineClase("TypeScript Avanzado", 120, true);
const cursoClaseNode = new CursoOnlineClase("Node.js", 450, false);

console.log(cursoClaseTS.describir());
console.log(cursoClaseNode.describir());

// ──────────────────────────────────────────────
// A.2: Parameter properties (atajo)
// ──────────────────────────────────────────────

class PuntoControl {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class PuntoCursoClase {
  constructor(
    public x: number,
    public y: number
  ) {}

  distanciaAlOrigen(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const pcClase = new PuntoCursoClase(3, 4);
console.log("Punto:", pcClase.x, pcClase.y, "distancia:", pcClase.distanciaAlOrigen());

// ──────────────────────────────────────────────
// EJEMPLO: clase Temperatura
// ──────────────────────────────────────────────

class TemperaturaServidor {
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
    return this.valorCelsius + "C = " +
      this.aFahrenheit() + "F = " +
      this.aKelvin() + "K";
  }
}

const hervorClase = new TemperaturaServidor(100);
const congelacionClase = new TemperaturaServidor(0);

console.log(hervorClase.describir());
console.log(congelacionClase.describir());

// ──────────────────────────────────────────────
// EJEMPLO: clase Usuario con atajo
// ──────────────────────────────────────────────

class UsuarioCursoClase {
  constructor(
    public nombre: string,
    public email: string,
    public rol: "admin" | "instructor" | "estudiante"
  ) {}

  saludo(): string {
    return "Hola, " + this.nombre + ". Rol: \"" + this.rol + "\".";
  }
}

const anaClase = new UsuarioCursoClase("Ana", "ana@cursos.com", "admin");
const luisClase = new UsuarioCursoClase("Luis", "luis@cursos.com", "estudiante");

console.log(anaClase.saludo());
console.log(luisClase.email);
