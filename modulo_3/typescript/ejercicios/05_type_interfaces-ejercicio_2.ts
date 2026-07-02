/**
 * ============================================
 * EJERCICIO 2: Interface Libro
 * ============================================
 * Tema: interface (B.1)
 *
 * Enunciado:
 * Define interface Libro con: readonly isbn: string, titulo: string,
 * autor: string, paginas: number, prestado?: boolean.
 * Crea dos libros: uno con prestado: true y otro sin esa propiedad.
 * Escribe function resumen(l: Libro): string que devuelva
 * "Titulo (ISBN: X) — Prestado" o " — Disponible".
 * ============================================
 */

interface Libro {
  readonly isbn: string;
  titulo: string;
  autor: string;
  paginas: number;
  prestado?: boolean;
}

function resumen(l: Libro): string {
  const estado = l.prestado ? "Prestado" : "Disponible";
  return l.titulo + " (ISBN: " + l.isbn + ") - " + estado;
}

const libro1: Libro = {
  isbn: "978-3-16-148410-0",
  titulo: "El Quijote",
  autor: "Cervantes",
  paginas: 863,
  prestado: true,
};

const libro2: Libro = {
  isbn: "978-0-7432-7356-5",
  titulo: "El Principito",
  autor: "Saint-Exupery",
  paginas: 96,
};

console.log(resumen(libro1));
console.log(resumen(libro2));
