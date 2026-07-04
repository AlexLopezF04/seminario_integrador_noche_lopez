/**
 * ============================================
 * 27 - INDEX SIGNATURES Y Record<K, V>
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Index signatures, Record<K,V>
 * Cursos Online: Diccionario de estudiantes por
 * curso, inventario de contenido educativo, SKU
 * de cursos.
 * ============================================
 */

interface DiccionarioEstudiantes {
  [clave: string]: number;
}

const puntuacionesEst: DiccionarioEstudiantes = {
  Ana: 95,
  Luis: 87,
  Marta: 100,
};

puntuacionesEst["Pedro"] = 72;
console.log("Puntuaciones:", puntuacionesEst);

type MarcadorCurso = Record<string, number>;
const marcadorCurso: MarcadorCurso = { ts_avanzado: 40, node_basico: 30 };
console.log("Marcador:", marcadorCurso);

type InventarioCursos = Record<string, { cupos: number; ubicacion: string }>;

const almacenCursos: InventarioCursos = {
  "TS-001": { cupos: 12, ubicacion: "Plataforma, Modulo 3" },
  "NJS-042": { cupos: 50, ubicacion: "Plataforma, Modulo 1" },
  "RCT-007": { cupos: 8, ubicacion: "Plataforma, Modulo 5" },
};

function consultarCurso(sku: string): void {
  const item = almacenCursos[sku];
  if (item) {
    console.log(sku + ":", item.cupos, "cupos en", item.ubicacion);
  } else {
    console.log(sku + ": no encontrado en catalogo");
  }
}

consultarCurso("NJS-042");
consultarCurso("CAM-099");

for (const sku in almacenCursos) {
  console.log(sku, "->", almacenCursos[sku].cupos, "cupos");
}
