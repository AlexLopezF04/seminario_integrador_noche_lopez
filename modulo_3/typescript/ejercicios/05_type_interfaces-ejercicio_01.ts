/**
 * Ejercicio: Libro - interface vs clase
 * Mismo dominio modelado con interface (forma) y con clase (comportamiento).
 */

// Interface
interface Libro {
  readonly isbn: string;
  titulo: string;
  autor: string;
  paginas: number;
  prestado?: boolean;
}
function resumenLibro(l: Libro): string {
  const estado = l.prestado ? "Prestado" : "Disponible";
  return l.titulo + " (ISBN: " + l.isbn + ") - " + estado;
}
console.log(resumenLibro({ isbn: "978-3-16-148410-0", titulo: "El Quijote", autor: "Cervantes", paginas: 863, prestado: true }));

// Clase
class LibroClase {
  constructor(
    public titulo: string,
    public autor: string,
    public paginas: number
  ) {}
  resumen(): string {
    return "'" + this.titulo + "' de " + this.autor + " (" + this.paginas + " paginas)";
  }
}
const l1 = new LibroClase("Cien anios de soledad", "Gabriel Garcia Marquez", 496);
console.log(l1.resumen());
