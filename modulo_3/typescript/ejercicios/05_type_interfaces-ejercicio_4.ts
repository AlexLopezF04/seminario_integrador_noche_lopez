/**
 * ============================================
 * EJERCICIO 4: Vehiculo, Coche y Moto (extends)
 * ============================================
 * Tema: extends y composicion (D.1)
 *
 * Enunciado:
 * Define interface Vehiculo con marca, modelo, anio.
 * Extiende con Coche (puertas) y Moto (cilindrada).
 * Crea un objeto de cada tipo e imprime sus datos.
 * Extra: type VehiculoElectrico = Vehiculo & { autonomiaKm: number }.
 * ============================================
 */

interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
}

interface Coche extends Vehiculo {
  puertas: number;
}

interface Moto extends Vehiculo {
  cilindrada: number;
}

type VehiculoElectrico = Vehiculo & { autonomiaKm: number };

const coche: Coche = { marca: "Toyota", modelo: "Corolla", anio: 2023, puertas: 4 };
const moto: Moto = { marca: "Honda", modelo: "CB500", anio: 2022, cilindrada: 500 };
const elect: VehiculoElectrico = { marca: "Tesla", modelo: "Model 3", anio: 2024, autonomiaKm: 500 };

console.log("Coche:", coche.marca, coche.modelo, coche.anio, coche.puertas + "p");
console.log("Moto:", moto.marca, moto.modelo, moto.anio, moto.cilindrada + "cc");
console.log("Electrico:", elect.marca, elect.modelo, elect.autonomiaKm + "km");
