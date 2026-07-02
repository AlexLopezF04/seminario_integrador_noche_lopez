/**
 * ============================================
 * 20 - PARAMETROS AVANZADOS Y RETORNOS ESPECIALES
 * ============================================
 * Temas:
 *   - Parametros opcionales (?)
 *   - Parametros por defecto (= valor)
 *   - Rest parameters (...nums: number[])
 *   - void (sin retorno util)
 *   - never (nunca termina normalmente)
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Opcionales (?) y por defecto (=)
// ──────────────────────────────────────────────

// Opcional: puede omitirse, dentro es T | undefined
function crearEtiqueta(texto: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return "[" + texto.toUpperCase() + "]";
  }
  return "[" + texto + "]";
}

console.log(crearEtiqueta("info"));          // [info]
console.log(crearEtiqueta("alerta", true)); // [ALERTA]

// Por defecto: si no se pasa, usa el valor indicado
function repetir(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetir("ha"));    // hahaha
console.log(repetir("ha", 5)); // hahahahaha

// Los opcionales y default van DESPUES de los obligatorios

// ──────────────────────────────────────────────
// B.2: Rest parameters (...)
// ──────────────────────────────────────────────

// Recoge argumentos restantes en un array
function sumarTodos(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumarTodos(1, 2, 3));        // 6
console.log(sumarTodos(10, 20, 30, 40)); // 100
console.log(sumarTodos());               // 0

// Combinado con parametros normales
function construirRuta(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRuta("https://api.ejemplo.com", "v1", "usuarios", "42"));
// https://api.ejemplo.com/v1/usuarios/42

// ──────────────────────────────────────────────
// C.1: void vs never
// ──────────────────────────────────────────────

// void: no devuelve un valor util (efectos secundarios)
function imprimirLinea(texto: string): void {
  console.log(texto);
}

// never: la funcion NUNCA retorna (lanza excepcion o bucle infinito)
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) { /* proceso eterno */ }
}

// never encaja en cualquier tipo de retorno
function dividir(a: number, b: number): number {
  if (b === 0) lanzarError("Division por cero");
  return a / b;
}

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de registro de eventos
// ──────────────────────────────────────────────

type Nivel = "info" | "warn" | "error";

function logMensaje(
  mensaje: string,
  nivel: Nivel = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<Nivel, string> = {
    info:  "[i] INFO ",
    warn:  "[!] WARN ",
    error: "[X] ERROR",
  };
  const hora = timestamp ? " [" + new Date().toISOString() + "]" : "";
  return prefijos[nivel] + hora + ": " + mensaje;
}

console.log(logMensaje("Servidor iniciado"));
console.log(logMensaje("Memoria alta", "warn"));
console.log(logMensaje("Conexion perdida", "error", true));

function registrarEvento(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? " | " + detalles.join(" · ") : "";
  console.log("[" + timestamp + "] " + tipo.toUpperCase() + cuerpo);
}

registrarEvento("inicio");
registrarEvento("login", "usuario: ana", "ip: 192.168.1.10");
registrarEvento("error", "modulo: pagos", "codigo: 503", "reintento: si");
