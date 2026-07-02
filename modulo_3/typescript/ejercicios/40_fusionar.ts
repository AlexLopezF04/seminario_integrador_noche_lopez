/**
 * Ejercicio C.1: fusionar
 * Crea una funcion fusionar<T extends object>
 * que reciba dos objetos T y devuelva su union (spread).
 * Tip: T & Record<string, unknown> no es necesario;
 * puedes usar la firma: fusionar<T extends object>(a: T, b: T): T
 * Sin embargo T & T no captura bien propiedades unicas.
 * Mejor usar genericos independientes y mezclar:
 * fusionar<T, U>(a: T, b: U): T & U
 */

function fusionar<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const obj1 = { nombre: "Ana", edad: 30 };
const obj2 = { ciudad: "Lima", profesion: "Ingeniera" };
const fusionado = fusionar(obj1, obj2);
console.log("fusionar:", fusionado);

console.log("nombre:", fusionado.nombre);
console.log("ciudad:", fusionado.ciudad);
