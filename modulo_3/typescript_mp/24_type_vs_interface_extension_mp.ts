/**
 * ============================================
 * 26 - TYPE VS INTERFACE, EXTENSION Y COMPOSICION
 * Tematica: Cursos Online
 * ============================================
 * Concepto: type vs interface, extends, interseccion (&),
 * herencia multiple
 * Cursos Online: CursoBase / CursoPremium, UsuarioSist
 * / Administrador con logging, extension de tipos.
 * ============================================
 */

type ResultadoCurso = "aprobado" | "reprobado" | "cursando";
type ParCurso = [string, number];

type PuntoTCurso = { x: number; y: number };

interface PuntoICurso {
  x: number;
  y: number;
}

const aCurso: PuntoTCurso = { x: 1, y: 2 };
const bCurso: PuntoICurso = { x: 1, y: 2 };

console.log("Mismo tipo:", JSON.stringify(aCurso) === JSON.stringify(bCurso));

interface CursoBase {
  titulo: string;
  duracionHoras: number;
}

interface CursoPremium extends CursoBase {
  precio: number;
  certificado: boolean;
}

const miCursoPremium: CursoPremium = {
  titulo: "TypeScript Avanzado",
  duracionHoras: 40,
  precio: 2500,
  certificado: true,
};

console.log("Curso Premium:", miCursoPremium.titulo, "$" + miCursoPremium.precio);

type AuditableCurso = {
  creadoEn: Date;
  actualizadoEn: Date;
};

type CursoInterseccion = {
  sku: string;
  precio: number;
} & AuditableCurso;

const prodCurso: CursoInterseccion = {
  sku: "TS-001",
  precio: 1299,
  creadoEn: new Date(),
  actualizadoEn: new Date(),
};

console.log("Curso auditable:", prodCurso.sku, "$" + prodCurso.precio);

interface SerializableCurso {
  toJSON(): string;
}

interface CloneableCurso {
  clonar(): this;
}

interface EntidadCurso extends SerializableCurso, CloneableCurso {
  id: number;
}

interface EntidadBaseCurso {
  readonly id: number;
  creadoEn: Date;
}

interface UsuarioSistema extends EntidadBaseCurso {
  nombre: string;
  email: string;
}

interface AdministradorCurso extends UsuarioSistema {
  permisos: string[];
  nivel: 1 | 2 | 3;
}

type AdminConLogCurso = AdministradorCurso & { ultimoAcceso: Date };

const adminCurso: AdminConLogCurso = {
  id: 1,
  creadoEn: new Date("2024-01-01"),
  nombre: "Sandra",
  email: "sandra@cursos.com",
  permisos: ["cursos:read", "cursos:write", "usuarios:read"],
  nivel: 2,
  ultimoAcceso: new Date(),
};

console.log("Admin:", adminCurso.nombre, "(nivel", adminCurso.nivel + ")");
console.log("Permisos:", adminCurso.permisos.join(", "));
