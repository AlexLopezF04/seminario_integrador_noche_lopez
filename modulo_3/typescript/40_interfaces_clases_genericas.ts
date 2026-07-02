/**
 * ============================================
 * 40 - INTERFACES Y CLASES GENERICAS
 * ============================================
 * Temas:
 *   - Interface generica <T>
 *   - Clase generica (Pila<T>, Cola<T>)
 * ============================================
 */

// ──────────────────────────────────────────────
// D.1: Interface generica
// ──────────────────────────────────────────────

interface Caja<T> {
  valor: T;
  etiqueta: string;
  creada: Date;
}

const cajaNum: Caja<number> = {
  valor: 42,
  etiqueta: "respuesta",
  creada: new Date(),
};

const cajaStr: Caja<string> = {
  valor: "hola mundo",
  etiqueta: "mensaje",
  creada: new Date(),
};

console.log("cajaNum:", cajaNum.valor, cajaNum.etiqueta);
console.log("cajaStr:", cajaStr.valor, cajaStr.etiqueta);

// Interface generica para resultados de API
interface RespuestaApi<T> {
  datos: T;
  exito: boolean;
  mensaje: string;
  total?: number;
}

const respuesta: RespuestaApi<{ id: number; nombre: string }[]> = {
  datos: [{ id: 1, nombre: "Ana" }, { id: 2, nombre: "Luis" }],
  exito: true,
  mensaje: "Usuarios cargados",
  total: 2,
};

console.log("API respuesta:", respuesta.exito, respuesta.datos.length);

// ──────────────────────────────────────────────
// D.2: Clase generica Pila<T> (Stack LIFO)
// ──────────────────────────────────────────────

class Pila<T> {
  private elementos: T[] = [];

  push(item: T): void {
    this.elementos.push(item);
  }

  pop(): T | undefined {
    return this.elementos.pop();
  }

  peek(): T | undefined {
    return this.elementos[this.elementos.length - 1];
  }

  get tamano(): number {
    return this.elementos.length;
  }

  estaVacia(): boolean {
    return this.elementos.length === 0;
  }
}

const pilaNum = new Pila<number>();
pilaNum.push(1);
pilaNum.push(2);
pilaNum.push(3);
console.log("Pila peek:", pilaNum.peek());  // 3
console.log("Pila pop:", pilaNum.pop());    // 3
console.log("Pila tamano:", pilaNum.tamano); // 2

const pilaStr = new Pila<string>();
pilaStr.push("primero");
pilaStr.push("segundo");
console.log("Pila str pop:", pilaStr.pop()); // "segundo"

// ──────────────────────────────────────────────
// EJEMPLO: Resultado con error tipado
// ──────────────────────────────────────────────

interface Resultado<T, E = string> {
  ok: boolean;
  valor?: T;
  error?: E;
}

function dividir(a: number, b: number): Resultado<number> {
  if (b === 0) return { ok: false, error: "Division por cero" };
  return { ok: true, valor: a / b };
}

const r1 = dividir(10, 2);
const r2 = dividir(5, 0);
if (r1.ok) console.log("Resultado:", r1.valor);
if (!r2.ok) console.log("Error:", r2.error);
