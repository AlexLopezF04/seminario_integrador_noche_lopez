/**
 * Ejercicio B.2: transformarMapa
 * Crea una funcion transformarMapa<K, V, R>
 * que reciba un Map<K, V> y una funcion transformadora (v: V) => R,
 * y devuelva un Map<K, R>.
 */

function transformarMapa<K, V, R>(mapa: Map<K, V>, fn: (v: V) => R): Map<K, R> {
  const resultado = new Map<K, R>();
  mapa.forEach((v, k) => {
    resultado.set(k, fn(v));
  });
  return resultado;
}

const edades = new Map<string, number>([
  ["Ana", 30],
  ["Luis", 25],
]);

const edadesTexto = transformarMapa(edades, (edad) => `${edad} anios`);
console.log("edades original:", edades);
console.log("edades transformado:", edadesTexto);
