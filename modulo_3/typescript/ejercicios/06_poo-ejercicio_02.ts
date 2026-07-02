/**
 * ============================================
 * EJERCICIO 6: Exportador (clase abstracta)
 * ============================================
 * Tema: Clases abstractas (C.2)
 *
 * Enunciado:
 * Clase abstracta Exportador con metodo abstracto
 * exportar(datos: string[]): string y metodo concreto
 * encabezado(): string que devuelva "=== Exportacion ===".
 * Implementa ExportadorCSV (une con comas) y ExportadorJSON
 * (JSON.stringify). Prueba ambos con el mismo array.
 * ============================================
 */

abstract class Exportador {
  abstract exportar(datos: string[]): string;

  encabezado(): string {
    return "=== Exportacion ===";
  }
}

class ExportadorCSV extends Exportador {
  override exportar(datos: string[]): string {
    return datos.join(",");
  }
}

class ExportadorJSON extends Exportador {
  override exportar(datos: string[]): string {
    return JSON.stringify(datos);
  }
}

const datos = ["TypeScript", "Python", "Rust"];

const csv = new ExportadorCSV();
console.log(csv.encabezado());
console.log(csv.exportar(datos)); // TypeScript,Python,Rust

const json = new ExportadorJSON();
console.log(json.encabezado());
console.log(json.exportar(datos)); // ["TypeScript","Python","Rust"]
