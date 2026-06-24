// foreach-map.ts

// forEach: ejecuta una función por cada elemento (no devuelve nada)
// map: transforma cada elemento y devuelve un array nuevo

const numeros: number[] = [1, 2, 3, 4];

numeros.forEach((n) => console.log(n * 10));

const dobles: number[] = numeros.map((n) => n * 2);
console.log(dobles);

console.log("---");

// Ejemplo aplicado — normalizar correos
const emails: string[] = ["  ANA@MAIL.COM ", "Luis@Mail.com", " PEPE@MAIL.COM"];

const limpios: string[] = emails.map((e) => e.trim().toLowerCase());
console.log(limpios);

limpios.forEach((e, i) => console.log(`Usuario ${i + 1}: ${e}`));

console.log("---");

// Mini-ejercicio: precios + IVA
const precios: number[] = [100, 250, 80, 500];

const preciosConIva: number[] = precios.map((p) =>
  Number((p * 1.19).toFixed(2))
);

preciosConIva.forEach((p, i) =>
  console.log(`Precio ${i + 1}: $${p}`)
);