/**
 * ============================================
 * EJERCICIO 2: Formatear nombre completo
 * ============================================
 * Tema: string
 *
 * Enunciado:
 * Declara const nombre: string = "ANA" y
 * const apellido: string = "LOPEZ". Construye el nombre completo
 * con la primera letra en mayuscula y el resto en minuscula
 * usando charAt(0).toUpperCase() + slice(1).toLowerCase().
 * Resultado esperado: "Ana Lopez".
 * ============================================
 */

const nombre: string = "ANA";
const apellido: string = "LOPEZ";

const nombreFormateado: string =
  nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

const apellidoFormateado: string =
  apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

const nombreCompleto: string = nombreFormateado + " " + apellidoFormateado;
console.log(nombreCompleto); // Ana Lopez
