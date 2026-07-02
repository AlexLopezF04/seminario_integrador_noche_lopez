/**
 * ============================================
 * 15 - EJEMPLO COMBINADO: INVENTARIO DE TIENDA ONLINE
 * ============================================
 * Integra: primitivos, arrays, tuplas, enums/unions,
 * narrowing y objetos opcionales.
 * ============================================
 */

// --- Tipos ---
type EstadoProducto = "activo" | "agotado" | "descontinuado";
type Categoria = "electronica" | "ropa" | "hogar" | "deportes";

type Dimension = [ancho: number, alto: number, profundidad: number]; // tupla con nombre

interface ProductoInventario {
  readonly id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria: Categoria;
  estado: EstadoProducto;
  dimensiones?: Dimension;  // opcional
  tags?: string[];
}

// --- Datos ---
const inventario: ProductoInventario[] = [
  {
    id: 1, nombre: "Laptop Pro",    precio: 1299, stock: 15,
    categoria: "electronica", estado: "activo",
    dimensiones: [35, 25, 2], tags: ["trabajo", "portatil"],
  },
  {
    id: 2, nombre: "Camiseta Slim", precio: 29,   stock: 0,
    categoria: "ropa",         estado: "agotado",
  },
  {
    id: 3, nombre: "Lampara LED",   precio: 49,   stock: 40,
    categoria: "hogar",        estado: "activo",
    tags: ["iluminacion", "ahorro"],
  },
  {
    id: 4, nombre: "Bicicleta MTB", precio: 499,  stock: 5,
    categoria: "deportes",     estado: "activo",
    dimensiones: [180, 100, 60],
  },
];

// --- Iconos de estado ---
const iconosEstado: Record<EstadoProducto, string> = {
  activo:        "[ok]",
  agotado:       "[xx]",
  descontinuado: "[-]",
};

// --- Procesamiento: mostrar inventario ---
console.log("=== INVENTARIO ===");
for (const p of inventario) {
  const icono = iconosEstado[p.estado];
  const dim = p.dimensiones
    ? " | " + p.dimensiones[0] + "x" + p.dimensiones[1] + "x" + p.dimensiones[2] + " cm"
    : "";
  const tags = p.tags ? " [" + p.tags.join(", ") + "]" : "";
  console.log(icono, "[" + p.categoria.toUpperCase() + "]", p.nombre,
    "- $" + p.precio, "(" + p.stock + " uds.)" + dim + tags);
}

// --- Resumen ---
const activos: ProductoInventario[] = inventario.filter((p) => p.estado === "activo");
const valorTotal: number = activos.reduce((acc, p) => acc + p.precio * p.stock, 0);
const masBarato: ProductoInventario = activos.reduce((min, p) =>
  p.precio < min.precio ? p : min
);
const masCaro: ProductoInventario = activos.reduce((max, p) =>
  p.precio > max.precio ? p : max
);

console.log("\n=== RESUMEN ===");
console.log("Activos:", activos.length, "| Valor total en stock: $" + valorTotal.toLocaleString());
console.log("Mas barato:", masBarato.nombre, "($" + masBarato.precio + ")");
console.log("Mas caro:  ", masCaro.nombre, "($" + masCaro.precio + ")");
