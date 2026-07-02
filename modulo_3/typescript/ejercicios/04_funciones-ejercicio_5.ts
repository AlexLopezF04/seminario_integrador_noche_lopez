/**
 * ============================================
 * EJERCICIO 5: asegurar con never
 * ============================================
 * Tema: void y never (C.1)
 *
 * Enunciado:
 * Escribe function asegurar(condicion: boolean, mensaje: string): void
 * que llame a function fallar(mensaje: string): never si la condicion
 * es falsa (throw new Error(mensaje)).
 * asegurar(2 + 2 === 4, "Matematicas rotas") no debe lanzar.
 * asegurar(1 === 2, "Uno no es dos") debe lanzar error.
 * ============================================
 */

function fallar(mensaje: string): never {
  throw new Error(mensaje);
}

function asegurar(condicion: boolean, mensaje: string): void {
  if (!condicion) {
    fallar(mensaje);
  }
}

asegurar(2 + 2 === 4, "Matematicas rotas");
console.log("Primera asercion pasada (2+2=4)");

// asegurar(1 === 2, "Uno no es dos");
// La linea de arriba lanzaria Error: "Uno no es dos"
// Descomentala para probar
