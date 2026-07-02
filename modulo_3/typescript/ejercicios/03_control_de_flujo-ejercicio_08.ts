/**
 * Ejercicio 8: IVA con map + forEach
 */

const precios: number[] = [100, 250, 80, 500];
const conIVA: number[] = precios.map((p) => Number((p * 1.19).toFixed(2)));

conIVA.forEach((p, i) => {
  console.log("Precio " + (i + 1) + ": $" + precios[i] + " -> con IVA: $" + p);
});
