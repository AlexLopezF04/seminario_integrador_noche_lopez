/**
 * ============================================
 * EJERCICIO 4: Filtrar precios con descuento
 * ============================================
 * Tema: Arrays (metodos)
 *
 * Enunciado:
 * Dado const precios: number[] = [120, 35, 450, 89, 210, 15]:
 * 1. Filtrar solo los que cuestan mas de 100
 * 2. Aplicar descuento del 10% a cada uno con map
 * 3. Calcular el total con reduce
 * Imprime la lista con descuento y el total.
 * ============================================
 */

const precios: number[] = [120, 35, 450, 89, 210, 15];

// 1. Filtrar mayores a 100
const mayores100: number[] = precios.filter((p) => p > 100);
console.log("Mayores a 100:", mayores100);

// 2. Aplicar 10% de descuento
const conDescuento: number[] = mayores100.map((p) => Number((p * 0.9).toFixed(2)));
console.log("Con descuento:", conDescuento);

// 3. Total
const total: number = Number(conDescuento.reduce((acc, p) => acc + p, 0).toFixed(2));
console.log("Total con descuento: $" + total);
