/**
 * ============================================
 * EJERCICIO 8: PlanSuscripcion (readonly)
 * ============================================
 * Tema: readonly (H.1)
 *
 * Enunciado:
 * Define type PlanSuscripcion con: readonly nombre, readonly precioMensual,
 * readonly caracteristicas: readonly string[], activo: boolean.
 * Crea dos planes ("Basico" y "Pro").
 * Intenta cambiar precioMensual (debe dar error).
 * Cambia activo a false en uno (debe funcionar).
 * ============================================
 */

type PlanSuscripcion = {
  readonly nombre: string;
  readonly precioMensual: number;
  readonly caracteristicas: readonly string[];
  activo: boolean;
};

const planBasico: PlanSuscripcion = {
  nombre: "Basico",
  precioMensual: 9.99,
  caracteristicas: ["1 usuario", "10 GB"],
  activo: true,
};

const planPro: PlanSuscripcion = {
  nombre: "Pro",
  precioMensual: 19.99,
  caracteristicas: ["5 usuarios", "100 GB", "Soporte prioritario"],
  activo: false,
};

// planBasico.precioMensual = 14.99;  // Error: readonly
// planPro.caracteristicas.push("extra"); // Error: readonly array

planBasico.activo = false;  // OK, no es readonly
console.log("Plan:", planBasico.nombre, "activo:", planBasico.activo);
