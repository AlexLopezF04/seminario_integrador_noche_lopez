// funciones.ts
// Validador de registro de usuarios — función con múltiples validaciones

function validarRegistro(nombre: string, email: string, edad: number, password: string): string {
  if (nombre.length < 2) {
    return "Nombre demasiado corto";
  }

  if (!email.includes("@")) {
    return "Email inválido";
  }

  if (edad < 18) {
    return "Debes ser mayor de edad";
  }

  if (password.length < 8) {
    return "Contraseña debe tener mínimo 8 caracteres";
  }

  return `✅ Registro exitoso: bienvenido, ${nombre}`;
}

console.log(validarRegistro("A", "a@b.com", 25, "12345678"));
console.log(validarRegistro("Ana", "sinarroba", 25, "12345678"));
console.log(validarRegistro("Ana", "a@b.com", 15, "12345678"));
console.log(validarRegistro("Ana", "a@b.com", 25, "123"));
console.log(validarRegistro("Ana", "a@b.com", 25, "12345678"));

console.log("---");

// Extra: retorno con objeto tipado
type ResultadoRegistro = {
  ok: boolean;
  mensaje: string;
};

function validarRegistroObj(nombre: string, email: string, edad: number, password: string): ResultadoRegistro {
  if (nombre.length < 2) {
    return { ok: false, mensaje: "Nombre demasiado corto" };
  }

  if (!email.includes("@")) {
    return { ok: false, mensaje: "Email inválido" };
  }

  if (edad < 18) {
    return { ok: false, mensaje: "Debes ser mayor de edad" };
  }

  if (password.length < 8) {
    return { ok: false, mensaje: "Contraseña debe tener mínimo 8 caracteres" };
  }

  return { ok: true, mensaje: `Registro exitoso: bienvenido, ${nombre}` };
}

console.log(validarRegistroObj("Ana", "a@b.com", 25, "12345678"));
