/**
 * Ejercicio: Estructuras de datos genericas
 * Cola<T> (FIFO) + Cache<T> (key-value con default)
 */

class Cola<T> {
  private items: T[] = [];
  enqueue(item: T): void { this.items.push(item); }
  dequeue(): T | undefined { return this.items.shift(); }
  peek(): T | undefined { return this.items[0]; }
  get tamano(): number { return this.items.length; }
  estaVacia(): boolean { return this.items.length === 0; }
}

const cola = new Cola<string>();
cola.enqueue("primero"); cola.enqueue("segundo"); cola.enqueue("tercero");
console.log("Cola peek:", cola.peek());
console.log("Cola dequeue:", cola.dequeue());
console.log("Cola tamano:", cola.tamano);

class Cache_<T = string> {
  private almacen = new Map<string, T>();
  guardar(clave: string, valor: T): void { this.almacen.set(clave, valor); }
  obtener(clave: string): T | undefined { return this.almacen.get(clave); }
  eliminar(clave: string): void { this.almacen.delete(clave); }
}

const cacheStr = new Cache_();
cacheStr.guardar("saludo", "Hola");
console.log("Cache string:", cacheStr.obtener("saludo"));

const cacheNum = new Cache_<number>();
cacheNum.guardar("max", 100);
console.log("Cache number:", cacheNum.obtener("max"));
