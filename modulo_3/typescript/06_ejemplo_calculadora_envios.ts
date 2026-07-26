/**
 * ============================================
 * 06 - EJEMPLO COMBINADO: CALCULADORA DE ENVIOS
 * ============================================
 * Integra todo lo visto:
 *   - Variables, anotaciones e inferencia
 *   - Template literals
 *   - Tipos personalizados (type, interface, Record)
 *   - El compilador como red de seguridad
 * ============================================
 */

// Sistema de cotizacion de envios para una tienda e-commerce.
// Demuestra como los tipos previenen errores en logica de negocio real.

type ZonaEnvio = "local" | "nacional" | "internacional";

interface Paquete {
  descripcion: string;
  pesoKg: number;
  valorDeclarado: number;
  zona: ZonaEnvio;
}

// Record<ZonaEnvio, number> crea un objeto donde las claves
// son los valores de ZonaEnvio y los valores son numeros.
const TARIFAS: Record<ZonaEnvio, number> = {
  local:           2.50,   // $ por kg
  nacional:        5.00,
  internacional:  12.00,
};

const SEGURO_PCT = 0.005;  // 0.5% del valor declarado

function cotizarEnvio(paquete: Paquete): string {
  const tarifaBase = TARIFAS[paquete.zona];
  const costoFlete = tarifaBase * paquete.pesoKg;
  const costoSeguro = paquete.valorDeclarado * SEGURO_PCT;
  const total = costoFlete + costoSeguro;

  return `
[+] Cotizacion de envio
    Descripcion  : ${paquete.descripcion}
    Peso         : ${paquete.pesoKg} kg
    Zona         : ${paquete.zona}
    Flete        : $${costoFlete.toFixed(2)}
    Seguro       : $${costoSeguro.toFixed(2)}
    -------------------------
    TOTAL        : $${total.toFixed(2)}
  `.trim();
}

const pedido1: Paquete = {
  descripcion: "Laptop Dell XPS 15",
  pesoKg: 2.1,
  valorDeclarado: 1800,
  zona: "nacional",
};

const pedido2: Paquete = {
  descripcion: "Auriculares Sony WH-1000XM5",
  pesoKg: 0.4,
  valorDeclarado: 350,
  zona: "internacional",
};

console.log(cotizarEnvio(pedido1));
console.log("---");
console.log(cotizarEnvio(pedido2));

// TS detecta si usas una zona invalida:
// const pedido3: Paquete = { descripcion: "...", pesoKg: 1, valorDeclarado: 100, zona: "express" };
// Error: Type '"express"' is not assignable to type 'ZonaEnvio'
