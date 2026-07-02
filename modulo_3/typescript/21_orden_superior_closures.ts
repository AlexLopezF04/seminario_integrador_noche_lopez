/**
 * ============================================
 * 21 - FUNCIONES DE ORDEN SUPERIOR Y CLOSURES
 * ============================================
 * Temas:
 *   - Tipos de funcion y callbacks tipados
 *   - Funciones que reciben funciones
 *   - Funciones que devuelven funciones (fabricas)
 *   - Closures (funciones que recuerdan su entorno)
 * ============================================
 */

// ──────────────────────────────────────────────
// D.1: Tipos de funcion y callbacks tipados
// ──────────────────────────────────────────────

// Tipo de funcion: (param: Tipo) => TipoRetorno
type Transformador = (x: number) => number;
type Predicado = (x: number) => boolean;

// Funcion que RECIBE una funcion (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Funcion que DEVUELVE una funcion (fabrica)
function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

const triple = multiplicadorDe(3);
const cuadradoFn: Transformador = (x) => x * x;

console.log(aplicar(5, triple));       // 15
console.log(aplicar(5, cuadradoFn));   // 25
console.log(aplicar(5, (x) => x + 10)); // 15 (lambda inline)

// Filtrar con predicado tipado
function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filtrar(nums, (n) => n % 2 === 0)); // [2, 4, 6, 8]
console.log(filtrar(nums, (n) => n > 5));       // [6, 7, 8]

// ──────────────────────────────────────────────
// F.1: Closures
// ──────────────────────────────────────────────

/**
 * Un closure es una funcion que captura variables del ambito
 * donde fue creada, incluso cuando ese ambito ya no esta activo.
 */

function crearContador(inicio: number = 0) {
  let cuenta = inicio;  // variable capturada

  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor:       () => cuenta,
    resetear:    () => { cuenta = inicio; },
  };
}

const c1 = crearContador();
const c2 = crearContador(10);  // contador independiente

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();

console.log("c1:", c1.valor()); // 3
console.log("c2:", c2.valor()); // 11

c1.resetear();
console.log("c1 tras reset:", c1.valor()); // 0

// ──────────────────────────────────────────────
// EJEMPLO: Pipeline de procesamiento de pedidos
// ──────────────────────────────────────────────

type Pedido = { id: number; total: number; cliente: string };
type ProcesadorPedido = (pedido: Pedido) => Pedido;

const aplicarIVA: ProcesadorPedido = (p) => ({
  ...p,
  total: Number((p.total * 1.19).toFixed(2)),
});

const aplicarDescuentoVIP = (descuento: number): ProcesadorPedido =>
  (p) => ({ ...p, total: Number((p.total * (1 - descuento)).toFixed(2)) });

function procesarPedido(pedido: Pedido, pasos: ProcesadorPedido[]): Pedido {
  return pasos.reduce((p, fn) => fn(p), pedido);
}

const pedido: Pedido = { id: 101, total: 100, cliente: "Ana" };

const resultado = procesarPedido(pedido, [
  aplicarDescuentoVIP(0.10), // 10% descuento VIP -> $90
  aplicarIVA,                // + 19% IVA        -> $107.10
]);

console.log("Pedido procesado:", resultado);
// { id: 101, total: 107.1, cliente: 'Ana' }

// ──────────────────────────────────────────────
// EJEMPLO: Memoizacion con closure
// ──────────────────────────────────────────────

function memoize<T, R>(fn: (arg: T) => R): (arg: T) => R {
  const cache = new Map<T, R>();

  return (arg: T): R => {
    if (cache.has(arg)) {
      console.log("Cache hit:", arg);
      return cache.get(arg)!;
    }
    const resultado = fn(arg);
    cache.set(arg, resultado);
    return resultado;
  };
}

function fibLento(n: number): number {
  if (n <= 1) return n;
  return fibLento(n - 1) + fibLento(n - 2);
}

const fibRapido = memoize(fibLento);

console.log(fibRapido(10)); // calcula
console.log(fibRapido(10)); // Cache hit: 10 - retorna al instante
console.log(fibRapido(20)); // calcula
