/**
 * ============================================
 * 29 - UNIONES DISCRIMINADAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Discriminated unions, narrowing automatico
 * con switch, switch exhaustivo con never
 * Cursos Online: Tipos de contenido educativo
 * (Video, PDF, Quiz, Examen), eventos de plataforma
 * (login, inscripcion, error).
 * ============================================
 */

type VideoContenido = {
  kind: "video";
  duracionMin: number;
};

type PdfContenido = {
  kind: "pdf";
  paginas: number;
};

type QuizContenido = {
  kind: "quiz";
  preguntas: number;
};

type TipoContenidoEducativo = VideoContenido | PdfContenido | QuizContenido;

function calcularDuracionContenido(f: TipoContenidoEducativo): number {
  switch (f.kind) {
    case "video":
      return f.duracionMin;
    case "pdf":
      return f.paginas * 2;
    case "quiz":
      return f.preguntas * 3;
  }
}

console.log("Duracion video (30min):", calcularDuracionContenido({ kind: "video", duracionMin: 30 }));
console.log("Duracion PDF (5 pag):", calcularDuracionContenido({ kind: "pdf", paginas: 5 }));

type EventoLoginCurso = {
  tipo: "login";
  usuarioId: number;
  timestamp: Date;
};

type EventoInscripcionCurso = {
  tipo: "inscripcion";
  usuarioId: number;
  cursoId: number;
};

type EventoErrorCurso = {
  tipo: "error";
  codigo: number;
  mensaje: string;
  critico: boolean;
};

type EventoPlataforma = EventoLoginCurso | EventoInscripcionCurso | EventoErrorCurso;

function procesarEventoPlataforma(evento: EventoPlataforma): string {
  switch (evento.tipo) {
    case "login":
      return "Usuario " + evento.usuarioId + " inicio sesion";
    case "inscripcion":
      return "Usuario " + evento.usuarioId + " se inscribio al curso " + evento.cursoId;
    case "error":
      const nivel = evento.critico ? "CRITICO" : "menor";
      return "Error " + nivel + " [" + evento.codigo + "]: " + evento.mensaje;
  }
}

const eventosPlataforma: EventoPlataforma[] = [
  { tipo: "login",       usuarioId: 1,  timestamp: new Date() },
  { tipo: "inscripcion", usuarioId: 1,  cursoId: 101 },
  { tipo: "error",       codigo: 500,   mensaje: "DB no disponible", critico: true },
  { tipo: "inscripcion", usuarioId: 7,  cursoId: 203 },
  { tipo: "error",       codigo: 404,   mensaje: "Curso no encontrado", critico: false },
];

for (const e of eventosPlataforma) {
  console.log(procesarEventoPlataforma(e));
}
