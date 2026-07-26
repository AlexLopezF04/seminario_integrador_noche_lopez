/**
 * ============================================
 * 09 - TUPLAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Tuplas (array de longitud fija con tipos por posicion),
 * tuplas con nombre, desestructuracion, retorno multiple
 * Cursos Online: Pares (modulo, leccion), progreso de estudiante,
 * rangos de contenido educativo.
 * ============================================
 */

type ProgresoCurso = [number, number];           // [modulo, leccion]
type Notas = [number, number, number];           // [nota1, nota2, nota3]
type EntradaCurso = [string, number];            // [nombreCurso, duracionHoras]

const progreso: ProgresoCurso = [2, 5];
const notas: Notas = [85, 92, 78];
const entrada: EntradaCurso = ["TypeScript", 40];

const [modulo, leccion] = progreso;
const [nota1, nota2, nota3] = notas;
const [nombreCurso, duracion] = entrada;

console.log("Progreso: modulo", modulo, "leccion", leccion);
console.log("Notas:", nota1, ",", nota2, ",", nota3);
console.log("Curso:", nombreCurso, "=", duracion, "h");

type RangoEstudiantes = [min: number, max: number];
const capacidadCurso: RangoEstudiantes = [10, 30];

const a: number = 10;
const b: number = 2;

const divisionNotas: [number, string] = b === 0
  ? [0, "Error: division por cero"]
  : [a / b, "ok"];

const [resultado, estado] = divisionNotas;
console.log(estado + ":", resultado);

const d: number = 0;
const divisionNotas2: [number, string] = d === 0
  ? [0, "Error: division por cero"]
  : [a / d, "ok"];

const [res2, estado2] = divisionNotas2;
console.log(estado2 + ":", res2);

type EstadoTupla = [string, (v: string) => void];
