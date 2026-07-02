/**
 * ============================================
 * EJERCICIO 8: Semaforos con closure
 * ============================================
 * Tema: Closures (F.1)
 *
 * Enunciado:
 * Usa crearContador (del concepto puro) para modelar dos semaforos
 * independientes: semR (rojo) y semV (verde).
 * Haz que semR cuente 3 veces y semV cuente 1 vez.
 * Verifica que los valores son independientes.
 * Extra: agrega historial: () => number[] que devuelva todos los valores.
 * ============================================
 */

function crearContador(inicio: number = 0) {
  let cuenta = inicio;
  const historial: number[] = [inicio];

  return {
    incrementar: () => {
      cuenta++;
      historial.push(cuenta);
      return cuenta;
    },
    decrementar: () => {
      cuenta--;
      historial.push(cuenta);
      return cuenta;
    },
    valor: () => cuenta,
    resetear: () => {
      cuenta = inicio;
      historial.push(cuenta);
    },
    historial: () => [...historial],
  };
}

const semR = crearContador(0);
const semV = crearContador(0);

semR.incrementar(); // 1
semR.incrementar(); // 2
semR.incrementar(); // 3
semV.incrementar(); // 1

console.log("semR (rojo):", semR.valor());   // 3
console.log("semV (verde):", semV.valor());  // 1
console.log("Independientes?", semR.valor() !== semV.valor()); // true

console.log("Historial semR:", semR.historial()); // [0, 1, 2, 3]
console.log("Historial semV:", semV.historial()); // [0, 1]
