/**
 * Ejercicio E.1: Cache con default
 * Crea una clase Cache<T = string> que:
 *   - guardar(clave: string, valor: T): void
 *   - obtener(clave: string): T | undefined
 *   - eliminar(clave: string): void
 *   - limpiar(): void
 * El tipo por defecto de T debe ser string.
 */

class Cache_<T = string> {
  private almacen = new Map<string, T>();

  guardar(clave: string, valor: T): void {
    this.almacen.set(clave, valor);
  }

  obtener(clave: string): T | undefined {
    return this.almacen.get(clave);
  }

  eliminar(clave: string): void {
    this.almacen.delete(clave);
  }

  limpiar(): void {
    this.almacen.clear();
  }
}

// Sin anotacion: T = string
const cacheStr = new Cache_();
cacheStr.guardar("saludo", "Hola");  // T = string
console.log("Cache string:", cacheStr.obtener("saludo"));

// Con anotacion explicita
const cacheNum = new Cache_<number>();
cacheNum.guardar("max", 100);
console.log("Cache number:", cacheNum.obtener("max"));

cacheNum.eliminar("max");
console.log("Cache number tras eliminar:", cacheNum.obtener("max"));
