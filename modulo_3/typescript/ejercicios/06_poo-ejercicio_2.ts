/**
 * ============================================
 * EJERCICIO 2: Clase Libro (parameter properties)
 * ============================================
 * Tema: Parameter properties (A.2)
 *
 * Enunciado:
 * Convierte la clase Libro a forma corta con parameter properties.
 * Agrega metodo resumen(): string que devuelva
 * "'Titulo' de Autor (N paginas)".
 * ============================================
 */

class Libro {
  constructor(
    public titulo: string,
    public autor: string,
    public paginas: number
  ) {}

  resumen(): string {
    return "'" + this.titulo + "' de " + this.autor + " (" + this.paginas + " paginas)";
  }
}

const l1 = new Libro("Cien anios de soledad", "Gabriel Garcia Marquez", 496);
console.log(l1.resumen());
