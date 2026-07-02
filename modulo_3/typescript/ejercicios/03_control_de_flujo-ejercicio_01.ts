/**
 * Ejercicio: Condicionales basicos
 * if simple, if/else, operador ternario.
 */

function verificarEdad(edad: number): void {
  if (edad >= 18) console.log("Acceso permitido (" + edad + ")");
  else console.log("Sin acceso (" + edad + ")");
}
verificarEdad(17);
verificarEdad(25);

function esPar(n: number): string {
  const msg = n % 2 === 0 ? "par" : "impar";
  console.log(n + " es " + msg + " (ternario)");
  return msg;
}
esPar(4);
esPar(7);
