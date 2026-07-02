/**
 * Ejercicio A.1: envolverArray
 * Crea una funcion generica envolverArray<T>
 * que reciba un valor T y devuelva un array con ese valor repetido 3 veces.
 */

function envolverArray<T>(valor: T): T[] {
  return [valor, valor, valor];
}

console.log("envolverArray(42):", envolverArray(42));
console.log("envolverArray('hola'):", envolverArray("hola"));
console.log("envolverArray(true):", envolverArray(true));
