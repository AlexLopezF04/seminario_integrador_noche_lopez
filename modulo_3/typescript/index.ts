/**
 * ============================================
 * MODULO 3 - FUNDAMENTOS DE TYPESCRIPT
 * ============================================
 * Tutorial del profesor Francisco Higuera
 *
 * Archivos de contenido:
 *   01_introduccion_typescript.ts   -> Que es TS, entorno, strict mode
 *   02_variables_y_anotaciones.ts   -> const/let, anotacion vs inferencia
 *   04_template_literals.ts         -> Template literals, logs tipados
 *   05_compilador_seguridad.ts      -> Evitar any, unknown, strict mode
 *   06_ejemplo_calculadora_envios.ts -> Ejemplo combinado (pag 1)
 *   07_tipos_primitivos_detalle.ts  -> number, string, boolean, null/undefined (incluye 03)
 *   08_arrays.ts                    -> Arrays, metodos, arrays de objetos
 *   09_tuplas.ts                    -> Tuplas, retorno multiple
 *   10_enums.ts                     -> Enums y union de literales
 *   11_union_literal_types.ts       -> Union types y literal types
 *   12_any_unknown_never.ts         -> any, unknown, never, switch exhaustivo
 *   13_type_narrowing.ts            -> typeof, in, Array.isArray, switch
 *   14_objetos_inline.ts            -> Objetos inline, opcionales, readonly
 *   15_ejemplo_inventario.ts        -> Inventario de tienda online
 *   16_condicionales.ts             -> if, if/else, switch, anidadas
 *   17_bucles.ts                    -> for, for...of, for...in, while, break/continue
 *   18_ejemplo_monitor_servidores.ts -> Monitor de servidores (ejemplo final)
 *   19_funciones_declaracion.ts     -> Parametros tipados, flecha
 *   20_parametros_y_retorno.ts      -> Opcionales, default, rest, void/never
 *   21_orden_superior_closures.ts   -> Higher-order, callbacks, closures
 *   22_sobrecargas.ts               -> Function overloads
 *   23_ejemplo_tareas.ts            -> Sistema de tareas (ejemplo final)
 *   24_types_e_interfaces.ts        -> type alias, interface, readonly (fusionado)
 *   26_type_vs_interface_extension.ts -> type vs interface, extends, &
 *   27_index_signatures.ts          -> [clave: string] y Record<K,V>
 *   28_funciones_en_interfaces.ts   -> Firmas de metodo y callback en interfaces
 *   29_uniones_discriminadas.ts     -> Discriminated unions y switch exhaustivo
 *   31_ejemplo_empleados.ts         -> Sistema de empleados (ejemplo final)
 *   32_clases_basicas.ts            -> Clases, constructor, parameter properties
 *   33_modificadores_acceso.ts      -> public/private/protected, get/set
 *   34_herencia_abstractas.ts       -> extends, super, override, abstract
 *   35_implements_static_polimorfismo.ts -> implements, static, polimorfismo
 *   36_ejemplo_biblioteca.ts        -> Sistema de biblioteca (ejemplo final)
 *   38_funciones_genericas.ts       -> <T>, <K,V>, motivacion (incluye 37)
 *   39_restricciones_keyof.ts       -> extends, keyof, acceso generico
 *   40_interfaces_clases_genericas.ts -> Interface y clase generica
 *   41_default_utility_types.ts     -> Default types, Partial, Pick, Omit, etc.
 *   42_ejemplo_cache.ts             -> Cache con expiracion (ejemplo final)
 *
 * Ejercicios (en ejercicios/):
 *   01_fundamentos-ejercicio_01.ts   -> JS vs TS (sumar)
 *   01_fundamentos-ejercicio_02.ts   -> const/let en tienda
 *   01_fundamentos-ejercicio_03.ts   -> Tipos de ciudad
 *   01_fundamentos-ejercicio_04.ts   -> formatearPrecio
 *   01_fundamentos-ejercicio_05.ts   -> Strict mode
 *   01_fundamentos-ejercicio_06.ts   -> Reto: validador registro
 *   02_tipos_de_datos-ejercicio_01.ts -> Celsius a Fahrenheit
 *   02_tipos_de_datos-ejercicio_02.ts -> Formatear nombre
 *   02_tipos_de_datos-ejercicio_03.ts -> Anio bisiesto
 *   02_tipos_de_datos-ejercicio_04.ts -> Precios con descuento
 *   02_tipos_de_datos-ejercicio_05.ts -> Alumnos con notas
 *   02_tipos_de_datos-ejercicio_06.ts -> Min/max con tupla
 *   02_tipos_de_datos-ejercicio_07.ts -> Semaforo
 *   02_tipos_de_datos-ejercicio_08.ts -> Tallas
 *   02_tipos_de_datos-ejercicio_09.ts -> Productos con descuento
 *   02_tipos_de_datos-ejercicio_10.ts -> typeof + discriminated union
 *   03_control_de_flujo-ejercicio_01.ts -> if + if/else + ternario
 *   03_control_de_flujo-ejercicio_02.ts -> continue + break en carrito
 *   03_control_de_flujo-ejercicio_03.ts -> Bateria + switch dias
 *   03_control_de_flujo-ejercicio_04.ts -> Conducir (anidado)
 *   03_control_de_flujo-ejercicio_05.ts -> Suma 1..100 (for)
 *   03_control_de_flujo-ejercicio_06.ts -> Temperatura (for...of)
 *   03_control_de_flujo-ejercicio_07.ts -> Notas (for...in)
 *   03_control_de_flujo-ejercicio_08.ts -> IVA (map + forEach)
 *   03_control_de_flujo-ejercicio_09.ts -> Dado (while)
 *   04_funciones-ejercicio_01.ts  -> Funcion vs clase (area/perimetro)
 *   04_funciones-ejercicio_02.ts  -> Closure vs clase (contador)
 *   04_funciones-ejercicio_03.ts  -> Flecha: esPar, celsius
 *   04_funciones-ejercicio_04.ts  -> formatearPrecio (defaults)
 *   04_funciones-ejercicio_05.ts  -> maximo (rest)
 *   04_funciones-ejercicio_06.ts  -> asegurar (never)
 *   04_funciones-ejercicio_07.ts  -> componer (higher-order)
 *   04_funciones-ejercicio_08.ts  -> convertir (sobrecarga)
 *   05_type_interfaces-ejercicio_01.ts -> Interface vs clase (libro)
 *   05_type_interfaces-ejercicio_02.ts -> Interface extends vs Class extends
 *   05_type_interfaces-ejercicio_03.ts -> Interface implementada 2 formas
 *   05_type_interfaces-ejercicio_04.ts -> Moneda (type alias)
 *   05_type_interfaces-ejercicio_05.ts -> type vs interface (error)
 *   05_type_interfaces-ejercicio_06.ts -> contarLetras (Record)
 *   05_type_interfaces-ejercicio_07.ts -> PlanSuscripcion (readonly)
 *   06_poo-ejercicio_01.ts  -> Temperatura (get/set)
 *   06_poo-ejercicio_02.ts  -> Exportador (abstract)
 *   06_poo-ejercicio_03.ts  -> IdUnico (static)
 *   06_poo-ejercicio_04.ts  -> Descuento (polimorfismo)
 *   07_genericos-ejercicio_01.ts -> envolverArray + intercambiar + fusionar
 *   07_genericos-ejercicio_02.ts -> Cola<T> + Cache<T>
 *   07_genericos-ejercicio_03.ts -> transformarMapa
 *   07_genericos-ejercicio_04.ts -> agruparPor
 *   07_genericos-ejercicio_05.ts -> Paginado
 *   07_genericos-ejercicio_06.ts -> Empleado (utility types)
 *
 * Como ejecutar:
 *   npx tsx nombre_del_archivo.ts
 *   Ej: npx tsx 32_clases_basicas.ts
 *       npx tsx ejercicios/06_poo-ejercicio_01.ts
 * ============================================
 */

