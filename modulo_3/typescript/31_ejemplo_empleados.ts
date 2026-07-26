/**
 * ============================================
 * 31 - EJEMPLO COMBINADO: SISTEMA DE EMPLEADOS
 * ============================================
 * Integra: type, interface, union discriminada,
 * extension, index signature, readonly
 * ============================================
 */

type EmpleadoID = string;
type Departamento = "ingenieria" | "marketing" | "ventas" | "rrhh";

interface EntidadBase {
  readonly id: EmpleadoID;
  readonly ingresadoEn: Date;
}

// Roles como union discriminada
type RolDesarrollador = {
  rol: "desarrollador";
  lenguajes: string[];
  nivel: "junior" | "mid" | "senior";
};

type RolManager = {
  rol: "manager";
  equipoSize: number;
  presupuesto: number;
};

type RolPracticante = {
  rol: "practicante";
  tutorId: EmpleadoID;
  fechaFin: Date;
};

type RolEmpleado = RolDesarrollador | RolManager | RolPracticante;

interface Empleado extends EntidadBase {
  nombre: string;
  email: string;
  departamento: Departamento;
  salario: number;
  info: RolEmpleado;
}

type DirectorioEmpleados = Record<Departamento, Empleado[]>;

function descripcionRol(info: RolEmpleado): string {
  switch (info.rol) {
    case "desarrollador":
      return "Dev " + info.nivel + " - " + info.lenguajes.join(", ");
    case "manager":
      return "Manager de equipo (" + info.equipoSize + " personas, presupuesto $" + info.presupuesto + ")";
    case "practicante":
      return "Practicante hasta " + info.fechaFin.toLocaleDateString() + " - tutor: " + info.tutorId;
  }
}

function reporteEmpleado(emp: Empleado): void {
  console.log("--", emp.nombre, "(" + emp.id + ") --");
  console.log("   Dept:", emp.departamento, "| Salario: $" + emp.salario);
  console.log("   Rol:", descripcionRol(emp.info));
}

const empleados: Empleado[] = [
  {
    id: "EMP-001",
    ingresadoEn: new Date("2022-03-15"),
    nombre: "Laura Ruiz",
    email: "laura@empresa.com",
    departamento: "ingenieria",
    salario: 4800,
    info: { rol: "desarrollador", lenguajes: ["TypeScript", "Rust"], nivel: "senior" },
  },
  {
    id: "EMP-002",
    ingresadoEn: new Date("2020-01-10"),
    nombre: "Carlos Vega",
    email: "carlos@empresa.com",
    departamento: "ingenieria",
    salario: 6500,
    info: { rol: "manager", equipoSize: 8, presupuesto: 120000 },
  },
  {
    id: "EMP-003",
    ingresadoEn: new Date("2024-02-01"),
    nombre: "Sofia Torres",
    email: "sofia@empresa.com",
    departamento: "marketing",
    salario: 1200,
    info: { rol: "practicante", tutorId: "EMP-002", fechaFin: new Date("2024-08-01") },
  },
];

const directorio: DirectorioEmpleados = {
  ingenieria: [],
  marketing: [],
  ventas: [],
  rrhh: [],
};

for (const emp of empleados) {
  directorio[emp.departamento].push(emp);
}

console.log("=== REPORTE DE EMPLEADOS ===\n");
for (const emp of empleados) {
  reporteEmpleado(emp);
}

console.log("\n=== DIRECTORIO POR DEPARTAMENTO ===");
for (const dept in directorio) {
  const lista = directorio[dept as Departamento];
  if (lista.length > 0) {
    console.log(dept + ":", lista.map((e) => e.nombre).join(", "));
  }
}
