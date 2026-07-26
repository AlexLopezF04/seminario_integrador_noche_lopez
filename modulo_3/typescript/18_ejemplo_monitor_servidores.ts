/**
 * ============================================
 * 18 - EJEMPLO COMBINADO: MONITOR DE SERVIDORES
 * ============================================
 * Integra: if anidado, switch, for...of, while, break/continue
 * ============================================
 */

type Estado = "ok" | "lento" | "caido";

interface Servidor {
  nombre: string;
  estado: Estado;
  latenciaMs: number;
}

const servidores: Servidor[] = [
  { nombre: "web-01", estado: "ok",    latenciaMs: 25 },
  { nombre: "web-02", estado: "lento", latenciaMs: 320 },
  { nombre: "db-01",  estado: "caido", latenciaMs: 0 },
  { nombre: "cache",  estado: "ok",    latenciaMs: 8 },
];

console.log("=== Diagnostico ===");
let caidos = 0;

for (const s of servidores) {
  if (s.estado === "caido") caidos++;

  // switch para traducir estado a icono
  let icono: string;
  switch (s.estado) {
    case "ok":    icono = "[ok]"; break;
    case "lento": icono = "[!]";  break;
    case "caido": icono = "[XX]"; break;
    default:      icono = "[?]";
  }

  // if anidado para matizar el diagnostico
  let diagnostico: string;
  if (s.estado === "ok") {
    if (s.latenciaMs < 50) {
      diagnostico = icono + " " + s.nombre + ": optimo (" + s.latenciaMs + "ms)";
    } else {
      diagnostico = icono + " " + s.nombre + ": aceptable (" + s.latenciaMs + "ms)";
    }
  } else {
    diagnostico = icono + " " + s.nombre + ": requiere atencion (" + s.estado + ")";
  }

  console.log(diagnostico);
}

// while para alertar mientras haya caidos
let alerta = caidos;
while (alerta > 0) {
  console.log("[!] Quedan " + alerta + " servidor(es) caido(s) - notificando...");
  alerta--;
}

console.log("Resumen: " + caidos + "/" + servidores.length + " caidos");
