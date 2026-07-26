/**
 * ============================================
 * 31 - EJEMPLO COMBINADO: SISTEMA DE USUARIOS CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: type, interface, union discriminada,
 * extension, index signature, Record
 * Cursos Online: Roles de usuario (Estudiante,
 * Instructor, Admin) con tipos discriminados,
 * directorio de usuarios por categoria.
 * ============================================
 */

type UsuarioID = string;
type CategoriaUsuario = "programacion" | "diseno" | "negocios" | "idiomas";

interface EntidadBaseUsuarios {
  readonly id: UsuarioID;
  readonly registradoEn: Date;
}

type RolEstudiante = {
  rol: "estudiante";
  cursosInscriptos: number;
  nivel: "basico" | "intermedio" | "avanzado";
};

type RolInstructor = {
  rol: "instructor";
  cursosACargo: number;
  especialidad: string;
};

type RolAdmin = {
  rol: "admin";
  permisos: string[];
  nivel: 1 | 2 | 3;
};

type RolUsuarioSistema = RolEstudiante | RolInstructor | RolAdmin;

interface UsuarioSistema extends EntidadBaseUsuarios {
  nombre: string;
  email: string;
  categoria: CategoriaUsuario;
  info: RolUsuarioSistema;
}

type DirectorioUsuarios = Record<CategoriaUsuario, UsuarioSistema[]>;

function descripcionRolUsuario(info: RolUsuarioSistema): string {
  switch (info.rol) {
    case "estudiante":
      return "Estudiante " + info.nivel + " - " + info.cursosInscriptos + " cursos";
    case "instructor":
      return "Instructor (" + info.cursosACargo + " cursos, esp: " + info.especialidad + ")";
    case "admin":
      return "Admin nivel " + info.nivel + " - " + info.permisos.join(", ");
  }
}

function reporteUsuario(usr: UsuarioSistema): void {
  console.log("--", usr.nombre, "(" + usr.id + ") --");
  console.log("   Categoria:", usr.categoria);
  console.log("   Rol:", descripcionRolUsuario(usr.info));
}

const usuariosSistema: UsuarioSistema[] = [
  {
    id: "USR-001",
    registradoEn: new Date("2024-03-15"),
    nombre: "Laura Ruiz",
    email: "laura@cursos.com",
    categoria: "programacion",
    info: { rol: "estudiante", cursosInscriptos: 5, nivel: "avanzado" },
  },
  {
    id: "USR-002",
    registradoEn: new Date("2023-01-10"),
    nombre: "Carlos Vega",
    email: "carlos@cursos.com",
    categoria: "programacion",
    info: { rol: "instructor", cursosACargo: 3, especialidad: "TypeScript" },
  },
  {
    id: "USR-003",
    registradoEn: new Date("2024-02-01"),
    nombre: "Sofia Torres",
    email: "sofia@cursos.com",
    categoria: "diseno",
    info: { rol: "admin", permisos: ["usuarios:read", "cursos:write"], nivel: 2 },
  },
];

const directorioUsuarios: DirectorioUsuarios = {
  programacion: [],
  diseno: [],
  negocios: [],
  idiomas: [],
};

for (const usr of usuariosSistema) {
  directorioUsuarios[usr.categoria].push(usr);
}

console.log("=== REPORTE DE USUARIOS ===\n");
for (const usr of usuariosSistema) {
  reporteUsuario(usr);
}

console.log("\n=== DIRECTORIO POR CATEGORIA ===");
for (const cat in directorioUsuarios) {
  const lista = directorioUsuarios[cat as CategoriaUsuario];
  if (lista.length > 0) {
    console.log(cat + ":", lista.map((u) => u.nombre).join(", "));
  }
}
