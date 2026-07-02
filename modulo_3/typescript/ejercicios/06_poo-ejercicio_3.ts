/**
 * ============================================
 * EJERCICIO 3: Clase Contador (private)
 * ============================================
 * Tema: Modificadores de acceso (B.1)
 *
 * Enunciado:
 * Crea la clase Contador con propiedad private valor: number = 0.
 * Metodos publicos: incrementar(), decrementar() (no baja de 0),
 * obtenerValor().
 * Prueba que NO se puede asignar contador.valor = 99.
 * ============================================
 */

class Contador {
  private valor: number = 0;

  incrementar(): void {
    this.valor++;
  }

  decrementar(): void {
    if (this.valor > 0) this.valor--;
  }

  obtenerValor(): number {
    return this.valor;
  }
}

const cont = new Contador();
cont.incrementar();
cont.incrementar();
cont.incrementar();
cont.decrementar();
console.log("Valor:", cont.obtenerValor()); // 2

// cont.valor = 99;  // Error: 'valor' is private
