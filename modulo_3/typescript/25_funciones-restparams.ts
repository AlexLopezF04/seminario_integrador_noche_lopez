// funciones-restparams.ts
// Parámetros rest — agrupan múltiples argumentos en un array

function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(sumarTodos(1, 2, 3));
console.log(sumarTodos(10, 20, 30, 40, 50));

function listarProductos(categoria: string, ...productos: string[]): void {
  console.log(`Categoría: ${categoria}`);
  for (const prod of productos) {
    console.log(`  - ${prod}`);
  }
}

listarProductos("Electrónica", "Mouse", "Teclado", "Monitor");

function promediar(...valores: number[]): number {
  if (valores.length === 0) return 0;
  return sumarTodos(...valores) / valores.length;
}

console.log(promediar(80, 90, 100));
