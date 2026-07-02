/**
 * ============================================
 * EJERCICIO 1: if simple - Acceso por edad
 * ============================================
 * Tema: if simple (A.1)
 *
 * Enunciado:
 * Declara const edad: number = 17. Usa if simple para imprimir
 * "Acceso permitido" solo si la edad es 18 o mas.
 * Prueba con 17, 18 y 25.
 * ============================================
 */

const edad1: number = 17;
if (edad1 >= 18) {
  console.log("Acceso permitido (edad=" + edad1 + ")");
} else {
  console.log("Sin acceso (edad=" + edad1 + ")");
}

const edad2: number = 18;
if (edad2 >= 18) {
  console.log("Acceso permitido (edad=" + edad2 + ")");
}

const edad3: number = 25;
if (edad3 >= 18) {
  console.log("Acceso permitido (edad=" + edad3 + ")");
}
