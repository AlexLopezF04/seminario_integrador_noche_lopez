/**
 * ============================================
 * 30 - READONLY Y PROPIEDADES INMUTABLES
 * ============================================
 * Temas:
 *   - readonly en interfaces y types
 *   - readonly en arrays (ReadonlyArray / readonly T[])
 *   - Limitaciones (solo en compilacion)
 * ============================================
 */

// ──────────────────────────────────────────────
// H.1: readonly en interfaces, types y arrays
// ──────────────────────────────────────────────

/**
 * readonly impide reasignar una propiedad despues de la inicializacion.
 * Es una garantia en tiempo de COMPILACION (no en runtime).
 * Para inmutabilidad real en runtime, usar Object.freeze().
 */

interface Configuracion {
  readonly host: string;
  readonly puerto: number;
  readonly secreto: string;
  reintentos: number;  // esta SI puede cambiar
}

const cfg: Configuracion = {
  host: "db.empresa.com",
  puerto: 5432,
  secreto: "abc-xyz-123",
  reintentos: 3,
};

cfg.reintentos = 5;   // OK
// cfg.host = "otro"; // Error: readonly

// Arrays inmutables:
const ESTADOS_PERMITIDOS: readonly string[] = ["activo", "inactivo", "suspendido"];
// ESTADOS_PERMITIDOS.push("eliminado");  // Error
// ESTADOS_PERMITIDOS[0] = "otro";       // Error

console.log("Estados:", ESTADOS_PERMITIDOS);

// ──────────────────────────────────────────────
// EJEMPLO: Configuracion de API
// ──────────────────────────────────────────────

type MetodoHTTP2 = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ConfigAPI {
  readonly baseUrl: string;
  readonly version: string;
  readonly metodosPermitidos: readonly MetodoHTTP2[];
  timeoutMs: number;
}

const apiConfig: ConfigAPI = {
  baseUrl: "https://api.empresa.com",
  version: "v2",
  metodosPermitidos: ["GET", "POST", "PUT", "DELETE"],
  timeoutMs: 5000,
};

function construirUrl(config: ConfigAPI, ruta: string): string {
  return config.baseUrl + "/" + config.version + "/" + ruta.replace(/^\//, "");
}

apiConfig.timeoutMs = 10000;  // OK
// apiConfig.baseUrl = "otro"; // Error

console.log(construirUrl(apiConfig, "/usuarios"));
