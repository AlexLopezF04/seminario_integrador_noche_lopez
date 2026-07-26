/**
 * Ejercicio: Contador - closure vs clase
 * Misma funcionalidad (incrementar, decrementar, valor) con ambas tecnicas.
 */

// Closure
function crearContador(inicio: number = 0) {
  let cuenta = inicio;
  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor: () => cuenta,
  };
}
const c = crearContador();
c.incrementar(); c.incrementar(); c.incrementar(); c.decrementar();
console.log("Closure valor:", c.valor());

// Clase
class Contador {
  private valor: number = 0;
  incrementar(): void { this.valor++; }
  decrementar(): void { if (this.valor > 0) this.valor--; }
  obtenerValor(): number { return this.valor; }
}
const cont = new Contador();
cont.incrementar(); cont.incrementar(); cont.incrementar(); cont.decrementar();
console.log("Clase valor:", cont.obtenerValor());
