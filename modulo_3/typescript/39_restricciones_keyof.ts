/**
 * ============================================
 * 39 - RESTRICCIONES (extends) Y keyof
 * ============================================
 * Temas:
 *   - <T extends { id: number }>
 *   - <T extends keyof U>
 *   - Acceso seguro con genericos
 * ============================================
 */

// ──────────────────────────────────────────────
// C.1: Constraints con extends
// ──────────────────────────────────────────────

// T DEBE tener al menos la propiedad "id: number"
function buscarPorId<T extends { id: number }>(lista: T[], id: number): T | undefined {
  return lista.find((item) => item.id === id);
}

const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
console.log("Buscar id 2:", buscarPorId(usuarios, 2));

const productos = [
  { id: 10, nombre: "Mouse", precio: 25 },
  { id: 11, nombre: "Teclado", precio: 80 },
];
console.log("Buscar id 11:", buscarPorId(productos, 11));

// Error: string[] no tiene propiedad "id":
// buscarPorId(["a", "b"], 0);

// ──────────────────────────────────────────────
// C.2: keyof y acceso por clave generico
// ──────────────────────────────────────────────

function prop<T, K extends keyof T>(obj: T, k: K): T[K] {
  return obj[k];
}

const persona = { nombre: "Ana", edad: 30, activa: true };

const propNombre = prop(persona, "nombre");  // string
const propEdad   = prop(persona, "edad");    // number
// prop(persona, "telefono");  // Error: no existe en el tipo

console.log("prop nombre:", propNombre, "prop edad:", propEdad);

// ──────────────────────────────────────────────
// EJEMPLO: seleccionarColumnas
// ──────────────────────────────────────────────

function seleccionarColumnas<T, K extends keyof T>(
  lista: T[],
  ...campos: K[]
): Pick<T, K>[] {
  return lista.map((item) => {
    const resultado = {} as Pick<T, K>;
    campos.forEach((campo) => {
      resultado[campo] = item[campo];
    });
    return resultado;
  });
}

const inventario = [
  { id: 1, nombre: "Monitor",  precio: 300, stock: 12 },
  { id: 2, nombre: "Teclado",  precio: 80,  stock: 50 },
  { id: 3, nombre: "Webcam",   precio: 120, stock: 8  },
];

const resumen = seleccionarColumnas(inventario, "nombre", "precio");
console.log("Columnas seleccionadas:", resumen);
