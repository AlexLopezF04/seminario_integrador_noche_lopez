// tipos-string.ts
const nombre:    string = "Pinpon";
const raza:    string = `Comun`;
const raza:    string = `Es de raza ${raza}`;
const color:     string = "Cafe";
const dueño:  string = 'Alex López';

console.log(nombre);
console.log(raza);
console.log(color);
console.log(dueño);

// Métodos de string funcionan igual que en JS
console.log(nombre.toUpperCase());      // PINPON
console.log(nombre.toLowerCase());      // pinpon
console.log(nombre.includes("Pinpon")); // true
console.log(nombre.split(","));         // ["Pinpon"]