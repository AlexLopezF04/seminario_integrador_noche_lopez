/**
 * ============================================
 * EJERCICIO 4: Puede conducir? (if anidado + aplanado)
 * ============================================
 * Tema: if anidadas (A.4)
 *
 * Enunciado:
 * Declara const edadC: number = 20, const tieneLicencia: boolean = true,
 * const alcohol: number = 0.1.
 * Con if anidado: si < 18 -> "No tiene edad"; si >= 18 pero sin licencia ->
 * "Le falta licencia"; si tiene ambas pero alcohol > 0.3 -> "No puede: alcohol";
 * en otro caso -> "Puede conducir".
 * Extra: reescribe con variables booleanas para aplanar.
 * ============================================
 */

const edadC: number = 20;
const tieneLicencia: boolean = true;
const alcohol: number = 0.1;

// Version con if anidado
if (edadC < 18) {
  console.log("No tiene edad");
} else {
  if (!tieneLicencia) {
    console.log("Le falta licencia");
  } else {
    if (alcohol > 0.3) {
      console.log("No puede: alcohol");
    } else {
      console.log("Puede conducir");
    }
  }
}

// Version aplanada con variables booleanas
const edadOk: boolean = edadC >= 18;
const licenciaOk: boolean = tieneLicencia;
const alcoholOk: boolean = alcohol <= 0.3;

if (!edadOk) {
  console.log("No tiene edad (aplanado)");
} else if (!licenciaOk) {
  console.log("Le falta licencia (aplanado)");
} else if (!alcoholOk) {
  console.log("No puede: alcohol (aplanado)");
} else {
  console.log("Puede conducir (aplanado)");
}
