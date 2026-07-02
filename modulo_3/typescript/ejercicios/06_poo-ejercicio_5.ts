/**
 * ============================================
 * EJERCICIO 5: Vehiculo, Automovil, Motocicleta (herencia)
 * ============================================
 * Tema: Herencia (C.1)
 *
 * Enunciado:
 * Clase base Vehiculo con marca, velocidadMax y describir().
 * Automovil extends Vehiculo anade numeroPuertas y sobrescribe describir().
 * Motocicleta extends Vehiculo anade tieneSidecar: boolean.
 * Instancia uno de cada tipo y llama a describir().
 * ============================================
 */

class Vehiculo {
  constructor(
    public marca: string,
    public velocidadMax: number
  ) {}

  describir(): string {
    return this.marca + " (max: " + this.velocidadMax + " km/h)";
  }
}

class Automovil extends Vehiculo {
  constructor(
    marca: string,
    velocidadMax: number,
    public numeroPuertas: number
  ) {
    super(marca, velocidadMax);
  }

  override describir(): string {
    return super.describir() + " - " + this.numeroPuertas + " puertas";
  }
}

class Motocicleta extends Vehiculo {
  constructor(
    marca: string,
    velocidadMax: number,
    public tieneSidecar: boolean
  ) {
    super(marca, velocidadMax);
  }

  override describir(): string {
    return super.describir() + " - sidecar: " + (this.tieneSidecar ? "si" : "no");
  }
}

const auto = new Automovil("Toyota", 180, 4);
const moto = new Motocicleta("Honda", 200, false);

console.log(auto.describir());
console.log(moto.describir());
