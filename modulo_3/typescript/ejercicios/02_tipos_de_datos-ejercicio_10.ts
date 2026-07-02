/**
 * ============================================
 * EJERCICIO 10: Figuras con narrowing
 * ============================================
 * Tema: Type Narrowing
 *
 * Enunciado:
 * Define type Figura = { tipo: "circulo"; radio: number }
 * | { tipo: "rectangulo"; base: number; altura: number }.
 * Declara const figuras: Figura[] con un circulo de radio 7
 * y un rectangulo de 10x5. Recorre con for...of y usa switch
 * sobre tipo para calcular e imprimir el area de cada figura.
 * ============================================
 */

type Figura =
  | { tipo: "circulo"; radio: number }
  | { tipo: "rectangulo"; base: number; altura: number };

const figuras: Figura[] = [
  { tipo: "circulo", radio: 7 },
  { tipo: "rectangulo", base: 10, altura: 5 },
];

for (const f of figuras) {
  switch (f.tipo) {
    case "circulo": {
      const area = Math.PI * f.radio ** 2;
      console.log("Circulo (radio=" + f.radio + "): area =", area.toFixed(2));
      break;
    }
    case "rectangulo": {
      const area = f.base * f.altura;
      console.log("Rectangulo (" + f.base + "x" + f.altura + "): area =", area.toFixed(2));
      break;
    }
  }
}
