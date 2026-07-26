/**
 * ============================================
 * EJERCICIO 2: const y let en una tienda en linea
 * ============================================
 * Enunciado:
 * Declara con const las constantes de una tienda en linea:
 * NOMBRE_TIENDA (string), IVA (number, valor 0.19), ABIERTA (boolean).
 * Luego declara con let el stockDisponible (number, empieza en 100)
 * y categoriaActual (string, empieza en "electronica").
 * Cambia ambas variables e intenta cambiar IVA para ver el error de TS.
 * ============================================
 */

// Constantes de la tienda (no pueden cambiar)
const NOMBRE_TIENDA: string = "TechStore";
const IVA: number = 0.19;
const ABIERTA: boolean = true;

// Variables que pueden cambiar
let stockDisponible: number = 100;
let categoriaActual: string = "electronica";

// Cambiar variables let (funciona correctamente)
stockDisponible = 85;
categoriaActual = "hogar";

console.log("Nombre:", NOMBRE_TIENDA);
console.log("IVA:", IVA);
console.log("Abierta:", ABIERTA);
console.log("Stock:", stockDisponible);     // 85
console.log("Categoria:", categoriaActual); // hogar

// Intentar cambiar una constante - TS da error:
// IVA = 0.21;
// Error: Cannot assign to 'IVA' because it is a constant
