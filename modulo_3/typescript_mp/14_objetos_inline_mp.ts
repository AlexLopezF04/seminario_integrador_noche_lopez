/**
 * ============================================
 * 14 - OBJETOS TIPADOS INLINE Y OPCIONALES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Objetos inline tipados, opcionales (?),
 * readonly, objetos anidados
 * Cursos Online: Perfil de estudiante, configuracion
 * de curso, pedido de inscripcion con datos del alumno.
 * ============================================
 */

// ──────────────────────────────────────────────
// H.1: Objeto tipado inline
// ──────────────────────────────────────────────

/**
 * TypeScript permite tipar objetos directamente en la anotacion
 * sin declarar un type o interface. Util para objetos de un solo uso.
 */

let estudiante: { nombre: string; edad: number; email: string };
estudiante = { nombre: "Ana", edad: 28, email: "ana@mail.com" };

let configCurso: {
  host: string;
  puerto: number;
  debug?: boolean;
  timeout?: number;
};

configCurso = { host: "api.cursos.com", puerto: 3000 };
configCurso = { host: "api.cursos.com", puerto: 443, debug: true };

const cursoFijo: { readonly id: number; titulo: string } = { id: 1, titulo: "TypeScript" };

let inscripcion: {
  id: number;
  estudiante: { nombre: string; email: string };
  total: number;
};

inscripcion = {
  id: 101,
  estudiante: { nombre: "Luis", email: "luis@mail.com" },
  total: 250,
};

/**
 * Recomendacion:
 * Para objetos que se reutilizan, declara un type o interface.
 * Los tipos inline son comodos para variables locales o parametros
 * de funcion de uso unico.
 */

// ──────────────────────────────────────────────
// EJEMPLO: Perfil de usuario con campos opcionales
// ──────────────────────────────────────────────

type PerfilEstudiante = {
  readonly id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  avatar?: string;
  fechaNacimiento?: string;
};

const perfil1: PerfilEstudiante = {
  id: 1,
  nombre: "Carlos",
  apellido: "Ruiz",
  email: "carlos@mail.com",
  telefono: "+52 55 1234 5678",
};

console.log("[#" + perfil1.id + "]", perfil1.nombre, perfil1.apellido, "-", perfil1.email);
if (perfil1.telefono) console.log("  Tel:", perfil1.telefono);

const perfil2: PerfilEstudiante = {
  id: 2,
  nombre: "Sara",
  apellido: "Lopez",
  email: "sara@mail.com",
  fechaNacimiento: "1998-03-12",
};

console.log("[#" + perfil2.id + "]", perfil2.nombre, perfil2.apellido, "-", perfil2.email);
if (perfil2.fechaNacimiento) {
  const anios = new Date().getFullYear() - new Date(perfil2.fechaNacimiento).getFullYear();
  console.log("  Edad aprox.:", anios, "anios");
}
