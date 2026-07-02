/**
 * ============================================
 * EJERCICIO 11: Productos con descuento opcional
 * ============================================
 * Tema: Objetos inline y opcionales
 *
 * Enunciado:
 * Define un tipo Producto inline con: id (number), nombre (string),
 * precio (number), descuento? (number), tags? (string[]).
 * Crea const productos: Producto[] con 3 productos (algunos sin
 * descuento, algunos sin tags). Recorre con for...of y calcula
 * el precio final: si tiene descuento, aplicalo; si no, usa
 * el precio tal cual. Imprime nombre y precio final.
 * ============================================
 */

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  descuento?: number;  // opcional (porcentaje)
  tags?: string[];     // opcional
};

const productos: Producto[] = [
  { id: 1, nombre: "Laptop",   precio: 1200, descuento: 15, tags: ["electronica"] },
  { id: 2, nombre: "Mesa",     precio: 300,                             tags: ["hogar"] },
  { id: 3, nombre: "Libro",    precio: 45,   descuento: 10                  },
];

for (const p of productos) {
  let precioFinal: number;
  if (p.descuento !== undefined) {
    precioFinal = Number((p.precio * (1 - p.descuento / 100)).toFixed(2));
  } else {
    precioFinal = p.precio;
  }
  const tagsStr = p.tags ? " [" + p.tags.join(", ") + "]" : "";
  console.log(p.nombre + ": $" + precioFinal + tagsStr);
}
