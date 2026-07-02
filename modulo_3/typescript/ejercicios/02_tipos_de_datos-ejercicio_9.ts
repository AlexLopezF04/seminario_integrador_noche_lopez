/**
 * ============================================
 * EJERCICIO 9: Procesar valores unknown
 * ============================================
 * Tema: any, unknown, never
 *
 * Enunciado:
 * Declara const v1: unknown = 42, v2: unknown = "hola",
 * v3: unknown = true, v4: unknown = null, v5: unknown = [1, 2, 3].
 * Para cada uno, usa if/else if con typeof para imprimir:
 * "Numero: X" si es number, "Texto de N caracteres" si es string,
 * "Booleano: X" si es boolean, "Tipo desconocido" en otro caso.
 * ============================================
 */

const v1: unknown = 42;
const v2: unknown = "hola";
const v3: unknown = true;
const v4: unknown = null;
const v5: unknown = [1, 2, 3];

function procesarUnknown(valor: unknown): void {
  if (typeof valor === "number") {
    console.log("Numero:", valor);
  } else if (typeof valor === "string") {
    console.log("Texto de", valor.length, "caracter(es):", valor);
  } else if (typeof valor === "boolean") {
    console.log("Booleano:", valor);
  } else {
    console.log("Tipo desconocido:", typeof valor);
  }
}

procesarUnknown(v1); // Numero: 42
procesarUnknown(v2); // Texto de 4 caracter(es): hola
procesarUnknown(v3); // Booleano: true
procesarUnknown(v4); // Tipo desconocido: object (null)
procesarUnknown(v5); // Tipo desconocido: object (array)
