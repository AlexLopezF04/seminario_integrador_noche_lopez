/**
 * ============================================
 * 27 - INDEX SIGNATURES Y Record<K, V>
 * ============================================
 * Temas:
 *   - Index signatures: [clave: string]: Tipo
 *   - Utilidad Record<K, V>
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Index signatures y Record
// ──────────────────────────────────────────────

/**
 * Cuando no conoces las claves de antemano, usas una firma de
 * indice para tipar el objeto.
 * Record<K, V> es un alias conciso para { [key: K]: V }.
 */

// Index signature
interface Diccionario {
  [clave: string]: number;
}

const puntuaciones: Diccionario = {
  Ana: 95,
  Luis: 87,
  Marta: 100,
};

puntuaciones["Pedro"] = 72;
console.log("Puntuaciones:", puntuaciones);

// Equivalente con Record:
type Marcador = Record<string, number>;
const marcador: Marcador = { equipo_a: 3, equipo_b: 1 };
console.log("Marcador:", marcador);

// ──────────────────────────────────────────────
// EJEMPLO: Inventario de almacen
// ──────────────────────────────────────────────

type Inventario = Record<string, { cantidad: number; ubicacion: string }>;

const almacen: Inventario = {
  "LAP-001": { cantidad: 12, ubicacion: "Pasillo A, Estante 3" },
  "MOU-042": { cantidad: 50, ubicacion: "Pasillo B, Estante 1" },
  "TEC-007": { cantidad: 8,  ubicacion: "Pasillo A, Estante 5" },
};

function consultarProducto(sku: string): void {
  const item = almacen[sku];
  if (item) {
    console.log(sku + ":", item.cantidad, "unidades en", item.ubicacion);
  } else {
    console.log(sku + ": no encontrado en almacen");
  }
}

consultarProducto("MOU-042");
consultarProducto("CAM-099");

// Recorrer todo el inventario:
for (const sku in almacen) {
  console.log(sku, "->", almacen[sku].cantidad, "uds.");
}
