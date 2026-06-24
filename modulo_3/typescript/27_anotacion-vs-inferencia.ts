// anotacion-vs-inferencia.ts
// Anotación explícita vs inferencia de tipos

// Anotación explícita — tú le dices el tipo
const puerto: number = 8080;
const host: string = "localhost";
const activo: boolean = true;

// Inferencia — TS deduce el tipo del valor
const puerto2 = 8080;
const host2 = "localhost";
const activo2 = true;

console.log("--- Anotación vs Inferencia ---");
console.log(puerto, host, activo);
console.log(puerto2, host2, activo2);

// Cuándo anotar explícitamente
let latencia: number;
latencia = 45;

let codigo: number | string = 200;
codigo = "OK";

function ping(host: string, intentos: number): string {
  return `Ping a ${host} — ${intentos} intento(s)`;
}

console.log("---");

// Ejemplo aplicado — dashboard de servidores
const NOMBRE_SERVIDOR = "web-prod-01";
const PUERTO_DEFAULT  = 443;
const ES_PRODUCCION   = true;

let solicitudesAtendidas: number = 0;
let ultimoError: string | null = null;

function registrarSolicitud(ruta: string, codigoHttp: number): void {
  solicitudesAtendidas++;
  console.log(`[${NOMBRE_SERVIDOR}] ${codigoHttp} ${ruta} — total: ${solicitudesAtendidas}`);
}

registrarSolicitud("/api/usuarios", 200);
registrarSolicitud("/api/productos", 404);

console.log("---");

// Mini-ejercicio: tienda en línea
const NOMBRE_TIENDA = "TechStore";
const IVA = 0.19;
const ABIERTA = true;

let stockDisponible: number = 100;
let categoriaActual: string = "electronica";

stockDisponible = 85;
categoriaActual = "ropa";

// IVA = 0.21; // Error: no se puede reasignar una const
console.log(`${NOMBRE_TIENDA} — IVA: ${IVA * 100}% — Abierta: ${ABIERTA}`);
console.log(`Stock: ${stockDisponible}, Categoría: ${categoriaActual}`);
