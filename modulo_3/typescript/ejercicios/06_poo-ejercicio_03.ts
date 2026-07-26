/**
 * ============================================
 * EJERCICIO 8: IdUnico (static)
 * ============================================
 * Tema: Miembros estaticos (D.2)
 *
 * Enunciado:
 * Clase IdUnico con private static ultimo: number = 0 y
 * static generar(): number que incremente y devuelva el siguiente ID.
 * Crea 5 IDs sin instanciar la clase.
 * ============================================
 */

class IdUnico {
  private static ultimo: number = 0;

  static generar(): number {
    IdUnico.ultimo++;
    return IdUnico.ultimo;
  }
}

console.log("ID 1:", IdUnico.generar());
console.log("ID 2:", IdUnico.generar());
console.log("ID 3:", IdUnico.generar());
console.log("ID 4:", IdUnico.generar());
console.log("ID 5:", IdUnico.generar());
