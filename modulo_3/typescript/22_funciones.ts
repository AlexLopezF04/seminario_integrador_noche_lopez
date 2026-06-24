// reto-final.ts
// Validador de carrito — combina for...of, if, continue

type ItemCarrito = {
  nombre: string;
  precio: number;
  stock: number;
  pedido: number;
};

function validarCarrito(carrito: ItemCarrito[]): void {
  let total = 0;

  for (const producto of carrito) {
    if (producto.precio <= 0) {
      console.log(`Producto sin precio: ${producto.nombre}`);
      continue;
    }

    if (producto.pedido > producto.stock) {
      console.log(`Sin stock suficiente de ${producto.nombre}`);
      continue;
    }

    total += producto.precio * producto.pedido;
  }

  console.log(`Total a pagar: $${total}`);
}

const carritoReto: ItemCarrito[] = [
  { nombre: "A", precio: 50, stock: 3, pedido: 2 },
  { nombre: "B", precio: 0, stock: 10, pedido: 1 },
  { nombre: "C", precio: 30, stock: 1, pedido: 5 },
];

validarCarrito(carritoReto);
