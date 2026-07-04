/**
 * 16 - CONDICIONALES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: if, if/else, if/else if, switch, ternario,
 * anidadas, aplanamiento con booleanos
 * Cursos Online: Logica de acceso a cursos por nivel,
 * descuentos segun edad/rol, clasificador de
 * rendimiento de estudiantes.
 * ============================================
 */

// ──────────────────────────────────────────────
// if simple
// ──────────────────────────────────────────────

const progresoCurso: number = 80;
if (progresoCurso >= 100) console.log("Curso completado");

const edadEstudiante: number = 16;
if (edadEstudiante >= 18) console.log("Mayor de edad - acceso completo");
else console.log("Menor de edad - acceso restringido");

const estadoAcceso: string = edadEstudiante >= 18 ? "Completo" : "Restringido";
console.log("Acceso:", estadoAcceso);

const notaFinal: number = 75;
if (notaFinal >= 90) console.log("A - Excelente");
else if (notaFinal >= 80) console.log("B - Bueno");
else if (notaFinal >= 70) console.log("C - Aprobado");
else console.log("Reprobado - debe repetir");

const codigoCurso: number = 404;
switch (codigoCurso) {
  case 200: console.log("Curso encontrado"); break;
  case 404: console.log("Curso no encontrado"); break;
  case 500: console.log("Error del servidor de cursos"); break;
  default:  console.log("Codigo de curso desconocido");
}

const puntajes: number[] = [95, 85, 70, 55, 40];
for (const nota of puntajes) {
  let clasificacion: string;
  if (nota >= 90)      clasificacion = `Excelente (${nota})`;
  else if (nota >= 80) clasificacion = `Bueno (${nota})`;
  else if (nota >= 70) clasificacion = `Aprobado (${nota})`;
  else if (nota >= 60) clasificacion = `Regular (${nota})`;
  else                 clasificacion = `Reprobado (${nota})`;
  console.log(clasificacion);
}

// ──────────────────────────────────────────────
// if anidadas y aplanamiento
// ──────────────────────────────────────────────

const inscrito: boolean = true;
const esPremium: boolean = false;

if (inscrito) {
  if (esPremium) console.log("Acceso a todos los cursos premium");
  else console.log("Acceso a cursos basicos");
} else console.log("Por favor registrate");

const saldoEstudiante: number = 500;
const precioCurso: number = 200;
const codigoValido: boolean = true;

const codigoOk: boolean = codigoValido;
const saldoOk: boolean = precioCurso <= saldoEstudiante;
const precioValido: boolean = precioCurso >= 0;

if (!codigoOk)  console.log("Codigo de descuento invalido");
else if (!saldoOk) console.log("Saldo insuficiente para el curso");
else if (!precioValido) console.log("Precio invalido");
else console.log(`Inscribiendo en curso. Saldo restante: $${saldoEstudiante - precioCurso}`);
