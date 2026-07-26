/**
 * ============================================
 * 28 - TIPOS DE FUNCION DENTRO DE INTERFACES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Firmas de metodo en interfaces, propiedades
 * de tipo funcion (callbacks), callbacks opcionales
 * Cursos Online: Logger de plataforma educativa,
 * callbacks de notificaciones de cursos.
 * ============================================
 */

interface CalculadoraCurso {
  sumarNotas(a: number, b: number): number;
  restarNotas: (a: number, b: number) => number;
}

type CallbackCurso<T> = (error: Error | null, resultado: T | null) => void;

interface ManejadorCurso {
  onExito: (datos: string) => void;
  onError: (err: Error) => void;
  onFinalizar?: () => void;
}

type NivelLogCurso = "info" | "warn" | "error";

interface LoggerPlataforma {
  log(nivel: NivelLogCurso, mensaje: string): void;
  alerta: (mensaje: string) => void;
  onError?: (err: Error) => void;
}

const consoleLoggerCurso: LoggerPlataforma = {
  log(nivel, mensaje) {
    const prefijo = nivel === "error" ? "ERROR" : nivel === "warn" ? "AVISO" : "INFO";
    console.log("[" + prefijo + "]", mensaje);
  },
  alerta(mensaje) {
    console.log("[!] ALERTA:", mensaje);
  },
  onError(err) {
    console.log("Manejando error:", err.message);
  },
};

function procesarCursoLog(id: number, logger: LoggerPlataforma): void {
  logger.log("info", "Procesando curso #" + id + "...");
  if (id < 0) {
    logger.onError?.(new Error("ID de curso invalido"));
    return;
  }
  logger.log("info", "Curso #" + id + " procesado");
  logger.alerta("Curso #" + id + " listo para publicacion");
}

procesarCursoLog(101, consoleLoggerCurso);
procesarCursoLog(-5, consoleLoggerCurso);
