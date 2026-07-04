/**
 * ============================================
 * 05 - EL COMPILADOR COMO RED DE SEGURIDAD
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Evitar any, usar unknown, strict mode
 * Cursos Online: Validacion segura de datos de
 * formularios de cursos (precio, nombre, categoria),
 * manejo de datos desconocidos de API.
 * ============================================
 * Temas:
 *   - Por que evitar any
 *   - unknown como alternativa segura
 *   - Strict mode en accion
 *     o  strictNullChecks
 *     o  noImplicitAny
 *     o  strictPropertyInitialization
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE F: EL COMPILADOR COMO RED DE SEGURIDAD
// ──────────────────────────────────────────────

// --- F.1: Por que evitar any ---

/**
 * any le dice a TS "no verifiques este valor".
 * Es el equivalente a apagar el sistema de seguridad del auto.
 * Cada any que escribes es una zona sin proteccion.
 */

let datoCurso: any = "TypeScript Basico";
datoCurso = 42;          // any acepta cualquier cosa
datoCurso = true;        // ok
datoCurso = { x: 1 };    // ok - TS no protesta pero tampoco ayuda

function duplicarPrecioCurso(valor: any): any {
  return valor * 2;
}

console.log("any con numero:", duplicarPrecioCurso(500));    // 1000
console.log("any con string:", duplicarPrecioCurso("500"));  // 1000 - funciona de casualidad

function duplicarPrecioSeguro(valor: number): number {
  return valor * 2;
}
// duplicarPrecioSeguro("500");  // Error: string no asignable a number

function procesarDatosCurso(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return `Valor no es string, es: ${typeof valor}`;
}

console.log(procesarDatosCurso("TypeScript Avanzado"));  // TYPESCRIPT AVANZADO
console.log(procesarDatosCurso(42));                     // Valor no es string, es: number

// --- F.2: Strict mode en accion ---

/**
 * Con "strict": true en tsconfig.json, el compilador activa
 * estas verificaciones automaticamente.
 */

let nombreCurso: string = "TypeScript Basico";
// nombreCurso = null;  // Error: null no asignable a string

let descripcionCurso: string | null = null;
descripcionCurso = "Curso introductorio de TypeScript";

function procesarCategoria(datos: string): string {
  return datos.toUpperCase();
}

class CursoOnline {
  titulo: string;
  precio: number;

  constructor(titulo: string, precio: number) {
    this.titulo = titulo;
    this.precio = precio;
  }
}

const curso = new CursoOnline("TypeScript Avanzado", 2500);
console.log(`${curso.titulo}: $${curso.precio}`);
