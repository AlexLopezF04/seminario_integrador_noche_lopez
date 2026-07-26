/**
 * ============================================
 * 21 - FUNCIONES DE ORDEN SUPERIOR Y CLOSURES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Tipos de funcion, callbacks, fabricas,
 * closures, memoizacion
 * Cursos Online: Multiplicador de precio de cursos,
 * filtro de cursos por condicion, contador de
 * estudiantes activos, pipeline de procesamiento
 * de pedidos de cursos, memoize de calculos.
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

const triplePrecio = multiplicadorDe(3);
const cuadradoPrecioFn: Transformador = (x) => x * x;

console.log(aplicar(500, triplePrecio));
console.log(aplicar(500, cuadradoPrecioFn));
console.log(aplicar(500, (x) => x + 100));

function filtrarCursos(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const preciosCursos = [100, 200, 300, 400, 500, 600, 700, 800];
console.log(filtrarCursos(preciosCursos, (n) => n > 400));
console.log(filtrarCursos(preciosCursos, (n) => n <= 300));

// ──────────────────────────────────────────────
// F.1: Closures
// ──────────────────────────────────────────────

/**
 * Un closure es una funcion que captura variables del ambito
 * donde fue creada, incluso cuando ese ambito ya no esta activo.
 */

function crearContadorEstudiantes(inicio: number = 0) {
  let cuenta = inicio;

  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor:       () => cuenta,
    resetear:    () => { cuenta = inicio; },
  };
}

const estudiantesTS = crearContadorEstudiantes();
const estudiantesNode = crearContadorEstudiantes(10);

estudiantesTS.incrementar();
estudiantesTS.incrementar();
estudiantesTS.incrementar();
estudiantesNode.incrementar();

console.log("Estudiantes TS:", estudiantesTS.valor());
console.log("Estudiantes Node:", estudiantesNode.valor());

estudiantesTS.resetear();
console.log("Estudiantes TS tras reset:", estudiantesTS.valor());

// ──────────────────────────────────────────────
// EJEMPLO: Pipeline de procesamiento de pedidos
// ──────────────────────────────────────────────

type CursoPedido = { id: number; precio: number; estudiante: string };
type ProcesadorCurso = (curso: CursoPedido) => CursoPedido;

const aplicarIVACurso: ProcesadorCurso = (c) => ({
  ...c,
  precio: Number((c.precio * 1.19).toFixed(2)),
});

const aplicarDescuentoEstudiante = (descuento: number): ProcesadorCurso =>
  (c) => ({ ...c, precio: Number((c.precio * (1 - descuento)).toFixed(2)) });

function procesarCurso(curso: CursoPedido, pasos: ProcesadorCurso[]): CursoPedido {
  return pasos.reduce((c, fn) => fn(c), curso);
}

const cursoPedido: CursoPedido = { id: 101, precio: 100, estudiante: "Ana" };

const resultadoCurso = procesarCurso(cursoPedido, [
  aplicarDescuentoEstudiante(0.10),
  aplicarIVACurso,
]);

console.log("Curso procesado:", resultadoCurso);

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
