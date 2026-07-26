/**
 * ============================================
 * EJERCICIO 7: Notas con for...in
 * ============================================
 * Tema: for...in (B.3)
 *
 * Enunciado:
 * Dado const notas = { mate: 85, fisica: 70, quimica: 95, historia: 60 },
 * usa for...in para imprimir cada materia con su nota y, al final,
 * cuantas materias estan aprobadas (nota >= 70).
 * ============================================
 */

const notas: Record<string, number> = {
  mate: 85,
  fisica: 70,
  quimica: 95,
  historia: 60,
};

let aprobadas: number = 0;

for (const materia in notas) {
  const nota = notas[materia];
  const estado = nota >= 70 ? "aprobada" : "reprobada";
  console.log(materia + ": " + nota + " (" + estado + ")");
  if (nota >= 70) aprobadas++;
}

console.log("Materias aprobadas: " + aprobadas + "/" + Object.keys(notas).length);
