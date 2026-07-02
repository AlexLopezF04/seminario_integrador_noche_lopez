/**
 * Ejercicio D.1: Paginado
 * Crea una interface Paginado<T> con:
 *   items: T[]
 *   pagina: number
 *   totalPaginas: number
 *   totalItems: number
 * y una funcion paginar<T> que reciba T[] y pagina (1-indexed)
 * y devuelva Paginado<T> con 5 items por pagina.
 */

interface Paginado<T> {
  items: T[];
  pagina: number;
  totalPaginas: number;
  totalItems: number;
}

function paginar<T>(datos: T[], pagina: number, porPagina = 5): Paginado<T> {
  const totalItems = datos.length;
  const totalPaginas = Math.ceil(totalItems / porPagina);
  const inicio = (pagina - 1) * porPagina;
  const items = datos.slice(inicio, inicio + porPagina);
  return { items, pagina, totalPaginas, totalItems };
}

const numeros = Array.from({ length: 23 }, (_, i) => i + 1);

const pag1 = paginar(numeros, 1);
const pag2 = paginar(numeros, 2);
const pag5 = paginar(numeros, 5);

console.log("Pagina 1:", JSON.stringify(pag1));
console.log("Pagina 2:", JSON.stringify(pag2));
console.log("Pagina 5:", JSON.stringify(pag5));
