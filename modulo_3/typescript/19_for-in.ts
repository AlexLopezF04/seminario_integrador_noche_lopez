// for-in.ts

// Itera sobre las claves (propiedades) de un objeto

const puertos: Record<string, number> = {
  HTTP: 80,
  HTTPS: 443,
  SSH: 22,
};

for (const servicio in puertos) {
  console.log(`${servicio} → puerto ${puertos[servicio]}`);
}

console.log("---");

// Ejemplo aplicado — reporte de configuración
const config = {
  host: "localhost",
  port: 8080,
  debug: true,
  maxConexiones: 100,
};

console.log("=== Configuración activa ===");
for (const clave in config) {
  const valor = config[clave as keyof typeof config];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}
