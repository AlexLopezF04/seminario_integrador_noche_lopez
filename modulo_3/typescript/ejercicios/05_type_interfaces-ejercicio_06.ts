/**
 * ============================================
 * EJERCICIO 5: contarLetras (Record)
 * ============================================
 * Tema: Index signatures / Record (E.1)
 *
 * Enunciado:
 * Crea un type ConteoLetras = Record<string, number>.
 * Escribe function contarLetras(texto: string): ConteoLetras
 * que devuelva un objeto con cada letra y su frecuencia.
 * Prueba con "banana".
 * ============================================
 */

type ConteoLetras = Record<string, number>;

function contarLetras(texto: string): ConteoLetras {
  const resultado: ConteoLetras = {};
  for (const letra of texto.toLowerCase()) {
    if (resultado[letra] === undefined) {
      resultado[letra] = 0;
    }
    resultado[letra]++;
  }
  return resultado;
}

const conteo = contarLetras("banana");
console.log("Frecuencia de letras en 'banana':", conteo);
// { b: 1, a: 3, n: 2 }
