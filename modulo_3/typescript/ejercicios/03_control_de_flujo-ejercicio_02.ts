/**
 * Ejercicio: break y continue
 * continue para saltar elementos, break para detener el bucle.
 */

// continue: saltar impares
const valores: number[] = [3, 7, 2, 9, 11, 4, 6];
console.log("Pares (continue):");
for (const v of valores) {
  if (v % 2 !== 0) continue;
  console.log("  " + v);
}

// continue + break: validar carrito
const carrito = [
  { nombre: "A", precio: 50, stock: 3, pedido: 2 },
  { nombre: "B", precio: 0, stock: 10, pedido: 1 },
  { nombre: "C", precio: 30, stock: 1, pedido: 5 },
];
let total = 0;
for (const item of carrito) {
  if (item.precio <= 0) { console.log("Sin precio: " + item.nombre); continue; }
  if (item.pedido > item.stock) { console.log("Sin stock: " + item.nombre); continue; }
  total += item.precio * item.pedido;
}
console.log("Total a pagar: $" + total);
