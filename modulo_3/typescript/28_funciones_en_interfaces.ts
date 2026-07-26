/**
 * ============================================
 * 28 - TIPOS DE FUNCION DENTRO DE INTERFACES
 * ============================================
 * Temas:
 *   - Firmas de metodo en interfaces
 *   - Propiedades de tipo funcion (callbacks)
 *   - Callbacks opcionales
 * ============================================
 */

// ──────────────────────────────────────────────
// F.1: Firmas de metodo y tipos de callback
// ──────────────────────────────────────────────

// Dos sintaxis equivalentes:
interface Calculadora {
  sumar(a: number, b: number): number;        // sintaxis de metodo
  restar: (a: number, b: number) => number;   // sintaxis de propiedad funcion
}

// Tipo de callback generico:
type Callback<T> = (error: Error | null, resultado: T | null) => void;

// Interface para manejador de eventos:
interface Manejador {
  onExito: (datos: string) => void;
  onError: (err: Error) => void;
  onFinalizar?: () => void;  // opcional
}

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de notificaciones con callbacks
// ──────────────────────────────────────────────

type NivelLogNotif = "info" | "warn" | "error";

interface Logger {
  log(nivel: NivelLogNotif, mensaje: string): void;
  alerta: (mensaje: string) => void;
  onError?: (err: Error) => void;
}

const consoleLogger: Logger = {
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

function procesarPedidoLog(id: number, logger: Logger): void {
  logger.log("info", "Procesando pedido #" + id + "...");
  if (id < 0) {
    logger.onError?.(new Error("ID de pedido invalido"));
    return;
  }
  logger.log("info", "Pedido #" + id + " completado");
  logger.alerta("Pedido #" + id + " listo para envio");
}

procesarPedidoLog(101, consoleLogger);
procesarPedidoLog(-5, consoleLogger);
