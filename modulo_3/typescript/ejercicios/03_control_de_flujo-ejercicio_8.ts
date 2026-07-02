/**
 * ============================================
 * EJERCICIO 8: Precios con IVA (map + forEach)
 * ============================================
 * Tema: forEach / map (B.4)
 *
 * Enunciado:
 * Dado const precios = [100, 250, 80, 500], usa map para crear
 * un array con el precio + 19% de IVA, redondeado a 2 decimales.
 * Luego usa forEach para imprimir cada precio con IVA.
 * ============================================
 */

const precios: number[] = [100, 250, 80, 500];

const conIVA: number[] = precios.map((p) =>
  Number((p * 1.19).toFixed(2))
);

conIVA.forEach((p, i) => {
  console.log("Precio " + (i + 1) + ": $" + precios[i] + " -> con IVA: $" + p);
});
