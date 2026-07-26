/**
 * ============================================
 * 40 - INTERFACES Y CLASES GENERICAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Interface generica <T>, clase generica
 * Pila<T>, Resultado con error tipado
 * Cursos Online: Caja<Curso>, RespuestaApi<Curso[]>,
 * Pila<Leccion>, Resultado<number> en calculos
 * educativos.
 * ============================================
 */

interface CajaCurso<T> {
  valor: T;
  etiqueta: string;
  creada: Date;
}

const cajaNumCurso: CajaCurso<number> = {
  valor: 42,
  etiqueta: "total cursos",
  creada: new Date(),
};

const cajaStrCurso: CajaCurso<string> = {
  valor: "TypeScript Avanzado",
  etiqueta: "curso popular",
  creada: new Date(),
};

console.log("cajaNum:", cajaNumCurso.valor, cajaNumCurso.etiqueta);
console.log("cajaStr:", cajaStrCurso.valor, cajaStrCurso.etiqueta);

interface RespuestaApiCurso<T> {
  datos: T;
  exito: boolean;
  mensaje: string;
  total?: number;
}

const respuestaApiCurso: RespuestaApiCurso<{ id: number; nombre: string }[]> = {
  datos: [{ id: 1, nombre: "TypeScript" }, { id: 2, nombre: "Node.js" }],
  exito: true,
  mensaje: "Cursos cargados",
  total: 2,
};

console.log("API respuesta:", respuestaApiCurso.exito, respuestaApiCurso.datos.length);

class PilaCurso<T> {
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

const pilaCursos = new PilaCurso<string>();
pilaCursos.push("TypeScript");
pilaCursos.push("Node.js");
pilaCursos.push("React");
console.log("Pila peek:", pilaCursos.peek());
console.log("Pila pop:", pilaCursos.pop());
console.log("Pila tamano:", pilaCursos.tamano);

interface ResultadoCurso<T, E = string> {
  ok: boolean;
  valor?: T;
  error?: E;
}

function dividirCurso(a: number, b: number): ResultadoCurso<number> {
  if (b === 0) return { ok: false, error: "Division por cero en nota" };
  return { ok: true, valor: a / b };
}

const r1Curso = dividirCurso(10, 2);
const r2Curso = dividirCurso(5, 0);
if (r1Curso.ok) console.log("Resultado:", r1Curso.valor);
if (!r2Curso.ok) console.log("Error:", r2Curso.error);
