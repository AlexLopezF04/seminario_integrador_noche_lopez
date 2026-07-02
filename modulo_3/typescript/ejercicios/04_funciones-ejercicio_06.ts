/**
 * Ejercicio 5: asegurar con never
 */

function fallar(mensaje: string): never {
  throw new Error(mensaje);
}

function asegurar(condicion: boolean, mensaje: string): void {
  if (!condicion) fallar(mensaje);
}

asegurar(2 + 2 === 4, "Matematicas rotas");
console.log("Primera asercion pasada");
