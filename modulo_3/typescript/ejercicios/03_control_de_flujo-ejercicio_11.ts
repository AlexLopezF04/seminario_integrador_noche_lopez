/**
 * ============================================
 * RETO FINAL: Validador de carrito
 * ============================================
 * Tema: Combinacion de todo (Reto final)
 *
 * Enunciado:
 * Dado el carrito:
 *   { nombre: "A", precio: 50, stock: 3, pedido: 2 },
 *   { nombre: "B", precio: 0, stock: 10, pedido: 1 },
 *   { nombre: "C", precio: 30, stock: 1, pedido: 5 }
 * Recorre con for...of. Para cada producto:
 * 1. Si precio <= 0, usa continue y avisa "Sin precio: X"
 * 2. Si pedido > stock, avisa "Sin stock de X" y continue
 * 3. Si ok, suma precio * pedido a total
 * Resultado esperado del total: 100
 * ============================================
 */

const carritoReto = [
  { nombre: "A", precio: 50, stock: 3, pedido: 2 },
  { nombre: "B", precio: 0, stock: 10, pedido: 1 },
  { nombre: "C", precio: 30, stock: 1, pedido: 5 },
];

let total: number = 0;

for (const item of carritoReto) {
  if (item.precio <= 0) {
    console.log("Producto sin precio: " + item.nombre);
    continue;
  }
  if (item.pedido > item.stock) {
    console.log("Sin stock suficiente de " + item.nombre);
    continue;
  }
  total += item.precio * item.pedido;
}

console.log("Total a pagar: $" + total); // $100
