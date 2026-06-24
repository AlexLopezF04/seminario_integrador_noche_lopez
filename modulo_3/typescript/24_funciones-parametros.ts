// funciones-parametros.ts
// Parámetros tipados, opcionales y por defecto

// Parámetros obligatorios con tipo
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(5, 3));

// Parámetro opcional con ?
function saludar(nombre: string, saludo?: string): string {
  if (saludo) {
    return `${saludo}, ${nombre}`;
  }
  return `Hola, ${nombre}`;
}

console.log(saludar("Ana"));
console.log(saludar("Ana", "Buenos días"));

// Parámetro por defecto
function configurarServidor(host: string, puerto: number = 3000): string {
  return `${host}:${puerto}`;
}

console.log(configurarServidor("localhost"));
console.log(configurarServidor("localhost", 8080));

// Parámetros rest (...)
function totalFactura(...precios: number[]): number {
  return precios.reduce((acc, p) => acc + p, 0);
}

console.log(totalFactura(100, 200, 50));
