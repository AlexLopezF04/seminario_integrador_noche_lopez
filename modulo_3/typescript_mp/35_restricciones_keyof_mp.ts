/**
 * ============================================
 * 39 - RESTRICCIONES (extends) Y keyof
 * Tematica: Cursos Online
 * ============================================
 * Concepto: <T extends { id: number }>, <T extends keyof U>,
 * acceso seguro con genericos
 * Cursos Online: Buscar por ID en cursos y usuarios,
 * acceder a propiedades con keyof, seleccionar
 * columnas (nombre, precio) de cursos.
 * ============================================
 */

function buscarPorIdCurso<T extends { id: number }>(lista: T[], id: number): T | undefined {
  return lista.find((item) => item.id === id);
}

const usuariosCurso = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
console.log("Buscar id 2:", buscarPorIdCurso(usuariosCurso, 2));

const cursosBusqueda = [
  { id: 10, nombre: "TypeScript", precio: 2500 },
  { id: 11, nombre: "Node.js", precio: 1800 },
];
console.log("Buscar id 11:", buscarPorIdCurso(cursosBusqueda, 11));

function propCurso<T, K extends keyof T>(obj: T, k: K): T[K] {
  return obj[k];
}

const personaCurso = { nombre: "Ana", edad: 30, activa: true };

const propNombreCurso = propCurso(personaCurso, "nombre");
const propEdadCurso   = propCurso(personaCurso, "edad");

console.log("prop nombre:", propNombreCurso, "prop edad:", propEdadCurso);

function seleccionarColumnasCurso<T, K extends keyof T>(
  lista: T[],
  ...campos: K[]
): Pick<T, K>[] {
  return lista.map((item) => {
    const resultado = {} as Pick<T, K>;
    campos.forEach((campo) => {
      resultado[campo] = item[campo];
    });
    return resultado;
  });
}

const cursosGrid = [
  { id: 1, nombre: "TypeScript", precio: 2500, cupos: 12 },
  { id: 2, nombre: "Node.js",    precio: 1800, cupos: 50 },
  { id: 3, nombre: "React",      precio: 1200, cupos: 8 },
];

const resumenCurso = seleccionarColumnasCurso(cursosGrid, "nombre", "precio");
console.log("Columnas seleccionadas:", resumenCurso);
