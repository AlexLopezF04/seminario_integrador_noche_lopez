/**
 * ============================================
 * EJERCICIO 9: Simulacion de dado (while)
 * ============================================
 * Tema: while / do-while (B.5)
 *
 * Enunciado:
 * Simula un dado con Math.floor(Math.random() * 6) + 1.
 * Usa un while (o do-while) que siga "tirando" hasta sacar
 * un 6, contando cuantas tiradas fueron necesarias.
 * Imprime el conteo final.
 * ============================================
 */

let tiradas: number = 0;
let resultado: number = 0;

while (resultado !== 6) {
  resultado = Math.floor(Math.random() * 6) + 1;
  tiradas++;
  console.log("Tirada " + tiradas + ": " + resultado);
}

console.log("Se necesitaron " + tiradas + " tirada(s) para sacar 6");
