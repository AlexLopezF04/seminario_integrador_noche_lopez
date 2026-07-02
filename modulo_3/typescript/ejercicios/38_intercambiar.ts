/**
 * Ejercicio B.1: intercambiar
 * Crea una funcion generica intercambiar<T>
 * que reciba un par [T, T] y devuelva el par invertido [T, T].
 */

function intercambiar<T>(par: [T, T]): [T, T] {
  return [par[1], par[0]];
}

console.log("intercambiar([1, 2]):", intercambiar([1, 2]));
console.log("intercambiar(['a', 'b']):", intercambiar(["a", "b"]));
console.log("intercambiar([true, false]):", intercambiar([true, false]));
