/**
 * ============================================
 * RETO FINAL: Validador de registro de usuarios
 * ============================================
 * Enunciado:
 * Escribe una funcion validarRegistro(nombre, email, edad, password)
 * que devuelva string con estas reglas:
 * 1. nombre < 2 caracteres → "Nombre demasiado corto"
 * 2. email no contiene @ → "Email invalido"
 * 3. edad < 18 → "Debes ser mayor de edad"
 * 4. password.length < 8 → "Contrasenia debe tener minimo 8 caracteres"
 * 5. Todo valido → "Registro exitoso: bienvenido, ${nombre}"
 *
 * Prueba con al menos cuatro llamadas cubriendo cada caso.
 *
 * Extra: cambia el tipo de retorno a { ok: boolean; mensaje: string }
 * y ajusta la funcion - observa como TS te obliga a devolver siempre
 * esa forma.
 * ============================================
 */

// --- Version basica (retorna string) ---

function validarRegistro(
  nombre: string,
  email: string,
  edad: number,
  password: string
): string {
  if (nombre.length < 2) {
    return "Nombre demasiado corto";
  }
  if (!email.includes("@")) {
    return "Email invalido";
  }
  if (edad < 18) {
    return "Debes ser mayor de edad";
  }
  if (password.length < 8) {
    return "Contrasenia debe tener minimo 8 caracteres";
  }
  return `Registro exitoso: bienvenido, ${nombre}`;
}

// Pruebas que cubren cada caso:
console.log(validarRegistro("A", "a@b.com", 25, "12345678"));       // Nombre demasiado corto
console.log(validarRegistro("Ana", "sinarroba", 25, "12345678"));   // Email invalido
console.log(validarRegistro("Ana", "a@b.com", 15, "12345678"));     // Debes ser mayor de edad
console.log(validarRegistro("Ana", "a@b.com", 25, "123"));          // Contrasenia debe tener minimo 8 caracteres
console.log(validarRegistro("Ana", "a@b.com", 25, "12345678"));     // Registro exitoso: bienvenido, Ana

// --- Version extra (retorna objeto) ---
// TS obliga a que TODOS los caminos devuelvan { ok, mensaje }

type ResultadoValidacion = {
  ok: boolean;
  mensaje: string;
};

function validarRegistroObj(
  nombre: string,
  email: string,
  edad: number,
  password: string
): ResultadoValidacion {
  if (nombre.length < 2) {
    return { ok: false, mensaje: "Nombre demasiado corto" };
  }
  if (!email.includes("@")) {
    return { ok: false, mensaje: "Email invalido" };
  }
  if (edad < 18) {
    return { ok: false, mensaje: "Debes ser mayor de edad" };
  }
  if (password.length < 8) {
    return { ok: false, mensaje: "Contrasenia debe tener minimo 8 caracteres" };
  }
  return { ok: true, mensaje: `Registro exitoso: bienvenido, ${nombre}` };
}

const resultado = validarRegistroObj("Ana", "a@b.com", 25, "12345678");
console.log(resultado);  // { ok: true, mensaje: "Registro exitoso: bienvenido, Ana" }
