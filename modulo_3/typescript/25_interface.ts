/**
 * ============================================
 * 25 - INTERFACE
 * ============================================
 * Temas:
 *   - Interface: propiedades obligatorias
 *   - Propiedades opcionales con ?
 *   - Propiedades readonly
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Propiedades basicas, opcionales ? y readonly
// ──────────────────────────────────────────────

/**
 * Una interface describe la forma exacta de un objeto.
 * Puede tener propiedades obligatorias, opcionales (?) e inmutables (readonly).
 */

interface Usuario {
  readonly id: number;   // no se puede reasignar
  nombre: string;
  email: string;
  avatar?: string;       // opcional
}

const u: Usuario = { id: 1, nombre: "Ana", email: "ana@mail.com" };

// u.id = 99;  // Error: readonly

const u2: Usuario = {
  id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png"
};

console.log("Usuario 1:", u.nombre, u.email);
console.log("Usuario 2:", u2.nombre, u2.email, u2.avatar);

// ──────────────────────────────────────────────
// EJEMPLO: Perfil de producto en e-commerce
// ──────────────────────────────────────────────

interface Producto {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  enStock: boolean;
}

function mostrarProducto(p: Producto): void {
  const desc = p.descripcion ? " - " + p.descripcion : "";
  const stock = p.enStock ? "Disponible" : "Agotado";
  console.log("[" + p.sku + "]", p.nombre, "$" + p.precio + desc, "(" + stock + ")");
}

const laptop: Producto = {
  sku: "LAP-001",
  nombre: "Laptop Pro 15",
  precio: 1299,
  descripcion: "Pantalla 4K, 16 GB RAM",
  enStock: true,
};

const mouse: Producto = {
  sku: "MOU-042",
  nombre: "Mouse Inalambrico",
  precio: 25,
  enStock: false,
};

mostrarProducto(laptop);
mostrarProducto(mouse);
