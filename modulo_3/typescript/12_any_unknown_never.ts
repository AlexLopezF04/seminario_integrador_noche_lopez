/**
 * ============================================
 * 12 - ANY, UNKNOWN Y NEVER
 * ============================================
 * Temas:
 *   - any: desactiva el chequeo de tipos (evitar)
 *   - unknown: version segura de any para datos externos
 *   - never: representa lo imposible / rama inalcanzable
 *   - Switch exhaustivo con never
 * ============================================
 */

// ──────────────────────────────────────────────
// F.1: Los tres casos extremos
// ──────────────────────────────────────────────

// --- any ---
// Desactiva el chequeo de tipos. Evitalo salvo al migrar codigo JS
// o trabajar con librerias sin tipos.

let cualquierCosa: any = "texto";
cualquierCosa = 42;        // ok
cualquierCosa = true;      // ok
cualquierCosa.metodoFalso(); // SIN error en compilacion (pero falla en runtime)

// --- unknown ---
// Como any, acepta cualquier valor, pero NO puedes usarlo sin
// comprobar el tipo primero. Es la version SEGURA de any.

let dato: unknown = "hola";
dato = 42;  // ok

// console.log(dato.toUpperCase());  // Error: Object is of type 'unknown'

// Para usarlo, debes verificar el tipo (type narrowing):
if (typeof dato === "string") {
  console.log(dato.toUpperCase());  // ok, TS sabe que es string aqui
}

// --- never ---
// Representa algo que NUNCA ocurre: codigo inalcanzable.
// Util para verificar exhaustividad en switches.

type SinValor = string & number;  // never: no existe valor string Y number

// ──────────────────────────────────────────────
// EJEMPLO: never para switch exhaustivo
// ──────────────────────────────────────────────

type Forma = "circulo" | "cuadrado" | "triangulo";

const forma: Forma = "circulo";
const medida: number = 5;
let areaForma: number;

switch (forma) {
  case "circulo":
    areaForma = Math.PI * medida ** 2;
    break;
  case "cuadrado":
    areaForma = medida ** 2;
    break;
  case "triangulo":
    areaForma = (Math.sqrt(3) / 4) * medida ** 2;
    break;
  default:
    // Si agregas una nueva Forma y olvidas el case, TS da error aqui:
    const _agotado: never = forma;
    areaForma = 0;
}
console.log("Area:", areaForma.toFixed(2)); // 78.54
