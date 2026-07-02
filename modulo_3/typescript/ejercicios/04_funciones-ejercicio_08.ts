/**
 * ============================================
 * EJERCICIO 7: convertir (sobrecarga)
 * ============================================
 * Tema: Sobrecargas (E.1)
 *
 * Enunciado:
 * Escribe funcion sobrecargada convertir:
 * - convertir(valor: number, a: "binario" | "hex"): string
 * - convertir(valor: string, desde: "binario" | "hex"): number
 * Implementacion:
 * - number a string: n.toString(2) o n.toString(16)
 * - string a number: parseInt(s, 2) o parseInt(s, 16)
 * Prueba: convertir(255, "hex") -> "ff", convertir("ff", "hex") -> 255
 * ============================================
 */

function convertir(valor: number, a: "binario" | "hex"): string;
function convertir(valor: string, desde: "binario" | "hex"): number;
function convertir(
  valor: number | string,
  modo: "binario" | "hex"
): string | number {
  if (typeof valor === "number") {
    return valor.toString(modo === "hex" ? 16 : 2);
  }
  return parseInt(valor, modo === "hex" ? 16 : 2);
}

console.log("255 en hex:", convertir(255, "hex"));     // "ff"
console.log("ff en decimal:", convertir("ff", "hex")); // 255
console.log("255 en binario:", convertir(255, "binario")); // "11111111"
console.log("11111111 en decimal:", convertir("11111111", "binario")); // 255
