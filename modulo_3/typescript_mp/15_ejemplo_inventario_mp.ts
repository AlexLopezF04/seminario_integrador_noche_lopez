/**
 * ============================================
 * 15 - EJEMPLO COMBINADO: CATALOGO DE CURSOS ONLINE
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Arrays, objetos, tuplas, enums/unions,
 * narrowing, opcionales, Record, filter/map/reduce
 * Cursos Online: Catalogo de cursos con estado,
 * categoria, precio, filtros y resumenes.
 * ============================================
 */

type EstadoCurso = "activo" | "completado" | "borrador";
type CategoriaCurso = "programacion" | "diseno" | "negocios" | "idiomas";

type DuracionModulos = [modulos: number, horas: number];

interface CursoCatalogo {
  readonly id: number;
  titulo: string;
  precio: number;
  estudiantes: number;
  categoria: CategoriaCurso;
  estado: EstadoCurso;
  duracion?: DuracionModulos;
  tags?: string[];
}

const catalogo: CursoCatalogo[] = [
  {
    id: 1, titulo: "TypeScript Avanzado", precio: 1299, estudiantes: 15,
    categoria: "programacion", estado: "activo",
    duracion: [10, 40], tags: ["ts", "backend"],
  },
  {
    id: 2, titulo: "UI/UX para Apps", precio: 29, estudiantes: 30,
    categoria: "diseno", estado: "completado",
  },
  {
    id: 3, titulo: "Marketing Digital", precio: 49, estudiantes: 40,
    categoria: "negocios", estado: "activo",
    tags: ["marketing", "ventas"],
  },
  {
    id: 4, titulo: "Ingles Tecnico", precio: 499, estudiantes: 5,
    categoria: "idiomas", estado: "borrador",
    duracion: [8, 60],
  },
];

const iconosEstado: Record<EstadoCurso, string> = {
  activo:     "[ok]",
  completado: "[done]",
  borrador:   "[draft]",
};

console.log("=== CATALOGO DE CURSOS ===");
for (const c of catalogo) {
  const icono = iconosEstado[c.estado];
  const dur = c.duracion
    ? " | " + c.duracion[0] + " modulos, " + c.duracion[1] + "h"
    : "";
  const tags = c.tags ? " [" + c.tags.join(", ") + "]" : "";
  console.log(icono, "[" + c.categoria.toUpperCase() + "]", c.titulo,
    "- $" + c.precio, "(" + c.estudiantes + " est.)" + dur + tags);
}

const activos: CursoCatalogo[] = catalogo.filter((c) => c.estado === "activo");
const ingresoPotencial: number = activos.reduce((acc, c) => acc + c.precio * c.estudiantes, 0);
const masBarato: CursoCatalogo = activos.reduce((min, c) =>
  c.precio < min.precio ? c : min
);
const masCaro: CursoCatalogo = activos.reduce((max, c) =>
  c.precio > max.precio ? c : max
);

console.log("\n=== RESUMEN ===");
console.log("Activos:", activos.length, "| Ingreso potencial: $" + ingresoPotencial.toLocaleString());
console.log("Mas barato:", masBarato.titulo, "($" + masBarato.precio + ")");
console.log("Mas caro:  ", masCaro.titulo, "($" + masCaro.precio + ")");
