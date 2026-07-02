/**
 * ============================================
 * EJERCICIO 9: Descuento (polimorfismo)
 * ============================================
 * Tema: Polimorfismo (D.3)
 *
 * Enunciado:
 * Clase abstracta Descuento con aplicar(precio: number): number
 * y etiqueta(precio: number): string ("$precio -> $final").
 * Implementa:
 * - DescuentoPorcentaje(porcentaje)
 * - DescuentoFijo(cantidad) (minimo $0)
 * - SinDescuento (precio sin cambios)
 * Guarda en array Descuento[] y recorre imprimiendo etiqueta(100).
 * ============================================
 */

abstract class Descuento {
  abstract aplicar(precio: number): number;

  etiqueta(precio: number): string {
    return "$" + precio + " -> $" + this.aplicar(precio);
  }
}

class DescuentoPorcentaje extends Descuento {
  constructor(private porcentaje: number) {
    super();
  }

  override aplicar(precio: number): number {
    return Number((precio * (1 - this.porcentaje / 100)).toFixed(2));
  }
}

class DescuentoFijo extends Descuento {
  constructor(private cantidad: number) {
    super();
  }

  override aplicar(precio: number): number {
    const resultado = precio - this.cantidad;
    return resultado > 0 ? resultado : 0;
  }
}

class SinDescuento extends Descuento {
  override aplicar(precio: number): number {
    return precio;
  }
}

const descuentos: Descuento[] = [
  new DescuentoPorcentaje(15),
  new DescuentoFijo(30),
  new SinDescuento(),
];

for (const d of descuentos) {
  console.log(d.etiqueta(100));
}
// $100 -> $85
// $100 -> $70
// $100 -> $100
