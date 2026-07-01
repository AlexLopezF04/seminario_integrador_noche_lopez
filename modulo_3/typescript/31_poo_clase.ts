// Concepto puro
class Producto {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} — $${this.precio} (${estado})`;
  }
}

const teclado = new Producto("Teclado mecánico", 120, true);
const monitor = new Producto("Monitor 4K", 450, false);

console.log(teclado.describir());
console.log(monitor.describir());

// ────────── Ejemplo aplicado ────────── //
class Temperatura {
  valorCelsius: number;
  valorFahrenheit: number;
  valorKelvin: number;
  

  constructor(celsius: number) {
    this.valorCelsius = celsius;
    this.valorFahrenheit = celsius * 9 / 5 + 32;
    this.valorKelvin = celsius + 273.15;
  }

  aFahrenheit(): number {
    return this.valorFahrenheit;
  }

  aKelvin(): number {
    return this.valorKelvin;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const hervor = new Temperatura(100);
const congelacion = new Temperatura(0);

console.log(hervor.describir());
console.log(congelacion.describir());

// ────────── Mini-ejercicio ────────── //
class Rectangulo {
  ancho: number;
  alto: number;

  constructor(ancho: number, alto: number) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area(): number {
    return this.ancho * this.alto;
  }

  perimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

const rect1 = new Rectangulo(4, 7);
const rect2 = new Rectangulo(10, 3);

console.log(`Rect1 (4 × 7) — área: ${rect1.area()}, perímetro: ${rect1.perimetro()}`);
console.log(`Rect2 (10 × 3) — área: ${rect2.area()}, perímetro: ${rect2.perimetro()}`);

