/**
 * 16 - CONDICIONALES
 * Temas: if, if/else, if/else if, switch, ternario, anidadas
 */

// ──────────────────────────────────────────────
// if simple
// ──────────────────────────────────────────────

const temperatura: number = 38;
if (temperatura > 37.5) console.log("Tienes fiebre");

// ──────────────────────────────────────────────
// if/else y ternario
// ──────────────────────────────────────────────

const edad: number = 16;
if (edad >= 18) console.log("Mayor de edad");
else console.log("Menor de edad");

const estado: string = edad >= 18 ? "Mayor" : "Menor";
console.log("Ternario:", estado);

// ──────────────────────────────────────────────
// if/else if/else y switch
// ──────────────────────────────────────────────

const nota: number = 75;
if (nota >= 90) console.log("A");
else if (nota >= 80) console.log("B");
else if (nota >= 70) console.log("C");
else console.log("Reprobado");

const codigo: number = 404;
switch (codigo) {
  case 200: console.log("OK"); break;
  case 404: console.log("No encontrado"); break;
  case 500: console.log("Error del servidor"); break;
  default:  console.log("Codigo desconocido");
}

// Clasificador WiFi (rangos dBm estandar)
const lecturas: number[] = [-45, -55, -65, -75, -90];
for (const dbm of lecturas) {
  let clasificacion: string;
  if (dbm >= -50)      clasificacion = `Excelente (${dbm} dBm)`;
  else if (dbm >= -60) clasificacion = `Buena (${dbm} dBm)`;
  else if (dbm >= -70) clasificacion = `Aceptable (${dbm} dBm)`;
  else if (dbm >= -80) clasificacion = `Debil (${dbm} dBm)`;
  else                 clasificacion = `Sin cobertura (${dbm} dBm)`;
  console.log(clasificacion);
}

// ──────────────────────────────────────────────
// if anidadas y aplanamiento
// ──────────────────────────────────────────────

const logueado: boolean = true;
const esAdmin: boolean = false;

if (logueado) {
  if (esAdmin) console.log("Panel de administrador");
  else console.log("Panel de usuario");
} else console.log("Por favor inicia sesion");

// Aplanar con booleanos
const saldo: number = 500;
const monto: number = 200;
const pinCorrecto: boolean = true;

const pinOk: boolean = pinCorrecto;
const saldoOk: boolean = monto <= saldo;
const montoValido: boolean = monto % 10 === 0;

if (!pinOk)     console.log("PIN incorrecto");
else if (!saldoOk) console.log("Saldo insuficiente");
else if (!montoValido) console.log("Debe ser multiplo de 10");
else console.log(`Entregando $${monto}. Saldo restante: $${saldo - monto}`);
