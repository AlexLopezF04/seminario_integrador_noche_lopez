/**
 * ============================================
 * EJERCICIO 7: Semaforo con union de literales
 * ============================================
 * Tema: Enums / Union de literales
 *
 * Enunciado:
 * Define type Semaforo = "rojo" | "amarillo" | "verde".
 * Crea un array const semaforos: Semaforo[] = ["rojo", "verde",
 * "amarillo", "verde"] y recorrelo con for...of.
 * Dentro del bucle, usa if/else para imprimir "Detente",
 * "Precaucion" o "Avanza" segun cada elemento.
 * ============================================
 */

type Semaforo = "rojo" | "amarillo" | "verde";

const semaforos: Semaforo[] = ["rojo", "verde", "amarillo", "verde"];

for (const s of semaforos) {
  if (s === "rojo") {
    console.log(s + " -> Detente");
  } else if (s === "amarillo") {
    console.log(s + " -> Precaución");
  } else {
    console.log(s + " -> Avanza");
  }
}
