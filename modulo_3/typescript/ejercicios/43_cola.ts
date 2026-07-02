/**
 * Ejercicio D.2: Cola FIFO
 * Crea una clase generica Cola<T> con:
 *   - enqueue(item: T): void
 *   - dequeue(): T | undefined
 *   - peek(): T | undefined
 *   - tamano: number
 *   - estaVacia(): boolean
 */

class Cola<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  get tamano(): number {
    return this.items.length;
  }

  estaVacia(): boolean {
    return this.items.length === 0;
  }
}

const cola = new Cola<string>();
cola.enqueue("primero");
cola.enqueue("segundo");
cola.enqueue("tercero");

console.log("Cola peek:", cola.peek());          // "primero"
console.log("Cola dequeue:", cola.dequeue());    // "primero"
console.log("Cola tamano:", cola.tamano);        // 2
console.log("Cola dequeue:", cola.dequeue());    // "segundo"
console.log("Cola estaVacia:", cola.estaVacia()); // false
console.log("Cola dequeue:", cola.dequeue());    // "tercero"
console.log("Cola estaVacia:", cola.estaVacia()); // true
