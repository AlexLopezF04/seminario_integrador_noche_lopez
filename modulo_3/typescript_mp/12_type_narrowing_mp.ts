/**
 * ============================================
 * 13 - TYPE NARROWING (ESTRECHAMIENTO DE TIPOS)
 * Tematica: Cursos Online
 * ============================================
 * Concepto: typeof, truthiness, igualdad, Array.isArray,
 * operador "in", discriminated union con switch
 * Cursos Online: Narrowing entre tipos de contenido
 * educativo (Video, PDF, Quiz), pagos de cursos,
 * identificacion de roles de usuario.
 * ============================================
 */

let contenidoCurso: string | number = Math.random() > 0.5 ? "Video Introduccion" : 42;
let resultado: string;
if (typeof contenidoCurso === "string") {
  resultado = contenidoCurso.toUpperCase();
} else {
  resultado = contenidoCurso.toFixed(2);
}
console.log(resultado);

const descripcionOpcional: string | null = null;
const saludo: string = descripcionOpcional
  ? "Curso: " + descripcionOpcional
  : "Curso sin descripcion";
console.log(saludo);

const valorA: string | number = 42;
const valorB: string | number = 42;
if (valorA === valorB) {
  console.log("Mismos valores:", valorA);
} else {
  console.log("Distintos");
}

const datoCurso: string | string[] = ["modulo1", "modulo2", "modulo3"];
const conteo: number = Array.isArray(datoCurso) ? datoCurso.length : 1;
console.log("Modulos:", conteo);

type Estudiante = { nombre: string; carrera: string };
type Instructor  = { nombre: string; especialidad: string };

const persona: Estudiante | Instructor = { nombre: "Ana", especialidad: "TypeScript" };

if ("carrera" in persona) {
  console.log("Estudiante:", persona.nombre, "carrera", persona.carrera);
} else {
  console.log("Instructor:", persona.nombre, "especialidad:", (persona as Instructor).especialidad);
}

type PagoTarjeta  = { metodo: "tarjeta";  numero: string; cvv: number };
type PagoTransfer = { metodo: "transferencia"; banco: string; cuenta: string };
type PagoEfectivo = { metodo: "efectivo"; moneda: string };

type PagoCurso = PagoTarjeta | PagoTransfer | PagoEfectivo;

const pagos: Array<{ pago: PagoCurso; monto: number }> = [
  { pago: { metodo: "tarjeta", numero: "4111111111111234", cvv: 123 }, monto: 500 },
  { pago: { metodo: "transferencia", banco: "BBVA", cuenta: "ES12345" }, monto: 200 },
  { pago: { metodo: "efectivo", moneda: "MXN" }, monto: 150 },
];

for (const { pago, monto } of pagos) {
  let descripcion: string;
  switch (pago.metodo) {
    case "tarjeta":
      descripcion = "Cobrando $" + monto + " a tarjeta ****" + pago.numero.slice(-4);
      break;
    case "transferencia":
      descripcion = "Transfiriendo $" + monto + " via " + pago.banco;
      break;
    case "efectivo":
      descripcion = "Recibiendo $" + monto + " en " + pago.moneda;
      break;
  }
  console.log(descripcion);
}
