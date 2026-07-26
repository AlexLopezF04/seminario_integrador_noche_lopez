/**
 * ============================================
 * 17 - BUCLES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: for, for...of, for...in, forEach/map,
 * while, do-while, break, continue
 * Cursos Online: Iterar modulos de un curso,
 * estudiantes inscritos, progreso por lecciones.
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: for clasico
// ──────────────────────────────────────────────

for (let i = 1; i <= 5; i++) {
  console.log("Leccion", i);
}

for (let i = 0; i <= 100; i += 25) {
  console.log("Progreso del curso:", i + "%");
}

for (let i = 5; i >= 1; i--) {
  console.log("Contenido restante:", i, "modulos");
}

// ──────────────────────────────────────────────
// B.2: for...of - recorrer colecciones
// ──────────────────────────────────────────────

const modulos: string[] = ["Introduccion", "Variables", "Funciones", "Clases"];

for (const modulo of modulos) {
  console.log(modulo);
}

for (const letra of "TS") {
  console.log(letra);
}

for (const [indice, valor] of modulos.entries()) {
  console.log((indice + 1) + ": " + valor);
}

// ──────────────────────────────────────────────
// B.3: for...in - recorrer claves de un objeto
// ──────────────────────────────────────────────

/**
 * for...in itera sobre los nombres de las propiedades de un objeto.
 * NO lo uses para arrays (daria indices como texto "0", "1"...).
 * Para arrays usa for...of.
 */

const cursosDict: Record<string, number> = {
  TypeScript: 40,
  Python: 30,
  Node: 25,
};

for (const curso in cursosDict) {
  console.log(curso + " -> " + cursosDict[curso] + "h");
}

// ──────────────────────────────────────────────
// B.4: forEach / map - estilo funcional
// ──────────────────────────────────────────────

const estudiantesPorCurso: number[] = [15, 30, 22, 8];

estudiantesPorCurso.forEach((n) => console.log("Curso con", n, "estudiantes"));

const dobles: number[] = estudiantesPorCurso.map((n) => n * 2);
console.log("dobles:", dobles);

// ──────────────────────────────────────────────
// B.5: while y do-while
// ──────────────────────────────────────────────

let contenidoRestante = 100;
let leccion = 0;

while (contenidoRestante > 0) {
  const avance = contenidoRestante > 20 ? 20 : contenidoRestante;
  leccion++;
  contenidoRestante -= avance;
  console.log("Leccion " + leccion + ": " + avance + "% (queda " + contenidoRestante + "%)");
}

let intentos = 0;
let descargado = false;

do {
  intentos++;
  console.log("Intento de descarga #" + intentos + "...");
  if (intentos === 3) descargado = true;
} while (!descargado && intentos < 5);

console.log(descargado ? "Descargado en " + intentos + " intentos" : "Fallo");

// ──────────────────────────────────────────────
// B.6: break y continue
// ──────────────────────────────────────────────

const contenidoCurso: number[] = [10, 20, -1, 40, 50, -1, 30];

console.log("=== con continue ===");
for (const c of contenidoCurso) {
  if (c < 0) {
    console.log("Contenido corrupto ignorado");
    continue;
  }
  console.log("Procesando " + c + "% del modulo");
}

console.log("=== con break ===");
for (const c of contenidoCurso) {
  if (c < 0) {
    console.log("Error critico - deteniendo");
    break;
  }
  console.log("Procesando " + c + "% del modulo");
}
