/**
 * ============================================
 * EJERCICIO 6: Validador con interface de metodo
 * ============================================
 * Tema: Tipos de funcion en interfaces (F.1)
 *
 * Enunciado:
 * Define interface Validador con: validar(valor: string): boolean
 * y mensajeError: string.
 * Crea dos implementaciones: una que valide email (contiene @),
 * otra que valide password (>= 8 caracteres).
 * Escribe function ejecutarValidacion(val: string, v: Validador): void
 * que imprima "OK" o el mensajeError.
 * ============================================
 */

interface Validador {
  validar(valor: string): boolean;
  mensajeError: string;
}

const emailValidator: Validador = {
  validar(valor) {
    return valor.includes("@");
  },
  mensajeError: "El email debe contener @",
};

const passValidator: Validador = {
  validar(valor) {
    return valor.length >= 8;
  },
  mensajeError: "La contrasenia debe tener al menos 8 caracteres",
};

function ejecutarValidacion(val: string, v: Validador): void {
  if (v.validar(val)) {
    console.log("OK");
  } else {
    console.log(v.mensajeError);
  }
}

ejecutarValidacion("ana@mail.com", emailValidator); // OK
ejecutarValidacion("sinarroba", emailValidator);    // El email debe contener @
ejecutarValidacion("12345678", passValidator);      // OK
ejecutarValidacion("123", passValidator);           // La contrasenia debe tener al menos 8 caracteres
