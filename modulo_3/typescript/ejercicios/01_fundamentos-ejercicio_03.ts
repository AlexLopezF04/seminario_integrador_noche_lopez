/**
 * ============================================
 * EJERCICIO 3: Tipos primitivos con datos de ciudad
 * ============================================
 * Enunciado:
 * Declara tres variables tipadas: latitudCiudad (number),
 * nombreCiudad (string) y esCapital (boolean).
 * Usa valores de tu ciudad o una que conozcas.
 * Imprime una linea combinando las tres con un template literal.
 * ============================================
 */

const nombreCiudad: string = "Buenos Aires";
const latitudCiudad: number = -34.6037;
const esCapital: boolean = true;

const descripcion: string = `${nombreCiudad} esta en la latitud ${latitudCiudad} y ${esCapital ? "es" : "no es"} capital.`;
console.log(descripcion);
// Buenos Aires esta en la latitud -34.6037 y es capital.
