/**
 * ============================================
 * 14 - OBJETOS TIPADOS INLINE Y OPCIONALES
 * ============================================
 * Temas:
 *   - Objeto tipado inline (sin type/interface separado)
 *   - Propiedades opcionales con ?
 *   - Propiedades readonly
 *   - Objetos anidados inline
 * ============================================
 */

// ──────────────────────────────────────────────
// H.1: Objeto tipado inline
// ──────────────────────────────────────────────

/**
 * TypeScript permite tipar objetos directamente en la anotacion
 * sin declarar un type o interface. Util para objetos de un solo uso.
 */

let usuario: { nombre: string; edad: number; email: string };
usuario = { nombre: "Ana", edad: 28, email: "ana@mail.com" };

// --- Propiedades opcionales con ? ---
// La propiedad puede estar presente o ser undefined

let config: {
  host: string;
  puerto: number;
  debug?: boolean;      // opcional
  timeout?: number;     // opcional
};

config = { host: "localhost", puerto: 3000 };           // ok, sin opcionales
config = { host: "api.com", puerto: 443, debug: true }; // ok, con debug

// --- Propiedades de solo lectura con readonly ---
const constante: { readonly id: number; valor: string } = { id: 1, valor: "a" };
// constante.id = 2;  // Error: no se puede asignar a readonly

// --- Objetos anidados inline ---
let pedido: {
  id: number;
  cliente: { nombre: string; email: string };
  total: number;
};

pedido = {
  id: 101,
  cliente: { nombre: "Luis", email: "luis@mail.com" },
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

type Perfil = {
  readonly id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;         // no todos los usuarios lo dan
  avatar?: string;           // URL de foto de perfil
  fechaNacimiento?: string;  // ISO 8601: "1995-08-20"
};

const perfil1: Perfil = {
  id: 1,
  nombre: "Carlos",
  apellido: "Ruiz",
  email: "carlos@mail.com",
  telefono: "+52 55 1234 5678",
};

console.log("[#" + perfil1.id + "]", perfil1.nombre, perfil1.apellido, "-", perfil1.email);
if (perfil1.telefono) console.log("  Tel:", perfil1.telefono);

const perfil2: Perfil = {
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
