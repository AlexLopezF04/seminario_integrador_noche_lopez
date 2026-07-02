/**
 * ============================================
 * EJERCICIO 10: Pares y mayor que 8 (break/continue)
 * ============================================
 * Tema: break y continue (B.6)
 *
 * Enunciado:
 * Recorre [3, 7, 2, 9, 11, 4, 6]. Usa continue para saltar
 * los impares e imprime solo los pares. Luego, en un segundo
 * bucle, usa break para detenerte al encontrar un numero > 8.
 * ============================================
 */

const valores: number[] = [3, 7, 2, 9, 11, 4, 6];

// continue: saltar impares
console.log("Pares (con continue):");
for (const v of valores) {
  if (v % 2 !== 0) continue;
  console.log("  " + v + " es par");
}

// break: detenerse al encontrar > 8
console.log("Hasta el primero > 8 (con break):");
for (const v of valores) {
  if (v > 8) {
    console.log("  Encontrado " + v + " > 8, deteniendo");
    break;
  }
  console.log("  " + v);
}
