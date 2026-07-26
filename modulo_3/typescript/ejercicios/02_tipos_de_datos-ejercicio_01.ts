/**
 * Ejercicio 1: Celsius a Fahrenheit
 */

function celsiusAFahrenheit(c: number): number {
  return Number((c * 9 / 5 + 32).toFixed(1));
}
console.log("0°C =", celsiusAFahrenheit(0), "°F");
console.log("100°C =", celsiusAFahrenheit(100), "°F");
console.log("37°C =", celsiusAFahrenheit(37), "°F");
