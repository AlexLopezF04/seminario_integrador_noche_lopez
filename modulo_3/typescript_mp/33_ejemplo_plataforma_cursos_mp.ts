/**
 * ============================================
 * 36 - EJEMPLO COMBINADO: PLATAFORMA DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Clases, herencia, abstract, implements,
 * static, polimorfismo
 * Cursos Online: RecursoEducativo abstracto con
 * clases Curso, Leccion, Examen, VideoTutorial.
 * ============================================
 */

interface PrestableCurso {
  inscribir(usuario: string): boolean;
  desinscribir(): void;
  estaDisponible(): boolean;
}

abstract class RecursoEducativo implements PrestableCurso {
  private static totalRecursos: number = 0;
  readonly id: number;
  protected _usuarioActual: string | null = null;

  constructor(public titulo: string, public autor: string) {
    RecursoEducativo.totalRecursos++;
    this.id = RecursoEducativo.totalRecursos;
  }

  static contarRecursos(): number {
    return RecursoEducativo.totalRecursos;
  }

  abstract tipo(): string;

  inscribir(usuario: string): boolean {
    if (!this.estaDisponible()) return false;
    this._usuarioActual = usuario;
    return true;
  }

  desinscribir(): void {
    this._usuarioActual = null;
  }

  estaDisponible(): boolean {
    return this._usuarioActual === null;
  }

  fichaCurso(): string {
    const estado = this.estaDisponible()
      ? "Disponible"
      : "Inscrito por: " + this._usuarioActual;
    return "[" + this.tipo() + "] #" + this.id + ' "' + this.titulo + '" - ' +
           this.autor + " | " + estado;
  }
}

class CursoRecurso extends RecursoEducativo {
  constructor(
    titulo: string,
    autor: string,
    public readonly modulos: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Curso"; }
}

class LeccionRecurso extends RecursoEducativo {
  constructor(
    titulo: string,
    autor: string,
    public readonly duracionMin: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Leccion"; }
}

class ExamenRecurso extends RecursoEducativo {
  constructor(
    titulo: string,
    autor: string,
    public readonly preguntas: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Examen"; }

  duracionFormateada(): string {
    return this.preguntas * 2 + " min estimados";
  }
}

const plataformaCursos: RecursoEducativo[] = [
  new CursoRecurso("TypeScript Avanzado", "Francisco Higuera", 10),
  new LeccionRecurso("Introduccion a TS", "Ana Lopez", 45),
  new ExamenRecurso("Examen Modulo 1", "Admin", 20),
  new CursoRecurso("Clean Code", "Robert Martin", 8),
];

console.log("=== Plataforma de Cursos ===");
for (const recurso of plataformaCursos) {
  console.log(recurso.fichaCurso());
}

console.log("\nTotal de recursos: " + RecursoEducativo.contarRecursos());

plataformaCursos[0].inscribir("Ana");
plataformaCursos[2].inscribir("Luis");

console.log("\n=== Estado tras inscripciones ===");
for (const recurso of plataformaCursos) {
  console.log(recurso.fichaCurso());
}

const examen = plataformaCursos[2] as ExamenRecurso;
console.log('\nDuracion de "' + examen.titulo + '": ' + examen.duracionFormateada());

plataformaCursos[0].desinscribir();
console.log('\n"' + plataformaCursos[0].titulo + '" disponible:', plataformaCursos[0].estaDisponible());
