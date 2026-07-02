/**
 * ============================================
 * EJERCICIO 4: Temperatura con get/set
 * ============================================
 * Tema: Getters y setters (B.2)
 *
 * Enunciado:
 * Clase Temperatura con _celsius: number.
 * - get celsius(), set celsius(v) (valida que no baje de -273.15)
 * - get fahrenheit() (calculado: celsius * 9/5 + 32)
 * - set fahrenheit(f) (convierte y almacena en _celsius)
 * Prueba asignar grados F y leer en C.
 * ============================================
 */

class Temperatura2 {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(v: number) {
    if (v < -273.15) throw new Error("No puede bajar de -273.15°C");
    this._celsius = v;
  }

  get fahrenheit(): number {
    return this._celsius * 9 / 5 + 32;
  }

  set fahrenheit(f: number) {
    this._celsius = (f - 32) * 5 / 9;
  }
}

const t = new Temperatura2();
t.fahrenheit = 98.6;
console.log(t.fahrenheit.toFixed(1) + "°F = " + t.celsius.toFixed(1) + "°C");
// 98.6°F = 37.0°C
