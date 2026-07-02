/**
 * ============================================
 * 16 - CONDICIONALES (if, if/else, if/else if, switch, anidadas)
 * ============================================
 * Temas:
 *   - if simple (un camino)
 *   - if/else (dos caminos) + operador ternario
 *   - if/else if/else (multiples caminos) + switch
 *   - if anidadas y como aplanarlas
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: if simple - un solo camino
// ──────────────────────────────────────────────

const temperatura: number = 38;

if (temperatura > 37.5) {
  console.log("Tienes fiebre");
}
// Si temperatura fuera 36, no se imprime nada (no hay else)

// ──────────────────────────────────────────────
// A.2: if/else - dos caminos
// ──────────────────────────────────────────────

const edad: number = 16;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

// Operador ternario: condicion ? valorSiTrue : valorSiFalse
const estado: string = edad >= 18 ? "Mayor" : "Menor";
console.log("Ternario:", estado);

// ──────────────────────────────────────────────
// A.3: if/else if/else - multiples caminos
// ──────────────────────────────────────────────

const nota: number = 75;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("Reprobado");
}

// switch: mas legible para comparar un mismo valor
const codigo: number = 404;

switch (codigo) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("No encontrado");
    break;
  case 500:
    console.log("Error del servidor");
    break;
  default:
    console.log("Codigo desconocido");
}

// Ejemplo aplicado: clasificador de senial WiFi
// CORRECCION: Los valores originales del tutorial (-62, -71, -83)
// no coincidian con las condiciones. Ajustados para que calcen
// correctamente con los rangos de dBm estandar.
// Rangos: >= -50 Excelente, >= -60 Buena, >= -70 Aceptable,
//         >= -80 Debil, < -80 Sin cobertura.

const lecturas: number[] = [-45, -55, -65, -75, -90];

for (const dbm of lecturas) {
  let clasificacion: string;

  if (dbm >= -50) {
    clasificacion = "Excelente (" + dbm + " dBm)";
  } else if (dbm >= -60) {
    clasificacion = "Buena (" + dbm + " dBm)";
  } else if (dbm >= -70) {
    clasificacion = "Aceptable (" + dbm + " dBm)";
  } else if (dbm >= -80) {
    clasificacion = "Debil (" + dbm + " dBm)";
  } else {
    clasificacion = "Sin cobertura (" + dbm + " dBm)";
  }

  console.log(clasificacion);
}
// Salida:
// Excelente (-45 dBm)
// Buena (-55 dBm)
// Aceptable (-65 dBm)
// Debil (-75 dBm)
// Sin cobertura (-90 dBm)

// ──────────────────────────────────────────────
// A.4: if anidadas y aplanamiento
// ──────────────────────────────────────────────

const logueado: boolean = true;
const esAdmin: boolean = false;

if (logueado) {
  if (esAdmin) {
    console.log("Panel de administrador");
  } else {
    console.log("Panel de usuario");
  }
} else {
  console.log("Por favor inicia sesion");
}

// Aplanar condiciones con variables booleanas
const saldo: number = 500;
const monto: number = 200;
const pinCorrecto: boolean = true;

const pinOk: boolean = pinCorrecto;
const saldoOk: boolean = monto <= saldo;
const montoValido: boolean = monto % 10 === 0;

if (!pinOk) {
  console.log("PIN incorrecto");
} else if (!saldoOk) {
  console.log("Saldo insuficiente");
} else if (!montoValido) {
  console.log("Debe ser multiplo de 10");
} else {
  console.log("Entregando $" + monto + ". Saldo restante: $" + (saldo - monto));
}
