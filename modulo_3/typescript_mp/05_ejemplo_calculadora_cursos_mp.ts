/**
 * ============================================
 * 06 - EJEMPLO COMBINADO: CALCULADORA DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Interfaces, objetos, variables, template
 * literals, tipos personalizados (type, Record)
 * Cursos Online: Calculadora de precios de cursos
 * segun dificultad, descuento por rol de usuario,
 * seguro de calidad educativa.
 * ============================================
 */

type DificultadCurso = "principiante" | "intermedio" | "avanzado";

interface Curso {
  titulo: string;
  duracionHoras: number;
  precioBase: number;
  dificultad: DificultadCurso;
}

const TARIFAS_DIFICULTAD: Record<DificultadCurso, number> = {
  principiante: 1.0,
  intermedio:   1.5,
  avanzado:     2.0,
};

const DESCUENTO_ROL = 0.10;

function calcularPrecioCurso(curso: Curso, esInstructor: boolean): string {
  const factorDificultad = TARIFAS_DIFICULTAD[curso.dificultad];
  const precioBase = curso.precioBase * factorDificultad;
  const descuento = esInstructor ? precioBase * DESCUENTO_ROL : 0;
  const total = precioBase - descuento;

  return `
[+] Cotizacion de curso
    Titulo       : ${curso.titulo}
    Duracion     : ${curso.duracionHoras} h
    Dificultad   : ${curso.dificultad}
    Precio base  : $${precioBase.toFixed(2)}
    Descuento    : $${descuento.toFixed(2)}
    -------------------------
    TOTAL        : $${total.toFixed(2)}
  `.trim();
}

const curso1: Curso = {
  titulo: "TypeScript desde Cero",
  duracionHoras: 40,
  precioBase: 1500,
  dificultad: "principiante",
};

const curso2: Curso = {
  titulo: "Arquitectura Hexagonal",
  duracionHoras: 60,
  precioBase: 3500,
  dificultad: "avanzado",
};

console.log(calcularPrecioCurso(curso1, false));
console.log("---");
console.log(calcularPrecioCurso(curso2, true));
