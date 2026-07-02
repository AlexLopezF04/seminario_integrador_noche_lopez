/**
 * ============================================
 * EJERCICIO 3: Nivel de bateria + switch dias
 * ============================================
 * Tema: if/else if/else y switch (A.3)
 *
 * Enunciado:
 * Declara const bateria: number = 25. Usa if/else if para:
 * - "Critica" si < 10
 * - "Baja" si < 30
 * - "Media" si < 60
 * - "Buena" si < 90
 * - "Completa" si >= 90
 * Prueba con varios valores.
 *
 * Extra: const diaSemana: number = 3, usa switch para
 * imprimir el nombre del dia (1 -> "Lunes", ..., 7 -> "Domingo").
 * ============================================
 */

function clasificarBateria(bateria: number): void {
  let nivel: string;
  if (bateria < 10) {
    nivel = "Critica";
  } else if (bateria < 30) {
    nivel = "Baja";
  } else if (bateria < 60) {
    nivel = "Media";
  } else if (bateria < 90) {
    nivel = "Buena";
  } else {
    nivel = "Completa";
  }
  console.log("Bateria al " + bateria + "%: " + nivel);
}

clasificarBateria(5);   // Critica
clasificarBateria(25);  // Baja
clasificarBateria(55);  // Media
clasificarBateria(85);  // Buena
clasificarBateria(100); // Completa

// Extra: switch para dias de la semana
const diaSemana: number = 3;
let nombreDia: string;

switch (diaSemana) {
  case 1: nombreDia = "Lunes"; break;
  case 2: nombreDia = "Martes"; break;
  case 3: nombreDia = "Miercoles"; break;
  case 4: nombreDia = "Jueves"; break;
  case 5: nombreDia = "Viernes"; break;
  case 6: nombreDia = "Sabado"; break;
  case 7: nombreDia = "Domingo"; break;
  default: nombreDia = "Dia invalido";
}

console.log("Dia " + diaSemana + ": " + nombreDia);
