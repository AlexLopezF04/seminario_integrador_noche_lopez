/**
 * ============================================
 * 17 - BUCLES (for, for...of, for...in, forEach/map, while, do-while)
 * ============================================
 * Temas:
 *   - for clasico (indice, paso, regresivo)
 *   - for...of (recorrer colecciones)
 *   - for...in (recorrer claves de objeto)
 *   - forEach y map (estilo funcional)
 *   - while y do-while (condicion sin vueltas fijas)
 *   - break y continue
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: for clasico
// ──────────────────────────────────────────────

// for (inicializacion; condicion; paso)
for (let i = 0; i < 5; i++) {
  console.log("Iteracion", i);  // 0, 1, 2, 3, 4
}

// Con paso distinto
for (let i = 0; i <= 100; i += 25) {
  console.log("Progreso:", i + "%");  // 0, 25, 50, 75, 100
}

// Cuenta regresiva
for (let i = 5; i >= 1; i--) {
  console.log("Lanzamiento en", i + "...");
}

// ──────────────────────────────────────────────
// B.2: for...of - recorrer colecciones
// ──────────────────────────────────────────────

const protocolos: string[] = ["HTTP", "HTTPS", "FTP", "SSH"];

for (const protocolo of protocolos) {
  console.log(protocolo);
}

// Sobre caracteres de un string
for (const letra of "TS") {
  console.log(letra);  // T, S
}

// Con indice usando .entries()
for (const [indice, valor] of protocolos.entries()) {
  console.log(indice + ": " + valor);
}

// ──────────────────────────────────────────────
// B.3: for...in - recorrer claves de un objeto
// ──────────────────────────────────────────────

/**
 * for...in itera sobre los nombres de las propiedades de un objeto.
 * NO lo uses para arrays (daria indices como texto "0", "1"...).
 * Para arrays usa for...of.
 */

const puertos: Record<string, number> = {
  HTTP: 80,
  HTTPS: 443,
  SSH: 22,
};

for (const servicio in puertos) {
  console.log(servicio + " -> puerto " + puertos[servicio]);
}

// ──────────────────────────────────────────────
// B.4: forEach / map - estilo funcional
// ──────────────────────────────────────────────

const numeros: number[] = [1, 2, 3, 4];

// forEach: "hacer algo" con cada elemento (no devuelve nada)
numeros.forEach((n) => console.log(n * 10));  // 10, 20, 30, 40

// map: CREAR un array transformado
const dobles: number[] = numeros.map((n) => n * 2);
console.log("dobles:", dobles);  // [2, 4, 6, 8]

// ──────────────────────────────────────────────
// B.5: while y do-while
// ──────────────────────────────────────────────

// while - comprueba ANTES de cada vuelta
let buffer = 1024;
let paquete = 0;

while (buffer > 0) {
  const tam = buffer > 256 ? 256 : buffer;
  paquete++;
  buffer -= tam;
  console.log("Paquete " + paquete + ": " + tam + " bytes (quedan " + buffer + ")");
}

// do-while - ejecuta AL MENOS UNA VEZ
let intentos = 0;
let conectado = false;

do {
  intentos++;
  console.log("Intento de conexion #" + intentos + "...");
  if (intentos === 3) conectado = true;
} while (!conectado && intentos < 5);

console.log(conectado ? "Conectado en " + intentos + " intentos" : "Fallo");

// ──────────────────────────────────────────────
// B.6: break y continue
// ──────────────────────────────────────────────

const paquetes: number[] = [64, 128, -1, 256, 1024, -1, 32];

// continue: salta la iteracion actual, pasa a la siguiente
console.log("=== con continue ===");
for (const p of paquetes) {
  if (p < 0) {
    console.log("Paquete corrupto ignorado");
    continue;
  }
  console.log("Procesando " + p + " bytes");
}

// break: sale del bucle por completo
console.log("=== con break ===");
for (const p of paquetes) {
  if (p < 0) {
    console.log("Error critico - deteniendo");
    break;
  }
  console.log("Procesando " + p + " bytes");
}
