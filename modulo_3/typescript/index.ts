/**
 * ============================================
 * MODULO 3 - FUNDAMENTOS DE TYPESCRIPT
 * ============================================
 * Tutorial del profesor Francisco Higuera
 *
 * Archivos de contenido:
 *   01_introduccion_typescript.ts   -> Que es TS, entorno, strict mode
 *   02_variables_y_anotaciones.ts   -> const/let, anotacion vs inferencia
 *   03_tipos_primitivos.ts          -> number, string, boolean
 *   04_template_literals.ts         -> Template literals, logs tipados
 *   05_compilador_seguridad.ts      -> Evitar any, unknown, strict mode
 *   06_ejemplo_calculadora_envios.ts -> Ejemplo combinado (pag 1)
 *   07_tipos_primitivos_detalle.ts  -> number, string, boolean, null/undefined
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
 *   24_type_alias.ts                -> type alias para objetos, uniones, tuplas
 *   25_interface.ts                 -> interface: ?, readonly
 *   26_type_vs_interface_extension.ts -> type vs interface, extends, &
 *   27_index_signatures.ts          -> [clave: string] y Record<K,V>
 *   28_funciones_en_interfaces.ts   -> Firmas de metodo y callback en interfaces
 *   29_uniones_discriminadas.ts     -> Discriminated unions y switch exhaustivo
 *   30_readonly.ts                  -> Propiedades inmutables y arrays readonly
 *   31_ejemplo_empleados.ts         -> Sistema de empleados (ejemplo final)
 *   32_clases_basicas.ts            -> Clases, constructor, parameter properties
 *   33_modificadores_acceso.ts      -> public/private/protected, get/set
 *   34_herencia_abstractas.ts       -> extends, super, override, abstract
 *   35_implements_static_polimorfismo.ts -> implements, static, polimorfismo
 *   36_ejemplo_biblioteca.ts        -> Sistema de biblioteca (ejemplo final)
 *   37_introduccion_genericos.ts    -> Motivacion, funcion generica, inferencia
 *   38_funciones_genericas.ts       -> <K,V>, funciones genericas multiples
 *   39_restricciones_keyof.ts       -> extends, keyof, acceso generico
 *   40_interfaces_clases_genericas.ts -> Interface y clase generica
 *   41_default_utility_types.ts     -> Default types, Partial, Pick, Omit, etc.
 *   42_ejemplo_cache.ts             -> Cache con expiracion (ejemplo final)
 *
 * Ejercicios (en ejercicios/):
 *   01_fundamentos-ejercicio_1.ts     -> JS vs TS (sumar)
 *   01_fundamentos-ejercicio_2.ts     -> const/let en tienda
 *   01_fundamentos-ejercicio_3.ts     -> Tipos de ciudad
 *   01_fundamentos-ejercicio_4.ts     -> formatearPrecio
 *   01_fundamentos-ejercicio_5.ts     -> Strict mode
 *   01_fundamentos-ejercicio_6.ts     -> Reto: validador registro
 *   02_tipos_de_datos-ejercicio_1.ts  -> Celsius a Fahrenheit
 *   02_tipos_de_datos-ejercicio_2.ts  -> Formatear nombre
 *   02_tipos_de_datos-ejercicio_3.ts  -> Anio bisiesto
 *   02_tipos_de_datos-ejercicio_4.ts  -> Precios con descuento
 *   02_tipos_de_datos-ejercicio_5.ts  -> Alumnos con notas
 *   02_tipos_de_datos-ejercicio_6.ts  -> Min/max con tupla
 *   02_tipos_de_datos-ejercicio_7.ts  -> Semaforo
 *   02_tipos_de_datos-ejercicio_8.ts  -> Tallas
 *   02_tipos_de_datos-ejercicio_9.ts  -> Procesar unknown
 *   02_tipos_de_datos-ejercicio_10.ts -> Figuras con narrowing
 *   02_tipos_de_datos-ejercicio_11.ts -> Productos con descuento
 *   03_control_de_flujo-ejercicio_1.ts  -> if simple (edad)
 *   03_control_de_flujo-ejercicio_2.ts  -> Par/impar (ternario)
 *   03_control_de_flujo-ejercicio_3.ts  -> Bateria + switch dias
 *   03_control_de_flujo-ejercicio_4.ts  -> Conducir (anidado)
 *   03_control_de_flujo-ejercicio_5.ts  -> Suma 1..100 (for)
 *   03_control_de_flujo-ejercicio_6.ts  -> Temperatura (for...of)
 *   03_control_de_flujo-ejercicio_7.ts  -> Notas (for...in)
 *   03_control_de_flujo-ejercicio_8.ts  -> IVA (map + forEach)
 *   03_control_de_flujo-ejercicio_9.ts  -> Dado (while)
 *   03_control_de_flujo-ejercicio_10.ts -> Pares (break/continue)
 *   03_control_de_flujo-ejercicio_11.ts -> Reto: validador carrito
 *   04_funciones-ejercicio_1.ts   -> Area y perimetro
 *   04_funciones-ejercicio_2.ts   -> Flecha: esPar, celsius
 *   04_funciones-ejercicio_3.ts   -> formatearPrecio (defaults)
 *   04_funciones-ejercicio_4.ts   -> maximo (rest)
 *   04_funciones-ejercicio_5.ts   -> asegurar (never)
 *   04_funciones-ejercicio_6.ts   -> componer (higher-order)
 *   04_funciones-ejercicio_7.ts   -> convertir (sobrecarga)
 *   04_funciones-ejercicio_8.ts   -> Semaforos (closure)
 *   05_type_interfaces-ejercicio_1.ts -> Moneda (type alias)
 *   05_type_interfaces-ejercicio_2.ts -> Libro (interface)
 *   05_type_interfaces-ejercicio_3.ts -> type vs interface (error)
 *   05_type_interfaces-ejercicio_4.ts -> Vehiculo/Coche (extends)
 *   05_type_interfaces-ejercicio_5.ts -> contarLetras (Record)
 *   05_type_interfaces-ejercicio_6.ts -> Validador (callback en interface)
 *   05_type_interfaces-ejercicio_7.ts -> Medios de pago (discriminada)
 *   05_type_interfaces-ejercicio_8.ts -> PlanSuscripcion (readonly)
 *   06_poo-ejercicio_1.ts   -> Clase Rectangulo
 *   06_poo-ejercicio_2.ts   -> Libro (parameter properties)
 *   06_poo-ejercicio_3.ts   -> Contador (private)
 *   06_poo-ejercicio_4.ts   -> Temperatura (get/set)
 *   06_poo-ejercicio_5.ts   -> Vehiculo/Auto/Moto (herencia)
 *   06_poo-ejercicio_6.ts   -> Exportador (abstract)
 *   06_poo-ejercicio_7.ts   -> Factura/Recibo (implements)
 *   06_poo-ejercicio_8.ts   -> IdUnico (static)
 *   06_poo-ejercicio_9.ts   -> Descuento (polimorfismo)
 *   07_genericos-ejercicio_1.ts    -> envolverArray
 *   08_genericos-ejercicio_2.ts    -> intercambiar
 *   09_genericos-ejercicio_3.ts    -> transformarMapa
 *   10_genericos-ejercicio_4.ts    -> fusionar
 *   11_genericos-ejercicio_5.ts    -> agruparPor
 *   12_genericos-ejercicio_6.ts    -> Paginado
 *   13_genericos-ejercicio_7.ts    -> Cola FIFO
 *   14_genericos-ejercicio_8.ts    -> Cache con default
 *   15_genericos-ejercicio_9.ts    -> Empleado (utility types)
 *
 * Como ejecutar:
 *   npx tsx nombre_del_archivo.ts
 *   Ej: npx tsx 32_clases_basicas.ts
 *       npx tsx ejercicios/06_poo-ejercicio_1.ts
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
    03  -> Tipos primitivos
    04  -> Template literals
    05  -> Compilador como seguridad
    06  -> Calculadora de envios
    07  -> Tipos primitivos (detalle)
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
    24  -> Type alias
    25  -> Interface
    26  -> Type vs interface / extension
    27  -> Index signatures y Record
    28  -> Funciones en interfaces
    29  -> Uniones discriminadas
    30  -> Readonly
    31  -> Sistema de empleados (ejemplo)
    32  -> Clases basicas
    33  -> Modificadores de acceso
    34  -> Herencia y abstractas
    35  -> Implements, static, polimorfismo
     36  -> Sistema de biblioteca (ejemplo)
     37  -> Introduccion a genericos
     38  -> Funciones genericas
     39  -> Restricciones y keyof
     40  -> Interfaces y clases genericas
     41  -> Default types y utility types
     42  -> Cache con expiracion (ejemplo final)

  Ejercicios (npx tsx ejercicios/*.ts):
     01_* (6 ejercicios)   -> Pagina 1: Fundamentos
     02_* (11 ejercicios)  -> Pagina 2: Tipos de Datos
     03_* (11 ejercicios)  -> Pagina 3: Control de Flujo
     04_* (8 ejercicios)   -> Pagina 4: Funciones
     05_* (8 ejercicios)   -> Pagina 5: Type Aliases e Interfaces
     06_* (9 ejercicios)   -> Pagina 6: POO
     37-45 (9 ejercicios)  -> Pagina 7: Genericos
============================================
`);
