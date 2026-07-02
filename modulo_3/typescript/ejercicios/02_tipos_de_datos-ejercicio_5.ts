/**
 * ============================================
 * EJERCICIO 5: Alumnos con notas
 * ============================================
 * Tema: Arrays de objetos
 *
 * Enunciado:
 * Crea const alumnos: { nombre: string; nota: number }[] con 5 alumnos.
 * Calcula: aprobados (nota >= 60), reprobados, promedio y notaMayor
 * (nombre del alumno con la nota mas alta). Imprime los cuatro valores.
 * ============================================
 */

const alumnos: { nombre: string; nota: number }[] = [
  { nombre: "Ana",   nota: 85 },
  { nombre: "Luis",  nota: 42 },
  { nombre: "Maria", nota: 90 },
  { nombre: "Juan",  nota: 58 },
  { nombre: "Sofia", nota: 73 },
];

const aprobados = alumnos.filter((a) => a.nota >= 60);
const reprobados = alumnos.filter((a) => a.nota < 60);
const promedio = Number(
  (alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length).toFixed(1)
);

const notaMayor = alumnos.reduce((max, a) => a.nota > max.nota ? a : max);

console.log("Aprobados:", aprobados.length, "->", aprobados.map((a) => a.nombre));
console.log("Reprobados:", reprobados.length, "->", reprobados.map((a) => a.nombre));
console.log("Promedio:", promedio);
console.log("Nota mayor:", notaMayor.nombre, "(" + notaMayor.nota + ")");
