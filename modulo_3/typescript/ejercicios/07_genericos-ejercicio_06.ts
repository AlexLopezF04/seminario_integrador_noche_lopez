/**
 * Ejercicio E.2: Empleado (utility types)
 * Dada la interface Empleado:
 *   - Crea un tipo EmpleadoNuevo usando Omit para excluir "id"
 *   - Crea un tipo ActualizacionEmpleado usando Partial
 *   - Define un tipo Plantilla con Record para mapear departamentos a arrays de nombres
 *   - Define un tipo EmpleadoReadonly con Readonly (solo lectura)
 */

interface Empleado {
  id: number;
  nombre: string;
  depto: string;
  sueldo: number;
  activo: boolean;
}

type EmpleadoNuevo = Omit<Empleado, "id">;
type ActualizacionEmpleado = Partial<Empleado>;
type Plantilla = Record<string, string[]>;
type EmpleadoReadonly = Readonly<Empleado>;

// Pruebas
const nuevoEmpleado: EmpleadoNuevo = {
  nombre: "Ana",
  depto: "Ingenieria",
  sueldo: 6000,
  activo: true,
};

const cambios: ActualizacionEmpleado = { sueldo: 6500, depto: "Tech Lead" };

const directores: Plantilla = {
  ingenieria: ["Ana", "Luis"],
  ventas: ["Sofia"],
};

const soloLectura: EmpleadoReadonly = {
  id: 1,
  nombre: "Pedro",
  depto: "RRHH",
  sueldo: 5000,
  activo: true,
};
// soloLectura.sueldo = 5500;  // Error: readonly

console.log("EmpleadoNuevo:", nuevoEmpleado);
console.log("Actualizacion:", cambios);
console.log("Plantilla:", directores);
console.log("Readonly:", soloLectura);
