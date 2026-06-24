// void-never.ts

// void — la función no devuelve nada (o devuelve undefined)
function logError(mensaje: string): void {
  console.log(`❌ ${mensaje}`);
}

logError("Error de conexión");

// never — la función NUNCA termina (lanza error o bucle infinito)
function errorFatal(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {
    console.log("Ejecutando...");
  }
}

// Diferencia práctica:
// void puede tener return sin valor
function soloLog(): void {
  return;
}

// never no permite ningún return
// function error(): never {
//   return; // Error
// }

// Uso real de never
function procesarEstado(estado: "ok" | "error"): string {
  switch (estado) {
    case "ok":
      return "Todo bien";
    case "error":
      return "Algo falló";
    default:
      return errorFatal(`Estado no válido: ${estado}`);
  }
}

console.log(procesarEstado("ok"));
