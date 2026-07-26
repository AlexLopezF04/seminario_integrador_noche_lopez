/**
 * Ejercicio C.2: agruparPor
 * Crea una funcion agruparPor<T, K extends keyof T>
 * que reciba un array T[] y una clave K,
 * y devuelva un Map<T[K], T[]> agrupado por esa clave.
 */

function agruparPor<T, K extends keyof T>(lista: T[], clave: K): Map<T[K], T[]> {
  const mapa = new Map<T[K], T[]>();
  for (const item of lista) {
    const key = item[clave];
    if (!mapa.has(key)) {
      mapa.set(key, []);
    }
    mapa.get(key)!.push(item);
  }
  return mapa;
}

interface Empleado {
  depto: string;
  nombre: string;
  sueldo: number;
}

const empleados: Empleado[] = [
  { depto: "ventas",  nombre: "Ana",   sueldo: 5000 },
  { depto: "ingenieria", nombre: "Luis",  sueldo: 7000 },
  { depto: "ventas",  nombre: "Sofia", sueldo: 5500 },
  { depto: "rrhh",    nombre: "Pedro", sueldo: 4500 },
];

const porDepto = agruparPor(empleados, "depto");
console.log("Por depto:");
porDepto.forEach((emps, depto) => {
  console.log(`  ${depto}: ${emps.map((e) => e.nombre).join(", ")}`);
});
