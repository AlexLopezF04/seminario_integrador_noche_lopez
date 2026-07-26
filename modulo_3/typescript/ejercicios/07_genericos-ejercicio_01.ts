/**
 * Ejercicio: Funciones genericas basicas
 * envolverArray<T>, intercambiar<T>, fusionar<T, U>
 */

function envolverArray<T>(valor: T): T[] {
  return [valor, valor, valor];
}
console.log("envolverArray(42):", envolverArray(42));
console.log("envolverArray('hola'):", envolverArray("hola"));

function intercambiar<T>(par: [T, T]): [T, T] {
  return [par[1], par[0]];
}
console.log("intercambiar([1, 2]):", intercambiar([1, 2]));
console.log("intercambiar(['a', 'b']):", intercambiar(["a", "b"]));

function fusionar<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const obj1 = { nombre: "Ana", edad: 30 };
const obj2 = { ciudad: "Lima" };
console.log("fusionar:", fusionar(obj1, obj2));
