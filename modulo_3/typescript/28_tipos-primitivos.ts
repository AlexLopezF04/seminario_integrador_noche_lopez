// tipos-primitivos.ts
// number, string y boolean

const precio: number = 299.99;
const puerto: number = 8080;
const temperatura: number = -5.3;
const hexColor: number = 0xff5733;

const email: string = "soporte@empresa.com";
const protocolo: string = 'HTTPS';
const ruta: string = `/api/v2/usuarios`;

const estaActivo: boolean = true;
const requiereAuth: boolean = false;
const esAdmin: boolean = false;

// Aritmética con number
const subtotal = 1500;
const descuento = 150;
const total = subtotal - descuento;
console.log(`Total: $${total}`);

// Métodos de string
const usuario = "  admin@corp.com  ";
console.log(usuario.trim().toLowerCase());
console.log(email.includes("empresa"));
console.log(email.split("@")[1]);

// Lógica con boolean
const puedeAcceder: boolean = estaActivo && !requiereAuth;
console.log(`Puede acceder: ${puedeAcceder}`);

// Mini-ejercicio: datos de una ciudad
const latitudCiudad: number = -34.6037;
const nombreCiudad: string = "Buenos Aires";
const esCapital: boolean = true;

console.log(`${nombreCiudad} — Lat: ${latitudCiudad}, ¿Es capital? ${esCapital}`);
