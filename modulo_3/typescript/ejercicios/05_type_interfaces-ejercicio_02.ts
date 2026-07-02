/**
 * Ejercicio: Vehiculo - herencia con interfaces y clases
 * Misma jerarquia (Vehiculo -> Coche/Auto, Moto) con ambas tecnicas.
 */

// Interfaces (extends)
interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
}
interface Coche extends Vehiculo { puertas: number; }
interface Moto extends Vehiculo { cilindrada: number; }
type VehiculoElectrico = Vehiculo & { autonomiaKm: number };

const coche: Coche = { marca: "Toyota", modelo: "Corolla", anio: 2023, puertas: 4 };
const motoInt: Moto = { marca: "Honda", modelo: "CB500", anio: 2022, cilindrada: 500 };
const elect: VehiculoElectrico = { marca: "Tesla", modelo: "Model 3", anio: 2024, autonomiaKm: 500 };
console.log("Interface - Coche:", coche.marca, coche.puertas + "p");
console.log("Interface - Moto:", motoInt.marca, motoInt.cilindrada + "cc");

// Clases (extends)
class VehiculoClase {
  constructor(public marca: string, public velocidadMax: number) {}
  describir(): string { return this.marca + " (max: " + this.velocidadMax + " km/h)"; }
}
class Automovil extends VehiculoClase {
  constructor(marca: string, velocidadMax: number, public numeroPuertas: number) { super(marca, velocidadMax); }
  override describir(): string { return super.describir() + " - " + this.numeroPuertas + " puertas"; }
}
class Motocicleta extends VehiculoClase {
  constructor(marca: string, velocidadMax: number, public tieneSidecar: boolean) { super(marca, velocidadMax); }
  override describir(): string { return super.describir() + " - sidecar: " + (this.tieneSidecar ? "si" : "no"); }
}
const auto = new Automovil("Toyota", 180, 4);
const motoCls = new Motocicleta("Honda", 200, false);
console.log("Clase - Auto:", auto.describir());
console.log("Clase - Moto:", motoCls.describir());