console.log(`
============================================
  MODULO 3 - FUNDAMENTOS DE TYPESCRIPT
============================================
  Usa este indice para navegar los archivos.

  Contenido (npx tsx XX_*.ts):
     01  -> Introduccion a TypeScript
     02  -> Variables y anotaciones
     04  -> Template literals
     05  -> Compilador como seguridad
     06  -> Calculadora de envios
     07  -> Tipos primitivos (detalle) [+03 fusionado]
     08  -> Arrays
     09  -> Tuplas
     10  -> Enums
     11  -> Union y literal types
     12  -> any, unknown, never
     13  -> Type narrowing
     14  -> Objetos inline
     15  -> Inventario (ejemplo final)
     16  -> Condicionales
     17  -> Bucles
     18  -> Monitor servidores (ejemplo)
     19  -> Declaracion de funciones
     20  -> Parametros avanzados
     21  -> Orden superior y closures
     22  -> Sobrecargas
     23  -> Sistema de tareas (ejemplo)
     24  -> Type alias + Interface + Readonly [fusionado]
     26  -> Type vs interface / extension
     27  -> Index signatures y Record
     28  -> Funciones en interfaces
     29  -> Uniones discriminadas
     31  -> Sistema de empleados (ejemplo)
     32  -> Clases basicas
     33  -> Modificadores de acceso
     34  -> Herencia y abstractas
     35  -> Implements, static, polimorfismo
     36  -> Sistema de biblioteca (ejemplo)
     38  -> Funciones genericas [+37 fusionado]
     39  -> Restricciones y keyof
     40  -> Interfaces y clases genericas
     41  -> Default types y utility types
     42  -> Cache con expiracion (ejemplo final)

  Ejercicios (npx tsx ejercicios/*.ts):
      01_* (6 ejercicios)    -> Pagina 1: Fundamentos
      02_* (10 ejercicios)   -> Pagina 2: Tipos de Datos
      03_* (9 ejercicios)    -> Pagina 3: Control de Flujo
      04_* (8 ejercicios)    -> Pagina 4: Funciones
      05_* (7 ejercicios)    -> Pagina 5: Type Aliases e Interfaces
      06_* (4 ejercicios)    -> Pagina 6: POO
      07_* (6 ejercicios)    -> Pagina 7: Genericos
      Total: 50 ejercicios
============================================
`);
