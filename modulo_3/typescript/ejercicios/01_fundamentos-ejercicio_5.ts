/**
 * Ejercicio 5: Strict mode
 * noImplicitAny y strictNullChecks en accion.
 */

function saludar(nombre: string): string {
  return "Hola " + nombre;
}
console.log(saludar("Ana"));

let usuario: string | null = null;
usuario = "Luis";
console.log("Usuario:", usuario);
