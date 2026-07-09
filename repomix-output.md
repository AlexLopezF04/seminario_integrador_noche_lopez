This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
modulo_1/python/01_hello_world.py
modulo_1/python/02_variables.py
modulo_1/python/03_strings.py
modulo_1/python/04_input.py
modulo_1/python/05_operadores_aritmeticos.py
modulo_1/python/06_operadores_comparacion.py
modulo_1/python/07_operadores_logicos.py
modulo_1/python/08_condicional_if.py
modulo_1/python/09_match.py
modulo_1/python/10_ciclor_for.py
modulo_1/python/11_while.py
modulo_1/python/12_funciones.py
modulo_1/python/13_lista_utiles.py
modulo_1/python/14_diccionario.py
modulo_2/shopapi/.env.example
modulo_2/shopapi/.gitignore
modulo_2/shopapi/.python-version
modulo_2/shopapi/config/__init__.py
modulo_2/shopapi/config/asgi.py
modulo_2/shopapi/config/settings.py
modulo_2/shopapi/config/urls.py
modulo_2/shopapi/config/wsgi.py
modulo_2/shopapi/main.py
modulo_2/shopapi/manage.py
modulo_2/shopapi/pyproject.toml
modulo_2/shopapi/README.md
modulo_2/shopapi/store/__init__.py
modulo_2/shopapi/store/admin.py
modulo_2/shopapi/store/apps.py
modulo_2/shopapi/store/filters.py
modulo_2/shopapi/store/migrations/__init__.py
modulo_2/shopapi/store/models.py
modulo_2/shopapi/store/models/__init__.py
modulo_2/shopapi/store/pagination.py
modulo_2/shopapi/store/permissions.py
modulo_2/shopapi/store/serializers/__init__.py
modulo_2/shopapi/store/tests.py
modulo_2/shopapi/store/tests/__init__.py
modulo_2/shopapi/store/urls.py
modulo_2/shopapi/store/views.py
modulo_2/shopapi/store/views/__init__.py
modulo_2/shopapi/store/views/health.py
modulo_2/vehiculos_api/.env
modulo_2/vehiculos_api/catalog/__init__.py
modulo_2/vehiculos_api/catalog/admin.py
modulo_2/vehiculos_api/catalog/apps.py
modulo_2/vehiculos_api/catalog/auth_serializers.py
modulo_2/vehiculos_api/catalog/auth_views.py
modulo_2/vehiculos_api/catalog/calculos_views.py
modulo_2/vehiculos_api/catalog/migrations/__init__.py
modulo_2/vehiculos_api/catalog/migrations/0001_initial.py
modulo_2/vehiculos_api/catalog/models.py
modulo_2/vehiculos_api/catalog/permissions.py
modulo_2/vehiculos_api/catalog/sales_views.py
modulo_2/vehiculos_api/catalog/serializers.py
modulo_2/vehiculos_api/catalog/tests.py
modulo_2/vehiculos_api/catalog/urls.py
modulo_2/vehiculos_api/catalog/views.py
modulo_2/vehiculos_api/config/__init__.py
modulo_2/vehiculos_api/config/asgi.py
modulo_2/vehiculos_api/config/settings.py
modulo_2/vehiculos_api/config/urls.py
modulo_2/vehiculos_api/config/wsgi.py
modulo_2/vehiculos_api/manage.py
modulo_2/vehiculos_api/scriptc.sql
modulo_3/typescript_mp/01_introduccion_typescript_mp.ts
modulo_3/typescript_mp/02_variables_y_anotaciones_mp.ts
modulo_3/typescript_mp/04_template_literals_mp.ts
modulo_3/typescript_mp/05_compilador_seguridad_mp.ts
modulo_3/typescript_mp/06_ejemplo_calculadora_envios_mp.ts
modulo_3/typescript_mp/07_tipos_primitivos_detalle_mp.ts
modulo_3/typescript_mp/08_arrays_mp.ts
modulo_3/typescript_mp/09_tuplas_mp.ts
modulo_3/typescript_mp/10_enums_mp.ts
modulo_3/typescript_mp/11_union_literal_types_mp.ts
modulo_3/typescript_mp/12_any_unknown_never_mp.ts
modulo_3/typescript_mp/13_type_narrowing_mp.ts
modulo_3/typescript_mp/14_objetos_inline_mp.ts
modulo_3/typescript_mp/15_ejemplo_inventario_mp.ts
modulo_3/typescript_mp/16_condicionales_mp.ts
modulo_3/typescript_mp/17_bucles_mp.ts
modulo_3/typescript_mp/18_ejemplo_monitor_servidores_mp.ts
modulo_3/typescript_mp/19_funciones_declaracion_mp.ts
modulo_3/typescript_mp/20_parametros_y_retorno_mp.ts
modulo_3/typescript_mp/21_orden_superior_closures_mp.ts
modulo_3/typescript_mp/22_sobrecargas_mp.ts
modulo_3/typescript_mp/23_ejemplo_tareas_mp.ts
modulo_3/typescript_mp/24_types_e_interfaces_mp.ts
modulo_3/typescript_mp/26_type_vs_interface_extension_mp.ts
modulo_3/typescript_mp/27_index_signatures_mp.ts
modulo_3/typescript_mp/28_funciones_en_interfaces_mp.ts
modulo_3/typescript_mp/29_uniones_discriminadas_mp.ts
modulo_3/typescript_mp/31_ejemplo_empleados_mp.ts
modulo_3/typescript_mp/32_clases_basicas_mp.ts
modulo_3/typescript_mp/33_modificadores_acceso_mp.ts
modulo_3/typescript_mp/34_herencia_abstractas_mp.ts
modulo_3/typescript_mp/35_implements_static_polimorfismo_mp.ts
modulo_3/typescript_mp/36_ejemplo_biblioteca_mp.ts
modulo_3/typescript_mp/38_funciones_genericas_mp.ts
modulo_3/typescript_mp/39_restricciones_keyof_mp.ts
modulo_3/typescript_mp/40_interfaces_clases_genericas_mp.ts
modulo_3/typescript_mp/41_default_utility_types_mp.ts
modulo_3/typescript_mp/42_ejemplo_cache_mp.ts
modulo_3/typescript_mp/index.ts
modulo_3/typescript_mp/package.json
modulo_3/typescript_mp/tsconfig.json
modulo_3/typescript/01_introduccion_typescript.ts
modulo_3/typescript/02_variables_y_anotaciones.ts
modulo_3/typescript/04_template_literals.ts
modulo_3/typescript/05_compilador_seguridad.ts
modulo_3/typescript/06_ejemplo_calculadora_envios.ts
modulo_3/typescript/07_tipos_primitivos_detalle.ts
modulo_3/typescript/08_arrays.ts
modulo_3/typescript/09_tuplas.ts
modulo_3/typescript/10_enums.ts
modulo_3/typescript/11_union_literal_types.ts
modulo_3/typescript/12_any_unknown_never.ts
modulo_3/typescript/13_type_narrowing.ts
modulo_3/typescript/14_objetos_inline.ts
modulo_3/typescript/15_ejemplo_inventario.ts
modulo_3/typescript/16_condicionales.ts
modulo_3/typescript/17_bucles.ts
modulo_3/typescript/18_ejemplo_monitor_servidores.ts
modulo_3/typescript/19_funciones_declaracion.ts
modulo_3/typescript/20_parametros_y_retorno.ts
modulo_3/typescript/21_orden_superior_closures.ts
modulo_3/typescript/22_sobrecargas.ts
modulo_3/typescript/23_ejemplo_tareas.ts
modulo_3/typescript/24_types_e_interfaces.ts
modulo_3/typescript/26_type_vs_interface_extension.ts
modulo_3/typescript/27_index_signatures.ts
modulo_3/typescript/28_funciones_en_interfaces.ts
modulo_3/typescript/29_uniones_discriminadas.ts
modulo_3/typescript/31_ejemplo_empleados.ts
modulo_3/typescript/32_clases_basicas.ts
modulo_3/typescript/33_modificadores_acceso.ts
modulo_3/typescript/34_herencia_abstractas.ts
modulo_3/typescript/35_implements_static_polimorfismo.ts
modulo_3/typescript/36_ejemplo_biblioteca.ts
modulo_3/typescript/38_funciones_genericas.ts
modulo_3/typescript/39_restricciones_keyof.ts
modulo_3/typescript/40_interfaces_clases_genericas.ts
modulo_3/typescript/41_default_utility_types.ts
modulo_3/typescript/42_ejemplo_cache.ts
modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_01.ts
modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_02.ts
modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_03.ts
modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_04.ts
modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_05.ts
modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_06.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_01.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_02.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_03.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_04.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_05.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_06.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_07.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_08.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_09.ts
modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_10.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_01.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_02.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_03.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_04.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_05.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_06.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_07.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_08.ts
modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_09.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_01.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_02.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_03.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_04.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_05.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_06.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_07.ts
modulo_3/typescript/ejercicios/04_funciones-ejercicio_08.ts
modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_01.ts
modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_02.ts
modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_03.ts
modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_04.ts
modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_05.ts
modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_06.ts
modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_07.ts
modulo_3/typescript/ejercicios/06_poo-ejercicio_01.ts
modulo_3/typescript/ejercicios/06_poo-ejercicio_02.ts
modulo_3/typescript/ejercicios/06_poo-ejercicio_03.ts
modulo_3/typescript/ejercicios/06_poo-ejercicio_04.ts
modulo_3/typescript/ejercicios/07_genericos-ejercicio_01.ts
modulo_3/typescript/ejercicios/07_genericos-ejercicio_02.ts
modulo_3/typescript/ejercicios/07_genericos-ejercicio_03.ts
modulo_3/typescript/ejercicios/07_genericos-ejercicio_04.ts
modulo_3/typescript/ejercicios/07_genericos-ejercicio_05.ts
modulo_3/typescript/ejercicios/07_genericos-ejercicio_06.ts
modulo_3/typescript/index.ts
modulo_3/typescript/package.json
modulo_3/typescript/tsconfig.json
modulo_4/01-Componentes/.gitignore
modulo_4/01-Componentes/.oxlintrc.json
modulo_4/01-Componentes/eslint.config.js
modulo_4/01-Componentes/index.html
modulo_4/01-Componentes/package.json
modulo_4/01-Componentes/public/favicon.svg
modulo_4/01-Componentes/public/icons.svg
modulo_4/01-Componentes/README.md
modulo_4/01-Componentes/src/App.css
modulo_4/01-Componentes/src/App.tsx
modulo_4/01-Componentes/src/assets/hero.png
modulo_4/01-Componentes/src/assets/react.svg
modulo_4/01-Componentes/src/assets/vite.svg
modulo_4/01-Componentes/src/components/AppHeader.tsx
modulo_4/01-Componentes/src/components/BasicCounter.tsx
modulo_4/01-Componentes/src/components/CatalogProductItem.tsx
modulo_4/01-Componentes/src/components/CodeBlock.tsx
modulo_4/01-Componentes/src/components/ColoredBox.tsx
modulo_4/01-Componentes/src/components/ConditionalGreeting.tsx
modulo_4/01-Componentes/src/components/CurrentDateDisplay.tsx
modulo_4/01-Componentes/src/components/FilteredCatalog.tsx
modulo_4/01-Componentes/src/components/FilterTable.tsx
modulo_4/01-Componentes/src/components/FruitList.tsx
modulo_4/01-Componentes/src/components/LiveSearch.tsx
modulo_4/01-Componentes/src/components/LoginForm.tsx
modulo_4/01-Componentes/src/components/MemoizedList.tsx
modulo_4/01-Componentes/src/components/MiniProfileCard.tsx
modulo_4/01-Componentes/src/components/ModalDemo.tsx
modulo_4/01-Componentes/src/components/MultiTagFilter.tsx
modulo_4/01-Componentes/src/components/OrderMetrics.tsx
modulo_4/01-Componentes/src/components/PaginatedFetch.tsx
modulo_4/01-Componentes/src/components/PostList.tsx
modulo_4/01-Componentes/src/components/PriceTag.tsx
modulo_4/01-Componentes/src/components/PrimeSieve.tsx
modulo_4/01-Componentes/src/components/ProductCard.tsx
modulo_4/01-Componentes/src/components/ProductCatalogList.tsx
modulo_4/01-Componentes/src/components/QuantitySelector.tsx
modulo_4/01-Componentes/src/components/RegistrationForm.tsx
modulo_4/01-Componentes/src/components/ResponsiveLayout.tsx
modulo_4/01-Componentes/src/components/SearchWithFetch.tsx
modulo_4/01-Componentes/src/components/ShoppingCart.tsx
modulo_4/01-Componentes/src/components/ShoppingCartSummary.tsx
modulo_4/01-Componentes/src/components/SimpleInfoTable.tsx
modulo_4/01-Componentes/src/components/StatusBadge.tsx
modulo_4/01-Componentes/src/components/ThemeSelector.tsx
modulo_4/01-Componentes/src/components/ThemeToggle.tsx
modulo_4/01-Componentes/src/components/UserBadge.tsx
modulo_4/01-Componentes/src/components/UserGreeting.tsx
modulo_4/01-Componentes/src/components/UserProfileCard.tsx
modulo_4/01-Componentes/src/components/WelcomeBanner.tsx
modulo_4/01-Componentes/src/contexts/AuthContext.tsx
modulo_4/01-Componentes/src/contexts/ThemeContext.tsx
modulo_4/01-Componentes/src/hooks/useClipboard.ts
modulo_4/01-Componentes/src/hooks/useCounter.ts
modulo_4/01-Componentes/src/hooks/useDebounce.ts
modulo_4/01-Componentes/src/hooks/useFetch.ts
modulo_4/01-Componentes/src/hooks/useLocalStorage.ts
modulo_4/01-Componentes/src/hooks/useMediaQuery.ts
modulo_4/01-Componentes/src/hooks/useOnlineStatus.ts
modulo_4/01-Componentes/src/hooks/useToggle.ts
modulo_4/01-Componentes/src/hooks/useWindowSize.ts
modulo_4/01-Componentes/src/index.css
modulo_4/01-Componentes/src/main.tsx
modulo_4/01-Componentes/src/useEffect/DebounceSearch.tsx
modulo_4/01-Componentes/src/useEffect/DocumentTitle.tsx
modulo_4/01-Componentes/src/useEffect/FetchUser.tsx
modulo_4/01-Componentes/src/useEffect/LiveClock.tsx
modulo_4/01-Componentes/src/useEffect/OnlineStatus.tsx
modulo_4/01-Componentes/src/useEffect/SearchWithEffect.tsx
modulo_4/01-Componentes/src/useEffect/WindowSize.tsx
modulo_4/01-Componentes/src/useRef/AutoFocusForm.tsx
modulo_4/01-Componentes/src/useRef/AutoFocusInput.tsx
modulo_4/01-Componentes/src/useRef/InlineEditor.tsx
modulo_4/01-Componentes/src/useRef/PreviousValue.tsx
modulo_4/01-Componentes/src/useRef/Stopwatch.tsx
modulo_4/01-Componentes/src/useState/DigitalCounter.tsx
modulo_4/01-Componentes/src/useState/SafeCounter.tsx
modulo_4/01-Componentes/src/useState/TaskManager.tsx
modulo_4/01-Componentes/src/useState/UserProfileForm.tsx
modulo_4/01-Componentes/tsconfig.app.json
modulo_4/01-Componentes/tsconfig.json
modulo_4/01-Componentes/tsconfig.node.json
modulo_4/01-Componentes/vite.config.ts
README.md
```

# Files

## File: modulo_1/python/06_operadores_comparacion.py
````python
print("Operadores de comparación")

numero1 = float(input("Ingrese el primer número: "))
numero2 = float(input("Ingrese el segundo número: "))
print(numero1,"==",numero2,numero1==numero2)

print(numero1,"!=",numero2,numero1!=numero2)

print(numero1,">",numero2,numero1>numero2)

print(numero1,"<",numero2,numero1<numero2)

print(numero1,">=",numero2,numero1>=numero2)

print(numero1,"<=",numero2,numero1<=numero2)
````

## File: modulo_1/python/07_operadores_logicos.py
````python
print("Operadores de comparacion")

es_mayor=True
tiene_permiso=False
esta_activo=False
print(es_mayor,"and",tiene_permiso,es_mayor and tiene_permiso)
print(es_mayor,"or",tiene_permiso,es_mayor or tiene_permiso)
print("not",esta_activo,not esta_activo)
````

## File: modulo_1/python/08_condicional_if.py
````python
print("Condicional if")
print("If simple")

stock=3
if stock>0:
    print("El producto esta disponible")
print("if else - dos caminos")
saldo=25
if saldo>=50:
    print("Compra permitida")
else:
    print("Saldo insuficiente")

print("if multiples condiciones")
temperatura=25
if temperatura<10:
    print("Hace frio")
elif temperatura>25:
    print("Clima templado")
else:
    print("Hace calor")

print("if condiciones anidadas")
conexion=True
token_valido=False
if conexion:
    if token_valido:
        print("Acceso a la API")
    else:
        print("Token invalido")
else:
    print("Sin conexion ")

print("if con operadores logicos")
documento=True
pago=True
if documento and pago:
    print("Incripcion connfirmada")

es_vip=False
tiene_invitacion=True
if es_vip and tiene_invitacion:
    print("Puede entrar al evento")

bloqueado=False
if not bloqueado:
    print("Usuario habilitado")
````

## File: modulo_1/python/09_match.py
````python
print("Match - case")
comando=input("Comando iniciar/parar/reiniciar")
match comando:
    case "iniciar":
        print("Sistema Iniciando......")
    case "parar":
        print("Sistema Deteniendose......")
    case "reiniciar":
        print("Sistema Reiniciando......")
    case _:
        print("Comando {comando} no valido")

print("match - con condiciones")
numero=int(input("Incluya un numero"))
match numero:
    case n if n<0:
        print(f"{n} es negativo")
    case "0":
        print("Es cero")
    case n if n%2==0:
        print(f"el numero {n} es positivo y par")
    case n:
        print(f"El numero {n} es positivo e impar")
````

## File: modulo_1/python/10_ciclor_for.py
````python
print("Ciclos for")
print("for basico")

for i in range(1,6):
    print(i)

frutas=["manzana","banana","cereza"]
for fruta in frutas:
    print(fruta)

print("Control de interrupciones")
for i in range(1,10):
    if i==3: continue
    if i==7: break
    print(i)
else:
    print("Terminado el ciclo")

print("for con range step")
for i in range(1,10,2):
    print(i)

print("for con range regresivo")
for i in range(10,0,-1):
    print(i)

print("for con range enumerate")
nombres=["Juan","Luis","Pedro","Arce"]
for indice, nombre in enumerate(nombres):
    print(indice, nombre)

print("for con zip")
edad=[18,11,25,56]
for nombre, edad in zip(nombres, edad):
    print(nombre, edad)

print("For anidados")

for i in range(1,4):
    for x in range(1,4):
        print(i,x)

cantidad=int(input("Ingrese cantidad de datos"))
suma=0
for i in range(1,cantidad+1):
    nota=float(input(f"Nota{i} :"))
    suma+=nota
promedio=suma/cantidad
print("Promedio:", promedio)
if promedio>=7:
    print("Aprobado")
else:
    print("Reprobado")
````

## File: modulo_1/python/11_while.py
````python
print("Ciclos while")

contador=1
while contador<=5:
    print(contador)
    contador+=1

dato=""
while dato!="salir":
    dato=input("Escriba algo (o 'salir' para terminar): ")
    print("escribiste:", dato)

cantidad=int(input("Cuantos productos compro: "))
total=0
contador=1
while contador<=cantidad:
    precio = float(input("Precio del producto: {contador} "))
    total += precio
    contador += 1
print("El total es:", total)
if total>=100:
    print("Aplica Descuento")
else:
    print("No aplica Descuento")
````

## File: modulo_1/python/12_funciones.py
````python
print("Funciones con Python")
print("Funciones basicas")
def saludar():
    print("Hola desde la UTE")
saludar()

print("Funciones con parametros")
def saludar_nombre(nombre):
    print(f"Hola {nombre}, Que tal")
saludar_nombre("Juan")
saludar_nombre("Edison")

print("Funcion que devuelve valor return")
def sumar(a, b):
    return a + b
resultado = sumar(5, 3)

print("fuincion por posicion y por nombre")
def saludar_edad(nombre, edad, ciudad):
    print(f"Señor(a) {nombre}, tienes {edad} años y vive en {ciudad}")
saludar_edad("Juan", 25, "Guayaquil")
saludar_edad("Edison", 28, "Quito")
saludar_edad(edad=40, nombre="Maria", ciudad="Guayaquil")

print("funcion con valores de parametros y por defecto")
def saludo_valores(nombre, saludo="Hola", puntuacion="!"):
    print(saludo, nombre, puntuacion)  
saludo_valores("Edison", "Buenos dias, ")
saludo_valores("Juan", puntuacion="....")
saludo_valores("Carlos", "Buenas noches")

print("Fucnion con parametros posicionales")
def sum_todos(*args):
    print(f"Parametros recibidos {args}")
    return sum(args)
print(sum_todos(1, 2, 3))
print(sum_todos(1, 2, 3, 4, 5, 6, 7))
print(sum_todos(10, 20, 30))

print("Fucnion parametros combinados con posicionales")
def mostrar_info(titulo,*datos):
    print(f"Parametros recibidos{datos} {titulo}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")
mostrar_info("frutas","naranja","pera","manzana")

print("Fucnion parametros combinacion con todos los tipos")
def configurar(host, *puertos, debug=False, **opciones):
    print("Configuracion")
    print(f"Host: {host}")
    print(f"Puertos: {puertos}")
    print(f"Debug: {debug}")
    print(f"Opciones: {opciones}")
configurar("localhost", 80, 443,8080, debug=True, ssl=True, timeout=30)

print("Devolver multiples valores")
def minmax(numeros):
    return min(numeros), max(numeros)
minimo, maximo= minmax([3,23,45654,3,2,3,45])
print("minimo:", minimo, "maximo", maximo)
_, maximo= minmax([3,23,4,5,654,45])
print("maximo", maximo)
minimo, _= minmax([3,23,4,5,65,4,45])
print("minimo", minimo)

print("Devolver diccionario en el caso de muchos valores")
def analizar(numeros):
    total=sum(numeros)
    n=len(numeros)
    return {
        "total":total,
        "media":total/n if n>0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n,
    }
datos = [12, 334, 2, 4, 4453, 3, 2, 3]
stas = analizar(datos)
print(f"Total: {stas['total']}")
print(f"Media: {stas['media']}")
print(f"Rango: {stas['minimo']} - {stas['maximo']}")

print("Funciones lambda")
def doble(numero):
    return numero*2
duplicar=lambda x: x*2
print(doble(2))
print(duplicar(3))
suma = lambda a,b: a+b
print(suma(4,5))
````

## File: modulo_1/python/13_lista_utiles.py
````python
print("Manipulacion de Listas ")
print("Craer Lista")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5]
print(numeros)
nombres=["Juan","Maria","Pedro"]
print(nombres)
mixta=[1,"Juan",2.5,True]
print(mixta)
anidada=[[1,2,3],[4,5,6]]
print(anidada)

print("Acceso a los elementos de una lista")
print(nombres[1])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRud de una lista")
frutas=["manzana","banana","cereza"]
print(frutas)
#Agregar
frutas.insert(1, "pera")
print(frutas)
frutas.append("uva")
print(frutas)
frutas.extend(["kiwi", "mango"])
#modificar
frutas[0]="naranja"
print(frutas)
#eliminar elemntos
frutas.remove("naranja")
print(frutas)
eliminado=frutas.pop()
print(frutas)
print("Elemento eliminado:", eliminado)
eliminado=frutas.pop(2)
print(frutas)
del frutas[0]
print(frutas)

print("Buscar valores en los elementos de una Lista")
print("kiwi" in frutas)
print(frutas.index("kiwi"))
print(frutas.count("kiwi"))

print("Ordenar una Lista")
numeros_desordenados=[3,2,9,5,4,1]
print(numeros_desordenados)

numeros_desordenados.sort()
print(numeros_desordenados)

numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)

ordenada=sorted(numeros_desordenados)
print(ordenada)
print(numeros_desordenados)
````

## File: modulo_1/python/14_diccionario.py
````python
print("Diccionario")
print("Crear Diccionarios")
vacio={}
personas={"nombre": "Edison", "edad": 26, "ciudad": "Quito"}
config=dict(host="localhost", puerto=5432)

#acceso
print(personas["nombre"])

#modificar
personas["nombre"]="Jose"
print(personas)
del persona["edad"]
print(personas)

#verificar existencia
print("nombre" in personas)
print("ciudad" in personas)

#metodos escenciales
print(personas.keys())
print(personas.values())
print(personas.items())

#iterar
for clave, valor in personas.items():
    print(f"clave: {clave}, valor: {valor}")
````

## File: modulo_2/shopapi/.env.example
````
# Django
SECRET_KEY=
DEBUG=
ALLOWED_HOSTS=

# PostgreSQL
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=

# CORS
CORS_ALLOW_ALL_ORIGINS=
````

## File: modulo_2/shopapi/.gitignore
````
.env
.venv/
__pycache__/
*.pyc
db.sqlite3
````

## File: modulo_2/shopapi/.python-version
````
3.12
````

## File: modulo_2/shopapi/config/__init__.py
````python

````

## File: modulo_2/shopapi/config/asgi.py
````python
"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_asgi_application()
````

## File: modulo_2/shopapi/config/settings.py
````python
# config/settings.py
from datetime import timedelta
from pathlib import Path
from decouple import config, Csv

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY    = config('SECRET_KEY')
DEBUG         = config('DEBUG', default=False, cast=bool)
ALLOWED_HOSTS = config('ALLOWED_HOSTS', cast=Csv())

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
    'django_filters',
    'corsheaders',
    'store',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [],
    'APP_DIRS': True,
    'OPTIONS': {'context_processors': [
        'django.template.context_processors.debug',
        'django.template.context_processors.request',
        'django.contrib.auth.context_processors.auth',
        'django.contrib.messages.context_processors.messages',
    ]},
}]

DATABASES = {
    'default': {
        'ENGINE':   'django.db.backends.postgresql',
        'NAME':     config('DB_NAME'),
        'USER':     config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST':     config('DB_HOST', default='localhost'),
        'PORT':     config('DB_PORT', default='5432'),
    }
}

LANGUAGE_CODE      = 'en-us'
TIME_ZONE          = 'America/Guayaquil'
USE_I18N           = True
USE_TZ             = True
STATIC_URL         = '/static/'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
    'DEFAULT_PAGINATION_CLASS': 'store.pagination.StandardPagination',
    'PAGE_SIZE': 10,
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME':    timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME':   timedelta(days=1),
    'ROTATE_REFRESH_TOKENS':    True,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM':                'HS256',
    'AUTH_HEADER_TYPES':        ('Bearer',),
    'USER_ID_FIELD':            'id',
    'USER_ID_CLAIM':            'user_id',
}

CORS_ALLOW_ALL_ORIGINS = config('CORS_ALLOW_ALL_ORIGINS', default=False, cast=bool)
````

## File: modulo_2/shopapi/config/urls.py
````python
"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# config/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('store.urls')),
]
````

## File: modulo_2/shopapi/config/wsgi.py
````python
"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()
````

## File: modulo_2/shopapi/main.py
````python
def main():
    print("Hello from shopapi!")


if __name__ == "__main__":
    main()
````

## File: modulo_2/shopapi/manage.py
````python
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
````

## File: modulo_2/shopapi/pyproject.toml
````toml
[project]
name = "shopapi"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.12"
dependencies = [
    "django>=6.0.5",
    "django-cors-headers>=4.9.0",
    "django-filter>=25.2",
    "djangorestframework>=3.17.1",
    "djangorestframework-simplejwt>=5.5.1",
    "psycopg2-binary>=2.9.12",
    "python-decouple>=3.8",
]
````

## File: modulo_2/shopapi/README.md
````markdown

````

## File: modulo_2/shopapi/store/__init__.py
````python

````

## File: modulo_2/shopapi/store/admin.py
````python
from django.contrib import admin

# Register your models here.
````

## File: modulo_2/shopapi/store/apps.py
````python
from django.apps import AppConfig


class StoreConfig(AppConfig):
    name = 'store'
````

## File: modulo_2/shopapi/store/filters.py
````python

````

## File: modulo_2/shopapi/store/migrations/__init__.py
````python

````

## File: modulo_2/shopapi/store/models.py
````python
from django.db import models

# Create your models here.
````

## File: modulo_2/shopapi/store/models/__init__.py
````python

````

## File: modulo_2/shopapi/store/pagination.py
````python
# store/pagination.py
from rest_framework.pagination import PageNumberPagination


class StandardPagination(PageNumberPagination):
    page_size             = 10
    page_size_query_param = 'page_size'
    max_page_size         = 100
````

## File: modulo_2/shopapi/store/permissions.py
````python

````

## File: modulo_2/shopapi/store/serializers/__init__.py
````python

````

## File: modulo_2/shopapi/store/tests.py
````python
from django.test import TestCase

# Create your tests here.
````

## File: modulo_2/shopapi/store/tests/__init__.py
````python

````

## File: modulo_2/shopapi/store/urls.py
````python
# store/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from store.views.health import health_check

router = DefaultRouter()

urlpatterns = [
    path('health/', health_check),
    path('', include(router.urls)),
]
````

## File: modulo_2/shopapi/store/views.py
````python
from django.shortcuts import render

# Create your views here.
````

## File: modulo_2/shopapi/store/views/__init__.py
````python

````

## File: modulo_2/shopapi/store/views/health.py
````python
# store/views/health.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    return Response({'status': 'ok', 'version': '1.0'})
````

## File: modulo_2/vehiculos_api/.env
````
DEBUG=1
SECRET_KEY=dev-secret-key
DB_NAME=vehiculos_db
DB_USER=vehiculos_user
DB_PASSWORD=admin123
DB_HOST=127.0.0.1
DB_PORT=5432

# Mongo sin Docker: servicio local
MONGO_URI=mongodb://127.0.0.1:27017
MONGO_DB=vehiculos_db

CORS_ORIGIN=http://localhost:5173
````

## File: modulo_2/vehiculos_api/catalog/__init__.py
````python

````

## File: modulo_2/vehiculos_api/catalog/admin.py
````python
from django.contrib import admin

# Register your models here.
````

## File: modulo_2/vehiculos_api/catalog/apps.py
````python
from django.apps import AppConfig


class CatalogConfig(AppConfig):
    name = "catalog"
````

## File: modulo_2/vehiculos_api/catalog/auth_serializers.py
````python
from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email", ""),
            password=validated_data["password"],
        )
        return user
````

## File: modulo_2/vehiculos_api/catalog/auth_views.py
````python
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .auth_serializers import RegisterSerializer

@api_view(["POST"])
@permission_classes([AllowAny])
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response(
        {"id": user.id, "username": user.username, "email": user.email},
        status=status.HTTP_201_CREATED
    )
````

## File: modulo_2/vehiculos_api/catalog/calculos_views.py
````python
from django.http import JsonResponse


def calcular_area_triangulo(request):
    """
    Endpoint GET:
    /api/triangle/area/?base=10&altura=5
    """

    try:
        base = float(request.GET.get('base'))
        altura = float(request.GET.get('altura'))

        area = (base * altura) / 2

        return JsonResponse({
            'base': base,
            'altura': altura,
            'area': area
        })

    except (TypeError, ValueError):
        return JsonResponse({
            'error': 'Debe enviar base y altura válidas'
        }, status=400)
````

## File: modulo_2/vehiculos_api/catalog/migrations/__init__.py
````python

````

## File: modulo_2/vehiculos_api/catalog/migrations/0001_initial.py
````python
# Generated by Django 6.0.5 on 2026-05-27 18:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Marca",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nombre", models.CharField(max_length=120, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Vehiculo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("modelo", models.CharField(max_length=120)),
                ("anio", models.IntegerField()),
                ("placa", models.CharField(max_length=20, unique=True)),
                ("color", models.CharField(blank=True, default="", max_length=60)),
                ("creado_en", models.DateTimeField(auto_now_add=True)),
                (
                    "marca",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="vehiculos",
                        to="catalog.marca",
                    ),
                ),
            ],
        ),
    ]
````

## File: modulo_2/vehiculos_api/catalog/models.py
````python
from django.db import models

class Marca(models.Model):
    nombre = models.CharField(max_length=120, unique=True)

    def __str__(self):
        return self.nombre

class Vehiculo(models.Model):
    marca = models.ForeignKey(Marca, on_delete=models.PROTECT, related_name="vehiculos")
    modelo = models.CharField(max_length=120)
    anio = models.IntegerField()
    placa = models.CharField(max_length=20, unique=True)
    color = models.CharField(max_length=60, blank=True, default="")
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.marca.nombre} {self.modelo} ({self.placa})"

# Create your models here.
````

## File: modulo_2/vehiculos_api/catalog/permissions.py
````python
from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_authenticated and request.user.is_staff)
````

## File: modulo_2/vehiculos_api/catalog/sales_views.py
````python
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def promedio_ventas(request):
    """
    Endpoint POST:
    /api/products/promedio-ventas/

    Body JSON:
    {
        "productos": [
            {
                "nombre": "Laptop",
                "ventas": 1000
            },
            {
                "nombre": "Mouse",
                "ventas": 500
            }
        ]
    }
    """

    try:
        productos = request.data.get('productos')

        if not productos or not isinstance(productos, list):
            return Response(
                {
                    'error': 'Debe enviar un arreglo de productos'
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        total_ventas = 0

        for producto in productos:

            ventas = float(producto.get('ventas', 0))

            total_ventas += ventas

        promedio = total_ventas / len(productos)

        return Response({
            'cantidad_productos': len(productos),
            'total_ventas': total_ventas,
            'promedio_ventas': promedio
        })

    except Exception as e:
        return Response(
            {
                'error': str(e)
            },
            status=status.HTTP_400_BAD_REQUEST
        )
````

## File: modulo_2/vehiculos_api/catalog/serializers.py
````python
from rest_framework import serializers
from .models import Marca, Vehiculo

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ["id", "nombre"]

class VehiculoSerializer(serializers.ModelSerializer):
    marca_nombre = serializers.CharField(source="marca.nombre", read_only=True)

    class Meta:
        model = Vehiculo
        fields = ["id", "marca", "marca_nombre", "modelo", "anio", "placa", "color", "creado_en"]
````

## File: modulo_2/vehiculos_api/catalog/tests.py
````python
from django.test import TestCase

# Create your tests here.
````

## File: modulo_2/vehiculos_api/catalog/urls.py
````python
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import MarcaViewSet, VehiculoViewSet
from .calculos_views import calcular_area_triangulo
from .sales_views import promedio_ventas

router = DefaultRouter()
router.register(r"marcas", MarcaViewSet, basename="marcas")
router.register(r"vehiculos", VehiculoViewSet, basename="vehiculos")

urlpatterns = [
    path(
        'triangle/area/',
        calcular_area_triangulo,
        name='triangle-area'
        ),
    path(
        'products/promedio-ventas/',
        promedio_ventas,
        name='promedio-ventas'
        ),

]

urlpatterns += router.urls
````

## File: modulo_2/vehiculos_api/catalog/views.py
````python
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Marca, Vehiculo
from .serializers import MarcaSerializer, VehiculoSerializer
from .permissions import IsAdminOrReadOnly

class MarcaViewSet(viewsets.ModelViewSet):
    queryset = Marca.objects.all().order_by("id")
    serializer_class = MarcaSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    search_fields = ["nombre"]
    ordering_fields = ["id", "nombre"]

class VehiculoViewSet(viewsets.ModelViewSet):
    queryset = Vehiculo.objects.select_related("marca").all().order_by("-id")
    serializer_class = VehiculoSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ["marca"]
    search_fields = ["modelo", "placa", "color", "marca__nombre"]
    ordering_fields = ["id", "anio", "modelo", "placa", "creado_en"]

    def get_queryset(self):
        qs = super().get_queryset()
        anio_min = self.request.query_params.get("anio_min")
        anio_max = self.request.query_params.get("anio_max")
        if anio_min:
            qs = qs.filter(anio__gte=int(anio_min))
        if anio_max:
            qs = qs.filter(anio__lte=int(anio_max))
        return qs

    def get_permissions(self):
        # Público: SOLO listar vehículos
        if self.action == "list":
            return [AllowAny()]
        return super().get_permissions()
````

## File: modulo_2/vehiculos_api/config/__init__.py
````python

````

## File: modulo_2/vehiculos_api/config/asgi.py
````python
"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

application = get_asgi_application()
````

## File: modulo_2/vehiculos_api/config/settings.py
````python
from pathlib import Path
import os
from datetime import timedelta
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key")
DEBUG = os.getenv("DEBUG", "0") == "1"
ALLOWED_HOSTS = ["*"]

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "rest_framework",
    "django_filters",
    "corsheaders",

    "catalog", ## aqui cambiar por el que nos digan.
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("DB_NAME"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASSWORD"),
        "HOST": os.getenv("DB_HOST", "127.0.0.1"),
        "PORT": os.getenv("DB_PORT", "5432"),
    }
}

LANGUAGE_CODE = "es-ec"
TIME_ZONE = "America/Guayaquil"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.IsAuthenticated",
    ),
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 10,
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.SearchFilter",
        "rest_framework.filters.OrderingFilter",
    ],
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
}

CORS_ALLOWED_ORIGINS = [
    os.getenv("CORS_ORIGIN", "http://localhost:5173"),
    "http://127.0.0.1:5173",
]

# Mongo settings
MONGO_URI = os.getenv("MONGO_URI", "mongodb://127.0.0.1:27017")
MONGO_DB = os.getenv("MONGO_DB", "vehiculos_db")
````

## File: modulo_2/vehiculos_api/config/urls.py
````python
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from catalog.auth_views import register_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/auth/register/", register_view, name="register"),
    path("api/", include("catalog.urls")),
]
````

## File: modulo_2/vehiculos_api/config/wsgi.py
````python
"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

application = get_wsgi_application()
````

## File: modulo_2/vehiculos_api/manage.py
````python
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
````

## File: modulo_2/vehiculos_api/scriptc.sql
````sql
CREATE USER vehiculos_user WITH PASSWORD 'admin123';
CREATE DATABASE vehiculos_db OWNER vehiculos_user;

\c vehiculos_db

ALTER SCHEMA public OWNER TO vehiculos_user;
GRANT ALL ON SCHEMA public TO vehiculos_user;
GRANT CREATE ON SCHEMA public TO vehiculos_user;

ALTER DEFAULT PRIVILEGES FOR USER vehiculos_user IN SCHEMA public
GRANT ALL ON TABLES TO vehiculos_user;

ALTER DEFAULT PRIVILEGES FOR USER vehiculos_user IN SCHEMA public
GRANT ALL ON SEQUENCES TO vehiculos_user;

ALTER DEFAULT PRIVILEGES FOR USER vehiculos_user IN SCHEMA public
GRANT ALL ON FUNCTIONS TO vehiculos_user;
````

## File: modulo_3/typescript_mp/01_introduccion_typescript_mp.ts
````typescript
/**
 * ============================================
 * 01 - INTRODUCCION A TYPESCRIPT
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Tipado basico, inferencia y seguridad de tipos
 * Cursos Online: Calculo de precios de cursos con/sin IVA,
 * descuentos y busqueda de estudiantes por ID.
 * ============================================
 * Temas:
 *   - Que es TypeScript y por que tipos
 *   - El problema que TypeScript resuelve
 *   - Entorno de desarrollo (instalacion)
 *   - tsconfig.json y el modo estricto (strict)
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE A: QUE ES TYPESCRIPT
// ──────────────────────────────────────────────

/**
 * TypeScript es un superconjunto de JavaScript que anade
 * tipos estaticos y un compilador que detecta errores
 * ANTES de que el codigo llegue a produccion.
 *
 * Beneficio clave: los errores aparecen en el editor
 * (linea roja) mientras escribes, no cuando el usuario
 * ya esta usando la aplicacion.
 */

// ──────────────────────────────────────────────
// A.1: El problema que TypeScript resuelve
// ──────────────────────────────────────────────

// --- JavaScript puro (sin tipos) ---

/**
 * En JavaScript, cualquier funcion puede recibir
 * argumentos de cualquier tipo sin que el editor avise.
 * Aplicado a cursos online: calcular precio de curso.
 */

function calcularPrecioCursoJS(precio, descuento) {
  return precio - precio * (descuento / 100);
}

console.log("JS precio curso:", calcularPrecioCursoJS("250", 10)); // 225 (funciona de casualidad)
console.log("JS precio curso:", calcularPrecioCursoJS(250, "10")); // 225 (idem)

// --- TypeScript (con tipos) ---

function calcularPrecioCursoTS(precio: number, descuento: number): number {
  return precio - precio * (descuento / 100);
}

console.log("TS precio curso:", calcularPrecioCursoTS(250, 10)); // 225

// --- Ejemplo del bug REAL con el operador + ---

function calcularTotalCursoJS(precio, impuesto) {
  return precio + precio * (impuesto / 100);
}

console.log("JS bug con +:", calcularTotalCursoJS("250", 21)); // "25052.5" - concatenacion

function calcularTotalCursoTS(precio: number, impuesto: number): number {
  return precio + precio * (impuesto / 100);
}

console.log("TS total curso:", calcularTotalCursoTS(250, 21)); // 302.5

// ──────────────────────────────────────────────
// A.2: Ejemplo aplicado - Busqueda de estudiantes
// ──────────────────────────────────────────────

interface Estudiante {
  id: number;
  nombre: string;
  activo: boolean;
}

const estudiantes: Estudiante[] = [
  { id: 1, nombre: "Ana Garcia",   activo: true  },
  { id: 2, nombre: "Luis Perez",   activo: false },
  { id: 3, nombre: "Maria Torres", activo: true  },
];

function buscarEstudiante(id: number): Estudiante | undefined {
  return estudiantes.find((e) => e.id === id);
}

const e = buscarEstudiante(2);
console.log("Estudiante encontrado:", e?.nombre); // Luis Perez

// ──────────────────────────────────────────────
// PARTE B: ENTORNO DE DESARROLLO
// ──────────────────────────────────────────────

/**
 * Para ejecutar TypeScript localmente:
 *
 * 1. npm init -y                          (crear package.json)
 * 2. npm install --save-dev typescript tsx (instalar herramientas)
 * 3. npx tsx archivo.ts                   (ejecutar directo, sin compilar)
 * 4. npx tsc archivo.ts                   (compilar a JavaScript)
 *
 * Tambien puedes usar el TypeScript Playground:
 * https://www.typescriptlang.org/play
 */

// ──────────────────────────────────────────────
// B.1: Primer archivo TypeScript local
// ──────────────────────────────────────────────

const saludo: string = "Hola, Cursos Online TS";
const version: number = 5;

console.log(`${saludo} v${version}`);

// ──────────────────────────────────────────────
// B.2: tsconfig.json y el modo estricto
// ──────────────────────────────────────────────

/**
 * El archivo tsconfig.json controla como se comporta el compilador.
 * La opcion mas importante para codigo robusto es "strict": true.
 *
 * "strict": true activa, entre otras verificaciones:
 *   - strictNullChecks: null y undefined no son asignables a otros tipos
 *   - noImplicitAny: no puedes dejar variables sin tipo sin querer
 *   - strictFunctionTypes: funciones se verifican de forma covariante
 *   - strictPropertyInitialization: las propiedades de clase deben inicializarse
 *
 * Ejemplo de tsconfig.json basico:
 * {
 *   "compilerOptions": {
 *     "target": "ES2022",
 *     "module": "ESNext",
 *     "strict": true
 *   }
 * }
 *
 * Los proyectos sin strict acumulan deuda tecnica:
 * errores que TS podria atrapar pasan desapercibidos.
 * Todos los ejemplos de este curso asumen "strict": true.
 */

// Ejemplo: strictNullChecks evita asignar null a string
let nombre: string = "Luis";
// nombre = null; // Error si strictNullChecks esta activo

// Para admitir null, debes declararlo explicitamente:
let apodo: string | null = null;
apodo = "Lucho"; // ok
````

## File: modulo_3/typescript_mp/02_variables_y_anotaciones_mp.ts
````typescript
/**
 * ============================================
 * 02 - VARIABLES Y ANOTACIONES DE TIPO
 * Tematica: Cursos Online
 * ============================================
 * Concepto: const/let, anotacion explicita vs inferencia
 * Cursos Online: Configuracion de plataforma educativa
 * (nombre, version, modo debug, estado de servidor,
 * contador de estudiantes activos, codigos de estado HTTP).
 * ============================================
 * Temas:
 *   - const vs let (por que evitar var)
 *   - Anotacion explicita vs inferencia de tipo
 *   - Cuando anotar explicitamente
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE C: VARIABLES
// ──────────────────────────────────────────────

// --- C.1: const vs let ---

/**
 * const: valor que NO cambia (SIEMPRE preferida por defecto).
 * let: valor que SI puede cambiar (usar SOLO si es necesario).
 * var: jamas usar en TypeScript moderno (tiene scope de funcion,
 *      no de bloque, y causa bugs dificiles de rastrear).
 */

// const - valor constante
const NOMBRE_PLATAFORMA: string = "CursosOnline";
const VERSION_API: string = "v2.0";
const MODO_DEBUG: boolean = false;

// let - valor que puede cambiar
let contadorEstudiantes: number = 0;
let estadoServidor: string = "desconectado";
let plataformaActiva: boolean = false;

contadorEstudiantes++;          // 1
estadoServidor = "conectado";   // ok
plataformaActiva = true;        // ok

// NOMBRE_PLATAFORMA = "Otro";  // Error: Cannot assign to a constant

/**
 * Regla practica:
 * 1. Empieza con const siempre
 * 2. Cambia a let SOLO si necesitas reasignar
 * 3. NUNCA uses var en TypeScript moderno
 */

// --- C.2: Anotacion de tipo vs inferencia ---

/**
 * TypeScript puede deducir el tipo automaticamente cuando asignas
 * un valor. No siempre tienes que escribir el tipo explicito.
 */

// Anotacion explicita: tu le dices a TS cual es el tipo
const puertoAPI: number = 3000;
const hostAPI: string = "api.cursosenlinea.com";
const activoAPI: boolean = true;

// Inferencia de tipo: TS deduce el tipo del valor inicial
const puertoAPI2 = 3000;            // TypeScript infiere: number
const hostAPI2 = "localhost";       // TypeScript infiere: string
const activoAPI2 = true;            // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con tipo incorrecto, TS da error en ambos casos:
// puerto2 = "9000";  // Error: Type 'string' is not assignable to type 'number'

// --- Cuando anotar explicitamente ---

// 1. Variables declaradas sin valor inicial:
let duracionCursoSegundos: number;  // sin inicializar - necesita anotacion
duracionCursoSegundos = 7200;

// 2. Cuando quieres un tipo mas amplio que el valor inicial:
let codigoCurso: number | string = 101;  // acepta numero o string
codigoCurso = "CURSO-101";               // valido

// 3. Parametros de funciones (TS no puede inferirlos):
function verEstudiante(nombre: string, curso: string): string {
  return `${nombre} inscrito en ${curso}`;
}

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Dashboard de plataforma educativa
// ──────────────────────────────────────────────

const NOMBRE_SERVIDOR = "cursos-api-01";  // inferido: string
const PUERTO_DEFAULT  = 443;              // inferido: number
const ES_PRODUCCION   = true;             // inferido: boolean

let estudiantesConectados: number = 0;
let ultimoErrorCurso: string | null = null;

function registrarAccionCurso(ruta: string, codigoHttp: number): void {
  estudiantesConectados++;
  console.log(`[${NOMBRE_SERVIDOR}] ${codigoHttp} ${ruta} - conectados: ${estudiantesConectados}`);
}

registrarAccionCurso("/api/cursos", 200);
registrarAccionCurso("/api/inscripciones", 404);
````

## File: modulo_3/typescript_mp/04_template_literals_mp.ts
````typescript
/**
 * ============================================
 * 04 - TEMPLATE LITERALS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Template strings, interpolacion de expresiones,
 * strings multi-linea sin concatenacion
 * Cursos Online: Logs del sistema de cursos con niveles
 * (INFO/WARN/ERROR), resumenes de compra de cursos,
 * reportes de plataforma educativa.
 * ============================================
 * Temas:
 *   - Sintaxis de template literals (backtick `)
 *   - Interpolacion de expresiones con ${ }
 *   - Strings multi-linea sin concatenacion
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE E: TEMPLATE LITERALS Y OPERACIONES TIPADAS
// ──────────────────────────────────────────────

// --- E.1: Template literals con tipos ---

/**
 * Concepto puro - template literals con backtick ``.
 * Permiten interpolar cualquier expresion dentro de ${ }.
 */

const nombre: string = "Ana";
const rol: string    = "estudiante";
const cursos: number = 5;

const bienvenida: string = `Bienvenida, ${nombre}. Rol: ${rol}. Cursos: ${cursos}.`;
console.log(bienvenida);

const precioCurso: number = 1200;
const iva: number         = 0.19;
const total: string       = `Precio del curso con IVA: $${(precioCurso * (1 + iva)).toFixed(2)}`;
console.log(total);

const reporte: string = `
=== Reporte de la plataforma ===
Nombre    : CursosOnline
Servidor  : api-01
Estado    : activo
Uptime    : 99.9%
`;
console.log(reporte);

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Logs de la plataforma de cursos
// ──────────────────────────────────────────────

type NivelLog = "INFO" | "WARN" | "ERROR";

function log(nivel: NivelLog, servicio: string, mensaje: string): string {
  const timestamp = new Date().toISOString();
  const prefijo   = nivel === "ERROR" ? "[X]" : nivel === "WARN" ? "[!]" : "[✓]";
  return `[${timestamp}] ${prefijo} [${nivel}] [${servicio}] ${mensaje}`;
}

console.log(log("INFO",  "AuthService",    "Estudiante 'ana' ha iniciado sesion"));
console.log(log("WARN",  "CursoService",   "Capacidad de estudiantes al 80% en curso #12"));
console.log(log("ERROR", "PagoService",    "Error al procesar inscripcion #4821"));

// log("DEBUG", "Cache", "Hit"); // Error: 'DEBUG' no es NivelLog
````

## File: modulo_3/typescript_mp/05_compilador_seguridad_mp.ts
````typescript
/**
 * ============================================
 * 05 - EL COMPILADOR COMO RED DE SEGURIDAD
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Evitar any, usar unknown, strict mode
 * Cursos Online: Validacion segura de datos de
 * formularios de cursos (precio, nombre, categoria),
 * manejo de datos desconocidos de API.
 * ============================================
 * Temas:
 *   - Por que evitar any
 *   - unknown como alternativa segura
 *   - Strict mode en accion
 *     o  strictNullChecks
 *     o  noImplicitAny
 *     o  strictPropertyInitialization
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE F: EL COMPILADOR COMO RED DE SEGURIDAD
// ──────────────────────────────────────────────

// --- F.1: Por que evitar any ---

/**
 * any le dice a TS "no verifiques este valor".
 * Es el equivalente a apagar el sistema de seguridad del auto.
 * Cada any que escribes es una zona sin proteccion.
 */

let datoCurso: any = "TypeScript Basico";
datoCurso = 42;          // any acepta cualquier cosa
datoCurso = true;        // ok
datoCurso = { x: 1 };    // ok - TS no protesta pero tampoco ayuda

function duplicarPrecioCurso(valor: any): any {
  return valor * 2;
}

console.log("any con numero:", duplicarPrecioCurso(500));    // 1000
console.log("any con string:", duplicarPrecioCurso("500"));  // 1000 - funciona de casualidad

function duplicarPrecioSeguro(valor: number): number {
  return valor * 2;
}
// duplicarPrecioSeguro("500");  // Error: string no asignable a number

function procesarDatosCurso(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return `Valor no es string, es: ${typeof valor}`;
}

console.log(procesarDatosCurso("TypeScript Avanzado"));  // TYPESCRIPT AVANZADO
console.log(procesarDatosCurso(42));                     // Valor no es string, es: number

// --- F.2: Strict mode en accion ---

/**
 * Con "strict": true en tsconfig.json, el compilador activa
 * estas verificaciones automaticamente.
 */

let nombreCurso: string = "TypeScript Basico";
// nombreCurso = null;  // Error: null no asignable a string

let descripcionCurso: string | null = null;
descripcionCurso = "Curso introductorio de TypeScript";

function procesarCategoria(datos: string): string {
  return datos.toUpperCase();
}

class CursoOnline {
  titulo: string;
  precio: number;

  constructor(titulo: string, precio: number) {
    this.titulo = titulo;
    this.precio = precio;
  }
}

const curso = new CursoOnline("TypeScript Avanzado", 2500);
console.log(`${curso.titulo}: $${curso.precio}`);
````

## File: modulo_3/typescript_mp/06_ejemplo_calculadora_envios_mp.ts
````typescript
/**
 * ============================================
 * 06 - EJEMPLO COMBINADO: CALCULADORA DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Interfaces, objetos, variables, template
 * literals, tipos personalizados (type, Record)
 * Cursos Online: Calculadora de precios de cursos
 * segun dificultad, descuento por rol de usuario,
 * seguro de calidad educativa.
 * ============================================
 */

type DificultadCurso = "principiante" | "intermedio" | "avanzado";

interface Curso {
  titulo: string;
  duracionHoras: number;
  precioBase: number;
  dificultad: DificultadCurso;
}

const TARIFAS_DIFICULTAD: Record<DificultadCurso, number> = {
  principiante: 1.0,
  intermedio:   1.5,
  avanzado:     2.0,
};

const DESCUENTO_ROL = 0.10;

function calcularPrecioCurso(curso: Curso, esInstructor: boolean): string {
  const factorDificultad = TARIFAS_DIFICULTAD[curso.dificultad];
  const precioBase = curso.precioBase * factorDificultad;
  const descuento = esInstructor ? precioBase * DESCUENTO_ROL : 0;
  const total = precioBase - descuento;

  return `
[+] Cotizacion de curso
    Titulo       : ${curso.titulo}
    Duracion     : ${curso.duracionHoras} h
    Dificultad   : ${curso.dificultad}
    Precio base  : $${precioBase.toFixed(2)}
    Descuento    : $${descuento.toFixed(2)}
    -------------------------
    TOTAL        : $${total.toFixed(2)}
  `.trim();
}

const curso1: Curso = {
  titulo: "TypeScript desde Cero",
  duracionHoras: 40,
  precioBase: 1500,
  dificultad: "principiante",
};

const curso2: Curso = {
  titulo: "Arquitectura Hexagonal",
  duracionHoras: 60,
  precioBase: 3500,
  dificultad: "avanzado",
};

console.log(calcularPrecioCurso(curso1, false));
console.log("---");
console.log(calcularPrecioCurso(curso2, true));
````

## File: modulo_3/typescript_mp/07_tipos_primitivos_detalle_mp.ts
````typescript
/**
 * 07 - TIPOS PRIMITIVOS (DETALLE)
 * Tematica: Cursos Online
 * ============================================
 * Concepto: number, string, boolean, null, undefined
 * Cursos Online: IDs de curso, emails de instructores,
 * estado activo de plataforma, fechas de publicacion.
 * ============================================
 */

const precioCurso: number = 299.99;
const duracionHoras: number = 40;
const codigoHex: number = 0xff5733;

const emailInstructor: string = "instructor@cursosenlinea.com";
const rutaAPI: string = `/api/v2/cursos`;

const plataformaActiva: boolean = true;
const requierePago: boolean = false;

const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;
const binario: number = 0b1010;
const octal: number = 0o17;
const grande: number = 1_000_000;

console.log("hex:", hexadecimal, "bin:", binario, "grande:", grande);

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("isFinite(1/0):", Number.isFinite(1 / 0));
console.log("isNaN(0/0):", Number.isNaN(0 / 0));

const simple: string = "Curso TS";
const doble: string = 'Curso JS';
const template: string = `Curso ${"Python"}`;
const saludo: string = `Hola, ${"Ana"}. Curso: ${"TypeScript"}.`;
const mayor: string = `El curso es ${40 >= 20 ? "largo" : "corto"}.`;

const multilinea: string = `
  Modulo 1: Introduccion
  Modulo 2: Tipos basicos
  Modulo 3: Clases
`.trim();

console.log("  TypeScript  ".trim());
console.log("typescript".toUpperCase());
console.log("2024-06-15".split("-"));
console.log("error: curso no encontrado".includes("error"));
console.log("curso.ts".endsWith(".ts"));

const activo: boolean = true;
const eliminado: boolean = false;
const esLargo = 40 >= 20;
const tieneEstudiantes = 0 > 0;

if (!tieneEstudiantes) console.log("Sin estudiantes");

let sinAsignar: undefined = undefined;
let sinValor: null = null;

const idBuscado: number = 5;
const cursoEncontrado: string | null = idBuscado === 1 ? "TypeScript" : null;

const nom: string = cursoEncontrado ?? "Curso no encontrado";
console.log("nom:", nom);

const longitud: number | undefined = cursoEncontrado?.length;
console.log("longitud:", longitud);
````

## File: modulo_3/typescript_mp/08_arrays_mp.ts
````typescript
/**
 * ============================================
 * 08 - ARRAYS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Arrays, metodos tipados map/filter/reduce,
 * arrays de objetos
 * Cursos Online: Catalogo de cursos, precios,
 * calificaciones de estudiantes, estadisticas.
 * ============================================
 */

const precios: number[] = [1500, 2500, 3500, 4500, 5500];
const nombres: Array<string> = ["TS", "JS", "Python", "Java", "Go"];

const inferido = [10, 20, 30]; // number[]

const dobles: number[] = precios.map((n) => n * 2);
const pares: number[] = precios.filter((n) => n % 2 === 0);
const suma: number = precios.reduce((acc, n) => acc + n, 0);

precios.push(6500);
precios.unshift(500);
const ultimo = precios.pop();
const primero = precios.shift();

const existe: boolean = precios.includes(2500);
const indice: number = precios.indexOf(2500);
const encontrado: number | undefined = precios.find((n) => n > 4000);

type CursoCatalogo = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};

const catalogo: CursoCatalogo[] = [
  { id: 1, nombre: "TypeScript", precio: 999,  disponible: true },
  { id: 2, nombre: "Node.js",    precio: 25,   disponible: true },
  { id: 3, nombre: "React",      precio: 350,  disponible: false },
];

const disponibles: CursoCatalogo[] = catalogo.filter((c) => c.disponible);
const nombresCursos: string[] = catalogo.map((c) => c.nombre);
const masBarato: CursoCatalogo | undefined = catalogo.reduce((min, c) =>
  c.precio < min.precio ? c : min
);

console.log("nombres:", nombresCursos);
console.log("mas barato:", masBarato?.nombre);
console.log("disponibles:", disponibles.length);

const calificaciones: number[] = [85, 92, 70, 55, 98, 63, 78];

const aprobados: number[] = calificaciones.filter((n) => n >= 70);
const reprobados: number[] = calificaciones.filter((n) => n < 70);
const promedio: number = Number(
  (calificaciones.reduce((acc, n) => acc + n, 0) / calificaciones.length).toFixed(1)
);
const maxima: number = Math.max(...calificaciones);
const minima: number = Math.min(...calificaciones);

console.log("Aprobados:", aprobados.length, "| Reprobados:", reprobados.length);
console.log("Promedio:", promedio, "| Max:", maxima, "| Min:", minima);
````

## File: modulo_3/typescript_mp/09_tuplas_mp.ts
````typescript
/**
 * ============================================
 * 09 - TUPLAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Tuplas (array de longitud fija con tipos por posicion),
 * tuplas con nombre, desestructuracion, retorno multiple
 * Cursos Online: Pares (modulo, leccion), progreso de estudiante,
 * rangos de contenido educativo.
 * ============================================
 */

type ProgresoCurso = [number, number];           // [modulo, leccion]
type Notas = [number, number, number];           // [nota1, nota2, nota3]
type EntradaCurso = [string, number];            // [nombreCurso, duracionHoras]

const progreso: ProgresoCurso = [2, 5];
const notas: Notas = [85, 92, 78];
const entrada: EntradaCurso = ["TypeScript", 40];

const [modulo, leccion] = progreso;
const [nota1, nota2, nota3] = notas;
const [nombreCurso, duracion] = entrada;

console.log("Progreso: modulo", modulo, "leccion", leccion);
console.log("Notas:", nota1, ",", nota2, ",", nota3);
console.log("Curso:", nombreCurso, "=", duracion, "h");

type RangoEstudiantes = [min: number, max: number];
const capacidadCurso: RangoEstudiantes = [10, 30];

const a: number = 10;
const b: number = 2;

const divisionNotas: [number, string] = b === 0
  ? [0, "Error: division por cero"]
  : [a / b, "ok"];

const [resultado, estado] = divisionNotas;
console.log(estado + ":", resultado);

const d: number = 0;
const divisionNotas2: [number, string] = d === 0
  ? [0, "Error: division por cero"]
  : [a / d, "ok"];

const [res2, estado2] = divisionNotas2;
console.log(estado2 + ":", res2);

type EstadoTupla = [string, (v: string) => void];
````

## File: modulo_3/typescript_mp/10_enums_mp.ts
````typescript
/**
 * 10 - ENUMS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Enum numerico, enum string, union de literales
 * Cursos Online: NivelCurso (Principiante/Intermedio/Avanzado),
 * RolUsuario (Admin/Instructor/Estudiante), EstadoInscripcion
 * (pendiente/activa/completada/cancelada), TipoContenido.
 * ============================================
 */

enum NivelCurso {
  Principiante, Intermedio, Avanzado,
}

const nivel: NivelCurso = NivelCurso.Intermedio;
console.log("nivel:", nivel);                     // 1
console.log("mapeo inverso:", NivelCurso[1]);     // "Intermedio"

enum CodigoHTTP {
  OK = 200,
  NoEncontrado = 404,
  Error = 500,
}

enum RolUsuario {
  Admin       = "ADMIN",
  Instructor  = "INSTRUCTOR",
  Estudiante  = "ESTUDIANTE",
}

const miRol: RolUsuario = RolUsuario.Instructor;
console.log("miRol:", miRol);

type EstadoInscripcion = "pendiente" | "activa" | "completada" | "cancelada";
type Prioridad = "baja" | "media" | "alta";

const estadoInscripcion: EstadoInscripcion = "activa";
console.log("Inscripcion:", estadoInscripcion);

type PrioridadCurso = "baja" | "media" | "alta" | "critica";

interface CursoPlataforma {
  id: number;
  titulo: string;
  prioridad: PrioridadCurso;
  publicado: boolean;
}

const prefijos: Record<PrioridadCurso, string> = {
  baja: "[ ]", media: "[!]", alta: "[!!]", critica: "[!!!]",
};

const cursos: CursoPlataforma[] = [
  { id: 1, titulo: "TypeScript Basico", prioridad: "baja", publicado: true },
  { id: 2, titulo: "Arquitectura Avanzada", prioridad: "critica", publicado: false },
  { id: 3, titulo: "Node.js Intermedio", prioridad: "media", publicado: false },
];

for (const c of cursos) {
  const estado = c.publicado ? "[ok]" : "[...]";
  console.log(`${estado} ${prefijos[c.prioridad]} [#${c.id}] ${c.titulo}`);
}
````

## File: modulo_3/typescript_mp/11_union_literal_types_mp.ts
````typescript
/**
 * ============================================
 * 11 - UNION TYPES Y LITERAL TYPES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Union types (string | number), union con
 * objetos (discriminada), literal types (valores exactos)
 * Cursos Online: TipoContenido ('video'|'pdf'|'quiz'),
 * IdCurso (string|number), nivel de dificultad exacto.
 * ============================================
 */

type IdCurso = string | number;

const idNumerico: IdCurso = 42;
const idTexto: IdCurso = "CURSO-123";
console.log("Buscando curso con id:", idNumerico, "(tipo:", typeof idNumerico + ")");
console.log("Buscando curso con id:", idTexto, "(tipo:", typeof idTexto + ")");

type RespuestaCurso =
  | { exito: true;  cursos: string[] }
  | { exito: false; error: string  };

const respuestaOk: RespuestaCurso = { exito: true, cursos: ["TS", "JS", "Python"] };
const respuestaError: RespuestaCurso = { exito: false, error: "No se pudo conectar" };

type TipoContenido = "video" | "pdf" | "quiz" | "examen";
type Dificultad = 1 | 2 | 3 | 4 | 5;
type NivelMinimo = 1;  // solo puede ser 1 (principiante minimo)

let tipoContenido: TipoContenido = "video";
let dificultad: Dificultad = 3;
let nivelMinimo: NivelMinimo = 1;

const contenido: TipoContenido = "pdf";
const duracionMinutos: number = 45;
console.log("Contenido:", contenido, "- Duracion:", duracionMinutos, "min");
````

## File: modulo_3/typescript_mp/12_any_unknown_never_mp.ts
````typescript
/**
 * ============================================
 * 12 - ANY, UNKNOWN Y NEVER
 * Tematica: Cursos Online
 * ============================================
 * Concepto: any (desactiva tipos), unknown (version segura),
 * never (codigo inalcanzable), switch exhaustivo
 * Cursos Online: Validacion de datos de cursos de fuentes
 * externas, tipos de contenido educativo, agotamiento de casos.
 * ============================================
 */

let cualquierCurso: any = "TypeScript";
cualquierCurso = 42;
cualquierCurso = true;
cualquierCurso.metodoFalso(); // Sin error en compilacion

let datoCurso: unknown = "hola";
datoCurso = 42;

if (typeof datoCurso === "string") {
  console.log(datoCurso.toUpperCase());
}

type SinValor = string & number;

type TipoCurso = "grabado" | "en-vivo" | "mixto";

const tipoCurso: TipoCurso = "grabado";
const duracionTotal: number = 40;
let areaCurso: number;

switch (tipoCurso) {
  case "grabado":
    areaCurso = duracionTotal * 1.0;
    break;
  case "en-vivo":
    areaCurso = duracionTotal * 1.5;
    break;
  case "mixto":
    areaCurso = duracionTotal * 2.0;
    break;
  default:
    const _agotado: never = tipoCurso;
    areaCurso = 0;
}
console.log("Duracion total:", areaCurso.toFixed(2), "h");
````

## File: modulo_3/typescript_mp/13_type_narrowing_mp.ts
````typescript
/**
 * ============================================
 * 13 - TYPE NARROWING (ESTRECHAMIENTO DE TIPOS)
 * Tematica: Cursos Online
 * ============================================
 * Concepto: typeof, truthiness, igualdad, Array.isArray,
 * operador "in", discriminated union con switch
 * Cursos Online: Narrowing entre tipos de contenido
 * educativo (Video, PDF, Quiz), pagos de cursos,
 * identificacion de roles de usuario.
 * ============================================
 */

let contenidoCurso: string | number = "Video Introduccion";
let resultado: string;
if (typeof contenidoCurso === "string") {
  resultado = contenidoCurso.toUpperCase();
} else {
  resultado = contenidoCurso.toFixed(2);
}
console.log(resultado);

const descripcionOpcional: string | null = null;
const saludo: string = descripcionOpcional
  ? "Curso: " + descripcionOpcional
  : "Curso sin descripcion";
console.log(saludo);

const valorA: string | number = 42;
const valorB: string | number = 42;
if (valorA === valorB) {
  console.log("Mismos valores:", valorA);
} else {
  console.log("Distintos");
}

const datoCurso: string | string[] = ["modulo1", "modulo2", "modulo3"];
const conteo: number = Array.isArray(datoCurso) ? datoCurso.length : 1;
console.log("Modulos:", conteo);

type Estudiante = { nombre: string; carrera: string };
type Instructor  = { nombre: string; especialidad: string };

const persona: Estudiante | Instructor = { nombre: "Ana", especialidad: "TypeScript" };

if ("carrera" in persona) {
  console.log("Estudiante:", persona.nombre, "carrera", persona.carrera);
} else {
  console.log("Instructor:", persona.nombre, "especialidad:", (persona as Instructor).especialidad);
}

type PagoTarjeta  = { metodo: "tarjeta";  numero: string; cvv: number };
type PagoTransfer = { metodo: "transferencia"; banco: string; cuenta: string };
type PagoEfectivo = { metodo: "efectivo"; moneda: string };

type PagoCurso = PagoTarjeta | PagoTransfer | PagoEfectivo;

const pagos: Array<{ pago: PagoCurso; monto: number }> = [
  { pago: { metodo: "tarjeta", numero: "4111111111111234", cvv: 123 }, monto: 500 },
  { pago: { metodo: "transferencia", banco: "BBVA", cuenta: "ES12345" }, monto: 200 },
  { pago: { metodo: "efectivo", moneda: "MXN" }, monto: 150 },
];

for (const { pago, monto } of pagos) {
  let descripcion: string;
  switch (pago.metodo) {
    case "tarjeta":
      descripcion = "Cobrando $" + monto + " a tarjeta ****" + pago.numero.slice(-4);
      break;
    case "transferencia":
      descripcion = "Transfiriendo $" + monto + " via " + pago.banco;
      break;
    case "efectivo":
      descripcion = "Recibiendo $" + monto + " en " + pago.moneda;
      break;
  }
  console.log(descripcion);
}
````

## File: modulo_3/typescript_mp/14_objetos_inline_mp.ts
````typescript
/**
 * ============================================
 * 14 - OBJETOS TIPADOS INLINE Y OPCIONALES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Objetos inline tipados, opcionales (?),
 * readonly, objetos anidados
 * Cursos Online: Perfil de estudiante, configuracion
 * de curso, pedido de inscripcion con datos del alumno.
 * ============================================
 */

// ──────────────────────────────────────────────
// H.1: Objeto tipado inline
// ──────────────────────────────────────────────

/**
 * TypeScript permite tipar objetos directamente en la anotacion
 * sin declarar un type o interface. Util para objetos de un solo uso.
 */

let estudiante: { nombre: string; edad: number; email: string };
estudiante = { nombre: "Ana", edad: 28, email: "ana@mail.com" };

let configCurso: {
  host: string;
  puerto: number;
  debug?: boolean;
  timeout?: number;
};

configCurso = { host: "api.cursos.com", puerto: 3000 };
configCurso = { host: "api.cursos.com", puerto: 443, debug: true };

const cursoFijo: { readonly id: number; titulo: string } = { id: 1, titulo: "TypeScript" };

let inscripcion: {
  id: number;
  estudiante: { nombre: string; email: string };
  total: number;
};

inscripcion = {
  id: 101,
  estudiante: { nombre: "Luis", email: "luis@mail.com" },
  total: 250,
};

/**
 * Recomendacion:
 * Para objetos que se reutilizan, declara un type o interface.
 * Los tipos inline son comodos para variables locales o parametros
 * de funcion de uso unico.
 */

// ──────────────────────────────────────────────
// EJEMPLO: Perfil de usuario con campos opcionales
// ──────────────────────────────────────────────

type PerfilEstudiante = {
  readonly id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  avatar?: string;
  fechaNacimiento?: string;
};

const perfil1: PerfilEstudiante = {
  id: 1,
  nombre: "Carlos",
  apellido: "Ruiz",
  email: "carlos@mail.com",
  telefono: "+52 55 1234 5678",
};

console.log("[#" + perfil1.id + "]", perfil1.nombre, perfil1.apellido, "-", perfil1.email);
if (perfil1.telefono) console.log("  Tel:", perfil1.telefono);

const perfil2: PerfilEstudiante = {
  id: 2,
  nombre: "Sara",
  apellido: "Lopez",
  email: "sara@mail.com",
  fechaNacimiento: "1998-03-12",
};

console.log("[#" + perfil2.id + "]", perfil2.nombre, perfil2.apellido, "-", perfil2.email);
if (perfil2.fechaNacimiento) {
  const anios = new Date().getFullYear() - new Date(perfil2.fechaNacimiento).getFullYear();
  console.log("  Edad aprox.:", anios, "anios");
}
````

## File: modulo_3/typescript_mp/15_ejemplo_inventario_mp.ts
````typescript
/**
 * ============================================
 * 15 - EJEMPLO COMBINADO: CATALOGO DE CURSOS ONLINE
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Arrays, objetos, tuplas, enums/unions,
 * narrowing, opcionales, Record, filter/map/reduce
 * Cursos Online: Catalogo de cursos con estado,
 * categoria, precio, filtros y resumenes.
 * ============================================
 */

type EstadoCurso = "activo" | "completado" | "borrador";
type CategoriaCurso = "programacion" | "diseno" | "negocios" | "idiomas";

type DuracionModulos = [modulos: number, horas: number];

interface CursoCatalogo {
  readonly id: number;
  titulo: string;
  precio: number;
  estudiantes: number;
  categoria: CategoriaCurso;
  estado: EstadoCurso;
  duracion?: DuracionModulos;
  tags?: string[];
}

const catalogo: CursoCatalogo[] = [
  {
    id: 1, titulo: "TypeScript Avanzado", precio: 1299, estudiantes: 15,
    categoria: "programacion", estado: "activo",
    duracion: [10, 40], tags: ["ts", "backend"],
  },
  {
    id: 2, titulo: "UI/UX para Apps", precio: 29, estudiantes: 30,
    categoria: "diseno", estado: "completado",
  },
  {
    id: 3, titulo: "Marketing Digital", precio: 49, estudiantes: 40,
    categoria: "negocios", estado: "activo",
    tags: ["marketing", "ventas"],
  },
  {
    id: 4, titulo: "Ingles Tecnico", precio: 499, estudiantes: 5,
    categoria: "idiomas", estado: "borrador",
    duracion: [8, 60],
  },
];

const iconosEstado: Record<EstadoCurso, string> = {
  activo:     "[ok]",
  completado: "[done]",
  borrador:   "[draft]",
};

console.log("=== CATALOGO DE CURSOS ===");
for (const c of catalogo) {
  const icono = iconosEstado[c.estado];
  const dur = c.duracion
    ? " | " + c.duracion[0] + " modulos, " + c.duracion[1] + "h"
    : "";
  const tags = c.tags ? " [" + c.tags.join(", ") + "]" : "";
  console.log(icono, "[" + c.categoria.toUpperCase() + "]", c.titulo,
    "- $" + c.precio, "(" + c.estudiantes + " est.)" + dur + tags);
}

const activos: CursoCatalogo[] = catalogo.filter((c) => c.estado === "activo");
const ingresoPotencial: number = activos.reduce((acc, c) => acc + c.precio * c.estudiantes, 0);
const masBarato: CursoCatalogo = activos.reduce((min, c) =>
  c.precio < min.precio ? c : min
);
const masCaro: CursoCatalogo = activos.reduce((max, c) =>
  c.precio > max.precio ? c : max
);

console.log("\n=== RESUMEN ===");
console.log("Activos:", activos.length, "| Ingreso potencial: $" + ingresoPotencial.toLocaleString());
console.log("Mas barato:", masBarato.titulo, "($" + masBarato.precio + ")");
console.log("Mas caro:  ", masCaro.titulo, "($" + masCaro.precio + ")");
````

## File: modulo_3/typescript_mp/16_condicionales_mp.ts
````typescript
/**
 * 16 - CONDICIONALES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: if, if/else, if/else if, switch, ternario,
 * anidadas, aplanamiento con booleanos
 * Cursos Online: Logica de acceso a cursos por nivel,
 * descuentos segun edad/rol, clasificador de
 * rendimiento de estudiantes.
 * ============================================
 */

// ──────────────────────────────────────────────
// if simple
// ──────────────────────────────────────────────

const progresoCurso: number = 80;
if (progresoCurso >= 100) console.log("Curso completado");

const edadEstudiante: number = 16;
if (edadEstudiante >= 18) console.log("Mayor de edad - acceso completo");
else console.log("Menor de edad - acceso restringido");

const estadoAcceso: string = edadEstudiante >= 18 ? "Completo" : "Restringido";
console.log("Acceso:", estadoAcceso);

const notaFinal: number = 75;
if (notaFinal >= 90) console.log("A - Excelente");
else if (notaFinal >= 80) console.log("B - Bueno");
else if (notaFinal >= 70) console.log("C - Aprobado");
else console.log("Reprobado - debe repetir");

const codigoCurso: number = 404;
switch (codigoCurso) {
  case 200: console.log("Curso encontrado"); break;
  case 404: console.log("Curso no encontrado"); break;
  case 500: console.log("Error del servidor de cursos"); break;
  default:  console.log("Codigo de curso desconocido");
}

const puntajes: number[] = [95, 85, 70, 55, 40];
for (const nota of puntajes) {
  let clasificacion: string;
  if (nota >= 90)      clasificacion = `Excelente (${nota})`;
  else if (nota >= 80) clasificacion = `Bueno (${nota})`;
  else if (nota >= 70) clasificacion = `Aprobado (${nota})`;
  else if (nota >= 60) clasificacion = `Regular (${nota})`;
  else                 clasificacion = `Reprobado (${nota})`;
  console.log(clasificacion);
}

// ──────────────────────────────────────────────
// if anidadas y aplanamiento
// ──────────────────────────────────────────────

const inscrito: boolean = true;
const esPremium: boolean = false;

if (inscrito) {
  if (esPremium) console.log("Acceso a todos los cursos premium");
  else console.log("Acceso a cursos basicos");
} else console.log("Por favor registrate");

const saldoEstudiante: number = 500;
const precioCurso: number = 200;
const codigoValido: boolean = true;

const codigoOk: boolean = codigoValido;
const saldoOk: boolean = precioCurso <= saldoEstudiante;
const precioValido: boolean = precioCurso >= 0;

if (!codigoOk)  console.log("Codigo de descuento invalido");
else if (!saldoOk) console.log("Saldo insuficiente para el curso");
else if (!precioValido) console.log("Precio invalido");
else console.log(`Inscribiendo en curso. Saldo restante: $${saldoEstudiante - precioCurso}`);
````

## File: modulo_3/typescript_mp/17_bucles_mp.ts
````typescript
/**
 * ============================================
 * 17 - BUCLES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: for, for...of, for...in, forEach/map,
 * while, do-while, break, continue
 * Cursos Online: Iterar modulos de un curso,
 * estudiantes inscritos, progreso por lecciones.
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: for clasico
// ──────────────────────────────────────────────

for (let i = 1; i <= 5; i++) {
  console.log("Leccion", i);
}

for (let i = 0; i <= 100; i += 25) {
  console.log("Progreso del curso:", i + "%");
}

for (let i = 5; i >= 1; i--) {
  console.log("Contenido restante:", i, "modulos");
}

// ──────────────────────────────────────────────
// B.2: for...of - recorrer colecciones
// ──────────────────────────────────────────────

const modulos: string[] = ["Introduccion", "Variables", "Funciones", "Clases"];

for (const modulo of modulos) {
  console.log(modulo);
}

for (const letra of "TS") {
  console.log(letra);
}

for (const [indice, valor] of modulos.entries()) {
  console.log((indice + 1) + ": " + valor);
}

// ──────────────────────────────────────────────
// B.3: for...in - recorrer claves de un objeto
// ──────────────────────────────────────────────

/**
 * for...in itera sobre los nombres de las propiedades de un objeto.
 * NO lo uses para arrays (daria indices como texto "0", "1"...).
 * Para arrays usa for...of.
 */

const cursosDict: Record<string, number> = {
  TypeScript: 40,
  Python: 30,
  Node: 25,
};

for (const curso in cursosDict) {
  console.log(curso + " -> " + cursosDict[curso] + "h");
}

// ──────────────────────────────────────────────
// B.4: forEach / map - estilo funcional
// ──────────────────────────────────────────────

const estudiantesPorCurso: number[] = [15, 30, 22, 8];

estudiantesPorCurso.forEach((n) => console.log("Curso con", n, "estudiantes"));

const dobles: number[] = estudiantesPorCurso.map((n) => n * 2);
console.log("dobles:", dobles);

// ──────────────────────────────────────────────
// B.5: while y do-while
// ──────────────────────────────────────────────

let contenidoRestante = 100;
let leccion = 0;

while (contenidoRestante > 0) {
  const avance = contenidoRestante > 20 ? 20 : contenidoRestante;
  leccion++;
  contenidoRestante -= avance;
  console.log("Leccion " + leccion + ": " + avance + "% (queda " + contenidoRestante + "%)");
}

let intentos = 0;
let descargado = false;

do {
  intentos++;
  console.log("Intento de descarga #" + intentos + "...");
  if (intentos === 3) descargado = true;
} while (!descargado && intentos < 5);

console.log(descargado ? "Descargado en " + intentos + " intentos" : "Fallo");

// ──────────────────────────────────────────────
// B.6: break y continue
// ──────────────────────────────────────────────

const contenidoCurso: number[] = [10, 20, -1, 40, 50, -1, 30];

console.log("=== con continue ===");
for (const c of contenidoCurso) {
  if (c < 0) {
    console.log("Contenido corrupto ignorado");
    continue;
  }
  console.log("Procesando " + c + "% del modulo");
}

console.log("=== con break ===");
for (const c of contenidoCurso) {
  if (c < 0) {
    console.log("Error critico - deteniendo");
    break;
  }
  console.log("Procesando " + c + "% del modulo");
}
````

## File: modulo_3/typescript_mp/18_ejemplo_monitor_servidores_mp.ts
````typescript
/**
 * ============================================
 * 18 - EJEMPLO COMBINADO: MONITOR DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: if anidado, switch, for...of, while,
 * break/continue, estados tipados
 * Cursos Online: Monitoreo del estado de cursos
 * activos, rendimiento y alertas.
 * ============================================
 */

type EstadoCurso = "publicado" | "lento" | "inactivo";

interface CursoMonitor {
  titulo: string;
  estado: EstadoCurso;
  estudiantes: number;
}

const cursosMonit: CursoMonitor[] = [
  { titulo: "TypeScript Basico",   estado: "publicado", estudiantes: 125 },
  { titulo: "Arquitectura",        estado: "lento",     estudiantes: 320 },
  { titulo: "Node Avanzado",       estado: "inactivo",  estudiantes: 0 },
  { titulo: "React Pro",           estado: "publicado", estudiantes: 80 },
];

console.log("=== Diagnostico de Cursos ===");
let inactivos = 0;

for (const c of cursosMonit) {
  if (c.estado === "inactivo") inactivos++;

  let icono: string;
  switch (c.estado) {
    case "publicado": icono = "[ok]";    break;
    case "lento":     icono = "[!]";     break;
    case "inactivo":  icono = "[XX]";    break;
    default:          icono = "[?]";
  }

  let diagnostico: string;
  if (c.estado === "publicado") {
    if (c.estudiantes < 100) {
      diagnostico = icono + " " + c.titulo + ": pocos estudiantes (" + c.estudiantes + ")";
    } else {
      diagnostico = icono + " " + c.titulo + ": buena inscripcion (" + c.estudiantes + ")";
    }
  } else {
    diagnostico = icono + " " + c.titulo + ": requiere atencion (" + c.estado + ")";
  }

  console.log(diagnostico);
}

let alertaInactivos = inactivos;
while (alertaInactivos > 0) {
  console.log("[!] Quedan " + alertaInactivos + " curso(s) inactivo(s) - notificando...");
  alertaInactivos--;
}

console.log("Resumen: " + inactivos + "/" + cursosMonit.length + " inactivos");
````

## File: modulo_3/typescript_mp/19_funciones_declaracion_mp.ts
````typescript
/**
 * ============================================
 * 19 - DECLARACION DE FUNCIONES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Parametros tipados, tipo de retorno,
 * funciones flecha, retorno implicito/explicito
 * Cursos Online: Calculo de descuento en cursos,
 * resumen de compra, saludo al estudiante.
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Declaracion con parametros tipados
// ──────────────────────────────────────────────

// Cada parametro lleva :Tipo, y tras el parentesis va :TipoRetorno
function sumaNotas(a: number, b: number): number {
  return a + b;
}

function saludarEstudiante(nombre: string): string {
  return "Hola, " + nombre + " - Bienvenido al curso";
}

console.log(sumaNotas(85, 92));
console.log(saludarEstudiante("Sofia"));

// Error en compilacion:
// suma("3", 4);  // string no asignable a number

/**
 * El tipo de retorno explicito actua como contrato.
 * Si olvidas un return, el error aparece en la definicion,
 * no en quien llama la funcion.
 */

// ──────────────────────────────────────────────
// A.2: Funciones flecha (arrow functions)
// ──────────────────────────────────────────────

// Declaracion tradicional
function duplicarPrecioCurso(n: number): number {
  return n * 2;
}

const duplicarPrecioFlecha = (n: number): number => {
  return n * 2;
};

const duplicarPrecioCorto = (n: number): number => n * 2;

const ahora = (): string => new Date().toLocaleTimeString();

const doblePrecio = (n: number): number => n * 2;

console.log(duplicarPrecioCurso(500));
console.log(duplicarPrecioFlecha(500));
console.log(duplicarPrecioCorto(500));
console.log(doblePrecio(7));
console.log(ahora());

/**
 * Recomendacion:
 * - Declaracion tradicional para funciones principales (hoisting,
 *   stack traces mas legibles).
 * - Flecha para callbacks, metodos de array y cuando necesites
 *   capturar el this del contexto lexico.
 */

// ──────────────────────────────────────────────
// EJEMPLO: Calculadora de descuento
// ──────────────────────────────────────────────

function aplicarDescuentoCurso(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenCurso(curso: string, precio: number, descuento: number): string {
  const final = aplicarDescuentoCurso(precio, descuento);
  return curso + ": $" + precio + " -> $" + final + " (" + descuento + "% off)";
}

console.log(resumenCurso("TypeScript Basico", 120, 15));
console.log(resumenCurso("Node.js", 350, 20));
console.log(resumenCurso("Python", 45, 0));
````

## File: modulo_3/typescript_mp/20_parametros_y_retorno_mp.ts
````typescript
/**
 * ============================================
 * 20 - PARAMETROS AVANZADOS Y RETORNOS ESPECIALES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Opcionales (?), por defecto (=), rest (...),
 * void, never
 * Cursos Online: Etiquetas de curso, busqueda de
 * estudiantes, rutas de API educativa.
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Opcionales (?) y por defecto (=)
// ──────────────────────────────────────────────

// Opcional: puede omitirse, dentro es T | undefined
function crearEtiquetaCurso(texto: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return "[" + texto.toUpperCase() + "]";
  }
  return "[" + texto + "]";
}

console.log(crearEtiquetaCurso("typescript"));
console.log(crearEtiquetaCurso("alerta", true));

function repetirModulo(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetirModulo("modulo"));
console.log(repetirModulo("modulo", 5));

// Los opcionales y default van DESPUES de los obligatorios

// ──────────────────────────────────────────────
// B.2: Rest parameters (...)
// ──────────────────────────────────────────────

// Recoge argumentos restantes en un array
function sumarDuracionCursos(...horas: number[]): number {
  return horas.reduce((acc, n) => acc + n, 0);
}

console.log(sumarDuracionCursos(40, 30, 20));
console.log(sumarDuracionCursos(10, 20, 30, 40));
console.log(sumarDuracionCursos());

function construirRutaCurso(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRutaCurso("https://api.cursos.com", "v1", "cursos", "42"));
// https://api.ejemplo.com/v1/usuarios/42

// ──────────────────────────────────────────────
// C.1: void vs never
// ──────────────────────────────────────────────

// void: no devuelve un valor util (efectos secundarios)
function imprimirLinea(texto: string): void {
  console.log(texto);
}

function lanzarErrorCurso(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) { }
}

function dividirNotas(a: number, b: number): number {
  if (b === 0) lanzarErrorCurso("Division por cero en notas");
  return a / b;
}

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de registro de eventos
// ──────────────────────────────────────────────

type NivelLog = "info" | "warn" | "error";

function logCurso(
  mensaje: string,
  nivel: NivelLog = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<NivelLog, string> = {
    info:  "[i] INFO ",
    warn:  "[!] WARN ",
    error: "[X] ERROR",
  };
  const hora = timestamp ? " [" + new Date().toISOString() + "]" : "";
  return prefijos[nivel] + hora + ": " + mensaje;
}

console.log(logCurso("Curso TypeScript iniciado"));
console.log(logCurso("Memoria alta en servidor de cursos", "warn"));
console.log(logCurso("Error al inscribir estudiante", "error", true));

function registrarEventoCurso(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? " | " + detalles.join(" . ") : "";
  console.log("[" + timestamp + "] " + tipo.toUpperCase() + cuerpo);
}

registrarEventoCurso("inicio de curso");
registrarEventoCurso("inscripcion", "estudiante: ana", "curso: TypeScript");
registrarEventoCurso("error", "modulo: pagos", "codigo: 503", "reintento: si");
````

## File: modulo_3/typescript_mp/21_orden_superior_closures_mp.ts
````typescript
/**
 * ============================================
 * 21 - FUNCIONES DE ORDEN SUPERIOR Y CLOSURES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Tipos de funcion, callbacks, fabricas,
 * closures, memoizacion
 * Cursos Online: Multiplicador de precio de cursos,
 * filtro de cursos por condicion, contador de
 * estudiantes activos, pipeline de procesamiento
 * de pedidos de cursos, memoize de calculos.
 * ============================================
 */

// ──────────────────────────────────────────────
// D.1: Tipos de funcion y callbacks tipados
// ──────────────────────────────────────────────

// Tipo de funcion: (param: Tipo) => TipoRetorno
type Transformador = (x: number) => number;
type Predicado = (x: number) => boolean;

// Funcion que RECIBE una funcion (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Funcion que DEVUELVE una funcion (fabrica)
function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

const triplePrecio = multiplicadorDe(3);
const cuadradoPrecioFn: Transformador = (x) => x * x;

console.log(aplicar(500, triplePrecio));
console.log(aplicar(500, cuadradoPrecioFn));
console.log(aplicar(500, (x) => x + 100));

function filtrarCursos(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const preciosCursos = [100, 200, 300, 400, 500, 600, 700, 800];
console.log(filtrarCursos(preciosCursos, (n) => n > 400));
console.log(filtrarCursos(preciosCursos, (n) => n <= 300));

// ──────────────────────────────────────────────
// F.1: Closures
// ──────────────────────────────────────────────

/**
 * Un closure es una funcion que captura variables del ambito
 * donde fue creada, incluso cuando ese ambito ya no esta activo.
 */

function crearContadorEstudiantes(inicio: number = 0) {
  let cuenta = inicio;

  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor:       () => cuenta,
    resetear:    () => { cuenta = inicio; },
  };
}

const estudiantesTS = crearContadorEstudiantes();
const estudiantesNode = crearContadorEstudiantes(10);

estudiantesTS.incrementar();
estudiantesTS.incrementar();
estudiantesTS.incrementar();
estudiantesNode.incrementar();

console.log("Estudiantes TS:", estudiantesTS.valor());
console.log("Estudiantes Node:", estudiantesNode.valor());

estudiantesTS.resetear();
console.log("Estudiantes TS tras reset:", estudiantesTS.valor());

// ──────────────────────────────────────────────
// EJEMPLO: Pipeline de procesamiento de pedidos
// ──────────────────────────────────────────────

type CursoPedido = { id: number; precio: number; estudiante: string };
type ProcesadorCurso = (curso: CursoPedido) => CursoPedido;

const aplicarIVACurso: ProcesadorCurso = (c) => ({
  ...c,
  precio: Number((c.precio * 1.19).toFixed(2)),
});

const aplicarDescuentoEstudiante = (descuento: number): ProcesadorCurso =>
  (c) => ({ ...c, precio: Number((c.precio * (1 - descuento)).toFixed(2)) });

function procesarCurso(curso: CursoPedido, pasos: ProcesadorCurso[]): CursoPedido {
  return pasos.reduce((c, fn) => fn(c), curso);
}

const cursoPedido: CursoPedido = { id: 101, precio: 100, estudiante: "Ana" };

const resultadoCurso = procesarCurso(cursoPedido, [
  aplicarDescuentoEstudiante(0.10),
  aplicarIVACurso,
]);

console.log("Curso procesado:", resultadoCurso);

// ──────────────────────────────────────────────
// EJEMPLO: Memoizacion con closure
// ──────────────────────────────────────────────

function memoize<T, R>(fn: (arg: T) => R): (arg: T) => R {
  const cache = new Map<T, R>();

  return (arg: T): R => {
    if (cache.has(arg)) {
      console.log("Cache hit:", arg);
      return cache.get(arg)!;
    }
    const resultado = fn(arg);
    cache.set(arg, resultado);
    return resultado;
  };
}

function fibLento(n: number): number {
  if (n <= 1) return n;
  return fibLento(n - 1) + fibLento(n - 2);
}

const fibRapido = memoize(fibLento);

console.log(fibRapido(10)); // calcula
console.log(fibRapido(10)); // Cache hit: 10 - retorna al instante
console.log(fibRapido(20)); // calcula
````

## File: modulo_3/typescript_mp/22_sobrecargas_mp.ts
````typescript
/**
 * ============================================
 * 22 - SOBRECARGAS DE FUNCION (OVERLOADS)
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Firmas multiples, distinto retorno segun firma
 * Cursos Online: Buscar curso por ID (number) o por
 * nombre (string), formatear precio o texto de curso.
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Function overloads
// ──────────────────────────────────────────────

/**
 * Las sobrecargas permiten que una misma funcion acepte
 * distintas combinaciones de tipos de parametros, con
 * retornos distintos segun la firma usada.
 *
 * 1. Se declaran varias firmas de sobrecarga (sin cuerpo)
 * 2. Una sola implementacion (no visible para quien llama)
 */

// Firmas de sobrecarga
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

// Implementacion (debe ser compatible con todas las firmas)
function formatear(valor: number | string | boolean): string {
  if (typeof valor === "number") {
    return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
  }
  if (typeof valor === "boolean") {
    return valor ? "Si" : "No";
  }
  return '"' + valor + '"';
}

// TS conoce el retorno exacto segun la firma usada
console.log(formatear(1234567.5)); // 1,234,567.50
console.log(formatear(true));      // Si
console.log(formatear("activo"));  // "activo"

// ──────────────────────────────────────────────
// EJEMPLO: Buscador polimorfico
// ──────────────────────────────────────────────

type CursoBusqueda = { id: number; titulo: string; precio: number };

const catalogoCursos: CursoBusqueda[] = [
  { id: 1, titulo: "TypeScript", precio: 1200 },
  { id: 2, titulo: "Node.js",    precio: 80   },
  { id: 3, titulo: "React",      precio: 350  },
];

function buscarCurso(id: number): CursoBusqueda | undefined;
function buscarCurso(titulo: string): CursoBusqueda[];

function buscarCurso(criterio: number | string): CursoBusqueda | CursoBusqueda[] | undefined {
  if (typeof criterio === "number") {
    return catalogoCursos.find((c) => c.id === criterio);
  }
  const termino = criterio.toLowerCase();
  return catalogoCursos.filter((c) => c.titulo.toLowerCase().includes(termino));
}

const porIdCurso     = buscarCurso(2);
const porNombreCurso = buscarCurso("React");

console.log("Buscar por id 2:", porIdCurso);
console.log("Buscar por nombre 'React':", porNombreCurso);
````

## File: modulo_3/typescript_mp/23_ejemplo_tareas_mp.ts
````typescript
/**
 * ============================================
 * 23 - EJEMPLO COMBINADO: GESTION DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Sobrecargas, rest, opcionales, void/never,
 * orden superior, closures
 * Cursos Online: CRUD de cursos con busqueda por
 * prioridad, acumulador de estudiantes, validacion.
 * ============================================
 */

type PrioridadCurso = "alta" | "media" | "baja";
type CursoGestion = { id: number; titulo: string; prioridad: PrioridadCurso; horas: number };

function buscarCursoGestion(id: number): CursoGestion | undefined;
function buscarCursoGestion(prioridad: PrioridadCurso): CursoGestion[];
function buscarCursoGestion(criterio: number | PrioridadCurso): CursoGestion | CursoGestion[] | undefined {
  if (typeof criterio === "number") {
    return cursosGestion.find((c) => c.id === criterio);
  }
  return cursosGestion.filter((c) => c.prioridad === criterio);
}

function crearCursos(prioridad: PrioridadCurso = "media", ...titulos: string[]): CursoGestion[] {
  return titulos.map((titulo, i) => ({
    id: Date.now() + i,
    titulo,
    prioridad,
    horas: 0,
  }));
}

type AnalizadorCurso = (c: CursoGestion) => string;

const formatearCurso: AnalizadorCurso = (c) =>
  "[" + c.prioridad.toUpperCase().padEnd(5) + "] #" + c.id + ' "' + c.titulo + '" (' + c.horas + "h)";

function generarReporteCursos(lista: CursoGestion[], analizar: AnalizadorCurso): void {
  console.log("=== Reporte de Cursos ===");
  lista.forEach((c) => console.log(analizar(c)));
  const totalHoras = lista.reduce((acc, c) => acc + c.horas, 0);
  console.log("Total: " + lista.length + " cursos . " + totalHoras + "h estimadas");
}

function crearAcumuladorHoras() {
  let total = 0;
  return {
    agregar: (horas: number): void => { total += horas; },
    obtener: (): number => total,
  };
}

function validarCurso(c: CursoGestion): void {
  if (c.titulo.trim() === "") lanzarValidacionCurso("El titulo no puede estar vacio");
  if (c.horas < 0)            lanzarValidacionCurso("Las horas no pueden ser negativas");
}

function lanzarValidacionCurso(msg: string): never {
  throw new Error("Validacion fallida: " + msg);
}

const cursosGestion: CursoGestion[] = [
  { id: 1, titulo: "Diseniar API",       prioridad: "alta",  horas: 8 },
  { id: 2, titulo: "Escribir pruebas",   prioridad: "media", horas: 4 },
  { id: 3, titulo: "Actualizar docs",    prioridad: "baja",  horas: 2 },
  { id: 4, titulo: "Code review curso",  prioridad: "alta",  horas: 3 },
];

const acum = crearAcumuladorHoras();
cursosGestion.forEach((c) => {
  validarCurso(c);
  acum.agregar(c.horas);
});

generarReporteCursos(cursosGestion, formatearCurso);
console.log("Horas totales (closure): " + acum.obtener() + "h");

const altaPrioridad = buscarCursoGestion("alta");
const cursoId1      = buscarCursoGestion(1);

console.log("Cursos de alta prioridad:", altaPrioridad.map((c) => c.titulo));
console.log("Curso #1:", cursoId1?.titulo);
````

## File: modulo_3/typescript_mp/24_types_e_interfaces_mp.ts
````typescript
/**
 * 24 - TYPE ALIAS E INTERFACES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: type alias, interface, opcionales,
 * readonly, arrays inmutables
 * Cursos Online: ID de curso, Ticket de soporte,
 * Usuario del sistema, Curso como Producto,
 * ConfigAPI educativa.
 * ============================================
 */

type IDCurso = string | number;
type CoordenadasCurso = [number, number];

type PuntoCurso = {
  x: number;
  y: number;
};

const origenCurso: PuntoCurso = { x: 0, y: 0 };
const idCurso1: IDCurso = 42;
const idCurso2: IDCurso = "CUR-001";

console.log("Origen:", origenCurso, "IDs:", idCurso1, idCurso2);

type TicketID = string | number;
type PrioridadTicket = "baja" | "media" | "alta" | "critica";

type TicketSoporte = {
  id: TicketID;
  titulo: string;
  prioridad: PrioridadTicket;
  resuelta: boolean;
};

function imprimirTicket(t: TicketSoporte): void {
  const estrella = t.prioridad === "critica" ? " [!]" : "";
  console.log("[" + t.id + "] " + t.titulo + " - " + t.prioridad + estrella);
}

const tk1: TicketSoporte = { id: "T-001", titulo: "Error de login en curso", prioridad: "critica", resuelta: false };
const tk2: TicketSoporte = { id: 42, titulo: "Ajuste de fuente", prioridad: "baja", resuelta: true };

imprimirTicket(tk1);
imprimirTicket(tk2);

interface UsuarioPlataforma {
  readonly id: number;
  nombre: string;
  email: string;
  avatar?: string;
}

const u1: UsuarioPlataforma = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const u2: UsuarioPlataforma = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

console.log("Usuario 1:", u1.nombre, u1.email);
console.log("Usuario 2:", u2.nombre, u2.email, u2.avatar);

interface CursoProducto {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  disponible: boolean;
}

function mostrarCurso(p: CursoProducto): void {
  const desc = p.descripcion ? " - " + p.descripcion : "";
  const stock = p.disponible ? "Disponible" : "Agotado";
  console.log("[" + p.sku + "] " + p.nombre + " $" + p.precio + desc + " (" + stock + ")");
}

const cursoProducto1: CursoProducto = { sku: "TS-001", nombre: "TypeScript Pro", precio: 1299, descripcion: "40h, avanzado", disponible: true };
const cursoProducto2: CursoProducto = { sku: "NJS-042", nombre: "Node.js Basico", precio: 25, disponible: false };

mostrarCurso(cursoProducto1);
mostrarCurso(cursoProducto2);

interface ConfiguracionPlataforma {
  readonly host: string;
  readonly puerto: number;
  readonly secreto: string;
  reintentos: number;
}

const cfg: ConfiguracionPlataforma = { host: "db.cursos.com", puerto: 5432, secreto: "abc-xyz-123", reintentos: 3 };
cfg.reintentos = 5;

const ESTADOS_PERMITIDOS: readonly string[] = ["activo", "inactivo", "suspendido"];

console.log("Estados:", ESTADOS_PERMITIDOS);

type MetodoHTTP = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ConfigAPICursos {
  readonly baseUrl: string;
  readonly version: string;
  readonly metodosPermitidos: readonly MetodoHTTP[];
  timeoutMs: number;
}

const apiConfigCursos: ConfigAPICursos = {
  baseUrl: "https://api.cursos.com",
  version: "v2",
  metodosPermitidos: ["GET", "POST", "PUT", "DELETE"],
  timeoutMs: 5000,
};

function construirUrlCursos(config: ConfigAPICursos, ruta: string): string {
  return config.baseUrl + "/" + config.version + "/" + ruta.replace(/^\//, "");
}

console.log(construirUrlCursos(apiConfigCursos, "/cursos"));
````

## File: modulo_3/typescript_mp/26_type_vs_interface_extension_mp.ts
````typescript
/**
 * ============================================
 * 26 - TYPE VS INTERFACE, EXTENSION Y COMPOSICION
 * Tematica: Cursos Online
 * ============================================
 * Concepto: type vs interface, extends, interseccion (&),
 * herencia multiple
 * Cursos Online: CursoBase / CursoPremium, UsuarioSist
 * / Administrador con logging, extension de tipos.
 * ============================================
 */

type ResultadoCurso = "aprobado" | "reprobado" | "cursando";
type ParCurso = [string, number];

type PuntoTCurso = { x: number; y: number };

interface PuntoICurso {
  x: number;
  y: number;
}

const aCurso: PuntoTCurso = { x: 1, y: 2 };
const bCurso: PuntoICurso = { x: 1, y: 2 };

console.log("Mismo tipo:", JSON.stringify(aCurso) === JSON.stringify(bCurso));

interface CursoBase {
  titulo: string;
  duracionHoras: number;
}

interface CursoPremium extends CursoBase {
  precio: number;
  certificado: boolean;
}

const miCursoPremium: CursoPremium = {
  titulo: "TypeScript Avanzado",
  duracionHoras: 40,
  precio: 2500,
  certificado: true,
};

console.log("Curso Premium:", miCursoPremium.titulo, "$" + miCursoPremium.precio);

type AuditableCurso = {
  creadoEn: Date;
  actualizadoEn: Date;
};

type CursoInterseccion = {
  sku: string;
  precio: number;
} & AuditableCurso;

const prodCurso: CursoInterseccion = {
  sku: "TS-001",
  precio: 1299,
  creadoEn: new Date(),
  actualizadoEn: new Date(),
};

console.log("Curso auditable:", prodCurso.sku, "$" + prodCurso.precio);

interface SerializableCurso {
  toJSON(): string;
}

interface CloneableCurso {
  clonar(): this;
}

interface EntidadCurso extends SerializableCurso, CloneableCurso {
  id: number;
}

interface EntidadBaseCurso {
  readonly id: number;
  creadoEn: Date;
}

interface UsuarioSistema extends EntidadBaseCurso {
  nombre: string;
  email: string;
}

interface AdministradorCurso extends UsuarioSistema {
  permisos: string[];
  nivel: 1 | 2 | 3;
}

type AdminConLogCurso = AdministradorCurso & { ultimoAcceso: Date };

const adminCurso: AdminConLogCurso = {
  id: 1,
  creadoEn: new Date("2024-01-01"),
  nombre: "Sandra",
  email: "sandra@cursos.com",
  permisos: ["cursos:read", "cursos:write", "usuarios:read"],
  nivel: 2,
  ultimoAcceso: new Date(),
};

console.log("Admin:", adminCurso.nombre, "(nivel", adminCurso.nivel + ")");
console.log("Permisos:", adminCurso.permisos.join(", "));
````

## File: modulo_3/typescript_mp/27_index_signatures_mp.ts
````typescript
/**
 * ============================================
 * 27 - INDEX SIGNATURES Y Record<K, V>
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Index signatures, Record<K,V>
 * Cursos Online: Diccionario de estudiantes por
 * curso, inventario de contenido educativo, SKU
 * de cursos.
 * ============================================
 */

interface DiccionarioEstudiantes {
  [clave: string]: number;
}

const puntuacionesEst: DiccionarioEstudiantes = {
  Ana: 95,
  Luis: 87,
  Marta: 100,
};

puntuacionesEst["Pedro"] = 72;
console.log("Puntuaciones:", puntuacionesEst);

type MarcadorCurso = Record<string, number>;
const marcadorCurso: MarcadorCurso = { ts_avanzado: 40, node_basico: 30 };
console.log("Marcador:", marcadorCurso);

type InventarioCursos = Record<string, { cupos: number; ubicacion: string }>;

const almacenCursos: InventarioCursos = {
  "TS-001": { cupos: 12, ubicacion: "Plataforma, Modulo 3" },
  "NJS-042": { cupos: 50, ubicacion: "Plataforma, Modulo 1" },
  "RCT-007": { cupos: 8, ubicacion: "Plataforma, Modulo 5" },
};

function consultarCurso(sku: string): void {
  const item = almacenCursos[sku];
  if (item) {
    console.log(sku + ":", item.cupos, "cupos en", item.ubicacion);
  } else {
    console.log(sku + ": no encontrado en catalogo");
  }
}

consultarCurso("NJS-042");
consultarCurso("CAM-099");

for (const sku in almacenCursos) {
  console.log(sku, "->", almacenCursos[sku].cupos, "cupos");
}
````

## File: modulo_3/typescript_mp/28_funciones_en_interfaces_mp.ts
````typescript
/**
 * ============================================
 * 28 - TIPOS DE FUNCION DENTRO DE INTERFACES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Firmas de metodo en interfaces, propiedades
 * de tipo funcion (callbacks), callbacks opcionales
 * Cursos Online: Logger de plataforma educativa,
 * callbacks de notificaciones de cursos.
 * ============================================
 */

interface CalculadoraCurso {
  sumarNotas(a: number, b: number): number;
  restarNotas: (a: number, b: number) => number;
}

type CallbackCurso<T> = (error: Error | null, resultado: T | null) => void;

interface ManejadorCurso {
  onExito: (datos: string) => void;
  onError: (err: Error) => void;
  onFinalizar?: () => void;
}

type NivelLogCurso = "info" | "warn" | "error";

interface LoggerPlataforma {
  log(nivel: NivelLogCurso, mensaje: string): void;
  alerta: (mensaje: string) => void;
  onError?: (err: Error) => void;
}

const consoleLoggerCurso: LoggerPlataforma = {
  log(nivel, mensaje) {
    const prefijo = nivel === "error" ? "ERROR" : nivel === "warn" ? "AVISO" : "INFO";
    console.log("[" + prefijo + "]", mensaje);
  },
  alerta(mensaje) {
    console.log("[!] ALERTA:", mensaje);
  },
  onError(err) {
    console.log("Manejando error:", err.message);
  },
};

function procesarCursoLog(id: number, logger: LoggerPlataforma): void {
  logger.log("info", "Procesando curso #" + id + "...");
  if (id < 0) {
    logger.onError?.(new Error("ID de curso invalido"));
    return;
  }
  logger.log("info", "Curso #" + id + " procesado");
  logger.alerta("Curso #" + id + " listo para publicacion");
}

procesarCursoLog(101, consoleLoggerCurso);
procesarCursoLog(-5, consoleLoggerCurso);
````

## File: modulo_3/typescript_mp/29_uniones_discriminadas_mp.ts
````typescript
/**
 * ============================================
 * 29 - UNIONES DISCRIMINADAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Discriminated unions, narrowing automatico
 * con switch, switch exhaustivo con never
 * Cursos Online: Tipos de contenido educativo
 * (Video, PDF, Quiz, Examen), eventos de plataforma
 * (login, inscripcion, error).
 * ============================================
 */

type VideoContenido = {
  kind: "video";
  duracionMin: number;
};

type PdfContenido = {
  kind: "pdf";
  paginas: number;
};

type QuizContenido = {
  kind: "quiz";
  preguntas: number;
};

type TipoContenidoEducativo = VideoContenido | PdfContenido | QuizContenido;

function calcularDuracionContenido(f: TipoContenidoEducativo): number {
  switch (f.kind) {
    case "video":
      return f.duracionMin;
    case "pdf":
      return f.paginas * 2;
    case "quiz":
      return f.preguntas * 3;
  }
}

console.log("Duracion video (30min):", calcularDuracionContenido({ kind: "video", duracionMin: 30 }));
console.log("Duracion PDF (5 pag):", calcularDuracionContenido({ kind: "pdf", paginas: 5 }));

type EventoLoginCurso = {
  tipo: "login";
  usuarioId: number;
  timestamp: Date;
};

type EventoInscripcionCurso = {
  tipo: "inscripcion";
  usuarioId: number;
  cursoId: number;
};

type EventoErrorCurso = {
  tipo: "error";
  codigo: number;
  mensaje: string;
  critico: boolean;
};

type EventoPlataforma = EventoLoginCurso | EventoInscripcionCurso | EventoErrorCurso;

function procesarEventoPlataforma(evento: EventoPlataforma): string {
  switch (evento.tipo) {
    case "login":
      return "Usuario " + evento.usuarioId + " inicio sesion";
    case "inscripcion":
      return "Usuario " + evento.usuarioId + " se inscribio al curso " + evento.cursoId;
    case "error":
      const nivel = evento.critico ? "CRITICO" : "menor";
      return "Error " + nivel + " [" + evento.codigo + "]: " + evento.mensaje;
  }
}

const eventosPlataforma: EventoPlataforma[] = [
  { tipo: "login",       usuarioId: 1,  timestamp: new Date() },
  { tipo: "inscripcion", usuarioId: 1,  cursoId: 101 },
  { tipo: "error",       codigo: 500,   mensaje: "DB no disponible", critico: true },
  { tipo: "inscripcion", usuarioId: 7,  cursoId: 203 },
  { tipo: "error",       codigo: 404,   mensaje: "Curso no encontrado", critico: false },
];

for (const e of eventosPlataforma) {
  console.log(procesarEventoPlataforma(e));
}
````

## File: modulo_3/typescript_mp/31_ejemplo_empleados_mp.ts
````typescript
/**
 * ============================================
 * 31 - EJEMPLO COMBINADO: SISTEMA DE USUARIOS CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: type, interface, union discriminada,
 * extension, index signature, Record
 * Cursos Online: Roles de usuario (Estudiante,
 * Instructor, Admin) con tipos discriminados,
 * directorio de usuarios por categoria.
 * ============================================
 */

type UsuarioID = string;
type CategoriaUsuario = "programacion" | "diseno" | "negocios" | "idiomas";

interface EntidadBaseUsuarios {
  readonly id: UsuarioID;
  readonly registradoEn: Date;
}

type RolEstudiante = {
  rol: "estudiante";
  cursosInscriptos: number;
  nivel: "basico" | "intermedio" | "avanzado";
};

type RolInstructor = {
  rol: "instructor";
  cursosACargo: number;
  especialidad: string;
};

type RolAdmin = {
  rol: "admin";
  permisos: string[];
  nivel: 1 | 2 | 3;
};

type RolUsuarioSistema = RolEstudiante | RolInstructor | RolAdmin;

interface UsuarioSistema extends EntidadBaseUsuarios {
  nombre: string;
  email: string;
  categoria: CategoriaUsuario;
  info: RolUsuarioSistema;
}

type DirectorioUsuarios = Record<CategoriaUsuario, UsuarioSistema[]>;

function descripcionRolUsuario(info: RolUsuarioSistema): string {
  switch (info.rol) {
    case "estudiante":
      return "Estudiante " + info.nivel + " - " + info.cursosInscriptos + " cursos";
    case "instructor":
      return "Instructor (" + info.cursosACargo + " cursos, esp: " + info.especialidad + ")";
    case "admin":
      return "Admin nivel " + info.nivel + " - " + info.permisos.join(", ");
  }
}

function reporteUsuario(usr: UsuarioSistema): void {
  console.log("--", usr.nombre, "(" + usr.id + ") --");
  console.log("   Categoria:", usr.categoria);
  console.log("   Rol:", descripcionRolUsuario(usr.info));
}

const usuariosSistema: UsuarioSistema[] = [
  {
    id: "USR-001",
    registradoEn: new Date("2024-03-15"),
    nombre: "Laura Ruiz",
    email: "laura@cursos.com",
    categoria: "programacion",
    info: { rol: "estudiante", cursosInscriptos: 5, nivel: "avanzado" },
  },
  {
    id: "USR-002",
    registradoEn: new Date("2023-01-10"),
    nombre: "Carlos Vega",
    email: "carlos@cursos.com",
    categoria: "programacion",
    info: { rol: "instructor", cursosACargo: 3, especialidad: "TypeScript" },
  },
  {
    id: "USR-003",
    registradoEn: new Date("2024-02-01"),
    nombre: "Sofia Torres",
    email: "sofia@cursos.com",
    categoria: "diseno",
    info: { rol: "admin", permisos: ["usuarios:read", "cursos:write"], nivel: 2 },
  },
];

const directorioUsuarios: DirectorioUsuarios = {
  programacion: [],
  diseno: [],
  negocios: [],
  idiomas: [],
};

for (const usr of usuariosSistema) {
  directorioUsuarios[usr.categoria].push(usr);
}

console.log("=== REPORTE DE USUARIOS ===\n");
for (const usr of usuariosSistema) {
  reporteUsuario(usr);
}

console.log("\n=== DIRECTORIO POR CATEGORIA ===");
for (const cat in directorioUsuarios) {
  const lista = directorioUsuarios[cat as CategoriaUsuario];
  if (lista.length > 0) {
    console.log(cat + ":", lista.map((u) => u.nombre).join(", "));
  }
}
````

## File: modulo_3/typescript_mp/32_clases_basicas_mp.ts
````typescript
/**
 * ============================================
 * 32 - CLASES Y CONSTRUCTORES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Clases, constructor, propiedades,
 * metodos, parameter properties
 * Cursos Online: Clase Curso, Punto de control,
 * Temperatura de servidor, Usuario del sistema.
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Clase basica
// ──────────────────────────────────────────────

class CursoOnlineClase {
  titulo: string;
  precio: number;
  disponible: boolean;

  constructor(titulo: string, precio: number, disponible: boolean) {
    this.titulo = titulo;
    this.precio = precio;
    this.disponible = disponible;
  }

  describir(): string {
    const estado = this.disponible ? "disponible" : "no disponible";
    return this.titulo + " - $" + this.precio + " (" + estado + ")";
  }
}

const cursoClaseTS = new CursoOnlineClase("TypeScript Avanzado", 120, true);
const cursoClaseNode = new CursoOnlineClase("Node.js", 450, false);

console.log(cursoClaseTS.describir());
console.log(cursoClaseNode.describir());

// ──────────────────────────────────────────────
// A.2: Parameter properties (atajo)
// ──────────────────────────────────────────────

class PuntoControl {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class PuntoCursoClase {
  constructor(
    public x: number,
    public y: number
  ) {}

  distanciaAlOrigen(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const pcClase = new PuntoCursoClase(3, 4);
console.log("Punto:", pcClase.x, pcClase.y, "distancia:", pcClase.distanciaAlOrigen());

// ──────────────────────────────────────────────
// EJEMPLO: clase Temperatura
// ──────────────────────────────────────────────

class TemperaturaServidor {
  valorCelsius: number;

  constructor(celsius: number) {
    this.valorCelsius = celsius;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return this.valorCelsius + "C = " +
      this.aFahrenheit() + "F = " +
      this.aKelvin() + "K";
  }
}

const hervorClase = new TemperaturaServidor(100);
const congelacionClase = new TemperaturaServidor(0);

console.log(hervorClase.describir());
console.log(congelacionClase.describir());

// ──────────────────────────────────────────────
// EJEMPLO: clase Usuario con atajo
// ──────────────────────────────────────────────

class UsuarioCursoClase {
  constructor(
    public nombre: string,
    public email: string,
    public rol: "admin" | "instructor" | "estudiante"
  ) {}

  saludo(): string {
    return "Hola, " + this.nombre + ". Rol: \"" + this.rol + "\".";
  }
}

const anaClase = new UsuarioCursoClase("Ana", "ana@cursos.com", "admin");
const luisClase = new UsuarioCursoClase("Luis", "luis@cursos.com", "estudiante");

console.log(anaClase.saludo());
console.log(luisClase.email);
````

## File: modulo_3/typescript_mp/33_modificadores_acceso_mp.ts
````typescript
/**
 * ============================================
 * 33 - MODIFICADORES DE ACCESO, GETTERS Y SETTERS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: public, private, protected, readonly,
 * getters/setters con validacion
 * Cursos Online: CuentaEstudiante con saldo,
 * Circulo con radio, Porcentaje de progreso.
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Modificadores de acceso
// ──────────────────────────────────────────────

class CuentaEstudiante {
  readonly id: string;
  public titular: string;
  private saldo: number;
  protected moneda: string;

  constructor(id: string, titular: string, saldoInicial: number) {
    this.id = id;
    this.titular = titular;
    this.saldo = saldoInicial;
    this.moneda = "USD";
  }

  obtenerSaldo(): number {
    return this.saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto invalido");
    this.saldo += monto;
  }
}

const cuentaEst = new CuentaEstudiante("CUE-001", "Ana Garcia", 1000);
console.log("Titular:", cuentaEst.titular);
console.log("ID:", cuentaEst.id);
console.log("Saldo:", cuentaEst.obtenerSaldo());
cuentaEst.depositar(500);
console.log("Saldo tras deposito:", cuentaEst.obtenerSaldo());

// cuenta.saldo = 9999;  // Error: private
// cuenta.id = "otro";   // Error: readonly

// ──────────────────────────────────────────────
// B.2: Getters y setters (get / set)
// ──────────────────────────────────────────────

/**
 * Los get/set permiten acceder a una propiedad con logica integrada,
 * manteniendo sintaxis de acceso natural (sin parentesis al leer).
 * Convencion: propiedad privada _nombre, getter/setter nombre.
 */

class Circulo {
  private _radio: number;

  constructor(radio: number) {
    this._radio = radio;
  }

  get radio(): number {
    return this._radio;
  }

  set radio(valor: number) {
    if (valor <= 0) throw new Error("El radio debe ser positivo");
    this._radio = valor;
  }

  get area(): number {
    return Math.PI * this._radio ** 2;
  }
}

const c = new Circulo(5);
console.log("Radio:", c.radio);       // 5
console.log("Area:", c.area.toFixed(2)); // 78.54

c.radio = 10;                          // usa el setter
console.log("Area (nuevo radio):", c.area.toFixed(2)); // 314.16

// c.radio = -3;  // Error

// ──────────────────────────────────────────────
// EJEMPLO: Clase Porcentaje
// ──────────────────────────────────────────────

class Porcentaje {
  private _valor: number;

  constructor(valor: number) {
    this._valor = 0;
    this.valor = valor; // pasa por el setter para validar
  }

  get valor(): number {
    return this._valor;
  }

  set valor(v: number) {
    if (v < 0 || v > 100) {
      throw new Error("Porcentaje invalido: " + v + ". Debe estar entre 0 y 100.");
    }
    this._valor = v;
  }

  get complemento(): number {
    return 100 - this._valor;
  }

  toString(): string {
    return this._valor + "% (complemento: " + this.complemento + "%)";
  }
}

const descuento = new Porcentaje(25);
console.log(descuento.toString());
descuento.valor = 40;
console.log(descuento.toString());

// new Porcentaje(150);  // Error
````

## File: modulo_3/typescript_mp/34_herencia_abstractas_mp.ts
````typescript
/**
 * 34 - HERENCIA Y CLASES ABSTRACTAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: extends, super(), override, abstract
 * Cursos Online: Persona (Estudiante/Instructor),
 * Contenido abstracto (Video, PDF, Quiz),
 * MetodoPago para inscripciones.
 * ============================================
 */

// ──────────────────────────────────────────────
// Herencia
// ──────────────────────────────────────────────

class Persona {
  constructor(public nombre: string) {}
  presentarse(): string { return this.nombre + " es una persona."; }
}

class EstudianteHerencia extends Persona {
  constructor(nombre: string, public curso: string) { super(nombre); }
  override presentarse(): string { return this.nombre + " estudia " + this.curso + "."; }
  estudiar(): string { return this.nombre + " esta estudiando " + this.curso + "."; }
}

const pers = new Persona("Carlos");
const est = new EstudianteHerencia("Ana", "TypeScript");
console.log(pers.presentarse());
console.log(est.presentarse());
console.log(est.estudiar());

// ──────────────────────────────────────────────
// Clases abstractas
// ──────────────────────────────────────────────

abstract class Figura {
  abstract area(): number;
  abstract perimetro(): number;
  describir(): string {
    return `Area: ${this.area().toFixed(2)} | Perimetro: ${this.perimetro().toFixed(2)}`;
  }
}

class Circulo2 extends Figura {
  constructor(private radio: number) { super(); }
  override area(): number { return Math.PI * this.radio ** 2; }
  override perimetro(): number { return 2 * Math.PI * this.radio; }
}

class Rectangulo2 extends Figura {
  constructor(private ancho: number, private alto: number) { super(); }
  override area(): number { return this.ancho * this.alto; }
  override perimetro(): number { return 2 * (this.ancho + this.alto); }
}

// const f = new Figura(); // Error: abstracta

const circulo = new Circulo2(5);
const rect = new Rectangulo2(4, 6);
console.log(circulo.describir());
console.log(rect.describir());

// ──────────────────────────────────────────────
// Sistema de pagos (abstract)
// ──────────────────────────────────────────────

abstract class MetodoPago {
  constructor(protected titular: string) {}
  abstract procesar(monto: number): string;
  abstract validar(): boolean;

  resumen(monto: number): string {
    if (!this.validar()) return `[${this.titular}] Pago rechazado`;
    return this.procesar(monto);
  }
}

class TarjetaCredito extends MetodoPago {
  constructor(titular: string, private ultimos4: string, private saldoDisponible: number) {
    super(titular);
  }
  override validar(): boolean { return this.ultimos4.length === 4 && this.saldoDisponible > 0; }
  override procesar(monto: number): string {
    if (monto > this.saldoDisponible) return "Fondos insuficientes";
    this.saldoDisponible -= monto;
    return `Tarjeta ****${this.ultimos4}: $${monto} aprobado. Restante: $${this.saldoDisponible}`;
  }
}

class TransferenciaBancaria extends MetodoPago {
  constructor(titular: string, private clabe: string) { super(titular); }
  override validar(): boolean { return this.clabe.length === 18; }
  override procesar(monto: number): string {
    return `Transferencia de $${monto} a CLABE ${this.clabe.slice(-4).padStart(18, "*")}`;
  }
}

const tarjeta = new TarjetaCredito("Ana", "4321", 500);
const transferencia = new TransferenciaBancaria("Luis", "123456789012345678");
console.log(tarjeta.resumen(200));
console.log(transferencia.resumen(1000));
````

## File: modulo_3/typescript_mp/35_implements_static_polimorfismo_mp.ts
````typescript
/**
 * 35 - IMPLEMENTS, STATIC Y POLIMORFISMO
 * Tematica: Cursos Online
 * ============================================
 * Concepto: implements, static, polimorfismo
 * Cursos Online: CursoPedido (Serializable/Validable),
 * Matematica (PI, potencia), Forma geometrica
 * con polimorfismo de areas.
 * ============================================
 */

// ──────────────────────────────────────────────
// implements
// ──────────────────────────────────────────────

interface Serializable { serializar(): string; }
interface Validable { esValido(): boolean; }

class CursoPedidoExport implements Serializable, Validable {
  constructor(
    public id: string,
    public modulos: string[],
    public precio: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, modulos: this.modulos, precio: this.precio });
  }
  esValido(): boolean { return this.modulos.length > 0 && this.precio > 0; }
}

const cursoPedidoExport = new CursoPedidoExport("C-001", ["TS Basico", "TS Avanzado"], 150);
console.log("Valido:", cursoPedidoExport.esValido());
console.log("Serializado:", cursoPedidoExport.serializar());

// ──────────────────────────────────────────────
// Miembros estaticos (static)
// ──────────────────────────────────────────────

class Matematica {
  static readonly PI: number = 3.14159265;
  static circunferencia(radio: number): number { return 2 * Matematica.PI * radio; }
  static potencia(base: number, exp: number): number { return base ** exp; }
}

console.log("PI:", Matematica.PI);
console.log("Circunferencia r=5:", Matematica.circunferencia(5));
console.log("2^10:", Matematica.potencia(2, 10));

// ──────────────────────────────────────────────
// Polimorfismo
// ──────────────────────────────────────────────

class Forma {
  nombre(): string { return "Forma"; }
  area(): number { return 0; }
}

class Circulo3 extends Forma {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Circulo"; }
  override area(): number { return Math.PI * this.r ** 2; }
}

class Triangulo extends Forma {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Triangulo"; }
  override area(): number { return (this.base * this.altura) / 2; }
}

class Cuadrado extends Forma {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Cuadrado"; }
  override area(): number { return this.lado ** 2; }
}

const formas: Forma[] = [
  new Circulo3(3), new Triangulo(6, 4), new Cuadrado(5),
];

for (const f of formas) {
  console.log(`${f.nombre()}: area = ${f.area().toFixed(2)}`);
}
````

## File: modulo_3/typescript_mp/36_ejemplo_biblioteca_mp.ts
````typescript
/**
 * ============================================
 * 36 - EJEMPLO COMBINADO: PLATAFORMA DE CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Clases, herencia, abstract, implements,
 * static, polimorfismo
 * Cursos Online: RecursoEducativo abstracto con
 * clases Curso, Leccion, Examen, VideoTutorial.
 * ============================================
 */

interface PrestableCurso {
  inscribir(usuario: string): boolean;
  desinscribir(): void;
  estaDisponible(): boolean;
}

abstract class RecursoEducativo implements PrestableCurso {
  private static totalRecursos: number = 0;
  readonly id: number;
  protected _usuarioActual: string | null = null;

  constructor(public titulo: string, public autor: string) {
    RecursoEducativo.totalRecursos++;
    this.id = RecursoEducativo.totalRecursos;
  }

  static contarRecursos(): number {
    return RecursoEducativo.totalRecursos;
  }

  abstract tipo(): string;

  inscribir(usuario: string): boolean {
    if (!this.estaDisponible()) return false;
    this._usuarioActual = usuario;
    return true;
  }

  desinscribir(): void {
    this._usuarioActual = null;
  }

  estaDisponible(): boolean {
    return this._usuarioActual === null;
  }

  fichaCurso(): string {
    const estado = this.estaDisponible()
      ? "Disponible"
      : "Inscrito por: " + this._usuarioActual;
    return "[" + this.tipo() + "] #" + this.id + ' "' + this.titulo + '" - ' +
           this.autor + " | " + estado;
  }
}

class CursoRecurso extends RecursoEducativo {
  constructor(
    titulo: string,
    autor: string,
    public readonly modulos: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Curso"; }
}

class LeccionRecurso extends RecursoEducativo {
  constructor(
    titulo: string,
    autor: string,
    public readonly duracionMin: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Leccion"; }
}

class ExamenRecurso extends RecursoEducativo {
  constructor(
    titulo: string,
    autor: string,
    public readonly preguntas: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Examen"; }

  duracionFormateada(): string {
    return this.preguntas * 2 + " min estimados";
  }
}

const plataformaCursos: RecursoEducativo[] = [
  new CursoRecurso("TypeScript Avanzado", "Francisco Higuera", 10),
  new LeccionRecurso("Introduccion a TS", "Ana Lopez", 45),
  new ExamenRecurso("Examen Modulo 1", "Admin", 20),
  new CursoRecurso("Clean Code", "Robert Martin", 8),
];

console.log("=== Plataforma de Cursos ===");
for (const recurso of plataformaCursos) {
  console.log(recurso.fichaCurso());
}

console.log("\nTotal de recursos: " + RecursoEducativo.contarRecursos());

plataformaCursos[0].inscribir("Ana");
plataformaCursos[2].inscribir("Luis");

console.log("\n=== Estado tras inscripciones ===");
for (const recurso of plataformaCursos) {
  console.log(recurso.fichaCurso());
}

const examen = plataformaCursos[2] as ExamenRecurso;
console.log('\nDuracion de "' + examen.titulo + '": ' + examen.duracionFormateada());

plataformaCursos[0].desinscribir();
console.log('\n"' + plataformaCursos[0].titulo + '" disponible:', plataformaCursos[0].estaDisponible());
````

## File: modulo_3/typescript_mp/38_funciones_genericas_mp.ts
````typescript
/**
 * 38 - FUNCIONES GENERICAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: <T>, inferencia, <K, V>, funciones
 * genericas, flechas genericas
 * Cursos Online: primero/ultimo de listas de cursos,
 * crearPar clave-valor, copiar arrays, crearMapa
 * de estudiantes por rol.
 * ============================================
 */

function primerCurso(arr: number[]): number { return arr[0]; }
function primerCursoTexto(arr: string[]): string { return arr[0]; }
function primeroAnyCurso(arr: any[]): any { return arr[0]; }

function primero<T>(arr: T[]): T { return arr[0]; }

const nCurso = primero([10, 20, 30]);
const sCurso = primero(["TypeScript", "Node"]);
console.log("Primero:", nCurso, sCurso);

function ultimo<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log("Ultimo [1,2,3]:", ultimo([1, 2, 3]));
console.log("Ultimo []:", ultimo([]));

function identidad<T>(valor: T): T { return valor; }

const aG = identidad(42);
const bG = identidad("TypeScript");
const cG = identidad(true);
const dG = identidad<number[]>([1, 2, 3]);

console.log("identidad:", aG, bG, cG);

const copiarCurso = <T,>(arr: T[]): T[] => [...arr];

function repetirCurso<T>(valor: T, veces: number): T[] {
  return Array.from({ length: veces }, () => valor);
}

console.log("repetirCurso('Leccion', 3):", repetirCurso("Leccion", 3));
console.log("repetirCurso(0, 5):", repetirCurso(0, 5));

function crearParCurso<K, V>(clave: K, valor: V): [K, V] {
  return [clave, valor];
}

const par1G = crearParCurso("duracion", 40);
const par2G = crearParCurso(1, true);
console.log("par1:", par1G, "par2:", par2G);

function crearMapaCursos<K extends string, V>(entradas: Array<[K, V]>): Map<K, V> {
  return new Map(entradas);
}

const rolesCurso = crearMapaCursos([
  ["instructor", ["crear", "editar", "borrar"]],
  ["estudiante", ["ver", "completar"]],
]);

console.log("roles instructor:", rolesCurso.get("instructor"));
````

## File: modulo_3/typescript_mp/39_restricciones_keyof_mp.ts
````typescript
/**
 * ============================================
 * 39 - RESTRICCIONES (extends) Y keyof
 * Tematica: Cursos Online
 * ============================================
 * Concepto: <T extends { id: number }>, <T extends keyof U>,
 * acceso seguro con genericos
 * Cursos Online: Buscar por ID en cursos y usuarios,
 * acceder a propiedades con keyof, seleccionar
 * columnas (nombre, precio) de cursos.
 * ============================================
 */

function buscarPorIdCurso<T extends { id: number }>(lista: T[], id: number): T | undefined {
  return lista.find((item) => item.id === id);
}

const usuariosCurso = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
console.log("Buscar id 2:", buscarPorIdCurso(usuariosCurso, 2));

const cursosBusqueda = [
  { id: 10, nombre: "TypeScript", precio: 2500 },
  { id: 11, nombre: "Node.js", precio: 1800 },
];
console.log("Buscar id 11:", buscarPorIdCurso(cursosBusqueda, 11));

function propCurso<T, K extends keyof T>(obj: T, k: K): T[K] {
  return obj[k];
}

const personaCurso = { nombre: "Ana", edad: 30, activa: true };

const propNombreCurso = propCurso(personaCurso, "nombre");
const propEdadCurso   = propCurso(personaCurso, "edad");

console.log("prop nombre:", propNombreCurso, "prop edad:", propEdadCurso);

function seleccionarColumnasCurso<T, K extends keyof T>(
  lista: T[],
  ...campos: K[]
): Pick<T, K>[] {
  return lista.map((item) => {
    const resultado = {} as Pick<T, K>;
    campos.forEach((campo) => {
      resultado[campo] = item[campo];
    });
    return resultado;
  });
}

const cursosGrid = [
  { id: 1, nombre: "TypeScript", precio: 2500, cupos: 12 },
  { id: 2, nombre: "Node.js",    precio: 1800, cupos: 50 },
  { id: 3, nombre: "React",      precio: 1200, cupos: 8 },
];

const resumenCurso = seleccionarColumnasCurso(cursosGrid, "nombre", "precio");
console.log("Columnas seleccionadas:", resumenCurso);
````

## File: modulo_3/typescript_mp/40_interfaces_clases_genericas_mp.ts
````typescript
/**
 * ============================================
 * 40 - INTERFACES Y CLASES GENERICAS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Interface generica <T>, clase generica
 * Pila<T>, Resultado con error tipado
 * Cursos Online: Caja<Curso>, RespuestaApi<Curso[]>,
 * Pila<Leccion>, Resultado<number> en calculos
 * educativos.
 * ============================================
 */

interface CajaCurso<T> {
  valor: T;
  etiqueta: string;
  creada: Date;
}

const cajaNumCurso: CajaCurso<number> = {
  valor: 42,
  etiqueta: "total cursos",
  creada: new Date(),
};

const cajaStrCurso: CajaCurso<string> = {
  valor: "TypeScript Avanzado",
  etiqueta: "curso popular",
  creada: new Date(),
};

console.log("cajaNum:", cajaNumCurso.valor, cajaNumCurso.etiqueta);
console.log("cajaStr:", cajaStrCurso.valor, cajaStrCurso.etiqueta);

interface RespuestaApiCurso<T> {
  datos: T;
  exito: boolean;
  mensaje: string;
  total?: number;
}

const respuestaApiCurso: RespuestaApiCurso<{ id: number; nombre: string }[]> = {
  datos: [{ id: 1, nombre: "TypeScript" }, { id: 2, nombre: "Node.js" }],
  exito: true,
  mensaje: "Cursos cargados",
  total: 2,
};

console.log("API respuesta:", respuestaApiCurso.exito, respuestaApiCurso.datos.length);

class PilaCurso<T> {
  private elementos: T[] = [];

  push(item: T): void {
    this.elementos.push(item);
  }

  pop(): T | undefined {
    return this.elementos.pop();
  }

  peek(): T | undefined {
    return this.elementos[this.elementos.length - 1];
  }

  get tamano(): number {
    return this.elementos.length;
  }

  estaVacia(): boolean {
    return this.elementos.length === 0;
  }
}

const pilaCursos = new PilaCurso<string>();
pilaCursos.push("TypeScript");
pilaCursos.push("Node.js");
pilaCursos.push("React");
console.log("Pila peek:", pilaCursos.peek());
console.log("Pila pop:", pilaCursos.pop());
console.log("Pila tamano:", pilaCursos.tamano);

interface ResultadoCurso<T, E = string> {
  ok: boolean;
  valor?: T;
  error?: E;
}

function dividirCurso(a: number, b: number): ResultadoCurso<number> {
  if (b === 0) return { ok: false, error: "Division por cero en nota" };
  return { ok: true, valor: a / b };
}

const r1Curso = dividirCurso(10, 2);
const r2Curso = dividirCurso(5, 0);
if (r1Curso.ok) console.log("Resultado:", r1Curso.valor);
if (!r2Curso.ok) console.log("Error:", r2Curso.error);
````

## File: modulo_3/typescript_mp/41_default_utility_types_mp.ts
````typescript
/**
 * ============================================
 * 41 - VALORES POR DEFECTO Y UTILITY TYPES
 * Tematica: Cursos Online
 * ============================================
 * Concepto: <T = string>, Partial, Required, Pick,
 * Omit, Record, Readonly
 * Cursos Online: Config de plataforma, opciones de
 * busqueda de cursos, crear/editar cursos con
 * Partial/Omit/Pick, roles con Record.
 * ============================================
 */

interface RespuestaCurso<T = string> {
  datos: T;
  codigo: number;
}

const r1Curso: RespuestaCurso = { datos: "Curso encontrado", codigo: 200 };
const r2Curso: RespuestaCurso<number[]> = { datos: [101, 102, 103], codigo: 200 };

console.log("Respuesta default:", r1Curso.datos);
console.log("Respuesta explicita:", r2Curso.datos);

interface ConfigPlataforma {
  host: string;
  puerto: number;
  debug: boolean;
  timeout: number;
}

function actualizarConfigCurso(base: ConfigPlataforma, cambios: Partial<ConfigPlataforma>): ConfigPlataforma {
  return { ...base, ...cambios };
}

const cfgCurso: ConfigPlataforma = { host: "api.cursos.com", puerto: 8080, debug: false, timeout: 3000 };
const nuevaConfigCurso = actualizarConfigCurso(cfgCurso, { debug: true, puerto: 9090 });
console.log("Partial:", nuevaConfigCurso);

interface OpcionesBusquedaCurso {
  query?: string;
  pagina?: number;
  limite?: number;
}
const opcionesCurso: Required<OpcionesBusquedaCurso> = { query: "TypeScript", pagina: 1, limite: 10 };
console.log("Required:", opcionesCurso);

interface CursoCompleto {
  id: number; nombre: string; precio: number; cupos: number; instructor: string;
}
type CursoResumen = Pick<CursoCompleto, "id" | "nombre" | "precio">;
const resumenCurso: CursoResumen = { id: 1, nombre: "TypeScript", precio: 2500 };
console.log("Pick:", resumenCurso);

type CursoNuevo = Omit<CursoCompleto, "id">;
const nuevoCursoRecurso: CursoNuevo = { nombre: "React", precio: 1200, cupos: 15, instructor: "Ana" };
console.log("Omit:", nuevoCursoRecurso);

type RolPlataforma = "admin" | "instructor" | "estudiante";
const permisosCurso: Record<RolPlataforma, string[]> = {
  admin:      ["crear", "editar", "borrar"],
  instructor: ["crear", "editar"],
  estudiante: ["ver"],
};
console.log("Record:", permisosCurso);

const origenCursoReadonly: Readonly<{ x: number; y: number }> = { x: 0, y: 0 };
console.log("Readonly:", origenCursoReadonly);
````

## File: modulo_3/typescript_mp/42_ejemplo_cache_mp.ts
````typescript
/**
 * ============================================
 * 42 - EJEMPLO COMBINADO: CACHE DE SESIONES CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Genericos, restricciones, keyof,
 * clases genericas, utility types
 * Cursos Online: Cache de sesiones de estudiantes
 * con expiracion, tipos de entidad educativa.
 * ============================================
 */

interface EntradaCacheCurso<T> {
  valor: T;
  expiraEn: number;
}

interface EntidadCursoCache {
  id: number;
}

class CacheSesionesCurso<T extends EntidadCursoCache> {
  private almacen = new Map<number, EntradaCacheCurso<T>>();

  guardar(item: T, ttlMs: number): void {
    this.almacen.set(item.id, {
      valor: item,
      expiraEn: Date.now() + ttlMs,
    });
  }

  obtener(id: number): T | undefined {
    const entrada = this.almacen.get(id);
    if (!entrada) return undefined;
    if (Date.now() > entrada.expiraEn) {
      this.almacen.delete(id);
      return undefined;
    }
    return entrada.valor;
  }

  campo<K extends keyof T>(id: number, clave: K): T[K] | undefined {
    return this.obtener(id)?.[clave];
  }

  resumenActivo(): Pick<T, "id">[] {
    const resultado: Pick<T, "id">[] = [];
    for (const [id, entrada] of this.almacen) {
      if (Date.now() <= entrada.expiraEn) {
        resultado.push({ id } as Pick<T, "id">);
      }
    }
    return resultado;
  }
}

interface SesionCurso extends EntidadCursoCache {
  usuario: string;
  rol: "admin" | "instructor" | "estudiante";
  ip: string;
}

const cacheSesionesCurso = new CacheSesionesCurso<SesionCurso>();

cacheSesionesCurso.guardar({ id: 1, usuario: "ana", rol: "admin", ip: "10.0.0.1" }, 60_000);
cacheSesionesCurso.guardar({ id: 2, usuario: "luis", rol: "estudiante", ip: "10.0.0.2" }, 60_000);

console.log("Obtener 1:", cacheSesionesCurso.obtener(1)?.usuario);
console.log("Campo 2 rol:", cacheSesionesCurso.campo(2, "rol"));

type ActualizacionSesionCurso = Partial<Omit<SesionCurso, "id">>;

function aplicarCambiosCurso(base: SesionCurso, cambios: ActualizacionSesionCurso): SesionCurso {
  return { ...base, ...cambios };
}

const sesionActualizadaCurso = aplicarCambiosCurso(
  cacheSesionesCurso.obtener(1)!,
  { rol: "estudiante", ip: "10.0.0.99" }
);
console.log("Sesion actualizada:", sesionActualizadaCurso);

console.log("Sesiones activas:", cacheSesionesCurso.resumenActivo());
````

## File: modulo_3/typescript_mp/index.ts
````typescript
/**
 * ============================================
 * MODULO 3 - FUNDAMENTOS DE TYPESCRIPT
 * Tema: Cursos Online
 * ============================================
 * Tutorial del profesor Francisco Higuera
 *
 * Archivos de contenido (_mp = modulo proyecto):
 *   01_introduccion_typescript_mp.ts   -> Que es TS, entorno, strict mode
 *   02_variables_y_anotaciones_mp.ts   -> const/let, anotacion vs inferencia
 *   04_template_literals_mp.ts         -> Template literals, logs tipados
 *   05_compilador_seguridad_mp.ts      -> Evitar any, unknown, strict mode
 *   06_ejemplo_calculadora_cursos_mp.ts -> Calculadora de precios de cursos
 *   07_tipos_primitivos_detalle_mp.ts  -> number, string, boolean, null/undefined
 *   08_arrays_mp.ts                    -> Arrays, metodos, arrays de objetos
 *   09_tuplas_mp.ts                    -> Tuplas, retorno multiple
 *   10_enums_mp.ts                     -> Enums y union de literales
 *   11_union_literal_types_mp.ts       -> Union types y literal types
 *   12_any_unknown_never_mp.ts         -> any, unknown, never, switch exhaustivo
 *   13_type_narrowing_mp.ts            -> typeof, in, Array.isArray, switch
 *   14_objetos_inline_mp.ts            -> Objetos inline, opcionales, readonly
 *   15_ejemplo_catalogo_cursos_mp.ts   -> Catalogo de cursos online
 *   16_condicionales_mp.ts             -> if, if/else, switch, anidadas
 *   17_bucles_mp.ts                    -> for, for...of, for...in, while, break/continue
 *   18_ejemplo_monitor_cursos_mp.ts    -> Monitor de cursos activos
 *   19_funciones_declaracion_mp.ts     -> Parametros tipados, flecha
 *   20_parametros_y_retorno_mp.ts      -> Opcionales, default, rest, void/never
 *   21_orden_superior_closures_mp.ts   -> Higher-order, callbacks, closures
 *   22_sobrecargas_mp.ts               -> Function overloads
 *   23_ejemplo_gestion_cursos_mp.ts    -> Gestion de cursos (ejemplo final)
 *   24_types_e_interfaces_mp.ts        -> type alias, interface, readonly
 *   26_type_vs_interface_extension_mp.ts -> type vs interface, extends, &
 *   27_index_signatures_mp.ts          -> [clave: string] y Record<K,V>
 *   28_funciones_en_interfaces_mp.ts   -> Firmas de metodo y callback
 *   29_uniones_discriminadas_mp.ts     -> Discriminated unions y switch exhaustivo
 *   31_ejemplo_usuarios_cursos_mp.ts   -> Sistema de usuarios de cursos
 *   32_clases_basicas_mp.ts            -> Clases, constructor, parameter properties
 *   33_modificadores_acceso_mp.ts      -> public/private/protected, get/set
 *   34_herencia_abstractas_mp.ts       -> extends, super, override, abstract
 *   35_implements_static_polimorfismo_mp.ts -> implements, static, polimorfismo
 *   36_ejemplo_plataforma_cursos_mp.ts -> Plataforma de cursos (ejemplo)
 *   38_funciones_genericas_mp.ts       -> <T>, <K,V>, motivacion
 *   39_restricciones_keyof_mp.ts       -> extends, keyof, acceso generico
 *   40_interfaces_clases_genericas_mp.ts -> Interface y clase generica
 *   41_default_utility_types_mp.ts     -> Default types, Partial, Pick, Omit, etc.
 *   42_ejemplo_cache_cursos_mp.ts      -> Cache de sesiones (ejemplo final)
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
 *   Ej: npx tsx 32_clases_basicas_mp.ts
 *       npx tsx ejercicios/06_poo-ejercicio_01.ts
 * ============================================
 */

console.log(`
============================================
  MODULO 3 - FUNDAMENTOS DE TYPESCRIPT
  Tema: Cursos Online
============================================
  Usa este indice para navegar los archivos.

  Contenido (npx tsx XX_*_mp.ts):
     01  -> Introduccion a TypeScript
     02  -> Variables y anotaciones
     04  -> Template literals
     05  -> Compilador como seguridad
     06  -> Calculadora de precios de cursos
     07  -> Tipos primitivos (detalle)
     08  -> Arrays
     09  -> Tuplas
     10  -> Enums
     11  -> Union y literal types
     12  -> any, unknown, never
     13  -> Type narrowing
     14  -> Objetos inline
     15  -> Catalogo de cursos (ejemplo)
     16  -> Condicionales
     17  -> Bucles
     18  -> Monitor de cursos (ejemplo)
     19  -> Declaracion de funciones
     20  -> Parametros avanzados
     21  -> Orden superior y closures
     22  -> Sobrecargas
     23  -> Gestion de cursos (ejemplo)
     24  -> Type alias + Interface + Readonly
     26  -> Type vs interface / extension
     27  -> Index signatures y Record
     28  -> Funciones en interfaces
     29  -> Uniones discriminadas
     31  -> Sistema de usuarios de cursos (ejemplo)
     32  -> Clases basicas
     33  -> Modificadores de acceso
     34  -> Herencia y abstractas
     35  -> Implements, static, polimorfismo
     36  -> Plataforma de cursos (ejemplo)
     38  -> Funciones genericas
     39  -> Restricciones y keyof
     40  -> Interfaces y clases genericas
     41  -> Default types y utility types
     42  -> Cache de sesiones de cursos (ejemplo)

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
````

## File: modulo_3/typescript_mp/package.json
````json
{
  "name": "typescript-fundamentos",
  "private": true,
  "version": "1.0.0",
  "description": "Fundamentos de TypeScript - Tutorial del profesor Francisco Higuera",
  "scripts": {
    "dev": "npx tsx"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tsx": "^4.19.0"
  }
}
````

## File: modulo_3/typescript_mp/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["./**/*.ts"],
  "exclude": ["node_modules"]
}
````

## File: modulo_3/typescript/01_introduccion_typescript.ts
````typescript
/**
 * ============================================
 * 01 - INTRODUCCION A TYPESCRIPT
 * ============================================
 * Temas:
 *   - Que es TypeScript y por que tipos
 *   - El problema que TypeScript resuelve
 *   - Entorno de desarrollo (instalacion)
 *   - tsconfig.json y el modo estricto (strict)
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE A: QUE ES TYPESCRIPT
// ──────────────────────────────────────────────

/**
 * TypeScript es un superconjunto de JavaScript que anade
 * tipos estaticos y un compilador que detecta errores
 * ANTES de que el codigo llegue a produccion.
 *
 * Beneficio clave: los errores aparecen en el editor
 * (linea roja) mientras escribes, no cuando el usuario
 * ya esta usando la aplicacion.
 */

// ──────────────────────────────────────────────
// A.1: El problema que TypeScript resuelve
// ──────────────────────────────────────────────

// --- JavaScript puro (sin tipos) ---

/**
 * En JavaScript, cualquier funcion puede recibir
 * argumentos de cualquier tipo sin que el editor avise.
 *
 * NOTA DEL CORRECTOR:
 * El profesor escribe que aplicarDescuento("250", 10) produce NaN.
 * En realidad, JavaScript CONVIERTE automaticamente strings a
 * numeros con los operadores -, * y /. Por lo tanto:
 *   "250" * 0.1 = 25  y  "250" - 25 = 225
 * El resultado es 225 (NO NaN). Funciona "de casualidad".
 *
 * El peligro real esta en el operador +, que CONCATENA en lugar
 * de sumar cuando hay un string de por medio.
 */

function aplicarDescuentoJS(precio, pct) {
  return precio - precio * (pct / 100);
}

// En JS estas llamadas "funcionan" por coercion automatica
// pero es un comportamiento accidental e inseguro:
console.log("JS con string:", aplicarDescuentoJS("250", 10)); // 225 (funciona de casualidad)
console.log("JS con string:", aplicarDescuentoJS(250, "10")); // 225 (idem)

// --- TypeScript (con tipos) ---
// Anadimos :number a los parametros para que TS verifique los tipos.

function aplicarDescuentoTS(precio: number, pct: number): number {
  return precio - precio * (pct / 100);
}

// La siguiente linea NO compila - TS la rechaza antes de ejecutar:
// aplicarDescuentoTS("250", 10);
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log("TS correcto:", aplicarDescuentoTS(250, 10)); // 225

// --- Ejemplo del bug REAL con el operador + ---
// El operador + SI causa concatenacion cuando hay un string:

function calcularTotalJS(precio, impuesto) {
  return precio + precio * (impuesto / 100);
}

// En JS, "250" + 25 = "25025" (concatenacion) - BUG REAL
console.log("JS bug con +:", calcularTotalJS("250", 10)); // "25025" - error

function calcularTotalTS(precio: number, impuesto: number): number {
  return precio + precio * (impuesto / 100);
}

// calcularTotalTS("250", 10); // Error: TS lo detecta
console.log("TS correcto:", calcularTotalTS(250, 10)); // 275

// ──────────────────────────────────────────────
// A.2: Ejemplo aplicado - API de usuarios
// ──────────────────────────────────────────────

/**
 * Imagina un endpoint que recibe el ID de usuario y devuelve su nombre.
 * En JS es facil pasar accidentalmente un objeto en lugar de un numero.
 * TS atrapa ese error antes de ejecutar.
 */

interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana Garcia",   activo: true  },
  { id: 2, nombre: "Luis Perez",   activo: false },
  { id: 3, nombre: "Maria Torres", activo: true  },
];

function buscarUsuario(id: number): Usuario | undefined {
  return usuarios.find((u) => u.id === id);
}

const u = buscarUsuario(2);
console.log("Usuario encontrado:", u?.nombre); // Luis Perez

// TS detecta el error si pasamos un objeto en lugar de numero:
// buscarUsuario({ id: 2 });
// Error: Argument of type '{ id: number; }' is not assignable to parameter of type 'number'.

// ──────────────────────────────────────────────
// PARTE B: ENTORNO DE DESARROLLO
// ──────────────────────────────────────────────

/**
 * Para ejecutar TypeScript localmente:
 *
 * 1. npm init -y                          (crear package.json)
 * 2. npm install --save-dev typescript tsx (instalar herramientas)
 * 3. npx tsx archivo.ts                   (ejecutar directo, sin compilar)
 * 4. npx tsc archivo.ts                   (compilar a JavaScript)
 *
 * Tambien puedes usar el TypeScript Playground:
 * https://www.typescriptlang.org/play
 */

// ──────────────────────────────────────────────
// B.1: Primer archivo TypeScript local
// ──────────────────────────────────────────────

const saludo: string = "Hola, TypeScript";
const version: number = 5;

console.log(`${saludo} v${version}`);
// Hola, TypeScript v5

// ──────────────────────────────────────────────
// B.2: tsconfig.json y el modo estricto
// ──────────────────────────────────────────────

/**
 * El archivo tsconfig.json controla como se comporta el compilador.
 * La opcion mas importante para codigo robusto es "strict": true.
 *
 * "strict": true activa, entre otras verificaciones:
 *   - strictNullChecks: null y undefined no son asignables a otros tipos
 *   - noImplicitAny: no puedes dejar variables sin tipo sin querer
 *   - strictFunctionTypes: funciones se verifican de forma covariante
 *   - strictPropertyInitialization: las propiedades de clase deben inicializarse
 *
 * Ejemplo de tsconfig.json basico:
 * {
 *   "compilerOptions": {
 *     "target": "ES2022",
 *     "module": "ESNext",
 *     "strict": true
 *   }
 * }
 *
 * Los proyectos sin strict acumulan deuda tecnica:
 * errores que TS podria atrapar pasan desapercibidos.
 * Todos los ejemplos de este curso asumen "strict": true.
 */

// Ejemplo: strictNullChecks evita asignar null a string
let nombre: string = "Luis";
// nombre = null; // Error si strictNullChecks esta activo

// Para admitir null, debes declararlo explicitamente:
let apodo: string | null = null;
apodo = "Lucho"; // ok
````

## File: modulo_3/typescript/02_variables_y_anotaciones.ts
````typescript
/**
 * ============================================
 * 02 - VARIABLES Y ANOTACIONES DE TIPO
 * ============================================
 * Temas:
 *   - const vs let (por que evitar var)
 *   - Anotacion explicita vs inferencia de tipo
 *   - Cuando anotar explicitamente
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE C: VARIABLES
// ──────────────────────────────────────────────

// --- C.1: const vs let ---

/**
 * const: valor que NO cambia (SIEMPRE preferida por defecto).
 * let: valor que SI puede cambiar (usar SOLO si es necesario).
 * var: jamas usar en TypeScript moderno (tiene scope de funcion,
 *      no de bloque, y causa bugs dificiles de rastrear).
 */

// const - valor constante
const PI: number = 3.14159;
const NOMBRE_APP: string = "InventarioApp";
const DEBUG_MODE: boolean = false;

// let - valor que puede cambiar
let contador: number = 0;
let estadoConexion: string = "desconectado";
let usuarioActivo: boolean = false;

contador++;                    // 1
estadoConexion = "conectado";  // ok
usuarioActivo = true;          // ok

// PI = 3;  // Error: Cannot assign to 'PI' because it is a constant

/**
 * Regla practica:
 * 1. Empieza con const siempre
 * 2. Cambia a let SOLO si necesitas reasignar
 * 3. NUNCA uses var en TypeScript moderno
 */

// --- C.2: Anotacion de tipo vs inferencia ---

/**
 * TypeScript puede deducir el tipo automaticamente cuando asignas
 * un valor. No siempre tienes que escribir el tipo explicito.
 */

// Anotacion explicita: tu le dices a TS cual es el tipo
const puerto: number = 8080;
const host: string = "localhost";
const activo: boolean = true;

// Inferencia de tipo: TS deduce el tipo del valor inicial
const puerto2 = 8080;       // TypeScript infiere: number
const host2 = "localhost";  // TypeScript infiere: string
const activo2 = true;       // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con tipo incorrecto, TS da error en ambos casos:
// puerto2 = "9000";  // Error: Type 'string' is not assignable to type 'number'

// --- Cuando anotar explicitamente ---

// 1. Variables declaradas sin valor inicial:
let latencia: number;      // sin inicializar - necesita anotacion
latencia = 45;

// 2. Cuando quieres un tipo mas amplio que el valor inicial:
let codigo: number | string = 200;  // acepta numero o string
codigo = "OK";  // valido

// 3. Parametros de funciones (TS no puede inferirlos):
function ping(host: string, intentos: number): string {
  return `Ping a ${host} - ${intentos} intento(s)`;
}

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Dashboard de servidores
// ──────────────────────────────────────────────

/**
 * Las variables de estado de un servidor:
 * cuando anotar y cuando inferir.
 */

const NOMBRE_SERVIDOR = "web-prod-01";   // inferido: string - claro del valor
const PUERTO_DEFAULT  = 443;             // inferido: number
const ES_PRODUCCION   = true;            // inferido: boolean

// Variables que cambian durante la vida del servidor:
let solicitudesAtendidas: number = 0;    // anotacion: se inicializa en 0 pero cambia
let ultimoError: string | null = null;   // anotacion: puede ser null al inicio

// Funcion con anotaciones completas (necesarias en parametros):
function registrarSolicitud(ruta: string, codigoHttp: number): void {
  solicitudesAtendidas++;
  console.log(`[${NOMBRE_SERVIDOR}] ${codigoHttp} ${ruta} - total: ${solicitudesAtendidas}`);
}

registrarSolicitud("/api/usuarios", 200);
registrarSolicitud("/api/productos", 404);
// [web-prod-01] 200 /api/usuarios - total: 1
// [web-prod-01] 404 /api/productos - total: 2
````

## File: modulo_3/typescript/04_template_literals.ts
````typescript
/**
 * ============================================
 * 04 - TEMPLATE LITERALS
 * ============================================
 * Temas:
 *   - Sintaxis de template literals (backtick `)
 *   - Interpolacion de expresiones con ${ }
 *   - Strings multi-linea sin concatenacion
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE E: TEMPLATE LITERALS Y OPERACIONES TIPADAS
// ──────────────────────────────────────────────

// --- E.1: Template literals con tipos ---

/**
 * Concepto puro - template literals con backtick ``.
 * Permiten interpolar cualquier expresion dentro de ${ }.
 */

const nombre: string = "Ana";
const rol: string    = "administradora";
const sesiones: number = 42;

// Interpolacion basica:
const bienvenida: string = `Bienvenida, ${nombre}. Rol: ${rol}. Sesiones: ${sesiones}.`;
console.log(bienvenida);
// Bienvenida, Ana. Rol: administradora. Sesiones: 42.

// Expresiones dentro de ${ }:
const precio: number = 1200;
const iva: number    = 0.19;
const total: string  = `Precio con IVA: $${(precio * (1 + iva)).toFixed(2)}`;
console.log(total);
// Precio con IVA: $1428.00

// Multi-linea - sin concatenacion ni \n:
const reporte: string = `
=== Reporte del sistema ===
Servidor : web-01
Estado   : activo
Uptime   : 99.9%
`;
console.log(reporte);

// ──────────────────────────────────────────────
// EJEMPLO APLICADO: Generador de logs de servidor
// ──────────────────────────────────────────────

/**
 * Los sistemas de backend generan miles de lineas de log por hora.
 * TypeScript asegura que los campos siempre sean del tipo correcto.
 */

type NivelLog = "INFO" | "WARN" | "ERROR";

function log(nivel: NivelLog, servicio: string, mensaje: string): string {
  const timestamp = new Date().toISOString();
  const prefijo   = nivel === "ERROR" ? "[X]" : nivel === "WARN" ? "[!]" : "[✓]";
  return `[${timestamp}] ${prefijo} [${nivel}] [${servicio}] ${mensaje}`;
}

console.log(log("INFO",  "AuthService",  "Usuario 'ana' ha iniciado sesion"));
console.log(log("WARN",  "DbPool",       "Conexiones al 80% de capacidad"));
console.log(log("ERROR", "PaymentGW",    "Timeout al procesar pago #4821"));

// TS detecta el error si pasas un nivel invalido:
// log("DEBUG", "Cache", "Hit");
// Error: Argument of type '"DEBUG"' is not assignable to parameter of type 'NivelLog'
````

## File: modulo_3/typescript/05_compilador_seguridad.ts
````typescript
/**
 * ============================================
 * 05 - EL COMPILADOR COMO RED DE SEGURIDAD
 * ============================================
 * Temas:
 *   - Por que evitar any
 *   - unknown como alternativa segura
 *   - Strict mode en accion
 *     o  strictNullChecks
 *     o  noImplicitAny
 *     o  strictPropertyInitialization
 * ============================================
 */

// ──────────────────────────────────────────────
// PARTE F: EL COMPILADOR COMO RED DE SEGURIDAD
// ──────────────────────────────────────────────

// --- F.1: Por que evitar any ---

/**
 * any le dice a TS "no verifiques este valor".
 * Es el equivalente a apagar el sistema de seguridad del auto.
 * Cada any que escribes es una zona sin proteccion.
 */

let dato: any = "hola";
dato = 42;        // any acepta cualquier cosa
dato = true;      // ok
dato = { x: 1 };  // ok - TS no protesta pero tampoco ayuda

// El peligro: los errores vuelven a ser silenciosos
function duplicar(valor: any): any {
  return valor * 2;  // si valor es un string, devuelve NaN y TS no avisa
}

console.log("any con numero:", duplicar(5));      // 10
console.log("any con string:", duplicar("hola")); // NaN - bug silencioso

// La alternativa correcta: anotar el tipo real
function duplicarSeguro(valor: number): number {
  return valor * 2;
}
// duplicarSeguro("hola");  // Error: Argument of type 'string' is not assignable
//                          // to parameter of type 'number'

// --- F.1.b: unknown - alternativa segura a any ---

/**
 * unknown es como any, pero NO puedes operar con el
 * sin verificar el tipo primero. Es "any seguro".
 *
 * Si no conoces el tipo todavia, usa unknown en lugar de any.
 */

function procesarValor(valor: unknown): string {
  // Esto NO compila: no podemos operar con unknown sin verificar
  // return valor.toUpperCase();

  // Debemos verificar el tipo primero (type narrowing):
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return `Valor no es string, es: ${typeof valor}`;
}

console.log(procesarValor("hola"));      // HOLA
console.log(procesarValor(42));          // Valor no es string, es: number

// --- F.2: Strict mode en accion ---

/**
 * Con "strict": true en tsconfig.json, el compilador activa
 * estas verificaciones automaticamente.
 */

// 1. strictNullChecks: null y undefined se tratan como tipos propios
let nombre: string = "Luis";
// nombre = null;  // Error: Type 'null' is not assignable to type 'string'

let apodo: string | null = null;  // para admitir null, debes declararlo
apodo = "Lucho";  // ok

// 2. noImplicitAny: no puedes olvidar el tipo en parametros
// function procesar(datos) { ... }  // Error: Parameter 'datos' implicitly has an 'any' type

function procesar(datos: string): string {
  return datos.toUpperCase();  // ok, TS sabe que datos es string
}

// 3. strictPropertyInitialization: propiedades de clase deben inicializarse
class Servidor {
  nombre: string;
  puerto: number;

  constructor(nombre: string, puerto: number) {
    this.nombre = nombre;
    this.puerto = puerto;
  }
}

const s = new Servidor("api-01", 3000);
console.log(`${s.nombre}:${s.puerto}`);  // api-01:3000
````

## File: modulo_3/typescript/06_ejemplo_calculadora_envios.ts
````typescript
/**
 * ============================================
 * 06 - EJEMPLO COMBINADO: CALCULADORA DE ENVIOS
 * ============================================
 * Integra todo lo visto:
 *   - Variables, anotaciones e inferencia
 *   - Template literals
 *   - Tipos personalizados (type, interface, Record)
 *   - El compilador como red de seguridad
 * ============================================
 */

// Sistema de cotizacion de envios para una tienda e-commerce.
// Demuestra como los tipos previenen errores en logica de negocio real.

type ZonaEnvio = "local" | "nacional" | "internacional";

interface Paquete {
  descripcion: string;
  pesoKg: number;
  valorDeclarado: number;
  zona: ZonaEnvio;
}

// Record<ZonaEnvio, number> crea un objeto donde las claves
// son los valores de ZonaEnvio y los valores son numeros.
const TARIFAS: Record<ZonaEnvio, number> = {
  local:           2.50,   // $ por kg
  nacional:        5.00,
  internacional:  12.00,
};

const SEGURO_PCT = 0.005;  // 0.5% del valor declarado

function cotizarEnvio(paquete: Paquete): string {
  const tarifaBase = TARIFAS[paquete.zona];
  const costoFlete = tarifaBase * paquete.pesoKg;
  const costoSeguro = paquete.valorDeclarado * SEGURO_PCT;
  const total = costoFlete + costoSeguro;

  return `
[+] Cotizacion de envio
    Descripcion  : ${paquete.descripcion}
    Peso         : ${paquete.pesoKg} kg
    Zona         : ${paquete.zona}
    Flete        : $${costoFlete.toFixed(2)}
    Seguro       : $${costoSeguro.toFixed(2)}
    -------------------------
    TOTAL        : $${total.toFixed(2)}
  `.trim();
}

const pedido1: Paquete = {
  descripcion: "Laptop Dell XPS 15",
  pesoKg: 2.1,
  valorDeclarado: 1800,
  zona: "nacional",
};

const pedido2: Paquete = {
  descripcion: "Auriculares Sony WH-1000XM5",
  pesoKg: 0.4,
  valorDeclarado: 350,
  zona: "internacional",
};

console.log(cotizarEnvio(pedido1));
console.log("---");
console.log(cotizarEnvio(pedido2));

// TS detecta si usas una zona invalida:
// const pedido3: Paquete = { descripcion: "...", pesoKg: 1, valorDeclarado: 100, zona: "express" };
// Error: Type '"express"' is not assignable to type 'ZonaEnvio'
````

## File: modulo_3/typescript/08_arrays.ts
````typescript
/**
 * ============================================
 * 08 - ARRAYS
 * ============================================
 * Temas:
 *   - Sintaxis: tipo[] y Array<tipo>
 *   - Metodos tipados: map, filter, reduce
 *   - Mutacion: push, pop, shift, unshift
 *   - Busqueda: includes, indexOf, find
 *   - Arrays de objetos
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Sintaxis y metodos basicos tipados
// ──────────────────────────────────────────────

// Dos formas equivalentes de anotar un array:
const numeros: number[] = [1, 2, 3, 4, 5];
const textos: Array<string> = ["a", "b", "c"];   // forma generica

// TypeScript infiere el tipo del array si lo inicializas
const inferido = [10, 20, 30]; // number[] inferido

// Metodos tipados: el compilador conoce el tipo del elemento
const dobles: number[] = numeros.map((n) => n * 2);          // [2, 4, 6, 8, 10]
const pares: number[] = numeros.filter((n) => n % 2 === 0);   // [2, 4]
const suma: number = numeros.reduce((acc, n) => acc + n, 0);   // 15

// Mutacion (cambia el array original)
numeros.push(6);        // agrega al final
numeros.unshift(0);     // agrega al inicio
const ultimo = numeros.pop();    // elimina y devuelve el ultimo
const primero = numeros.shift(); // elimina y devuelve el primero

// Busqueda
const existe: boolean = numeros.includes(3);        // true
const indice: number = numeros.indexOf(3);          // posicion o -1
const encontrado: number | undefined = numeros.find((n) => n > 4); // 5

// ──────────────────────────────────────────────
// B.2: Arrays de objetos
// ──────────────────────────────────────────────

/**
 * Los arrays mas comunes en aplicaciones reales contienen objetos.
 * TypeScript tipa cada propiedad y autocompletara al acceder a ellas.
 */

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 999,  disponible: true },
  { id: 2, nombre: "Mouse",   precio: 25,   disponible: true },
  { id: 3, nombre: "Monitor", precio: 350,  disponible: false },
];

// TypeScript sabe que cada "p" es de tipo Producto
const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log("nombres:", nombres);              // ["Laptop", "Mouse", "Monitor"]
console.log("mas barato:", masBarato?.nombre); // "Mouse"
console.log("disponibles:", disponibles.length); // 2

// ──────────────────────────────────────────────
// EJEMPLO: Procesador de calificaciones
// ──────────────────────────────────────────────

const calificaciones: number[] = [85, 92, 70, 55, 98, 63, 78];

const aprobados: number[] = calificaciones.filter((n) => n >= 70);
const reprobados: number[] = calificaciones.filter((n) => n < 70);
const promedio: number = Number(
  (calificaciones.reduce((acc, n) => acc + n, 0) / calificaciones.length).toFixed(1)
);
const maxima: number = Math.max(...calificaciones);
const minima: number = Math.min(...calificaciones);

console.log("Aprobados:", aprobados.length, "| Reprobados:", reprobados.length);
console.log("Promedio:", promedio, "| Max:", maxima, "| Min:", minima);
// Aprobados: 5 | Reprobados: 2
// Promedio: 77.3 | Max: 98 | Min: 55
````

## File: modulo_3/typescript/09_tuplas.ts
````typescript
/**
 * ============================================
 * 09 - TUPLAS
 * ============================================
 * Temas:
 *   - Tuplas basicas: array de longitud fija con tipos por posicion
 *   - Tuplas con nombre (TS 4.0+)
 *   - Desestructuracion
 *   - Retorno multiple con tupla
 * ============================================
 */

// ──────────────────────────────────────────────
// C.1: Tuplas basicas y con nombre
// ──────────────────────────────────────────────

/**
 * Una tupla es un array con numero fijo de elementos y
 * tipos definidos por posicion. A diferencia de un array normal,
 * cada posicion puede tener un tipo distinto.
 */

type Coordenada = [number, number];           // [x, y]
type RGB = [number, number, number];          // [rojo, verde, azul]
type Entrada = [string, number];              // [clave, valor]

const punto: Coordenada = [10.5, -3.2];
const color: RGB = [255, 128, 0];            // naranja
const par: Entrada = ["temperatura", 36.6];

// Desestructuracion (la forma mas comoda de usar tuplas)
const [x, y] = punto;
const [rojo, verde, azul] = color;
const [clave, valor] = par;

console.log("Punto: x=", x, "y=", y);
console.log("Color: rgb(", rojo, ",", verde, ",", azul, ")");
console.log("Par:", clave, "=", valor);

// Tuplas con nombre (TS 4.0+) - mejoran la legibilidad
type Rango = [inicio: number, fin: number];
const horario: Rango = [9, 18];

/**
 * Recomendacion:
 * Usa tuplas para datos posicionales breves (coordenadas, rangos,
 * pares clave-valor). Si tienes 3+ campos con significado propio,
 * es mejor un objeto { x, y, z } que una tupla [x, y, z].
 */

// ──────────────────────────────────────────────
// EJEMPLO: Retorno multiple con tupla
// ──────────────────────────────────────────────

// Division segura expresada con tupla
const a: number = 10;
const b: number = 2;

const divisionResultado: [number, string] = b === 0
  ? [0, "Error: division por cero"]
  : [a / b, "ok"];

const [resultado, estado] = divisionResultado;
console.log(estado + ":", resultado);  // ok: 5

// Caso de division por cero
const d: number = 0;
const divisionResultado2: [number, string] = d === 0
  ? [0, "Error: division por cero"]
  : [5 / d, "ok"];

const [res2, estado2] = divisionResultado2;
console.log(estado2 + ":", res2);  // Error: division por cero: 0

// Patron comun en React: [valor, setter] (como useState)
type EstadoTupla = [string, (v: string) => void];
````

## File: modulo_3/typescript/11_union_literal_types.ts
````typescript
/**
 * ============================================
 * 11 - UNION TYPES Y LITERAL TYPES
 * ============================================
 * Temas:
 *   - Union types: un valor de varios tipos posibles
 *   - Union con tipos compuestos (objetos)
 *   - Literal types: valores exactos como tipos
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Union types
// ──────────────────────────────────────────────

/**
 * El operador | permite que una variable o parametro
 * acepte mas de un tipo.
 */

type Id = string | number;

const idNumerico: Id = 42;
const idTexto: Id = "abc-123";
console.log("Buscando con id:", idNumerico, "(tipo:", typeof idNumerico + ")");
console.log("Buscando con id:", idTexto, "(tipo:", typeof idTexto + ")");

// Union con tipos compuestos (objetos)
type Respuesta =
  | { exito: true;  datos: string[] }
  | { exito: false; error: string  };

const respuestaOk: Respuesta = { exito: true, datos: ["item1", "item2"] };
const respuestaError: Respuesta = { exito: false, error: "No se pudo conectar" };

// ──────────────────────────────────────────────
// E.2: Literal types
// ──────────────────────────────────────────────

/**
 * Un literal type restringe una variable a un valor
 * especifico (no solo un tipo amplio como string).
 */

type Direccion = "izquierda" | "derecha" | "arriba" | "abajo";
type Dado = 1 | 2 | 3 | 4 | 5 | 6;
type Activado = true;  // solo puede ser true

let movimiento: Direccion = "arriba";  // ok
// movimiento = "diagonal";            // Error: no es Direccion valido

let tirada: Dado = 4;                  // ok
// tirada = 7;                         // Error: 7 no es un Dado valido

// Uso directo con template literal
const dir: Direccion = "izquierda";
const pasos: number = 3;
console.log("Moviendose", pasos, "paso(s) hacia", dir);
````

## File: modulo_3/typescript/12_any_unknown_never.ts
````typescript
/**
 * ============================================
 * 12 - ANY, UNKNOWN Y NEVER
 * ============================================
 * Temas:
 *   - any: desactiva el chequeo de tipos (evitar)
 *   - unknown: version segura de any para datos externos
 *   - never: representa lo imposible / rama inalcanzable
 *   - Switch exhaustivo con never
 * ============================================
 */

// ──────────────────────────────────────────────
// F.1: Los tres casos extremos
// ──────────────────────────────────────────────

// --- any ---
// Desactiva el chequeo de tipos. Evitalo salvo al migrar codigo JS
// o trabajar con librerias sin tipos.

let cualquierCosa: any = "texto";
cualquierCosa = 42;        // ok
cualquierCosa = true;      // ok
cualquierCosa.metodoFalso(); // SIN error en compilacion (pero falla en runtime)

// --- unknown ---
// Como any, acepta cualquier valor, pero NO puedes usarlo sin
// comprobar el tipo primero. Es la version SEGURA de any.

let dato: unknown = "hola";
dato = 42;  // ok

// console.log(dato.toUpperCase());  // Error: Object is of type 'unknown'

// Para usarlo, debes verificar el tipo (type narrowing):
if (typeof dato === "string") {
  console.log(dato.toUpperCase());  // ok, TS sabe que es string aqui
}

// --- never ---
// Representa algo que NUNCA ocurre: codigo inalcanzable.
// Util para verificar exhaustividad en switches.

type SinValor = string & number;  // never: no existe valor string Y number

// ──────────────────────────────────────────────
// EJEMPLO: never para switch exhaustivo
// ──────────────────────────────────────────────

type Forma = "circulo" | "cuadrado" | "triangulo";

const forma: Forma = "circulo";
const medida: number = 5;
let areaForma: number;

switch (forma) {
  case "circulo":
    areaForma = Math.PI * medida ** 2;
    break;
  case "cuadrado":
    areaForma = medida ** 2;
    break;
  case "triangulo":
    areaForma = (Math.sqrt(3) / 4) * medida ** 2;
    break;
  default:
    // Si agregas una nueva Forma y olvidas el case, TS da error aqui:
    const _agotado: never = forma;
    areaForma = 0;
}
console.log("Area:", areaForma.toFixed(2)); // 78.54
````

## File: modulo_3/typescript/13_type_narrowing.ts
````typescript
/**
 * ============================================
 * 13 - TYPE NARROWING (ESTRECHAMIENTO DE TIPOS)
 * ============================================
 * Temas:
 *   - typeof
 *   - Truthiness
 *   - Igualdad (===)
 *   - Array.isArray
 *   - Operador "in"
 *   - Discriminated union con switch
 * ============================================
 */

// ──────────────────────────────────────────────
// G.1: Tecnicas de narrowing
// ──────────────────────────────────────────────

/**
 * Narrowing es el proceso por el que TypeScript reduce el tipo
 * de una variable dentro de un bloque gracias a comprobaciones.
 */

// --- typeof ---
let valorFormateado: string | number = "hola mundo";
let resultadoFormato: string;
if (typeof valorFormateado === "string") {
  resultadoFormato = valorFormateado.toUpperCase(); // TS sabe que es string
} else {
  resultadoFormato = valorFormateado.toFixed(2);    // TS sabe que es number
}
console.log(resultadoFormato);

// --- Truthiness ---
const nombreOpcional: string | null = null;
const saludo: string = nombreOpcional
  ? "Hola, " + nombreOpcional  // aqui nombreOpcional es string (no null)
  : "Hola, invitado";
console.log(saludo);

// --- Igualdad (===) ---
const valorA: string | number = 42;
const valorB: string | number = 42;
if (valorA === valorB) {
  console.log("Iguales:", valorA);
} else {
  console.log("Distintos");
}

// --- Array.isArray ---
const datoArray: string | string[] = ["uno", "dos", "tres"];
const conteo: number = Array.isArray(datoArray) ? datoArray.length : 1;
console.log("conteo:", conteo); // 3

// --- Operador "in" ---
type Perro = { nombre: string; raza: string };
type Gato  = { nombre: string; vidas: number };

const animal: Perro | Gato = { nombre: "Rex", raza: "Labrador" };

if ("raza" in animal) {
  // TS sabe que aqui animal es Perro (solo Perro tiene "raza")
  console.log("Perro:", animal.nombre, "raza", animal.raza);
} else {
  // TS sabe que aqui animal es Gato
  console.log("Gato:", animal.nombre, "vidas:", (animal as Gato).vidas);
}

// ──────────────────────────────────────────────
// EJEMPLO: Procesador de pagos multi-metodo
// ──────────────────────────────────────────────

type PagoTarjeta  = { metodo: "tarjeta";  numero: string; cvv: number };
type PagoTransfer = { metodo: "transferencia"; banco: string; cuenta: string };
type PagoEfectivo = { metodo: "efectivo"; moneda: string };

type Pago = PagoTarjeta | PagoTransfer | PagoEfectivo;

const pagos: Array<{ pago: Pago; monto: number }> = [
  { pago: { metodo: "tarjeta", numero: "4111111111111234", cvv: 123 }, monto: 500 },
  { pago: { metodo: "transferencia", banco: "BBVA", cuenta: "ES12345" }, monto: 200 },
  { pago: { metodo: "efectivo", moneda: "MXN" }, monto: 150 },
];

for (const { pago, monto } of pagos) {
  let descripcion: string;
  switch (pago.metodo) {
    case "tarjeta":
      descripcion = "Cobrando $" + monto + " a tarjeta ****" + pago.numero.slice(-4);
      break;
    case "transferencia":
      descripcion = "Transfiriendo $" + monto + " via " + pago.banco + " a " + pago.cuenta;
      break;
    case "efectivo":
      descripcion = "Recibiendo $" + monto + " en " + pago.moneda;
      break;
  }
  console.log(descripcion);
}
````

## File: modulo_3/typescript/14_objetos_inline.ts
````typescript
/**
 * ============================================
 * 14 - OBJETOS TIPADOS INLINE Y OPCIONALES
 * ============================================
 * Temas:
 *   - Objeto tipado inline (sin type/interface separado)
 *   - Propiedades opcionales con ?
 *   - Propiedades readonly
 *   - Objetos anidados inline
 * ============================================
 */

// ──────────────────────────────────────────────
// H.1: Objeto tipado inline
// ──────────────────────────────────────────────

/**
 * TypeScript permite tipar objetos directamente en la anotacion
 * sin declarar un type o interface. Util para objetos de un solo uso.
 */

let usuario: { nombre: string; edad: number; email: string };
usuario = { nombre: "Ana", edad: 28, email: "ana@mail.com" };

// --- Propiedades opcionales con ? ---
// La propiedad puede estar presente o ser undefined

let config: {
  host: string;
  puerto: number;
  debug?: boolean;      // opcional
  timeout?: number;     // opcional
};

config = { host: "localhost", puerto: 3000 };           // ok, sin opcionales
config = { host: "api.com", puerto: 443, debug: true }; // ok, con debug

// --- Propiedades de solo lectura con readonly ---
const constante: { readonly id: number; valor: string } = { id: 1, valor: "a" };
// constante.id = 2;  // Error: no se puede asignar a readonly

// --- Objetos anidados inline ---
let pedido: {
  id: number;
  cliente: { nombre: string; email: string };
  total: number;
};

pedido = {
  id: 101,
  cliente: { nombre: "Luis", email: "luis@mail.com" },
  total: 250,
};

/**
 * Recomendacion:
 * Para objetos que se reutilizan, declara un type o interface.
 * Los tipos inline son comodos para variables locales o parametros
 * de funcion de uso unico.
 */

// ──────────────────────────────────────────────
// EJEMPLO: Perfil de usuario con campos opcionales
// ──────────────────────────────────────────────

type Perfil = {
  readonly id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;         // no todos los usuarios lo dan
  avatar?: string;           // URL de foto de perfil
  fechaNacimiento?: string;  // ISO 8601: "1995-08-20"
};

const perfil1: Perfil = {
  id: 1,
  nombre: "Carlos",
  apellido: "Ruiz",
  email: "carlos@mail.com",
  telefono: "+52 55 1234 5678",
};

console.log("[#" + perfil1.id + "]", perfil1.nombre, perfil1.apellido, "-", perfil1.email);
if (perfil1.telefono) console.log("  Tel:", perfil1.telefono);

const perfil2: Perfil = {
  id: 2,
  nombre: "Sara",
  apellido: "Lopez",
  email: "sara@mail.com",
  fechaNacimiento: "1998-03-12",
};

console.log("[#" + perfil2.id + "]", perfil2.nombre, perfil2.apellido, "-", perfil2.email);
if (perfil2.fechaNacimiento) {
  const anios = new Date().getFullYear() - new Date(perfil2.fechaNacimiento).getFullYear();
  console.log("  Edad aprox.:", anios, "anios");
}
````

## File: modulo_3/typescript/15_ejemplo_inventario.ts
````typescript
/**
 * ============================================
 * 15 - EJEMPLO COMBINADO: INVENTARIO DE TIENDA ONLINE
 * ============================================
 * Integra: primitivos, arrays, tuplas, enums/unions,
 * narrowing y objetos opcionales.
 * ============================================
 */

// --- Tipos ---
type EstadoProducto = "activo" | "agotado" | "descontinuado";
type Categoria = "electronica" | "ropa" | "hogar" | "deportes";

type Dimension = [ancho: number, alto: number, profundidad: number]; // tupla con nombre

interface ProductoInventario {
  readonly id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria: Categoria;
  estado: EstadoProducto;
  dimensiones?: Dimension;  // opcional
  tags?: string[];
}

// --- Datos ---
const inventario: ProductoInventario[] = [
  {
    id: 1, nombre: "Laptop Pro",    precio: 1299, stock: 15,
    categoria: "electronica", estado: "activo",
    dimensiones: [35, 25, 2], tags: ["trabajo", "portatil"],
  },
  {
    id: 2, nombre: "Camiseta Slim", precio: 29,   stock: 0,
    categoria: "ropa",         estado: "agotado",
  },
  {
    id: 3, nombre: "Lampara LED",   precio: 49,   stock: 40,
    categoria: "hogar",        estado: "activo",
    tags: ["iluminacion", "ahorro"],
  },
  {
    id: 4, nombre: "Bicicleta MTB", precio: 499,  stock: 5,
    categoria: "deportes",     estado: "activo",
    dimensiones: [180, 100, 60],
  },
];

// --- Iconos de estado ---
const iconosEstado: Record<EstadoProducto, string> = {
  activo:        "[ok]",
  agotado:       "[xx]",
  descontinuado: "[-]",
};

// --- Procesamiento: mostrar inventario ---
console.log("=== INVENTARIO ===");
for (const p of inventario) {
  const icono = iconosEstado[p.estado];
  const dim = p.dimensiones
    ? " | " + p.dimensiones[0] + "x" + p.dimensiones[1] + "x" + p.dimensiones[2] + " cm"
    : "";
  const tags = p.tags ? " [" + p.tags.join(", ") + "]" : "";
  console.log(icono, "[" + p.categoria.toUpperCase() + "]", p.nombre,
    "- $" + p.precio, "(" + p.stock + " uds.)" + dim + tags);
}

// --- Resumen ---
const activos: ProductoInventario[] = inventario.filter((p) => p.estado === "activo");
const valorTotal: number = activos.reduce((acc, p) => acc + p.precio * p.stock, 0);
const masBarato: ProductoInventario = activos.reduce((min, p) =>
  p.precio < min.precio ? p : min
);
const masCaro: ProductoInventario = activos.reduce((max, p) =>
  p.precio > max.precio ? p : max
);

console.log("\n=== RESUMEN ===");
console.log("Activos:", activos.length, "| Valor total en stock: $" + valorTotal.toLocaleString());
console.log("Mas barato:", masBarato.nombre, "($" + masBarato.precio + ")");
console.log("Mas caro:  ", masCaro.nombre, "($" + masCaro.precio + ")");
````

## File: modulo_3/typescript/17_bucles.ts
````typescript
/**
 * ============================================
 * 17 - BUCLES (for, for...of, for...in, forEach/map, while, do-while)
 * ============================================
 * Temas:
 *   - for clasico (indice, paso, regresivo)
 *   - for...of (recorrer colecciones)
 *   - for...in (recorrer claves de objeto)
 *   - forEach y map (estilo funcional)
 *   - while y do-while (condicion sin vueltas fijas)
 *   - break y continue
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: for clasico
// ──────────────────────────────────────────────

// for (inicializacion; condicion; paso)
for (let i = 0; i < 5; i++) {
  console.log("Iteracion", i);  // 0, 1, 2, 3, 4
}

// Con paso distinto
for (let i = 0; i <= 100; i += 25) {
  console.log("Progreso:", i + "%");  // 0, 25, 50, 75, 100
}

// Cuenta regresiva
for (let i = 5; i >= 1; i--) {
  console.log("Lanzamiento en", i + "...");
}

// ──────────────────────────────────────────────
// B.2: for...of - recorrer colecciones
// ──────────────────────────────────────────────

const protocolos: string[] = ["HTTP", "HTTPS", "FTP", "SSH"];

for (const protocolo of protocolos) {
  console.log(protocolo);
}

// Sobre caracteres de un string
for (const letra of "TS") {
  console.log(letra);  // T, S
}

// Con indice usando .entries()
for (const [indice, valor] of protocolos.entries()) {
  console.log(indice + ": " + valor);
}

// ──────────────────────────────────────────────
// B.3: for...in - recorrer claves de un objeto
// ──────────────────────────────────────────────

/**
 * for...in itera sobre los nombres de las propiedades de un objeto.
 * NO lo uses para arrays (daria indices como texto "0", "1"...).
 * Para arrays usa for...of.
 */

const puertos: Record<string, number> = {
  HTTP: 80,
  HTTPS: 443,
  SSH: 22,
};

for (const servicio in puertos) {
  console.log(servicio + " -> puerto " + puertos[servicio]);
}

// ──────────────────────────────────────────────
// B.4: forEach / map - estilo funcional
// ──────────────────────────────────────────────

const numeros: number[] = [1, 2, 3, 4];

// forEach: "hacer algo" con cada elemento (no devuelve nada)
numeros.forEach((n) => console.log(n * 10));  // 10, 20, 30, 40

// map: CREAR un array transformado
const dobles: number[] = numeros.map((n) => n * 2);
console.log("dobles:", dobles);  // [2, 4, 6, 8]

// ──────────────────────────────────────────────
// B.5: while y do-while
// ──────────────────────────────────────────────

// while - comprueba ANTES de cada vuelta
let buffer = 1024;
let paquete = 0;

while (buffer > 0) {
  const tam = buffer > 256 ? 256 : buffer;
  paquete++;
  buffer -= tam;
  console.log("Paquete " + paquete + ": " + tam + " bytes (quedan " + buffer + ")");
}

// do-while - ejecuta AL MENOS UNA VEZ
let intentos = 0;
let conectado = false;

do {
  intentos++;
  console.log("Intento de conexion #" + intentos + "...");
  if (intentos === 3) conectado = true;
} while (!conectado && intentos < 5);

console.log(conectado ? "Conectado en " + intentos + " intentos" : "Fallo");

// ──────────────────────────────────────────────
// B.6: break y continue
// ──────────────────────────────────────────────

const paquetes: number[] = [64, 128, -1, 256, 1024, -1, 32];

// continue: salta la iteracion actual, pasa a la siguiente
console.log("=== con continue ===");
for (const p of paquetes) {
  if (p < 0) {
    console.log("Paquete corrupto ignorado");
    continue;
  }
  console.log("Procesando " + p + " bytes");
}

// break: sale del bucle por completo
console.log("=== con break ===");
for (const p of paquetes) {
  if (p < 0) {
    console.log("Error critico - deteniendo");
    break;
  }
  console.log("Procesando " + p + " bytes");
}
````

## File: modulo_3/typescript/18_ejemplo_monitor_servidores.ts
````typescript
/**
 * ============================================
 * 18 - EJEMPLO COMBINADO: MONITOR DE SERVIDORES
 * ============================================
 * Integra: if anidado, switch, for...of, while, break/continue
 * ============================================
 */

type Estado = "ok" | "lento" | "caido";

interface Servidor {
  nombre: string;
  estado: Estado;
  latenciaMs: number;
}

const servidores: Servidor[] = [
  { nombre: "web-01", estado: "ok",    latenciaMs: 25 },
  { nombre: "web-02", estado: "lento", latenciaMs: 320 },
  { nombre: "db-01",  estado: "caido", latenciaMs: 0 },
  { nombre: "cache",  estado: "ok",    latenciaMs: 8 },
];

console.log("=== Diagnostico ===");
let caidos = 0;

for (const s of servidores) {
  if (s.estado === "caido") caidos++;

  // switch para traducir estado a icono
  let icono: string;
  switch (s.estado) {
    case "ok":    icono = "[ok]"; break;
    case "lento": icono = "[!]";  break;
    case "caido": icono = "[XX]"; break;
    default:      icono = "[?]";
  }

  // if anidado para matizar el diagnostico
  let diagnostico: string;
  if (s.estado === "ok") {
    if (s.latenciaMs < 50) {
      diagnostico = icono + " " + s.nombre + ": optimo (" + s.latenciaMs + "ms)";
    } else {
      diagnostico = icono + " " + s.nombre + ": aceptable (" + s.latenciaMs + "ms)";
    }
  } else {
    diagnostico = icono + " " + s.nombre + ": requiere atencion (" + s.estado + ")";
  }

  console.log(diagnostico);
}

// while para alertar mientras haya caidos
let alerta = caidos;
while (alerta > 0) {
  console.log("[!] Quedan " + alerta + " servidor(es) caido(s) - notificando...");
  alerta--;
}

console.log("Resumen: " + caidos + "/" + servidores.length + " caidos");
````

## File: modulo_3/typescript/19_funciones_declaracion.ts
````typescript
/**
 * ============================================
 * 19 - DECLARACION DE FUNCIONES
 * ============================================
 * Temas:
 *   - Parametros tipados y tipo de retorno explicito
 *   - Funciones flecha (arrow functions)
 *   - Retorno implicito vs explicito
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Declaracion con parametros tipados
// ──────────────────────────────────────────────

// Cada parametro lleva :Tipo, y tras el parentesis va :TipoRetorno
function suma(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): string {
  return "Hola, " + nombre;
}

console.log(suma(3, 4));        // 7
console.log(saludar("Sofia"));  // Hola, Sofia

// Error en compilacion:
// suma("3", 4);  // string no asignable a number

/**
 * El tipo de retorno explicito actua como contrato.
 * Si olvidas un return, el error aparece en la definicion,
 * no en quien llama la funcion.
 */

// ──────────────────────────────────────────────
// A.2: Funciones flecha (arrow functions)
// ──────────────────────────────────────────────

// Declaracion tradicional
function cuadrado(n: number): number {
  return n * n;
}

// Flecha con cuerpo explicito
const cuadradoFlecha = (n: number): number => {
  return n * n;
};

// Flecha con retorno implicito (sin llaves, una sola expresion)
const cuadradoCorto = (n: number): number => n * n;

// Sin parametros
const ahora = (): string => new Date().toLocaleTimeString();

// Un solo parametro
const doble = (n: number): number => n * 2;

console.log(cuadrado(5));        // 25
console.log(cuadradoFlecha(5));  // 25
console.log(cuadradoCorto(5));   // 25
console.log(doble(7));           // 14
console.log(ahora());            // ej: "10:34:22"

/**
 * Recomendacion:
 * - Declaracion tradicional para funciones principales (hoisting,
 *   stack traces mas legibles).
 * - Flecha para callbacks, metodos de array y cuando necesites
 *   capturar el this del contexto lexico.
 */

// ──────────────────────────────────────────────
// EJEMPLO: Calculadora de descuento
// ──────────────────────────────────────────────

function calcularDescuento(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenCompra(producto: string, precio: number, descuento: number): string {
  const final = calcularDescuento(precio, descuento);
  return producto + ": $" + precio + " -> $" + final + " (" + descuento + "% off)";
}

console.log(resumenCompra("Teclado", 120, 15));
console.log(resumenCompra("Monitor", 350, 20));
console.log(resumenCompra("Mouse", 45, 0));
````

## File: modulo_3/typescript/20_parametros_y_retorno.ts
````typescript
/**
 * ============================================
 * 20 - PARAMETROS AVANZADOS Y RETORNOS ESPECIALES
 * ============================================
 * Temas:
 *   - Parametros opcionales (?)
 *   - Parametros por defecto (= valor)
 *   - Rest parameters (...nums: number[])
 *   - void (sin retorno util)
 *   - never (nunca termina normalmente)
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Opcionales (?) y por defecto (=)
// ──────────────────────────────────────────────

// Opcional: puede omitirse, dentro es T | undefined
function crearEtiqueta(texto: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return "[" + texto.toUpperCase() + "]";
  }
  return "[" + texto + "]";
}

console.log(crearEtiqueta("info"));          // [info]
console.log(crearEtiqueta("alerta", true)); // [ALERTA]

// Por defecto: si no se pasa, usa el valor indicado
function repetir(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetir("ha"));    // hahaha
console.log(repetir("ha", 5)); // hahahahaha

// Los opcionales y default van DESPUES de los obligatorios

// ──────────────────────────────────────────────
// B.2: Rest parameters (...)
// ──────────────────────────────────────────────

// Recoge argumentos restantes en un array
function sumarTodos(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumarTodos(1, 2, 3));        // 6
console.log(sumarTodos(10, 20, 30, 40)); // 100
console.log(sumarTodos());               // 0

// Combinado con parametros normales
function construirRuta(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRuta("https://api.ejemplo.com", "v1", "usuarios", "42"));
// https://api.ejemplo.com/v1/usuarios/42

// ──────────────────────────────────────────────
// C.1: void vs never
// ──────────────────────────────────────────────

// void: no devuelve un valor util (efectos secundarios)
function imprimirLinea(texto: string): void {
  console.log(texto);
}

// never: la funcion NUNCA retorna (lanza excepcion o bucle infinito)
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) { /* proceso eterno */ }
}

// never encaja en cualquier tipo de retorno
function dividir(a: number, b: number): number {
  if (b === 0) lanzarError("Division por cero");
  return a / b;
}

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de registro de eventos
// ──────────────────────────────────────────────

type Nivel = "info" | "warn" | "error";

function logMensaje(
  mensaje: string,
  nivel: Nivel = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<Nivel, string> = {
    info:  "[i] INFO ",
    warn:  "[!] WARN ",
    error: "[X] ERROR",
  };
  const hora = timestamp ? " [" + new Date().toISOString() + "]" : "";
  return prefijos[nivel] + hora + ": " + mensaje;
}

console.log(logMensaje("Servidor iniciado"));
console.log(logMensaje("Memoria alta", "warn"));
console.log(logMensaje("Conexion perdida", "error", true));

function registrarEvento(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? " | " + detalles.join(" · ") : "";
  console.log("[" + timestamp + "] " + tipo.toUpperCase() + cuerpo);
}

registrarEvento("inicio");
registrarEvento("login", "usuario: ana", "ip: 192.168.1.10");
registrarEvento("error", "modulo: pagos", "codigo: 503", "reintento: si");
````

## File: modulo_3/typescript/21_orden_superior_closures.ts
````typescript
/**
 * ============================================
 * 21 - FUNCIONES DE ORDEN SUPERIOR Y CLOSURES
 * ============================================
 * Temas:
 *   - Tipos de funcion y callbacks tipados
 *   - Funciones que reciben funciones
 *   - Funciones que devuelven funciones (fabricas)
 *   - Closures (funciones que recuerdan su entorno)
 * ============================================
 */

// ──────────────────────────────────────────────
// D.1: Tipos de funcion y callbacks tipados
// ──────────────────────────────────────────────

// Tipo de funcion: (param: Tipo) => TipoRetorno
type Transformador = (x: number) => number;
type Predicado = (x: number) => boolean;

// Funcion que RECIBE una funcion (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Funcion que DEVUELVE una funcion (fabrica)
function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

const triple = multiplicadorDe(3);
const cuadradoFn: Transformador = (x) => x * x;

console.log(aplicar(5, triple));       // 15
console.log(aplicar(5, cuadradoFn));   // 25
console.log(aplicar(5, (x) => x + 10)); // 15 (lambda inline)

// Filtrar con predicado tipado
function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filtrar(nums, (n) => n % 2 === 0)); // [2, 4, 6, 8]
console.log(filtrar(nums, (n) => n > 5));       // [6, 7, 8]

// ──────────────────────────────────────────────
// F.1: Closures
// ──────────────────────────────────────────────

/**
 * Un closure es una funcion que captura variables del ambito
 * donde fue creada, incluso cuando ese ambito ya no esta activo.
 */

function crearContador(inicio: number = 0) {
  let cuenta = inicio;  // variable capturada

  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor:       () => cuenta,
    resetear:    () => { cuenta = inicio; },
  };
}

const c1 = crearContador();
const c2 = crearContador(10);  // contador independiente

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();

console.log("c1:", c1.valor()); // 3
console.log("c2:", c2.valor()); // 11

c1.resetear();
console.log("c1 tras reset:", c1.valor()); // 0

// ──────────────────────────────────────────────
// EJEMPLO: Pipeline de procesamiento de pedidos
// ──────────────────────────────────────────────

type Pedido = { id: number; total: number; cliente: string };
type ProcesadorPedido = (pedido: Pedido) => Pedido;

const aplicarIVA: ProcesadorPedido = (p) => ({
  ...p,
  total: Number((p.total * 1.19).toFixed(2)),
});

const aplicarDescuentoVIP = (descuento: number): ProcesadorPedido =>
  (p) => ({ ...p, total: Number((p.total * (1 - descuento)).toFixed(2)) });

function procesarPedido(pedido: Pedido, pasos: ProcesadorPedido[]): Pedido {
  return pasos.reduce((p, fn) => fn(p), pedido);
}

const pedido: Pedido = { id: 101, total: 100, cliente: "Ana" };

const resultado = procesarPedido(pedido, [
  aplicarDescuentoVIP(0.10), // 10% descuento VIP -> $90
  aplicarIVA,                // + 19% IVA        -> $107.10
]);

console.log("Pedido procesado:", resultado);
// { id: 101, total: 107.1, cliente: 'Ana' }

// ──────────────────────────────────────────────
// EJEMPLO: Memoizacion con closure
// ──────────────────────────────────────────────

function memoize<T, R>(fn: (arg: T) => R): (arg: T) => R {
  const cache = new Map<T, R>();

  return (arg: T): R => {
    if (cache.has(arg)) {
      console.log("Cache hit:", arg);
      return cache.get(arg)!;
    }
    const resultado = fn(arg);
    cache.set(arg, resultado);
    return resultado;
  };
}

function fibLento(n: number): number {
  if (n <= 1) return n;
  return fibLento(n - 1) + fibLento(n - 2);
}

const fibRapido = memoize(fibLento);

console.log(fibRapido(10)); // calcula
console.log(fibRapido(10)); // Cache hit: 10 - retorna al instante
console.log(fibRapido(20)); // calcula
````

## File: modulo_3/typescript/22_sobrecargas.ts
````typescript
/**
 * ============================================
 * 22 - SOBRECARGAS DE FUNCION (OVERLOADS)
 * ============================================
 * Temas:
 *   - Firmas multiples, una implementacion
 *   - Distinto retorno segun la firma
 *   - Implementacion compatible con todas las firmas
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Function overloads
// ──────────────────────────────────────────────

/**
 * Las sobrecargas permiten que una misma funcion acepte
 * distintas combinaciones de tipos de parametros, con
 * retornos distintos segun la firma usada.
 *
 * 1. Se declaran varias firmas de sobrecarga (sin cuerpo)
 * 2. Una sola implementacion (no visible para quien llama)
 */

// Firmas de sobrecarga
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

// Implementacion (debe ser compatible con todas las firmas)
function formatear(valor: number | string | boolean): string {
  if (typeof valor === "number") {
    return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
  }
  if (typeof valor === "boolean") {
    return valor ? "Si" : "No";
  }
  return '"' + valor + '"';
}

// TS conoce el retorno exacto segun la firma usada
console.log(formatear(1234567.5)); // 1,234,567.50
console.log(formatear(true));      // Si
console.log(formatear("activo"));  // "activo"

// ──────────────────────────────────────────────
// EJEMPLO: Buscador polimorfico
// ──────────────────────────────────────────────

type Producto = { id: number; nombre: string; precio: number };

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 1200 },
  { id: 2, nombre: "Teclado", precio: 80   },
  { id: 3, nombre: "Monitor", precio: 350  },
];

// Sobrecargas
function buscar(id: number): Producto | undefined;
function buscar(nombre: string): Producto[];

// Implementacion
function buscar(criterio: number | string): Producto | Producto[] | undefined {
  if (typeof criterio === "number") {
    return catalogo.find((p) => p.id === criterio);
  }
  const termino = criterio.toLowerCase();
  return catalogo.filter((p) => p.nombre.toLowerCase().includes(termino));
}

// TS sabe el retorno exacto por la firma elegida
const porId     = buscar(2);        // Producto | undefined
const porNombre = buscar("o");      // Producto[]

console.log("Buscar por id 2:", porId);
console.log("Buscar por nombre 'o':", porNombre);
````

## File: modulo_3/typescript/23_ejemplo_tareas.ts
````typescript
/**
 * ============================================
 * 23 - EJEMPLO COMBINADO: SISTEMA DE TAREAS
 * ============================================
 * Integra: parametros tipados, flecha, opcionales/default,
 * rest, void/never, orden superior, sobrecargas, closures
 * ============================================
 */

type Prioridad = "alta" | "media" | "baja";
type Tarea = { id: number; titulo: string; prioridad: Prioridad; horas: number };

// --- Sobrecarga: buscar por id o por prioridad ---
function buscarTarea(id: number): Tarea | undefined;
function buscarTarea(prioridad: Prioridad): Tarea[];
function buscarTarea(criterio: number | Prioridad): Tarea | Tarea[] | undefined {
  if (typeof criterio === "number") {
    return tareas.find((t) => t.id === criterio);
  }
  return tareas.filter((t) => t.prioridad === criterio);
}

// --- Rest + valor por defecto ---
function crearTareas(prioridad: Prioridad = "media", ...titulos: string[]): Tarea[] {
  return titulos.map((titulo, i) => ({
    id: Date.now() + i,
    titulo,
    prioridad,
    horas: 0,
  }));
}

// --- Orden superior: tipo de funcion ---
type AnalizadorTarea = (t: Tarea) => string;

const formatearTarea: AnalizadorTarea = (t) =>
  "[" + t.prioridad.toUpperCase().padEnd(5) + "] #" + t.id + ' "' + t.titulo + '" (' + t.horas + "h)";

function generarReporte(lista: Tarea[], analizar: AnalizadorTarea): void {
  console.log("=== Reporte de Tareas ===");
  lista.forEach((t) => console.log(analizar(t)));
  const totalHoras = lista.reduce((acc, t) => acc + t.horas, 0);
  console.log("Total: " + lista.length + " tareas · " + totalHoras + "h estimadas");
}

// --- Closure: acumulador de horas ---
function crearAcumulador() {
  let total = 0;
  return {
    agregar: (horas: number): void => { total += horas; },
    obtener: (): number => total,
  };
}

// --- void y never ---
function validarTarea(t: Tarea): void {
  if (t.titulo.trim() === "") lanzarValidacion("El titulo no puede estar vacio");
  if (t.horas < 0)            lanzarValidacion("Las horas no pueden ser negativas");
}

function lanzarValidacion(msg: string): never {
  throw new Error("Validacion fallida: " + msg);
}

// --- Ejecucion ---
const tareas: Tarea[] = [
  { id: 1, titulo: "Diseniar API",      prioridad: "alta",  horas: 8 },
  { id: 2, titulo: "Escribir pruebas", prioridad: "media", horas: 4 },
  { id: 3, titulo: "Actualizar docs",  prioridad: "baja",  horas: 2 },
  { id: 4, titulo: "Code review",      prioridad: "alta",  horas: 3 },
];

const acum = crearAcumulador();
tareas.forEach((t) => {
  validarTarea(t);
  acum.agregar(t.horas);
});

generarReporte(tareas, formatearTarea);
console.log("Horas totales (closure): " + acum.obtener() + "h");

// Sobrecargas en accion
const alta = buscarTarea("alta");  // Tarea[]
const t1   = buscarTarea(1);       // Tarea | undefined

console.log("Tareas de alta prioridad:", alta.map((t) => t.titulo));
console.log("Tarea #1:", t1?.titulo);
````

## File: modulo_3/typescript/24_types_e_interfaces.ts
````typescript
/**
 * 24 - TYPE ALIAS E INTERFACES
 * Temas: type, interface, opcionales, readonly, arrays inmutables
 */

// ──────────────────────────────────────────────
// type alias
// ──────────────────────────────────────────────

type ID = string | number;
type Coordenadas = [number, number];

type Punto = {
  x: number;
  y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id1: ID = 42;
const id2: ID = "usr-001";

console.log("Origen:", origen, "IDs:", id1, id2);

// Ejemplo: tickets
type TicketID = string | number;
type PrioridadTk = "baja" | "media" | "alta" | "critica";

type Ticket = {
  id: TicketID;
  titulo: string;
  prioridad: PrioridadTk;
  resuelta: boolean;
};

function imprimirTicket(t: Ticket): void {
  const estrella = t.prioridad === "critica" ? " [!]" : "";
  console.log(`[${t.id}] ${t.titulo} - ${t.prioridad}${estrella}`);
}

const tk1: Ticket = { id: "T-001", titulo: "Error de login", prioridad: "critica", resuelta: false };
const tk2: Ticket = { id: 42,      titulo: "Ajuste de fuente", prioridad: "baja",    resuelta: true };

imprimirTicket(tk1);
imprimirTicket(tk2);

// ──────────────────────────────────────────────
// interface
// ──────────────────────────────────────────────

interface Usuario {
  readonly id: number;
  nombre: string;
  email: string;
  avatar?: string;
}

const u1: Usuario = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const u2: Usuario = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

console.log("Usuario 1:", u1.nombre, u1.email);
console.log("Usuario 2:", u2.nombre, u2.email, u2.avatar);

// Ejemplo: productos
interface Producto {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  enStock: boolean;
}

function mostrarProducto(p: Producto): void {
  const desc = p.descripcion ? ` - ${p.descripcion}` : "";
  const stock = p.enStock ? "Disponible" : "Agotado";
  console.log(`[${p.sku}] ${p.nombre} $${p.precio}${desc} (${stock})`);
}

const laptop: Producto = { sku: "LAP-001", nombre: "Laptop Pro 15", precio: 1299, descripcion: "Pantalla 4K, 16 GB RAM", enStock: true };
const mouse: Producto = { sku: "MOU-042", nombre: "Mouse Inalambrico", precio: 25, enStock: false };

mostrarProducto(laptop);
mostrarProducto(mouse);

// ──────────────────────────────────────────────
// readonly en tipos, interfaces y arrays
// ──────────────────────────────────────────────

interface Configuracion {
  readonly host: string;
  readonly puerto: number;
  readonly secreto: string;
  reintentos: number;
}

const cfg: Configuracion = { host: "db.empresa.com", puerto: 5432, secreto: "abc-xyz-123", reintentos: 3 };
cfg.reintentos = 5;
// cfg.host = "otro"; // Error: readonly

const ESTADOS_PERMITIDOS: readonly string[] = ["activo", "inactivo", "suspendido"];
// ESTADOS_PERMITIDOS.push("eliminado"); // Error

console.log("Estados:", ESTADOS_PERMITIDOS);

type MetodoHTTP = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ConfigAPI {
  readonly baseUrl: string;
  readonly version: string;
  readonly metodosPermitidos: readonly MetodoHTTP[];
  timeoutMs: number;
}

const apiConfig: ConfigAPI = { baseUrl: "https://api.empresa.com", version: "v2", metodosPermitidos: ["GET", "POST", "PUT", "DELETE"], timeoutMs: 5000 };

function construirUrl(config: ConfigAPI, ruta: string): string {
  return `${config.baseUrl}/${config.version}/${ruta.replace(/^\//, "")}`;
}

console.log(construirUrl(apiConfig, "/usuarios"));
````

## File: modulo_3/typescript/26_type_vs_interface_extension.ts
````typescript
/**
 * ============================================
 * 26 - TYPE VS INTERFACE, EXTENSION Y COMPOSICION
 * ============================================
 * Temas:
 *   - type vs interface (diferencias y criterios)
 *   - extends con interface
 *   - Interseccion con type &
 *   - Herencia multiple con interface
 * ============================================
 */

// ──────────────────────────────────────────────
// C.1: type vs interface - tabla comparativa
// ──────────────────────────────────────────────

/**
 * Ambos describen la forma de un objeto, pero tienen diferencias:
 *
 * Caracteristica        | type  | interface
 * ----------------------|-------|-----------
 * Objetos               | Si    | Si
 * Uniones (A | B)       | Si    | No
 * Intersecciones (A & B)| Si    | Solo via extends
 * Extender otra def     | Solo &| extends (legible)
 * Declaration merging   | No    | Si
 * Alias de primitivo    | Si    | No
 * Alias de tupla        | Si    | No
 *
 * Regla practica:
 * - interface para objetos y contratos de clase
 * - type para uniones, tuplas, primitivos y alias complejos
 */

type Resultado = "exito" | "error" | "pendiente";  // type para union
type Par = [string, number];                        // type para tupla

// type y producen el mismo tipo de objeto:
type PuntoT = { x: number; y: number };

interface PuntoI {
  x: number;
  y: number;
}

const a: PuntoT = { x: 1, y: 2 };
const b: PuntoI = { x: 1, y: 2 };

console.log("Mismo tipo:", JSON.stringify(a) === JSON.stringify(b));

// ──────────────────────────────────────────────
// D.1: interface extends y composicion con &
// ──────────────────────────────────────────────

// Extends con interface:
interface Animal {
  nombre: string;
  edad: number;
}

interface Mascota extends Animal {
  duenio: string;
  vacunado: boolean;
}

const miMascota: Mascota = {
  nombre: "Rex",
  edad: 3,
  duenio: "Ana",
  vacunado: true,
};

console.log("Mascota:", miMascota.nombre, "de", miMascota.duenio);

// Composicion con type & (interseccion):
type Auditable = {
  creadoEn: Date;
  actualizadoEn: Date;
};

type ProductoInterseccion = {
  sku: string;
  precio: number;
} & Auditable;

const prod: ProductoInterseccion = {
  sku: "LAP-001",
  precio: 1299,
  creadoEn: new Date(),
  actualizadoEn: new Date(),
};

console.log("Producto auditable:", prod.sku, "$" + prod.precio);

// Herencia multiple con interface:
interface Serializable {
  toJSON(): string;
}

interface Cloneable {
  clonar(): this;
}

interface Entidad extends Serializable, Cloneable {
  id: number;
}

// ──────────────────────────────────────────────
// EJEMPLO: Jerarquia de usuarios
// ──────────────────────────────────────────────

interface EntidadBase {
  readonly id: number;
  creadoEn: Date;
}

interface UsuarioSist extends EntidadBase {
  nombre: string;
  email: string;
}

interface Administrador extends UsuarioSist {
  permisos: string[];
  nivel: 1 | 2 | 3;
}

type AdminConLog = Administrador & { ultimoAcceso: Date };

const admin: AdminConLog = {
  id: 1,
  creadoEn: new Date("2024-01-01"),
  nombre: "Sandra",
  email: "sandra@empresa.com",
  permisos: ["users:read", "users:write", "reports:read"],
  nivel: 2,
  ultimoAcceso: new Date(),
};

console.log("Admin:", admin.nombre, "(nivel", admin.nivel + ")");
console.log("Permisos:", admin.permisos.join(", "));
````

## File: modulo_3/typescript/27_index_signatures.ts
````typescript
/**
 * ============================================
 * 27 - INDEX SIGNATURES Y Record<K, V>
 * ============================================
 * Temas:
 *   - Index signatures: [clave: string]: Tipo
 *   - Utilidad Record<K, V>
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Index signatures y Record
// ──────────────────────────────────────────────

/**
 * Cuando no conoces las claves de antemano, usas una firma de
 * indice para tipar el objeto.
 * Record<K, V> es un alias conciso para { [key: K]: V }.
 */

// Index signature
interface Diccionario {
  [clave: string]: number;
}

const puntuaciones: Diccionario = {
  Ana: 95,
  Luis: 87,
  Marta: 100,
};

puntuaciones["Pedro"] = 72;
console.log("Puntuaciones:", puntuaciones);

// Equivalente con Record:
type Marcador = Record<string, number>;
const marcador: Marcador = { equipo_a: 3, equipo_b: 1 };
console.log("Marcador:", marcador);

// ──────────────────────────────────────────────
// EJEMPLO: Inventario de almacen
// ──────────────────────────────────────────────

type Inventario = Record<string, { cantidad: number; ubicacion: string }>;

const almacen: Inventario = {
  "LAP-001": { cantidad: 12, ubicacion: "Pasillo A, Estante 3" },
  "MOU-042": { cantidad: 50, ubicacion: "Pasillo B, Estante 1" },
  "TEC-007": { cantidad: 8,  ubicacion: "Pasillo A, Estante 5" },
};

function consultarProducto(sku: string): void {
  const item = almacen[sku];
  if (item) {
    console.log(sku + ":", item.cantidad, "unidades en", item.ubicacion);
  } else {
    console.log(sku + ": no encontrado en almacen");
  }
}

consultarProducto("MOU-042");
consultarProducto("CAM-099");

// Recorrer todo el inventario:
for (const sku in almacen) {
  console.log(sku, "->", almacen[sku].cantidad, "uds.");
}
````

## File: modulo_3/typescript/28_funciones_en_interfaces.ts
````typescript
/**
 * ============================================
 * 28 - TIPOS DE FUNCION DENTRO DE INTERFACES
 * ============================================
 * Temas:
 *   - Firmas de metodo en interfaces
 *   - Propiedades de tipo funcion (callbacks)
 *   - Callbacks opcionales
 * ============================================
 */

// ──────────────────────────────────────────────
// F.1: Firmas de metodo y tipos de callback
// ──────────────────────────────────────────────

// Dos sintaxis equivalentes:
interface Calculadora {
  sumar(a: number, b: number): number;        // sintaxis de metodo
  restar: (a: number, b: number) => number;   // sintaxis de propiedad funcion
}

// Tipo de callback generico:
type Callback<T> = (error: Error | null, resultado: T | null) => void;

// Interface para manejador de eventos:
interface Manejador {
  onExito: (datos: string) => void;
  onError: (err: Error) => void;
  onFinalizar?: () => void;  // opcional
}

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de notificaciones con callbacks
// ──────────────────────────────────────────────

type NivelLogNotif = "info" | "warn" | "error";

interface Logger {
  log(nivel: NivelLogNotif, mensaje: string): void;
  alerta: (mensaje: string) => void;
  onError?: (err: Error) => void;
}

const consoleLogger: Logger = {
  log(nivel, mensaje) {
    const prefijo = nivel === "error" ? "ERROR" : nivel === "warn" ? "AVISO" : "INFO";
    console.log("[" + prefijo + "]", mensaje);
  },
  alerta(mensaje) {
    console.log("[!] ALERTA:", mensaje);
  },
  onError(err) {
    console.log("Manejando error:", err.message);
  },
};

function procesarPedidoLog(id: number, logger: Logger): void {
  logger.log("info", "Procesando pedido #" + id + "...");
  if (id < 0) {
    logger.onError?.(new Error("ID de pedido invalido"));
    return;
  }
  logger.log("info", "Pedido #" + id + " completado");
  logger.alerta("Pedido #" + id + " listo para envio");
}

procesarPedidoLog(101, consoleLogger);
procesarPedidoLog(-5, consoleLogger);
````

## File: modulo_3/typescript/29_uniones_discriminadas.ts
````typescript
/**
 * ============================================
 * 29 - UNIONES DISCRIMINADAS
 * ============================================
 * Temas:
 *   - Discriminated unions con campo literal comun
 *   - Narrowing automatico con switch
 *   - Switch exhaustivo con never
 * ============================================
 */

// ──────────────────────────────────────────────
// G.1: Discriminated unions con campo kind
// ──────────────────────────────────────────────

/**
 * Una union discriminada es un type union donde cada miembro
 * tiene un campo literal comun (el "discriminador").
 * TypeScript usa ese campo para hacer narrowing automatico.
 */

type Circulo = {
  kind: "circulo";
  radio: number;
};

type Rectangulo = {
  kind: "rectangulo";
  ancho: number;
  alto: number;
};

type Triangulo = {
  kind: "triangulo";
  base: number;
  altura: number;
};

type Forma = Circulo | Rectangulo | Triangulo;

function calcularArea(f: Forma): number {
  switch (f.kind) {
    case "circulo":
      return Math.PI * f.radio ** 2;
    case "rectangulo":
      return f.ancho * f.alto;
    case "triangulo":
      return (f.base * f.altura) / 2;
  }
}

console.log("Area circulo (r=5):", calcularArea({ kind: "circulo", radio: 5 }).toFixed(2));
console.log("Area rectangulo (4x3):", calcularArea({ kind: "rectangulo", ancho: 4, alto: 3 }));

// ──────────────────────────────────────────────
// EJEMPLO: Procesador de eventos de aplicacion
// ──────────────────────────────────────────────

type EventoLogin = {
  tipo: "login";
  usuarioId: number;
  timestamp: Date;
};

type EventoCompra = {
  tipo: "compra";
  usuarioId: number;
  monto: number;
  productoSku: string;
};

type EventoError = {
  tipo: "error";
  codigo: number;
  mensaje: string;
  critico: boolean;
};

type EventoApp = EventoLogin | EventoCompra | EventoError;

function procesarEvento(evento: EventoApp): string {
  switch (evento.tipo) {
    case "login":
      return "Usuario " + evento.usuarioId + " inicio sesion a las " + evento.timestamp.toISOString();
    case "compra":
      return "Usuario " + evento.usuarioId + " compro " + evento.productoSku + " por $" + evento.monto;
    case "error":
      const nivel = evento.critico ? "CRITICO" : "menor";
      return "Error " + nivel + " [" + evento.codigo + "]: " + evento.mensaje;
  }
}

const eventos: EventoApp[] = [
  { tipo: "login",  usuarioId: 1,  timestamp: new Date() },
  { tipo: "compra", usuarioId: 1,  monto: 299, productoSku: "LAP-001" },
  { tipo: "error",  codigo: 500,   mensaje: "DB no disponible", critico: true },
  { tipo: "compra", usuarioId: 7,  monto: 25,  productoSku: "MOU-042" },
  { tipo: "error",  codigo: 404,   mensaje: "Recurso no encontrado", critico: false },
];

for (const e of eventos) {
  console.log(procesarEvento(e));
}
````

## File: modulo_3/typescript/31_ejemplo_empleados.ts
````typescript
/**
 * ============================================
 * 31 - EJEMPLO COMBINADO: SISTEMA DE EMPLEADOS
 * ============================================
 * Integra: type, interface, union discriminada,
 * extension, index signature, readonly
 * ============================================
 */

type EmpleadoID = string;
type Departamento = "ingenieria" | "marketing" | "ventas" | "rrhh";

interface EntidadBase {
  readonly id: EmpleadoID;
  readonly ingresadoEn: Date;
}

// Roles como union discriminada
type RolDesarrollador = {
  rol: "desarrollador";
  lenguajes: string[];
  nivel: "junior" | "mid" | "senior";
};

type RolManager = {
  rol: "manager";
  equipoSize: number;
  presupuesto: number;
};

type RolPracticante = {
  rol: "practicante";
  tutorId: EmpleadoID;
  fechaFin: Date;
};

type RolEmpleado = RolDesarrollador | RolManager | RolPracticante;

interface Empleado extends EntidadBase {
  nombre: string;
  email: string;
  departamento: Departamento;
  salario: number;
  info: RolEmpleado;
}

type DirectorioEmpleados = Record<Departamento, Empleado[]>;

function descripcionRol(info: RolEmpleado): string {
  switch (info.rol) {
    case "desarrollador":
      return "Dev " + info.nivel + " - " + info.lenguajes.join(", ");
    case "manager":
      return "Manager de equipo (" + info.equipoSize + " personas, presupuesto $" + info.presupuesto + ")";
    case "practicante":
      return "Practicante hasta " + info.fechaFin.toLocaleDateString() + " - tutor: " + info.tutorId;
  }
}

function reporteEmpleado(emp: Empleado): void {
  console.log("--", emp.nombre, "(" + emp.id + ") --");
  console.log("   Dept:", emp.departamento, "| Salario: $" + emp.salario);
  console.log("   Rol:", descripcionRol(emp.info));
}

const empleados: Empleado[] = [
  {
    id: "EMP-001",
    ingresadoEn: new Date("2022-03-15"),
    nombre: "Laura Ruiz",
    email: "laura@empresa.com",
    departamento: "ingenieria",
    salario: 4800,
    info: { rol: "desarrollador", lenguajes: ["TypeScript", "Rust"], nivel: "senior" },
  },
  {
    id: "EMP-002",
    ingresadoEn: new Date("2020-01-10"),
    nombre: "Carlos Vega",
    email: "carlos@empresa.com",
    departamento: "ingenieria",
    salario: 6500,
    info: { rol: "manager", equipoSize: 8, presupuesto: 120000 },
  },
  {
    id: "EMP-003",
    ingresadoEn: new Date("2024-02-01"),
    nombre: "Sofia Torres",
    email: "sofia@empresa.com",
    departamento: "marketing",
    salario: 1200,
    info: { rol: "practicante", tutorId: "EMP-002", fechaFin: new Date("2024-08-01") },
  },
];

const directorio: DirectorioEmpleados = {
  ingenieria: [],
  marketing: [],
  ventas: [],
  rrhh: [],
};

for (const emp of empleados) {
  directorio[emp.departamento].push(emp);
}

console.log("=== REPORTE DE EMPLEADOS ===\n");
for (const emp of empleados) {
  reporteEmpleado(emp);
}

console.log("\n=== DIRECTORIO POR DEPARTAMENTO ===");
for (const dept in directorio) {
  const lista = directorio[dept as Departamento];
  if (lista.length > 0) {
    console.log(dept + ":", lista.map((e) => e.nombre).join(", "));
  }
}
````

## File: modulo_3/typescript/32_clases_basicas.ts
````typescript
/**
 * ============================================
 * 32 - CLASES Y CONSTRUCTORES
 * ============================================
 * Temas:
 *   - Clase basica: propiedades, constructor, metodos
 *   - Parameter properties (atajo en constructor)
 * ============================================
 */

// ──────────────────────────────────────────────
// A.1: Clase basica
// ──────────────────────────────────────────────

class Producto {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return this.nombre + " - $" + this.precio + " (" + estado + ")";
  }
}

const teclado = new Producto("Teclado mecanico", 120, true);
const monitor = new Producto("Monitor 4K", 450, false);

console.log(teclado.describir());
console.log(monitor.describir());

// ──────────────────────────────────────────────
// A.2: Parameter properties (atajo)
// ──────────────────────────────────────────────

// Forma larga (sin atajo)
class PuntoLargo {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// Forma corta con parameter properties (equivalente exacto)
class Punto {
  constructor(
    public x: number,
    public y: number
  ) {}

  distanciaAlOrigen(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const p = new Punto(3, 4);
console.log("Punto:", p.x, p.y, "distancia:", p.distanciaAlOrigen()); // 5

// ──────────────────────────────────────────────
// EJEMPLO: clase Temperatura
// ──────────────────────────────────────────────

class Temperatura {
  valorCelsius: number;

  constructor(celsius: number) {
    this.valorCelsius = celsius;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return this.valorCelsius + "°C = " +
      this.aFahrenheit() + "°F = " +
      this.aKelvin() + "K";
  }
}

const hervor = new Temperatura(100);
const congelacion = new Temperatura(0);

console.log(hervor.describir());
console.log(congelacion.describir());

// ──────────────────────────────────────────────
// EJEMPLO: clase Usuario con atajo
// ──────────────────────────────────────────────

class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public rol: "admin" | "editor" | "lector"
  ) {}

  saludo(): string {
    return "Hola, " + this.nombre + ". Tienes rol \"" + this.rol + "\".";
  }
}

const ana = new Usuario("Ana", "ana@ejemplo.com", "admin");
const luis = new Usuario("Luis", "luis@ejemplo.com", "lector");

console.log(ana.saludo());
console.log(luis.email);
````

## File: modulo_3/typescript/33_modificadores_acceso.ts
````typescript
/**
 * ============================================
 * 33 - MODIFICADORES DE ACCESO, GETTERS Y SETTERS
 * ============================================
 * Temas:
 *   - public, private, protected, readonly
 *   - Getters (get) y setters (set) con validacion
 * ============================================
 */

// ──────────────────────────────────────────────
// B.1: Modificadores de acceso
// ──────────────────────────────────────────────

class CuentaBancaria {
  readonly id: string;           // no cambia tras la creacion
  public titular: string;        // visible desde fuera
  private saldo: number;         // solo accesible dentro de la clase
  protected moneda: string;      // accesible tambien en subclases

  constructor(id: string, titular: string, saldoInicial: number) {
    this.id = id;
    this.titular = titular;
    this.saldo = saldoInicial;
    this.moneda = "MXN";
  }

  obtenerSaldo(): number {
    return this.saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto invalido");
    this.saldo += monto;
  }
}

const cuenta = new CuentaBancaria("CC-001", "Ana Garcia", 1000);
console.log("Titular:", cuenta.titular);
console.log("ID:", cuenta.id);
console.log("Saldo:", cuenta.obtenerSaldo());
cuenta.depositar(500);
console.log("Saldo tras deposito:", cuenta.obtenerSaldo());

// cuenta.saldo = 9999;  // Error: private
// cuenta.id = "otro";   // Error: readonly

// ──────────────────────────────────────────────
// B.2: Getters y setters (get / set)
// ──────────────────────────────────────────────

/**
 * Los get/set permiten acceder a una propiedad con logica integrada,
 * manteniendo sintaxis de acceso natural (sin parentesis al leer).
 * Convencion: propiedad privada _nombre, getter/setter nombre.
 */

class Circulo {
  private _radio: number;

  constructor(radio: number) {
    this._radio = radio;
  }

  get radio(): number {
    return this._radio;
  }

  set radio(valor: number) {
    if (valor <= 0) throw new Error("El radio debe ser positivo");
    this._radio = valor;
  }

  get area(): number {
    return Math.PI * this._radio ** 2;
  }
}

const c = new Circulo(5);
console.log("Radio:", c.radio);       // 5
console.log("Area:", c.area.toFixed(2)); // 78.54

c.radio = 10;                          // usa el setter
console.log("Area (nuevo radio):", c.area.toFixed(2)); // 314.16

// c.radio = -3;  // Error

// ──────────────────────────────────────────────
// EJEMPLO: Clase Porcentaje
// ──────────────────────────────────────────────

class Porcentaje {
  private _valor: number;

  constructor(valor: number) {
    this._valor = 0;
    this.valor = valor; // pasa por el setter para validar
  }

  get valor(): number {
    return this._valor;
  }

  set valor(v: number) {
    if (v < 0 || v > 100) {
      throw new Error("Porcentaje invalido: " + v + ". Debe estar entre 0 y 100.");
    }
    this._valor = v;
  }

  get complemento(): number {
    return 100 - this._valor;
  }

  toString(): string {
    return this._valor + "% (complemento: " + this.complemento + "%)";
  }
}

const descuento = new Porcentaje(25);
console.log(descuento.toString());
descuento.valor = 40;
console.log(descuento.toString());

// new Porcentaje(150);  // Error
````

## File: modulo_3/typescript/36_ejemplo_biblioteca.ts
````typescript
/**
 * ============================================
 * 36 - EJEMPLO COMBINADO: SISTEMA DE BIBLIOTECA
 * ============================================
 * Integra: clases, herencia, abstract, implements, static, polimorfismo
 * ============================================
 */

interface Prestable {
  prestar(usuario: string): boolean;
  devolver(): void;
  estaDisponible(): boolean;
}

abstract class RecursoBiblioteca implements Prestable {
  private static totalRecursos: number = 0;
  readonly id: number;
  protected _usuarioActual: string | null = null;

  constructor(public titulo: string, public autor: string) {
    RecursoBiblioteca.totalRecursos++;
    this.id = RecursoBiblioteca.totalRecursos;
  }

  static contarRecursos(): number {
    return RecursoBiblioteca.totalRecursos;
  }

  abstract tipo(): string;

  prestar(usuario: string): boolean {
    if (!this.estaDisponible()) return false;
    this._usuarioActual = usuario;
    return true;
  }

  devolver(): void {
    this._usuarioActual = null;
  }

  estaDisponible(): boolean {
    return this._usuarioActual === null;
  }

  ficha(): string {
    const estado = this.estaDisponible()
      ? "Disponible"
      : "Prestado a: " + this._usuarioActual;
    return "[" + this.tipo() + "] #" + this.id + " \"" + this.titulo + "\" - " +
           this.autor + " | " + estado;
  }
}

class Libro2 extends RecursoBiblioteca {
  constructor(
    titulo: string,
    autor: string,
    public readonly paginas: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Libro"; }
}

class Revista extends RecursoBiblioteca {
  constructor(
    titulo: string,
    autor: string,
    public readonly edicion: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Revista"; }
}

class AudioLibro extends RecursoBiblioteca {
  constructor(
    titulo: string,
    autor: string,
    public readonly duracionMin: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Audiolibro"; }

  duracionFormateada(): string {
    const h = Math.floor(this.duracionMin / 60);
    const m = this.duracionMin % 60;
    return h + "h " + m + "m";
  }
}

const catalogo: RecursoBiblioteca[] = [
  new Libro2("El senor de los anillos", "Tolkien", 1178),
  new Revista("National Geographic", "Varios", 312),
  new AudioLibro("Sapiens", "Harari", 683),
  new Libro2("Clean Code", "Martin", 431),
];

console.log("=== Catalogo de la Biblioteca ===");
for (const recurso of catalogo) {
  console.log(recurso.ficha());
}

console.log("\nTotal de recursos: " + RecursoBiblioteca.contarRecursos());

catalogo[0].prestar("Ana");
catalogo[2].prestar("Luis");

console.log("\n=== Estado tras prestamos ===");
for (const recurso of catalogo) {
  console.log(recurso.ficha());
}

const audio = catalogo[2] as AudioLibro;
console.log("\nDuracion de \"" + audio.titulo + "\": " + audio.duracionFormateada());

catalogo[0].devolver();
console.log("\n\"" + catalogo[0].titulo + "\" disponible:", catalogo[0].estaDisponible());
````

## File: modulo_3/typescript/39_restricciones_keyof.ts
````typescript
/**
 * ============================================
 * 39 - RESTRICCIONES (extends) Y keyof
 * ============================================
 * Temas:
 *   - <T extends { id: number }>
 *   - <T extends keyof U>
 *   - Acceso seguro con genericos
 * ============================================
 */

// ──────────────────────────────────────────────
// C.1: Constraints con extends
// ──────────────────────────────────────────────

// T DEBE tener al menos la propiedad "id: number"
function buscarPorId<T extends { id: number }>(lista: T[], id: number): T | undefined {
  return lista.find((item) => item.id === id);
}

const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
console.log("Buscar id 2:", buscarPorId(usuarios, 2));

const productos = [
  { id: 10, nombre: "Mouse", precio: 25 },
  { id: 11, nombre: "Teclado", precio: 80 },
];
console.log("Buscar id 11:", buscarPorId(productos, 11));

// Error: string[] no tiene propiedad "id":
// buscarPorId(["a", "b"], 0);

// ──────────────────────────────────────────────
// C.2: keyof y acceso por clave generico
// ──────────────────────────────────────────────

function prop<T, K extends keyof T>(obj: T, k: K): T[K] {
  return obj[k];
}

const persona = { nombre: "Ana", edad: 30, activa: true };

const propNombre = prop(persona, "nombre");  // string
const propEdad   = prop(persona, "edad");    // number
// prop(persona, "telefono");  // Error: no existe en el tipo

console.log("prop nombre:", propNombre, "prop edad:", propEdad);

// ──────────────────────────────────────────────
// EJEMPLO: seleccionarColumnas
// ──────────────────────────────────────────────

function seleccionarColumnas<T, K extends keyof T>(
  lista: T[],
  ...campos: K[]
): Pick<T, K>[] {
  return lista.map((item) => {
    const resultado = {} as Pick<T, K>;
    campos.forEach((campo) => {
      resultado[campo] = item[campo];
    });
    return resultado;
  });
}

const inventario = [
  { id: 1, nombre: "Monitor",  precio: 300, stock: 12 },
  { id: 2, nombre: "Teclado",  precio: 80,  stock: 50 },
  { id: 3, nombre: "Webcam",   precio: 120, stock: 8  },
];

const resumen = seleccionarColumnas(inventario, "nombre", "precio");
console.log("Columnas seleccionadas:", resumen);
````

## File: modulo_3/typescript/40_interfaces_clases_genericas.ts
````typescript
/**
 * ============================================
 * 40 - INTERFACES Y CLASES GENERICAS
 * ============================================
 * Temas:
 *   - Interface generica <T>
 *   - Clase generica (Pila<T>, Cola<T>)
 * ============================================
 */

// ──────────────────────────────────────────────
// D.1: Interface generica
// ──────────────────────────────────────────────

interface Caja<T> {
  valor: T;
  etiqueta: string;
  creada: Date;
}

const cajaNum: Caja<number> = {
  valor: 42,
  etiqueta: "respuesta",
  creada: new Date(),
};

const cajaStr: Caja<string> = {
  valor: "hola mundo",
  etiqueta: "mensaje",
  creada: new Date(),
};

console.log("cajaNum:", cajaNum.valor, cajaNum.etiqueta);
console.log("cajaStr:", cajaStr.valor, cajaStr.etiqueta);

// Interface generica para resultados de API
interface RespuestaApi<T> {
  datos: T;
  exito: boolean;
  mensaje: string;
  total?: number;
}

const respuesta: RespuestaApi<{ id: number; nombre: string }[]> = {
  datos: [{ id: 1, nombre: "Ana" }, { id: 2, nombre: "Luis" }],
  exito: true,
  mensaje: "Usuarios cargados",
  total: 2,
};

console.log("API respuesta:", respuesta.exito, respuesta.datos.length);

// ──────────────────────────────────────────────
// D.2: Clase generica Pila<T> (Stack LIFO)
// ──────────────────────────────────────────────

class Pila<T> {
  private elementos: T[] = [];

  push(item: T): void {
    this.elementos.push(item);
  }

  pop(): T | undefined {
    return this.elementos.pop();
  }

  peek(): T | undefined {
    return this.elementos[this.elementos.length - 1];
  }

  get tamano(): number {
    return this.elementos.length;
  }

  estaVacia(): boolean {
    return this.elementos.length === 0;
  }
}

const pilaNum = new Pila<number>();
pilaNum.push(1);
pilaNum.push(2);
pilaNum.push(3);
console.log("Pila peek:", pilaNum.peek());  // 3
console.log("Pila pop:", pilaNum.pop());    // 3
console.log("Pila tamano:", pilaNum.tamano); // 2

const pilaStr = new Pila<string>();
pilaStr.push("primero");
pilaStr.push("segundo");
console.log("Pila str pop:", pilaStr.pop()); // "segundo"

// ──────────────────────────────────────────────
// EJEMPLO: Resultado con error tipado
// ──────────────────────────────────────────────

interface Resultado<T, E = string> {
  ok: boolean;
  valor?: T;
  error?: E;
}

function dividir(a: number, b: number): Resultado<number> {
  if (b === 0) return { ok: false, error: "Division por cero" };
  return { ok: true, valor: a / b };
}

const r1 = dividir(10, 2);
const r2 = dividir(5, 0);
if (r1.ok) console.log("Resultado:", r1.valor);
if (!r2.ok) console.log("Error:", r2.error);
````

## File: modulo_3/typescript/41_default_utility_types.ts
````typescript
/**
 * ============================================
 * 41 - VALORES POR DEFECTO Y UTILITY TYPES
 * ============================================
 * Temas:
 *   - Valor por defecto <T = string>
 *   - Utility types: Partial, Required, Pick, Omit, Record, Readonly
 * ============================================
 */

// ──────────────────────────────────────────────
// E.1: Valor por defecto <T = string>
// ──────────────────────────────────────────────

interface Respuesta<T = string> {
  datos: T;
  codigo: number;
}

// Sin anotar: T = string por defecto
const r1: Respuesta = { datos: "Ok", codigo: 200 };
const r2: Respuesta<number[]> = { datos: [1, 2, 3], codigo: 200 };

console.log("Respuesta default:", r1.datos);
console.log("Respuesta explicita:", r2.datos);

// ──────────────────────────────────────────────
// E.2: Utility types
// ──────────────────────────────────────────────

interface Config {
  host: string;
  puerto: number;
  debug: boolean;
  timeout: number;
}

// Partial<T>: todas las propiedades opcionales
function actualizarConfig(base: Config, cambios: Partial<Config>): Config {
  return { ...base, ...cambios };
}

const cfg: Config = { host: "localhost", puerto: 8080, debug: false, timeout: 3000 };
const nuevaConfig = actualizarConfig(cfg, { debug: true, puerto: 9090 });
console.log("Partial:", nuevaConfig);

// Required<T>: todas las propiedades obligatorias
interface OpcionesBusqueda {
  query?: string;
  pagina?: number;
  limite?: number;
}
const opciones: Required<OpcionesBusqueda> = { query: "ts", pagina: 1, limite: 10 };
console.log("Required:", opciones);

// Pick<T, K>: selecciona subconjunto
interface Producto {
  id: number; nombre: string; precio: number; stock: number; proveedor: string;
}
type ProductoResumen = Pick<Producto, "id" | "nombre" | "precio">;
const resumen: ProductoResumen = { id: 1, nombre: "Mouse", precio: 25 };
console.log("Pick:", resumen);

// Omit<T, K>: excluye propiedades
type ProductoNuevo = Omit<Producto, "id">;
const nuevo: ProductoNuevo = { nombre: "Webcam", precio: 120, stock: 15, proveedor: "TechCorp" };
console.log("Omit:", nuevo);

// Record<K, V>: objeto con claves K y valores V
type Rol = "admin" | "editor" | "lector";
const permisos: Record<Rol, string[]> = {
  admin:  ["leer", "escribir", "borrar"],
  editor: ["leer", "escribir"],
  lector: ["leer"],
};
console.log("Record:", permisos);

// Readonly<T>: impide modificar propiedades
const origen: Readonly<{ x: number; y: number }> = { x: 0, y: 0 };
// origen.x = 5;  // Error
console.log("Readonly:", origen);
````

## File: modulo_3/typescript/42_ejemplo_cache.ts
````typescript
/**
 * ============================================
 * 42 - EJEMPLO COMBINADO: CACHE CON EXPIRACION
 * ============================================
 * Integra: genericos, restricciones, keyof,
 * clases genericas, utility types
 * ============================================
 */

interface EntradaCache<T> {
  valor: T;
  expiraEn: number;  // timestamp Unix en ms
}

interface Entidad {
  id: number;
}

class CacheConExpiracion<T extends Entidad> {
  private almacen = new Map<number, EntradaCache<T>>();

  guardar(item: T, ttlMs: number): void {
    this.almacen.set(item.id, {
      valor: item,
      expiraEn: Date.now() + ttlMs,
    });
  }

  obtener(id: number): T | undefined {
    const entrada = this.almacen.get(id);
    if (!entrada) return undefined;
    if (Date.now() > entrada.expiraEn) {
      this.almacen.delete(id);
      return undefined;
    }
    return entrada.valor;
  }

  campo<K extends keyof T>(id: number, clave: K): T[K] | undefined {
    return this.obtener(id)?.[clave];
  }

  resumenActivo(): Pick<T, "id">[] {
    const resultado: Pick<T, "id">[] = [];
    for (const [id, entrada] of this.almacen) {
      if (Date.now() <= entrada.expiraEn) {
        resultado.push({ id } as Pick<T, "id">);
      }
    }
    return resultado;
  }
}

interface Sesion extends Entidad {
  usuario: string;
  rol: "admin" | "editor" | "lector";
  ip: string;
}

const cacheSesiones = new CacheConExpiracion<Sesion>();

cacheSesiones.guardar({ id: 1, usuario: "ana", rol: "admin", ip: "10.0.0.1" }, 60_000);
cacheSesiones.guardar({ id: 2, usuario: "luis", rol: "editor", ip: "10.0.0.2" }, 60_000);

console.log("Obtener 1:", cacheSesiones.obtener(1)?.usuario);
console.log("Campo 2 rol:", cacheSesiones.campo(2, "rol"));
// cacheSesiones.campo(2, "clave_inexistente");  // Error en compilacion

type ActualizacionSesion = Partial<Omit<Sesion, "id">>;

function aplicarCambios(base: Sesion, cambios: ActualizacionSesion): Sesion {
  return { ...base, ...cambios };
}

const sesionActualizada = aplicarCambios(
  cacheSesiones.obtener(1)!,
  { rol: "lector", ip: "10.0.0.99" }
);
console.log("Sesion actualizada:", sesionActualizada);

console.log("Sesiones activas:", cacheSesiones.resumenActivo());
````

## File: modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_01.ts
````typescript
/**
 * Ejercicio 1: JS vs TS
 * Observa como JS permite sumar(5, "3") = "53" (bug).
 * Con tipos, TS lo detecta en compilacion.
 */

function sumarJS(a: any, b: any): any { return a + b; }
console.log("JS: sumar(5, 3) =", sumarJS(5, 3));
console.log("JS: sumar(5, '3') =", sumarJS(5, "3"));

function sumarTS(a: number, b: number): number { return a + b; }
console.log("TS: sumar(5, 3) =", sumarTS(5, 3));
````

## File: modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_02.ts
````typescript
/**
 * ============================================
 * EJERCICIO 2: const y let en una tienda en linea
 * ============================================
 * Enunciado:
 * Declara con const las constantes de una tienda en linea:
 * NOMBRE_TIENDA (string), IVA (number, valor 0.19), ABIERTA (boolean).
 * Luego declara con let el stockDisponible (number, empieza en 100)
 * y categoriaActual (string, empieza en "electronica").
 * Cambia ambas variables e intenta cambiar IVA para ver el error de TS.
 * ============================================
 */

// Constantes de la tienda (no pueden cambiar)
const NOMBRE_TIENDA: string = "TechStore";
const IVA: number = 0.19;
const ABIERTA: boolean = true;

// Variables que pueden cambiar
let stockDisponible: number = 100;
let categoriaActual: string = "electronica";

// Cambiar variables let (funciona correctamente)
stockDisponible = 85;
categoriaActual = "hogar";

console.log("Nombre:", NOMBRE_TIENDA);
console.log("IVA:", IVA);
console.log("Abierta:", ABIERTA);
console.log("Stock:", stockDisponible);     // 85
console.log("Categoria:", categoriaActual); // hogar

// Intentar cambiar una constante - TS da error:
// IVA = 0.21;
// Error: Cannot assign to 'IVA' because it is a constant
````

## File: modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_03.ts
````typescript
/**
 * ============================================
 * EJERCICIO 3: Tipos primitivos con datos de ciudad
 * ============================================
 * Enunciado:
 * Declara tres variables tipadas: latitudCiudad (number),
 * nombreCiudad (string) y esCapital (boolean).
 * Usa valores de tu ciudad o una que conozcas.
 * Imprime una linea combinando las tres con un template literal.
 * ============================================
 */

const nombreCiudad: string = "Buenos Aires";
const latitudCiudad: number = -34.6037;
const esCapital: boolean = true;

const descripcion: string = `${nombreCiudad} esta en la latitud ${latitudCiudad} y ${esCapital ? "es" : "no es"} capital.`;
console.log(descripcion);
// Buenos Aires esta en la latitud -34.6037 y es capital.
````

## File: modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_04.ts
````typescript
/**
 * ============================================
 * EJERCICIO 4: Template literals con formatearPrecio
 * ============================================
 * Enunciado:
 * Escribe function formatearPrecio(producto: string,
 * precio: number, moneda: string): string que devuelva algo como
 * "Laptop → $1,299.00 USD". Llama con tres productos distintos.
 * Extra: anade parametro descuentoPct: number y muestra
 * el precio con descuento.
 * ============================================
 */

function formatearPrecio(producto: string, precio: number, moneda: string): string {
  return `${producto} → $${precio.toFixed(2)} ${moneda}`;
}

console.log(formatearPrecio("Laptop", 1299.00, "USD"));
console.log(formatearPrecio("Mouse", 45.50, "USD"));
console.log(formatearPrecio("Teclado", 89.99, "USD"));

// Extra: con descuento
function formatearPrecioConDescuento(
  producto: string,
  precio: number,
  moneda: string,
  descuentoPct: number
): string {
  const precioFinal = precio * (1 - descuentoPct / 100);
  return `${producto} → $${precioFinal.toFixed(2)} ${moneda} (${descuentoPct}% desc.)`;
}

console.log(formatearPrecioConDescuento("Monitor", 450.00, "USD", 10));
// Monitor → $405.00 USD (10% desc.)
````

## File: modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_05.ts
````typescript
/**
 * Ejercicio 5: Strict mode
 * noImplicitAny y strictNullChecks en accion.
 */

function saludar(nombre: string): string {
  return "Hola " + nombre;
}
console.log(saludar("Ana"));

let usuario: string | null = null;
usuario = "Luis";
console.log("Usuario:", usuario);
````

## File: modulo_3/typescript/ejercicios/01_fundamentos-ejercicio_06.ts
````typescript
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
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_01.ts
````typescript
/**
 * Ejercicio 1: Celsius a Fahrenheit
 */

function celsiusAFahrenheit(c: number): number {
  return Number((c * 9 / 5 + 32).toFixed(1));
}
console.log("0°C =", celsiusAFahrenheit(0), "°F");
console.log("100°C =", celsiusAFahrenheit(100), "°F");
console.log("37°C =", celsiusAFahrenheit(37), "°F");
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_02.ts
````typescript
/**
 * ============================================
 * EJERCICIO 2: Formatear nombre completo
 * ============================================
 * Tema: string
 *
 * Enunciado:
 * Declara const nombre: string = "ANA" y
 * const apellido: string = "LOPEZ". Construye el nombre completo
 * con la primera letra en mayuscula y el resto en minuscula
 * usando charAt(0).toUpperCase() + slice(1).toLowerCase().
 * Resultado esperado: "Ana Lopez".
 * ============================================
 */

const nombre: string = "ANA";
const apellido: string = "LOPEZ";

const nombreFormateado: string =
  nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

const apellidoFormateado: string =
  apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

const nombreCompleto: string = nombreFormateado + " " + apellidoFormateado;
console.log(nombreCompleto); // Ana Lopez
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_03.ts
````typescript
/**
 * Ejercicio 3: Anio bisiesto
 */

function esBisiesto(anio: number): boolean {
  return (anio % 400 === 0) || (anio % 4 === 0 && anio % 100 !== 0);
}
console.log("2000 es bisiesto?", esBisiesto(2000));
console.log("1900 es bisiesto?", esBisiesto(1900));
console.log("2024 es bisiesto?", esBisiesto(2024));
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_04.ts
````typescript
/**
 * ============================================
 * EJERCICIO 4: Filtrar precios con descuento
 * ============================================
 * Tema: Arrays (metodos)
 *
 * Enunciado:
 * Dado const precios: number[] = [120, 35, 450, 89, 210, 15]:
 * 1. Filtrar solo los que cuestan mas de 100
 * 2. Aplicar descuento del 10% a cada uno con map
 * 3. Calcular el total con reduce
 * Imprime la lista con descuento y el total.
 * ============================================
 */

const precios: number[] = [120, 35, 450, 89, 210, 15];

// 1. Filtrar mayores a 100
const mayores100: number[] = precios.filter((p) => p > 100);
console.log("Mayores a 100:", mayores100);

// 2. Aplicar 10% de descuento
const conDescuento: number[] = mayores100.map((p) => Number((p * 0.9).toFixed(2)));
console.log("Con descuento:", conDescuento);

// 3. Total
const total: number = Number(conDescuento.reduce((acc, p) => acc + p, 0).toFixed(2));
console.log("Total con descuento: $" + total);
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_05.ts
````typescript
/**
 * ============================================
 * EJERCICIO 5: Alumnos con notas
 * ============================================
 * Tema: Arrays de objetos
 *
 * Enunciado:
 * Crea const alumnos: { nombre: string; nota: number }[] con 5 alumnos.
 * Calcula: aprobados (nota >= 60), reprobados, promedio y notaMayor
 * (nombre del alumno con la nota mas alta). Imprime los cuatro valores.
 * ============================================
 */

const alumnos: { nombre: string; nota: number }[] = [
  { nombre: "Ana",   nota: 85 },
  { nombre: "Luis",  nota: 42 },
  { nombre: "Maria", nota: 90 },
  { nombre: "Juan",  nota: 58 },
  { nombre: "Sofia", nota: 73 },
];

const aprobados = alumnos.filter((a) => a.nota >= 60);
const reprobados = alumnos.filter((a) => a.nota < 60);
const promedio = Number(
  (alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length).toFixed(1)
);

const notaMayor = alumnos.reduce((max, a) => a.nota > max.nota ? a : max);

console.log("Aprobados:", aprobados.length, "->", aprobados.map((a) => a.nombre));
console.log("Reprobados:", reprobados.length, "->", reprobados.map((a) => a.nombre));
console.log("Promedio:", promedio);
console.log("Nota mayor:", notaMayor.nombre, "(" + notaMayor.nota + ")");
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_06.ts
````typescript
/**
 * ============================================
 * EJERCICIO 6: Minimo y maximo con tupla
 * ============================================
 * Tema: Tuplas
 *
 * Enunciado:
 * Dado const nums: number[] = [5, 3, 9, 1, 7], calcula el minimo
 * y el maximo con Math.min(...nums) y Math.max(...nums).
 * Guardalos en una tupla const minMax: [number, number] = [min, max],
 * desestructurala y e imprime ambos. Resultado: 1 y 9.
 * ============================================
 */

const nums: number[] = [5, 3, 9, 1, 7];

const min: number = Math.min(...nums);
const max: number = Math.max(...nums);

const minMax: [number, number] = [min, max];
const [minimo, maximo] = minMax;

console.log("Minimo:", minimo);  // 1
console.log("Maximo:", maximo);  // 9
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_07.ts
````typescript
/**
 * ============================================
 * EJERCICIO 7: Semaforo con union de literales
 * ============================================
 * Tema: Enums / Union de literales
 *
 * Enunciado:
 * Define type Semaforo = "rojo" | "amarillo" | "verde".
 * Crea un array const semaforos: Semaforo[] = ["rojo", "verde",
 * "amarillo", "verde"] y recorrelo con for...of.
 * Dentro del bucle, usa if/else para imprimir "Detente",
 * "Precaucion" o "Avanza" segun cada elemento.
 * ============================================
 */

type Semaforo = "rojo" | "amarillo" | "verde";

const semaforos: Semaforo[] = ["rojo", "verde", "amarillo", "verde"];

for (const s of semaforos) {
  if (s === "rojo") {
    console.log(s + " -> Detente");
  } else if (s === "amarillo") {
    console.log(s + " -> Precaución");
  } else {
    console.log(s + " -> Avanza");
  }
}
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_08.ts
````typescript
/**
 * ============================================
 * EJERCICIO 8: Tallas con literales
 * ============================================
 * Tema: Literal types
 *
 * Enunciado:
 * Define type Talla = "XS" | "S" | "M" | "L" | "XL".
 * Declara variables const talla1: Talla = "XS", talla2 = "S",
 * talla3 = "M", talla4 = "L", talla5 = "XL".
 * Para cada una, calcula const extra: number usando if/else
 * (0 para S/M, 5 para XS/L, 10 para XL) e imprimelo.
 * ============================================
 */

type Talla = "XS" | "S" | "M" | "L" | "XL";

const talla1: Talla = "XS";
const talla2: Talla = "S";
const talla3: Talla = "M";
const talla4: Talla = "L";
const talla5: Talla = "XL";

function calcularExtra(talla: Talla): number {
  if (talla === "XS" || talla === "L") return 5;
  if (talla === "XL") return 10;
  return 0; // S, M
}

console.log("XS -> extra:", calcularExtra(talla1)); // 5
console.log("S  -> extra:", calcularExtra(talla2)); // 0
console.log("M  -> extra:", calcularExtra(talla3)); // 0
console.log("L  -> extra:", calcularExtra(talla4)); // 5
console.log("XL -> extra:", calcularExtra(talla5)); // 10
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_09.ts
````typescript
/**
 * ============================================
 * EJERCICIO 11: Productos con descuento opcional
 * ============================================
 * Tema: Objetos inline y opcionales
 *
 * Enunciado:
 * Define un tipo Producto inline con: id (number), nombre (string),
 * precio (number), descuento? (number), tags? (string[]).
 * Crea const productos: Producto[] con 3 productos (algunos sin
 * descuento, algunos sin tags). Recorre con for...of y calcula
 * el precio final: si tiene descuento, aplicalo; si no, usa
 * el precio tal cual. Imprime nombre y precio final.
 * ============================================
 */

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  descuento?: number;  // opcional (porcentaje)
  tags?: string[];     // opcional
};

const productos: Producto[] = [
  { id: 1, nombre: "Laptop",   precio: 1200, descuento: 15, tags: ["electronica"] },
  { id: 2, nombre: "Mesa",     precio: 300,                             tags: ["hogar"] },
  { id: 3, nombre: "Libro",    precio: 45,   descuento: 10                  },
];

for (const p of productos) {
  let precioFinal: number;
  if (p.descuento !== undefined) {
    precioFinal = Number((p.precio * (1 - p.descuento / 100)).toFixed(2));
  } else {
    precioFinal = p.precio;
  }
  const tagsStr = p.tags ? " [" + p.tags.join(", ") + "]" : "";
  console.log(p.nombre + ": $" + precioFinal + tagsStr);
}
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_01.ts
````typescript
/**
 * Ejercicio: Condicionales basicos
 * if simple, if/else, operador ternario.
 */

function verificarEdad(edad: number): void {
  if (edad >= 18) console.log("Acceso permitido (" + edad + ")");
  else console.log("Sin acceso (" + edad + ")");
}
verificarEdad(17);
verificarEdad(25);

function esPar(n: number): string {
  const msg = n % 2 === 0 ? "par" : "impar";
  console.log(n + " es " + msg + " (ternario)");
  return msg;
}
esPar(4);
esPar(7);
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_02.ts
````typescript
/**
 * Ejercicio: break y continue
 * continue para saltar elementos, break para detener el bucle.
 */

// continue: saltar impares
const valores: number[] = [3, 7, 2, 9, 11, 4, 6];
console.log("Pares (continue):");
for (const v of valores) {
  if (v % 2 !== 0) continue;
  console.log("  " + v);
}

// continue + break: validar carrito
const carrito = [
  { nombre: "A", precio: 50, stock: 3, pedido: 2 },
  { nombre: "B", precio: 0, stock: 10, pedido: 1 },
  { nombre: "C", precio: 30, stock: 1, pedido: 5 },
];
let total = 0;
for (const item of carrito) {
  if (item.precio <= 0) { console.log("Sin precio: " + item.nombre); continue; }
  if (item.pedido > item.stock) { console.log("Sin stock: " + item.nombre); continue; }
  total += item.precio * item.pedido;
}
console.log("Total a pagar: $" + total);
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_03.ts
````typescript
/**
 * ============================================
 * EJERCICIO 3: Nivel de bateria + switch dias
 * ============================================
 * Tema: if/else if/else y switch (A.3)
 *
 * Enunciado:
 * Declara const bateria: number = 25. Usa if/else if para:
 * - "Critica" si < 10
 * - "Baja" si < 30
 * - "Media" si < 60
 * - "Buena" si < 90
 * - "Completa" si >= 90
 * Prueba con varios valores.
 *
 * Extra: const diaSemana: number = 3, usa switch para
 * imprimir el nombre del dia (1 -> "Lunes", ..., 7 -> "Domingo").
 * ============================================
 */

function clasificarBateria(bateria: number): void {
  let nivel: string;
  if (bateria < 10) {
    nivel = "Critica";
  } else if (bateria < 30) {
    nivel = "Baja";
  } else if (bateria < 60) {
    nivel = "Media";
  } else if (bateria < 90) {
    nivel = "Buena";
  } else {
    nivel = "Completa";
  }
  console.log("Bateria al " + bateria + "%: " + nivel);
}

clasificarBateria(5);   // Critica
clasificarBateria(25);  // Baja
clasificarBateria(55);  // Media
clasificarBateria(85);  // Buena
clasificarBateria(100); // Completa

// Extra: switch para dias de la semana
const diaSemana: number = 3;
let nombreDia: string;

switch (diaSemana) {
  case 1: nombreDia = "Lunes"; break;
  case 2: nombreDia = "Martes"; break;
  case 3: nombreDia = "Miercoles"; break;
  case 4: nombreDia = "Jueves"; break;
  case 5: nombreDia = "Viernes"; break;
  case 6: nombreDia = "Sabado"; break;
  case 7: nombreDia = "Domingo"; break;
  default: nombreDia = "Dia invalido";
}

console.log("Dia " + diaSemana + ": " + nombreDia);
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_04.ts
````typescript
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
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_05.ts
````typescript
/**
 * Ejercicio 5: Suma 1..100 con for
 */

let sumaTotal: number = 0;
for (let i = 1; i <= 100; i++) sumaTotal += i;
console.log("Suma 1..100:", sumaTotal);

let sumaPares: number = 0;
for (let i = 2; i <= 100; i += 2) sumaPares += i;
console.log("Suma pares 1..100:", sumaPares);
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_06.ts
````typescript
/**
 * ============================================
 * EJERCICIO 6: Temperaturas (maximo y promedio)
 * ============================================
 * Tema: for...of (B.2)
 *
 * Enunciado:
 * Dado const temps = [18, 22, 25, 30, 19, 27], usa for...of
 * para encontrar e imprimir la temperatura maxima y el promedio.
 * Pista: arranca con let max = temps[0] y let suma = 0.
 * ============================================
 */

const temps: number[] = [18, 22, 25, 30, 19, 27];

let max: number = temps[0];
let suma: number = 0;

for (const t of temps) {
  if (t > max) max = t;
  suma += t;
}

const promedio: number = Number((suma / temps.length).toFixed(1));

console.log("Maximo:", max);        // 30
console.log("Promedio:", promedio); // 23.5
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_07.ts
````typescript
/**
 * ============================================
 * EJERCICIO 7: Notas con for...in
 * ============================================
 * Tema: for...in (B.3)
 *
 * Enunciado:
 * Dado const notas = { mate: 85, fisica: 70, quimica: 95, historia: 60 },
 * usa for...in para imprimir cada materia con su nota y, al final,
 * cuantas materias estan aprobadas (nota >= 70).
 * ============================================
 */

const notas: Record<string, number> = {
  mate: 85,
  fisica: 70,
  quimica: 95,
  historia: 60,
};

let aprobadas: number = 0;

for (const materia in notas) {
  const nota = notas[materia];
  const estado = nota >= 70 ? "aprobada" : "reprobada";
  console.log(materia + ": " + nota + " (" + estado + ")");
  if (nota >= 70) aprobadas++;
}

console.log("Materias aprobadas: " + aprobadas + "/" + Object.keys(notas).length);
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_08.ts
````typescript
/**
 * Ejercicio 8: IVA con map + forEach
 */

const precios: number[] = [100, 250, 80, 500];
const conIVA: number[] = precios.map((p) => Number((p * 1.19).toFixed(2)));

conIVA.forEach((p, i) => {
  console.log("Precio " + (i + 1) + ": $" + precios[i] + " -> con IVA: $" + p);
});
````

## File: modulo_3/typescript/ejercicios/03_control_de_flujo-ejercicio_09.ts
````typescript
/**
 * ============================================
 * EJERCICIO 9: Simulacion de dado (while)
 * ============================================
 * Tema: while / do-while (B.5)
 *
 * Enunciado:
 * Simula un dado con Math.floor(Math.random() * 6) + 1.
 * Usa un while (o do-while) que siga "tirando" hasta sacar
 * un 6, contando cuantas tiradas fueron necesarias.
 * Imprime el conteo final.
 * ============================================
 */

let tiradas: number = 0;
let resultado: number = 0;

while (resultado !== 6) {
  resultado = Math.floor(Math.random() * 6) + 1;
  tiradas++;
  console.log("Tirada " + tiradas + ": " + resultado);
}

console.log("Se necesitaron " + tiradas + " tirada(s) para sacar 6");
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_01.ts
````typescript
/**
 * Ejercicio: Rectangulo - funcion vs clase
 * Mismas formulas (area, perimetro) implementadas de dos formas.
 */

// Como funcion
function areaRectangulo(base: number, altura: number): number {
  return base * altura;
}
function perimetroRectangulo(base: number, altura: number): number {
  return 2 * (base + altura);
}
console.log("Funcion 8x5: area=" + areaRectangulo(8, 5) + " perimetro=" + perimetroRectangulo(8, 5));

// Como clase
class Rectangulo {
  constructor(public ancho: number, public alto: number) {}
  area(): number { return this.ancho * this.alto; }
  perimetro(): number { return 2 * (this.ancho + this.alto); }
}
const r1 = new Rectangulo(5, 3);
const r2 = new Rectangulo(10, 4);
console.log("Clase 5x3: area=" + r1.area() + " perimetro=" + r1.perimetro());
console.log("Clase 10x4: area=" + r2.area() + " perimetro=" + r2.perimetro());
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_02.ts
````typescript
/**
 * Ejercicio: Contador - closure vs clase
 * Misma funcionalidad (incrementar, decrementar, valor) con ambas tecnicas.
 */

// Closure
function crearContador(inicio: number = 0) {
  let cuenta = inicio;
  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor: () => cuenta,
  };
}
const c = crearContador();
c.incrementar(); c.incrementar(); c.incrementar(); c.decrementar();
console.log("Closure valor:", c.valor());

// Clase
class Contador {
  private valor: number = 0;
  incrementar(): void { this.valor++; }
  decrementar(): void { if (this.valor > 0) this.valor--; }
  obtenerValor(): number { return this.valor; }
}
const cont = new Contador();
cont.incrementar(); cont.incrementar(); cont.incrementar(); cont.decrementar();
console.log("Clase valor:", cont.obtenerValor());
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_03.ts
````typescript
/**
 * ============================================
 * EJERCICIO 2: Funciones flecha (esPar, esPositivo, enCelsius)
 * ============================================
 * Tema: Funciones flecha (A.2)
 *
 * Enunciado:
 * Escribe tres funciones flecha con retorno implicito:
 * esPar (number -> boolean), esPositivo (number -> boolean),
 * enCelsius (Fahrenheit -> Celsius: (f - 32) * 5/9, 1 decimal).
 * Prueba con 4, -3 y 98.6. Temperatura esperada: 37.0.
 * ============================================
 */

const esPar = (n: number): boolean => n % 2 === 0;
const esPositivo = (n: number): boolean => n > 0;
const enCelsius = (f: number): number => Number(((f - 32) * 5 / 9).toFixed(1));

console.log("4 es par?", esPar(4));          // true
console.log("-3 es positivo?", esPositivo(-3)); // false
console.log("98.6 F en Celsius:", enCelsius(98.6)); // 37.0
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_04.ts
````typescript
/**
 * ============================================
 * EJERCICIO 3: formatearPrecio (opcionales y default)
 * ============================================
 * Tema: Parametros opcionales y por defecto (B.1)
 *
 * Enunciado:
 * Escribe function formatearPrecio(monto: number, moneda: string = "USD",
 * decimales: number = 2): string que devuelva "USD 1,234.50".
 * Prueba con (1234.5), (99, "EUR") y (50.125, "MXN", 1).
 * Pista: monto.toFixed(decimales).
 * ============================================
 */

function formatearPrecio(
  monto: number,
  moneda: string = "USD",
  decimales: number = 2
): string {
  return moneda + " " + Number(monto.toFixed(decimales)).toLocaleString("es-MX", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
}

console.log(formatearPrecio(1234.5));              // USD 1,234.50
console.log(formatearPrecio(99, "EUR"));           // EUR 99.00
console.log(formatearPrecio(50.125, "MXN", 1));    // MXN 50.1
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_05.ts
````typescript
/**
 * Ejercicio 4: maximo/minimo con rest parameters
 */

function maximo(primero: number, ...resto: number[]): number {
  return resto.reduce((max, n) => (n > max ? n : max), primero);
}
function minimo(primero: number, ...resto: number[]): number {
  return resto.reduce((min, n) => (n < min ? n : min), primero);
}
console.log("Maximo:", maximo(3, 1, 4, 1, 5, 9, 2, 6));
console.log("Minimo:", minimo(3, 1, 4, 1, 5, 9, 2, 6));
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_06.ts
````typescript
/**
 * Ejercicio 5: asegurar con never
 */

function fallar(mensaje: string): never {
  throw new Error(mensaje);
}

function asegurar(condicion: boolean, mensaje: string): void {
  if (!condicion) fallar(mensaje);
}

asegurar(2 + 2 === 4, "Matematicas rotas");
console.log("Primera asercion pasada");
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_07.ts
````typescript
/**
 * ============================================
 * EJERCICIO 6: componer (orden superior)
 * ============================================
 * Tema: Funciones de orden superior (D.1)
 *
 * Enunciado:
 * Escribe function componer<T>(...fns: Array<(x: T) => T>): (x: T) => T
 * que devuelva una funcion que aplica todas las funciones dadas
 * de derecha a izquierda (compose matematico).
 * Prueba con tres funciones sobre string:
 * trim, toLowerCase y capitalizar.
 * componer(capitalizar, toLowerCase, trim)(" HOLA MUNDO ")
 * debe ser "Hola mundo".
 * ============================================
 */

function componer<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const trim = (s: string): string => s.trim();
const toLowerCase = (s: string): string => s.toLowerCase();
const capitalizar = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const normalizar = componer(capitalizar, toLowerCase, trim);
console.log(normalizar(" HOLA MUNDO ")); // "Hola mundo"
````

## File: modulo_3/typescript/ejercicios/04_funciones-ejercicio_08.ts
````typescript
/**
 * ============================================
 * EJERCICIO 7: convertir (sobrecarga)
 * ============================================
 * Tema: Sobrecargas (E.1)
 *
 * Enunciado:
 * Escribe funcion sobrecargada convertir:
 * - convertir(valor: number, a: "binario" | "hex"): string
 * - convertir(valor: string, desde: "binario" | "hex"): number
 * Implementacion:
 * - number a string: n.toString(2) o n.toString(16)
 * - string a number: parseInt(s, 2) o parseInt(s, 16)
 * Prueba: convertir(255, "hex") -> "ff", convertir("ff", "hex") -> 255
 * ============================================
 */

function convertir(valor: number, a: "binario" | "hex"): string;
function convertir(valor: string, desde: "binario" | "hex"): number;
function convertir(
  valor: number | string,
  modo: "binario" | "hex"
): string | number {
  if (typeof valor === "number") {
    return valor.toString(modo === "hex" ? 16 : 2);
  }
  return parseInt(valor, modo === "hex" ? 16 : 2);
}

console.log("255 en hex:", convertir(255, "hex"));     // "ff"
console.log("ff en decimal:", convertir("ff", "hex")); // 255
console.log("255 en binario:", convertir(255, "binario")); // "11111111"
console.log("11111111 en decimal:", convertir("11111111", "binario")); // 255
````

## File: modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_01.ts
````typescript
/**
 * Ejercicio: Libro - interface vs clase
 * Mismo dominio modelado con interface (forma) y con clase (comportamiento).
 */

// Interface
interface Libro {
  readonly isbn: string;
  titulo: string;
  autor: string;
  paginas: number;
  prestado?: boolean;
}
function resumenLibro(l: Libro): string {
  const estado = l.prestado ? "Prestado" : "Disponible";
  return l.titulo + " (ISBN: " + l.isbn + ") - " + estado;
}
console.log(resumenLibro({ isbn: "978-3-16-148410-0", titulo: "El Quijote", autor: "Cervantes", paginas: 863, prestado: true }));

// Clase
class LibroClase {
  constructor(
    public titulo: string,
    public autor: string,
    public paginas: number
  ) {}
  resumen(): string {
    return "'" + this.titulo + "' de " + this.autor + " (" + this.paginas + " paginas)";
  }
}
const l1 = new LibroClase("Cien anios de soledad", "Gabriel Garcia Marquez", 496);
console.log(l1.resumen());
````

## File: modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_02.ts
````typescript
/**
 * Ejercicio: Vehiculo - herencia con interfaces y clases
 * Misma jerarquia (Vehiculo -> Coche/Auto, Moto) con ambas tecnicas.
 */

// Interfaces (extends)
interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
}
interface Coche extends Vehiculo { puertas: number; }
interface Moto extends Vehiculo { cilindrada: number; }
type VehiculoElectrico = Vehiculo & { autonomiaKm: number };

const coche: Coche = { marca: "Toyota", modelo: "Corolla", anio: 2023, puertas: 4 };
const motoInt: Moto = { marca: "Honda", modelo: "CB500", anio: 2022, cilindrada: 500 };
const elect: VehiculoElectrico = { marca: "Tesla", modelo: "Model 3", anio: 2024, autonomiaKm: 500 };
console.log("Interface - Coche:", coche.marca, coche.puertas + "p");
console.log("Interface - Moto:", motoInt.marca, motoInt.cilindrada + "cc");

// Clases (extends)
class VehiculoClase {
  constructor(public marca: string, public velocidadMax: number) {}
  describir(): string { return this.marca + " (max: " + this.velocidadMax + " km/h)"; }
}
class Automovil extends VehiculoClase {
  constructor(marca: string, velocidadMax: number, public numeroPuertas: number) { super(marca, velocidadMax); }
  override describir(): string { return super.describir() + " - " + this.numeroPuertas + " puertas"; }
}
class Motocicleta extends VehiculoClase {
  constructor(marca: string, velocidadMax: number, public tieneSidecar: boolean) { super(marca, velocidadMax); }
  override describir(): string { return super.describir() + " - sidecar: " + (this.tieneSidecar ? "si" : "no"); }
}
const auto = new Automovil("Toyota", 180, 4);
const motoCls = new Motocicleta("Honda", 200, false);
console.log("Clase - Auto:", auto.describir());
console.log("Clase - Moto:", motoCls.describir());
````

## File: modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_03.ts
````typescript
/**
 * Ejercicio: Implementaciones de interface
 * Interface con metodo, implementada como objeto literal y como clase.
 */

interface Validador {
  validar(valor: string): boolean;
  mensajeError: string;
}

// Como objeto literal
const emailValidator: Validador = {
  validar(valor) { return valor.includes("@"); },
  mensajeError: "El email debe contener @",
};

// Como clase implementando interface
interface Imprimible { imprimir(): void; }

class Factura implements Imprimible {
  constructor(public numero: string, public total: number) {}
  imprimir(): void {
    console.log("=== FACTURA #" + this.numero + " ===");
    console.log("Total: $" + this.total.toFixed(2));
  }
}
class Recibo implements Imprimible {
  constructor(public producto: string, public monto: number) {}
  imprimir(): void {
    console.log("RECIBO: " + this.producto + " - $" + this.monto.toFixed(2));
  }
}

function ejecutarValidacion(val: string, v: Validador): void {
  console.log(v.validar(val) ? "OK" : v.mensajeError);
}

ejecutarValidacion("ana@mail.com", emailValidator);
ejecutarValidacion("123", emailValidator);

new Factura("F-001", 250.50).imprimir();
new Recibo("Teclado mecanico", 120.00).imprimir();
````

## File: modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_04.ts
````typescript
/**
 * ============================================
 * EJERCICIO 1: Moneda y Precio (type alias)
 * ============================================
 * Tema: type alias (A.1)
 *
 * Enunciado:
 * Define type Moneda = "USD" | "EUR" | "MXN".
 * Define type Precio = { monto: number; moneda: Moneda }.
 * Crea tres objetos Precio con monedas distintas y muestralos.
 * ============================================
 */

type Moneda = "USD" | "EUR" | "MXN";
type Precio = { monto: number; moneda: Moneda };

const p1: Precio = { monto: 100, moneda: "USD" };
const p2: Precio = { monto: 200, moneda: "EUR" };
const p3: Precio = { monto: 150, moneda: "MXN" };

console.log("P1:", p1.monto, p1.moneda);
console.log("P2:", p2.monto, p2.moneda);
console.log("P3:", p3.monto, p3.moneda);
````

## File: modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_05.ts
````typescript
/**
 * Ejercicio 3: type vs interface
 * Las interfaces no pueden ser uniones; usa type.
 */

type Color = "rojo" | "verde" | "azul";
const c1: Color = "rojo";
const c2: Color = "verde";
const c3: Color = "azul";
console.log("Colores:", c1, c2, c3);
````

## File: modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_06.ts
````typescript
/**
 * ============================================
 * EJERCICIO 5: contarLetras (Record)
 * ============================================
 * Tema: Index signatures / Record (E.1)
 *
 * Enunciado:
 * Crea un type ConteoLetras = Record<string, number>.
 * Escribe function contarLetras(texto: string): ConteoLetras
 * que devuelva un objeto con cada letra y su frecuencia.
 * Prueba con "banana".
 * ============================================
 */

type ConteoLetras = Record<string, number>;

function contarLetras(texto: string): ConteoLetras {
  const resultado: ConteoLetras = {};
  for (const letra of texto.toLowerCase()) {
    if (resultado[letra] === undefined) {
      resultado[letra] = 0;
    }
    resultado[letra]++;
  }
  return resultado;
}

const conteo = contarLetras("banana");
console.log("Frecuencia de letras en 'banana':", conteo);
// { b: 1, a: 3, n: 2 }
````

## File: modulo_3/typescript/ejercicios/05_type_interfaces-ejercicio_07.ts
````typescript
/**
 * ============================================
 * EJERCICIO 8: PlanSuscripcion (readonly)
 * ============================================
 * Tema: readonly (H.1)
 *
 * Enunciado:
 * Define type PlanSuscripcion con: readonly nombre, readonly precioMensual,
 * readonly caracteristicas: readonly string[], activo: boolean.
 * Crea dos planes ("Basico" y "Pro").
 * Intenta cambiar precioMensual (debe dar error).
 * Cambia activo a false en uno (debe funcionar).
 * ============================================
 */

type PlanSuscripcion = {
  readonly nombre: string;
  readonly precioMensual: number;
  readonly caracteristicas: readonly string[];
  activo: boolean;
};

const planBasico: PlanSuscripcion = {
  nombre: "Basico",
  precioMensual: 9.99,
  caracteristicas: ["1 usuario", "10 GB"],
  activo: true,
};

const planPro: PlanSuscripcion = {
  nombre: "Pro",
  precioMensual: 19.99,
  caracteristicas: ["5 usuarios", "100 GB", "Soporte prioritario"],
  activo: false,
};

// planBasico.precioMensual = 14.99;  // Error: readonly
// planPro.caracteristicas.push("extra"); // Error: readonly array

planBasico.activo = false;  // OK, no es readonly
console.log("Plan:", planBasico.nombre, "activo:", planBasico.activo);
````

## File: modulo_3/typescript/ejercicios/06_poo-ejercicio_01.ts
````typescript
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
````

## File: modulo_3/typescript/ejercicios/06_poo-ejercicio_02.ts
````typescript
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
````

## File: modulo_3/typescript/ejercicios/06_poo-ejercicio_03.ts
````typescript
/**
 * ============================================
 * EJERCICIO 8: IdUnico (static)
 * ============================================
 * Tema: Miembros estaticos (D.2)
 *
 * Enunciado:
 * Clase IdUnico con private static ultimo: number = 0 y
 * static generar(): number que incremente y devuelva el siguiente ID.
 * Crea 5 IDs sin instanciar la clase.
 * ============================================
 */

class IdUnico {
  private static ultimo: number = 0;

  static generar(): number {
    IdUnico.ultimo++;
    return IdUnico.ultimo;
  }
}

console.log("ID 1:", IdUnico.generar());
console.log("ID 2:", IdUnico.generar());
console.log("ID 3:", IdUnico.generar());
console.log("ID 4:", IdUnico.generar());
console.log("ID 5:", IdUnico.generar());
````

## File: modulo_3/typescript/ejercicios/06_poo-ejercicio_04.ts
````typescript
/**
 * ============================================
 * EJERCICIO 9: Descuento (polimorfismo)
 * ============================================
 * Tema: Polimorfismo (D.3)
 *
 * Enunciado:
 * Clase abstracta Descuento con aplicar(precio: number): number
 * y etiqueta(precio: number): string ("$precio -> $final").
 * Implementa:
 * - DescuentoPorcentaje(porcentaje)
 * - DescuentoFijo(cantidad) (minimo $0)
 * - SinDescuento (precio sin cambios)
 * Guarda en array Descuento[] y recorre imprimiendo etiqueta(100).
 * ============================================
 */

abstract class Descuento {
  abstract aplicar(precio: number): number;

  etiqueta(precio: number): string {
    return "$" + precio + " -> $" + this.aplicar(precio);
  }
}

class DescuentoPorcentaje extends Descuento {
  constructor(private porcentaje: number) {
    super();
  }

  override aplicar(precio: number): number {
    return Number((precio * (1 - this.porcentaje / 100)).toFixed(2));
  }
}

class DescuentoFijo extends Descuento {
  constructor(private cantidad: number) {
    super();
  }

  override aplicar(precio: number): number {
    const resultado = precio - this.cantidad;
    return resultado > 0 ? resultado : 0;
  }
}

class SinDescuento extends Descuento {
  override aplicar(precio: number): number {
    return precio;
  }
}

const descuentos: Descuento[] = [
  new DescuentoPorcentaje(15),
  new DescuentoFijo(30),
  new SinDescuento(),
];

for (const d of descuentos) {
  console.log(d.etiqueta(100));
}
// $100 -> $85
// $100 -> $70
// $100 -> $100
````

## File: modulo_3/typescript/ejercicios/07_genericos-ejercicio_01.ts
````typescript
/**
 * Ejercicio: Funciones genericas basicas
 * envolverArray<T>, intercambiar<T>, fusionar<T, U>
 */

function envolverArray<T>(valor: T): T[] {
  return [valor, valor, valor];
}
console.log("envolverArray(42):", envolverArray(42));
console.log("envolverArray('hola'):", envolverArray("hola"));

function intercambiar<T>(par: [T, T]): [T, T] {
  return [par[1], par[0]];
}
console.log("intercambiar([1, 2]):", intercambiar([1, 2]));
console.log("intercambiar(['a', 'b']):", intercambiar(["a", "b"]));

function fusionar<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const obj1 = { nombre: "Ana", edad: 30 };
const obj2 = { ciudad: "Lima" };
console.log("fusionar:", fusionar(obj1, obj2));
````

## File: modulo_3/typescript/ejercicios/07_genericos-ejercicio_02.ts
````typescript
/**
 * Ejercicio: Estructuras de datos genericas
 * Cola<T> (FIFO) + Cache<T> (key-value con default)
 */

class Cola<T> {
  private items: T[] = [];
  enqueue(item: T): void { this.items.push(item); }
  dequeue(): T | undefined { return this.items.shift(); }
  peek(): T | undefined { return this.items[0]; }
  get tamano(): number { return this.items.length; }
  estaVacia(): boolean { return this.items.length === 0; }
}

const cola = new Cola<string>();
cola.enqueue("primero"); cola.enqueue("segundo"); cola.enqueue("tercero");
console.log("Cola peek:", cola.peek());
console.log("Cola dequeue:", cola.dequeue());
console.log("Cola tamano:", cola.tamano);

class Cache_<T = string> {
  private almacen = new Map<string, T>();
  guardar(clave: string, valor: T): void { this.almacen.set(clave, valor); }
  obtener(clave: string): T | undefined { return this.almacen.get(clave); }
  eliminar(clave: string): void { this.almacen.delete(clave); }
}

const cacheStr = new Cache_();
cacheStr.guardar("saludo", "Hola");
console.log("Cache string:", cacheStr.obtener("saludo"));

const cacheNum = new Cache_<number>();
cacheNum.guardar("max", 100);
console.log("Cache number:", cacheNum.obtener("max"));
````

## File: modulo_3/typescript/ejercicios/07_genericos-ejercicio_03.ts
````typescript
/**
 * Ejercicio B.2: transformarMapa
 * Crea una funcion transformarMapa<K, V, R>
 * que reciba un Map<K, V> y una funcion transformadora (v: V) => R,
 * y devuelva un Map<K, R>.
 */

function transformarMapa<K, V, R>(mapa: Map<K, V>, fn: (v: V) => R): Map<K, R> {
  const resultado = new Map<K, R>();
  mapa.forEach((v, k) => {
    resultado.set(k, fn(v));
  });
  return resultado;
}

const edades = new Map<string, number>([
  ["Ana", 30],
  ["Luis", 25],
]);

const edadesTexto = transformarMapa(edades, (edad) => `${edad} anios`);
console.log("edades original:", edades);
console.log("edades transformado:", edadesTexto);
````

## File: modulo_3/typescript/ejercicios/07_genericos-ejercicio_04.ts
````typescript
/**
 * Ejercicio C.2: agruparPor
 * Crea una funcion agruparPor<T, K extends keyof T>
 * que reciba un array T[] y una clave K,
 * y devuelva un Map<T[K], T[]> agrupado por esa clave.
 */

function agruparPor<T, K extends keyof T>(lista: T[], clave: K): Map<T[K], T[]> {
  const mapa = new Map<T[K], T[]>();
  for (const item of lista) {
    const key = item[clave];
    if (!mapa.has(key)) {
      mapa.set(key, []);
    }
    mapa.get(key)!.push(item);
  }
  return mapa;
}

interface Empleado {
  depto: string;
  nombre: string;
  sueldo: number;
}

const empleados: Empleado[] = [
  { depto: "ventas",  nombre: "Ana",   sueldo: 5000 },
  { depto: "ingenieria", nombre: "Luis",  sueldo: 7000 },
  { depto: "ventas",  nombre: "Sofia", sueldo: 5500 },
  { depto: "rrhh",    nombre: "Pedro", sueldo: 4500 },
];

const porDepto = agruparPor(empleados, "depto");
console.log("Por depto:");
porDepto.forEach((emps, depto) => {
  console.log(`  ${depto}: ${emps.map((e) => e.nombre).join(", ")}`);
});
````

## File: modulo_3/typescript/ejercicios/07_genericos-ejercicio_05.ts
````typescript
/**
 * Ejercicio D.1: Paginado
 * Crea una interface Paginado<T> con:
 *   items: T[]
 *   pagina: number
 *   totalPaginas: number
 *   totalItems: number
 * y una funcion paginar<T> que reciba T[] y pagina (1-indexed)
 * y devuelva Paginado<T> con 5 items por pagina.
 */

interface Paginado<T> {
  items: T[];
  pagina: number;
  totalPaginas: number;
  totalItems: number;
}

function paginar<T>(datos: T[], pagina: number, porPagina = 5): Paginado<T> {
  const totalItems = datos.length;
  const totalPaginas = Math.ceil(totalItems / porPagina);
  const inicio = (pagina - 1) * porPagina;
  const items = datos.slice(inicio, inicio + porPagina);
  return { items, pagina, totalPaginas, totalItems };
}

const numeros = Array.from({ length: 23 }, (_, i) => i + 1);

const pag1 = paginar(numeros, 1);
const pag2 = paginar(numeros, 2);
const pag5 = paginar(numeros, 5);

console.log("Pagina 1:", JSON.stringify(pag1));
console.log("Pagina 2:", JSON.stringify(pag2));
console.log("Pagina 5:", JSON.stringify(pag5));
````

## File: modulo_3/typescript/ejercicios/07_genericos-ejercicio_06.ts
````typescript
/**
 * Ejercicio E.2: Empleado (utility types)
 * Dada la interface Empleado:
 *   - Crea un tipo EmpleadoNuevo usando Omit para excluir "id"
 *   - Crea un tipo ActualizacionEmpleado usando Partial
 *   - Define un tipo Plantilla con Record para mapear departamentos a arrays de nombres
 *   - Define un tipo EmpleadoReadonly con Readonly (solo lectura)
 */

interface Empleado {
  id: number;
  nombre: string;
  depto: string;
  sueldo: number;
  activo: boolean;
}

type EmpleadoNuevo = Omit<Empleado, "id">;
type ActualizacionEmpleado = Partial<Empleado>;
type Plantilla = Record<string, string[]>;
type EmpleadoReadonly = Readonly<Empleado>;

// Pruebas
const nuevoEmpleado: EmpleadoNuevo = {
  nombre: "Ana",
  depto: "Ingenieria",
  sueldo: 6000,
  activo: true,
};

const cambios: ActualizacionEmpleado = { sueldo: 6500, depto: "Tech Lead" };

const directores: Plantilla = {
  ingenieria: ["Ana", "Luis"],
  ventas: ["Sofia"],
};

const soloLectura: EmpleadoReadonly = {
  id: 1,
  nombre: "Pedro",
  depto: "RRHH",
  sueldo: 5000,
  activo: true,
};
// soloLectura.sueldo = 5500;  // Error: readonly

console.log("EmpleadoNuevo:", nuevoEmpleado);
console.log("Actualizacion:", cambios);
console.log("Plantilla:", directores);
console.log("Readonly:", soloLectura);
````

## File: modulo_3/typescript/package.json
````json
{
  "name": "typescript-fundamentos",
  "private": true,
  "version": "1.0.0",
  "description": "Fundamentos de TypeScript - Tutorial del profesor Francisco Higuera",
  "scripts": {
    "dev": "npx tsx"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tsx": "^4.19.0"
  }
}
````

## File: modulo_3/typescript/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["./**/*.ts"],
  "exclude": ["node_modules"]
}
````

## File: modulo_4/01-Componentes/.gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: modulo_4/01-Componentes/.oxlintrc.json
````json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
````

## File: modulo_4/01-Componentes/eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
````

## File: modulo_4/01-Componentes/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>01-componentes</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: modulo_4/01-Componentes/public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

## File: modulo_4/01-Componentes/public/icons.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

## File: modulo_4/01-Componentes/README.md
````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
````

## File: modulo_4/01-Componentes/src/App.css
````css

````

## File: modulo_4/01-Componentes/src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: modulo_4/01-Componentes/src/assets/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## File: modulo_4/01-Componentes/src/components/AppHeader.tsx
````typescript
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import UserBadge from './UserBadge'

export default function AppHeader() {
  const { theme } = useTheme()

  const bg = theme === 'light' ? '#f3f4f6' : '#111827'
  const color = theme === 'light' ? '#111827' : '#f9fafb'

  return (
    <div
      style={{
        background: bg,
        color,
        padding: 24,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'all 0.2s',
      }}
    >
      <h2 style={{ margin: 0, fontSize: 20 }}>AppHeader</h2>
      <p style={{ margin: 0, fontSize: 14 }}>
        Este componente usa <strong>ThemeContext</strong> y <strong>AuthContext</strong>
      </p>
      <ThemeToggle />
      <UserBadge />
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/BasicCounter.tsx
````typescript
import { useReducer } from 'react'

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset':     return 0
  }
}

export default function BasicCounter() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>{count}</div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={() => dispatch({ type: 'decrement' })} style={btnStyle('#e00')}>-1</button>
        <button onClick={() => dispatch({ type: 'reset' })} style={btnStyle('#6b7280')}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })} style={btnStyle('#22c55e')}>+1</button>
      </div>
    </div>
  )
}

function btnStyle(color: string): React.CSSProperties {
  return {
    padding: '8px 20px',
    background: color,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
  }
}
````

## File: modulo_4/01-Componentes/src/components/CatalogProductItem.tsx
````typescript
// src/components/CatalogProductItem.tsx

interface CatalogProductItemProps {
  id: number
  name: string
  price: number
  onAddToCart: (id: number, name: string, price: number) => void
}

export default function CatalogProductItem({
  id,
  name,
  price,
  onAddToCart,
}: CatalogProductItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <div>
        <p style={{ margin: 0, fontWeight: 500 }}>{name}</p>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>${price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAddToCart(id, name, price)}
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '6px 14px',
          cursor: 'pointer',
        }}
      >
        + Agregar
      </button>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/CodeBlock.tsx
````typescript
import { useClipboard } from '../hooks/useClipboard'

const code = `export default function Hello() {
  return <h1>Hola Mundo</h1>
}`

export default function CodeBlock() {
  const { copied, copy } = useClipboard()

  return (
    <div
      style={{
        maxWidth: 420,
        background: '#1f2937',
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 14px',
          background: '#374151',
        }}
      >
        <span style={{ color: '#9ca3af', fontSize: 12 }}>React Component</span>
        <button
          onClick={() => copy(code)}
          style={{
            padding: '4px 12px',
            background: copied ? '#22c55e' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
      <pre
        style={{
          padding: 16,
          margin: 0,
          color: '#e2e8f0',
          fontSize: 14,
          fontFamily: 'monospace',
          lineHeight: 1.6,
          overflowX: 'auto',
        }}
      >
        {code}
      </pre>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ColoredBox.tsx
````typescript
// src/components/ColoredBox.tsx

interface ColoredBoxProps {
  color: string
  width?: number
  height?: number
  label?: string
}

export default function ColoredBox({
  color,
  width = 80,
  height = 80,
  label,
}: ColoredBoxProps) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius: 8,
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      />
      {label && <span style={{ fontSize: 12, color: '#666' }}>{label}</span>}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ConditionalGreeting.tsx
````typescript
// src/components/ConditionalGreeting.tsx

type TimeOfDay = 'morning' | 'afternoon' | 'evening'

interface ConditionalGreetingProps {
  isLoggedIn: boolean
  userName?: string
  timeOfDay?: TimeOfDay
}

export default function ConditionalGreeting({
  isLoggedIn,
  userName = 'visitante',
  timeOfDay = 'morning',
}: ConditionalGreetingProps) {
  const greetings: Record<TimeOfDay, string> = {
    morning:   'Buenos días',
    afternoon: 'Buenas tardes',
    evening:   'Buenas noches',
  }

  if (!isLoggedIn) {
    return (
      <p style={{ color: '#e00' }}>
        Por favor inicia sesión para continuar.
      </p>
    )
  }

  return (
    <p style={{ color: '#333' }}>
      {greetings[timeOfDay]}, <strong>{userName}</strong>. Bienvenido de vuelta.
    </p>
  )
}
````

## File: modulo_4/01-Componentes/src/components/CurrentDateDisplay.tsx
````typescript
// src/components/CurrentDateDisplay.tsx

export default function CurrentDateDisplay() {
  const now = new Date()

  const fecha = now.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const hora = now.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div style={{ fontSize: 14, color: '#555' }}>
      <span style={{ textTransform: 'capitalize' }}>{fecha}</span>
      <span style={{ marginLeft: 12, color: '#999' }}>{hora}</span>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/FilteredCatalog.tsx
````typescript
import { useState, useMemo } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
}

const products: Product[] = [
  { id: 1, name: 'Teclado mecánico',  category: 'Periféricos', price: 89.99 },
  { id: 2, name: 'Monitor 27"',       category: 'Monitores',   price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', category: 'Periféricos', price: 29.99 },
  { id: 4, name: 'Webcam HD',         category: 'Periféricos', price: 59.99 },
  { id: 5, name: 'Audífonos Bluetooth', category: 'Audio',     price: 79.99 },
  { id: 6, name: 'Base para monitor', category: 'Accesorios',  price: 39.99 },
  { id: 7, name: 'Cable USB-C',       category: 'Accesorios',  price: 12.99 },
  { id: 8, name: 'Parlante portátil', category: 'Audio',       price: 45.00 },
]

const categories = [...new Set(products.map((p) => p.category))]

export default function FilteredCatalog() {
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category && p.category !== category) return false
      if (p.price < minPrice) return false
      if (p.price > maxPrice) return false
      return true
    })
  }, [category, minPrice, maxPrice])

  const inputStyle: React.CSSProperties = {
    padding: '6px 10px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 13,
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
          <option value="">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Precio min"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          style={{ ...inputStyle, width: 100 }}
        />
        <input
          type="number"
          placeholder="Precio max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          style={{ ...inputStyle, width: 100 }}
        />
      </div>

      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {filtered.length} producto{filtered.length !== 1 ? 's' : ''}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            <span>{p.name} <span style={{ color: '#6b7280', fontSize: 12 }}>({p.category})</span></span>
            <strong>${p.price.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/FilterTable.tsx
````typescript
import { useState, useCallback, useMemo } from 'react'

interface Row {
  id: number
  name: string
  role: string
  department: string
}

const data: Row[] = [
  { id: 1, name: 'Ana García',      role: 'Developer',  department: 'Ingeniería' },
  { id: 2, name: 'Carlos López',    role: 'Designer',   department: 'Diseño' },
  { id: 3, name: 'María Pérez',     role: 'Developer',  department: 'Ingeniería' },
  { id: 4, name: 'Pedro Ruiz',      role: 'QA',         department: 'Ingeniería' },
  { id: 5, name: 'Laura Sánchez',   role: 'Designer',   department: 'Diseño' },
  { id: 6, name: 'Diego Martínez',  role: 'Developer',  department: 'Producto' },
  { id: 7, name: 'Sofía Ramírez',   role: 'Manager',    department: 'Producto' },
  { id: 8, name: 'Jorge Torres',    role: 'QA',         department: 'Ingeniería' },
]

export default function FilterTable() {
  const [nameFilter, setNameFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [deptFilter, setDeptFilter] = useState('')

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setNameFilter(e.target.value),
    []
  )
  const handleRoleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setRoleFilter(e.target.value),
    []
  )
  const handleDeptChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setDeptFilter(e.target.value),
    []
  )

  const filtered = useMemo(() => {
    return data.filter((row) => {
      if (nameFilter && !row.name.toLowerCase().includes(nameFilter.toLowerCase())) return false
      if (roleFilter && row.role !== roleFilter) return false
      if (deptFilter && row.department !== deptFilter) return false
      return true
    })
  }, [nameFilter, roleFilter, deptFilter])

  const roles = [...new Set(data.map((r) => r.role))]
  const depts = [...new Set(data.map((r) => r.department))]

  const selectStyle: React.CSSProperties = {
    padding: '6px 10px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 13,
    flex: 1,
  }

  return (
    <div style={{ maxWidth: 500 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <input
          placeholder="Filtrar por nombre"
          value={nameFilter}
          onChange={handleNameChange}
          style={{
            ...selectStyle,
            flex: 1,
            minWidth: 140,
          }}
        />
        <select value={roleFilter} onChange={handleRoleChange} style={selectStyle}>
          <option value="">Todos los roles</option>
          {roles.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={deptFilter} onChange={handleDeptChange} style={selectStyle}>
          <option value="">Todos los deptos</option>
          {depts.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {filtered.length} registro{filtered.length !== 1 ? 's' : ''}
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Rol</th>
            <th style={thStyle}>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={tdStyle}>{row.name}</td>
              <td style={tdStyle}>{row.role}</td>
              <td style={tdStyle}>{row.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const thStyle: React.CSSProperties = {
  padding: '8px 12px',
  fontWeight: 600,
  borderBottom: '2px solid #d1d5db',
}

const tdStyle: React.CSSProperties = {
  padding: '8px 12px',
}
````

## File: modulo_4/01-Componentes/src/components/FruitList.tsx
````typescript
// src/components/FruitList.tsx

interface Fruit {
  name: string
  emoji: string
  calories: number
}

interface FruitListProps {
  fruits: Fruit[]
  title?: string
}

export default function FruitList({ fruits, title = 'Frutas' }: FruitListProps) {
  if (fruits.length === 0) {
    return <p style={{ color: '#999' }}>No hay frutas en la lista.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map((fruit) => (
          <li
            key={fruit.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{fruit.emoji} {fruit.name}</span>
            <span style={{ color: '#888', fontSize: 13 }}>{fruit.calories} kcal</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/LiveSearch.tsx
````typescript
import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'

interface Post {
  id: number
  title: string
}

export default function LiveSearch() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  const url = debouncedQuery
    ? `https://jsonplaceholder.typicode.com/posts?title_like=${encodeURIComponent(debouncedQuery)}`
    : null

  const { data, loading } = useFetch<Post[]>(url)

  return (
    <div style={{ maxWidth: 420 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar posts (debounce 400ms)..."
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
          marginBottom: 16,
        }}
      />
      {loading && <p style={{ fontSize: 13, color: '#6b7280' }}>Buscando...</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {(data ?? []).map((post) => (
          <div
            key={post.id}
            style={{
              padding: '10px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            {post.title}
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/LoginForm.tsx
````typescript
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function LoginForm() {
  const [name, setName] = useState('')
  const { username, login, logout } = useAuth()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim()) {
      login(name.trim())
      setName('')
    }
  }

  if (username) {
    return (
      <div style={{ padding: '12px 16px', background: '#f0fdf4', borderRadius: 8 }}>
        <p style={{ margin: '0 0 8px' }}>
          Sesión iniciada como <strong>{username}</strong>
        </p>
        <button
          onClick={logout}
          style={{
            padding: '6px 16px',
            background: '#e00',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Cerrar sesión
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de usuario"
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
          flex: 1,
        }}
      />
      <button
        type="submit"
        disabled={!name.trim()}
        style={{
          padding: '8px 20px',
          background: name.trim() ? '#6366f1' : '#d1d5db',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: name.trim() ? 'pointer' : 'not-allowed',
          fontWeight: 600,
        }}
      >
        Ingresar
      </button>
    </form>
  )
}
````

## File: modulo_4/01-Componentes/src/components/MemoizedList.tsx
````typescript
import { useState, useCallback, memo } from 'react'

interface ListItemProps {
  item: string
  onRemove: (item: string) => void
}

const ListItem = memo(function ListItem({ item, onRemove }: ListItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 12px',
        background: '#f9fafb',
        borderRadius: 6,
        fontSize: 14,
      }}
    >
      <span>{item}</span>
      <button
        onClick={() => onRemove(item)}
        style={{
          padding: '4px 10px',
          background: '#e00',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        Quitar
      </button>
    </div>
  )
})

const initialItems = ['Manzana', 'Banana', 'Naranja', 'Uva']

export default function MemoizedList() {
  const [items, setItems] = useState(initialItems)
  const [newItem, setNewItem] = useState('')

  const handleRemove = useCallback((item: string) => {
    setItems((prev) => prev.filter((i) => i !== item))
  }, [])

  function handleAdd() {
    if (!newItem.trim()) return
    setItems((prev) => [...prev, newItem.trim()])
    setNewItem('')
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Nuevo item"
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 6,
            fontSize: 14,
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 20px',
            background: '#22c55e',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Agregar
        </button>
      </div>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {items.length} item{items.length !== 1 ? 's' : ''}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((item, idx) => (
          <ListItem key={`${item}-${idx}`} item={item} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/MiniProfileCard.tsx
````typescript
// src/components/MiniProfileCard.tsx

import StatusBadge from './StatusBadge'

type BadgeStatus = 'active' | 'inactive' | 'pending' | 'error'

interface MiniProfileCardProps {
  fullName: string
  role: string
  department?: string
  status: BadgeStatus
  joinedYear: number
}

export default function MiniProfileCard({
  fullName,
  role,
  department,
  status,
  joinedYear,
}: MiniProfileCardProps) {
  const initials = fullName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const yearsInCompany = new Date().getFullYear() - joinedYear

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        padding: 16,
        maxWidth: 280,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#6366f1',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 15 }}>{fullName}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>{role}</p>
        </div>
      </div>

      {department && (
        <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
          📂 {department}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StatusBadge status={status} />
        <span style={{ fontSize: 12, color: '#9ca3af' }}>
          {yearsInCompany === 0
            ? 'Nuevo ingreso'
            : `${yearsInCompany} año${yearsInCompany > 1 ? 's' : ''} en la empresa`}
        </span>
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ModalDemo.tsx
````typescript
import { useToggle } from '../hooks/useToggle'

export default function ModalDemo() {
  const { value: isOpen, setTrue: open, setFalse: close } = useToggle(false)

  return (
    <div>
      <button
        onClick={open}
        style={{
          padding: '8px 20px',
          background: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        Abrir modal
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              padding: 24,
              borderRadius: 12,
              minWidth: 300,
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            }}
          >
            <h3 style={{ margin: '0 0 12px' }}>Modal con useToggle</h3>
            <p style={{ margin: '0 0 20px', fontSize: 14, color: '#6b7280' }}>
              Este modal se abre y cierra usando el hook personalizado useToggle.
            </p>
            <button
              onClick={close}
              style={{
                padding: '8px 20px',
                background: '#e00',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/MultiTagFilter.tsx
````typescript
import { useState, useMemo } from 'react'

interface Item {
  id: number
  name: string
  tags: string[]
}

const allTags = ['react', 'typescript', 'css', 'node', 'testing', 'database']

const items: Item[] = [
  { id: 1, name: 'Componentes con props',              tags: ['react', 'typescript'] },
  { id: 2, name: 'Estado con useState',                 tags: ['react', 'typescript'] },
  { id: 3, name: 'Efectos secundarios',                 tags: ['react'] },
  { id: 4, name: 'Estilos con CSS Modules',             tags: ['css', 'react'] },
  { id: 5, name: 'API REST con Node',                   tags: ['node', 'typescript'] },
  { id: 6, name: 'Pruebas con Vitest',                  tags: ['testing', 'typescript'] },
  { id: 7, name: 'Consultas SQL',                       tags: ['database'] },
  { id: 8, name: 'Pruebas de integración',              tags: ['testing', 'node'] },
  { id: 9, name: 'Flexbox y Grid',                      tags: ['css'] },
  { id: 10, name: 'MongoDB con Mongoose',               tags: ['database', 'node'] },
]

export default function MultiTagFilter() {
  const [selected, setSelected] = useState<string[]>([])

  function toggleTag(tag: string) {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const filtered = useMemo(() => {
    if (selected.length === 0) return items
    return items.filter((item) => selected.every((tag) => item.tags.includes(tag)))
  }, [selected])

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        {allTags.map((tag) => {
          const active = selected.includes(tag)
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: '6px 14px',
                background: active ? '#6366f1' : '#f3f4f6',
                color: active ? '#fff' : '#374151',
                border: active ? '2px solid #6366f1' : '2px solid #d1d5db',
                borderRadius: 20,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {tag}
            </button>
          )
        })}
      </div>

      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {filtered.length} item{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            <span>{item.name}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {item.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '2px 8px',
                    background: '#e0e7ff',
                    color: '#4338ca',
                    borderRadius: 10,
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/OrderMetrics.tsx
````typescript
import { useMemo } from 'react'

interface OrderItem {
  product: string
  quantity: number
  price: number
}

interface Order {
  id: number
  customer: string
  items: OrderItem[]
  date: string
}

const orders: Order[] = [
  {
    id: 1,
    customer: 'Ana García',
    date: '2026-06-01',
    items: [
      { product: 'Teclado', quantity: 1, price: 89.99 },
      { product: 'Mouse',   quantity: 1, price: 29.99 },
    ],
  },
  {
    id: 2,
    customer: 'Carlos López',
    date: '2026-06-02',
    items: [
      { product: 'Monitor', quantity: 2, price: 349.99 },
      { product: 'Cable',   quantity: 3, price: 12.99 },
    ],
  },
  {
    id: 3,
    customer: 'María Pérez',
    date: '2026-06-03',
    items: [
      { product: 'Webcam',    quantity: 1, price: 59.99 },
      { product: 'Audífonos', quantity: 2, price: 79.99 },
      { product: 'Base',      quantity: 1, price: 39.99 },
    ],
  },
  {
    id: 4,
    customer: 'Pedro Ruiz',
    date: '2026-06-04',
    items: [
      { product: 'Parlante', quantity: 1, price: 45.00 },
    ],
  },
]

interface Metrics {
  totalRevenue: number
  orderCount: number
  totalItems: number
  averageOrder: number
  maxOrder: number
  minOrder: number
}

export default function OrderMetrics() {
  const metrics = useMemo<Metrics>(() => {
    const totals = orders.map((o) =>
      o.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
    )
    return {
      totalRevenue: totals.reduce((a, b) => a + b, 0),
      orderCount: orders.length,
      totalItems: orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0),
      averageOrder: totals.reduce((a, b) => a + b, 0) / orders.length,
      maxOrder: Math.max(...totals),
      minOrder: Math.min(...totals),
    }
  }, [])

  const cards: [string, string | number][] = [
    ['Órdenes totales', metrics.orderCount],
    ['Ingresos totales', `$${metrics.totalRevenue.toFixed(2)}`],
    ['Items vendidos', metrics.totalItems],
    ['Promedio por orden', `$${metrics.averageOrder.toFixed(2)}`],
    ['Orden máxima', `$${metrics.maxOrder.toFixed(2)}`],
    ['Orden mínima', `$${metrics.minOrder.toFixed(2)}`],
  ]

  return (
    <div style={{ maxWidth: 400 }}>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>Métricas de pedidos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {cards.map(([label, value]) => (
          <div
            key={label}
            style={{
              padding: 14,
              background: '#f9fafb',
              borderRadius: 8,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#6366f1' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/PaginatedFetch.tsx
````typescript
import { useState, useCallback, useEffect } from 'react'

interface Post {
  id: number
  title: string
}

export default function PaginatedFetch() {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const fetchPage = useCallback(async (pageNum: number) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=5`
      )
      const data: Post[] = await res.json()
      setPosts(data)
    } catch {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPage(page)
  }, [page, fetchPage])

  const handlePrev = useCallback(() => {
    setPage((p) => Math.max(1, p - 1))
  }, [])

  const handleNext = useCallback(() => {
    setPage((p) => p + 1)
  }, [])

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          style={{
            padding: '8px 16px',
            background: page === 1 ? '#d1d5db' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            fontWeight: 600,
          }}
        >
          ← Anterior
        </button>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Página {page}</span>
        <button
          onClick={handleNext}
          disabled={posts.length < 5}
          style={{
            padding: '8px 16px',
            background: posts.length < 5 ? '#d1d5db' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: posts.length < 5 ? 'not-allowed' : 'pointer',
            fontWeight: 600,
          }}
        >
          Siguiente →
        </button>
      </div>

      {loading && <p style={{ fontSize: 13, color: '#6b7280' }}>Cargando...</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: '10px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            {post.id}. {post.title}
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/PostList.tsx
````typescript
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

interface Post {
  id: number
  title: string
  body: string
}

export default function PostList() {
  const [page, setPage] = useState(1)
  const { data, loading, error } = useFetch<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`
  )

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          style={{
            padding: '6px 14px',
            background: page === 1 ? '#d1d5db' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          ← Anterior
        </button>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Página {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          style={{
            padding: '6px 14px',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          Siguiente →
        </button>
      </div>

      {loading && <p style={{ fontSize: 13, color: '#6b7280' }}>Cargando...</p>}
      {error && <p style={{ fontSize: 13, color: '#e00' }}>Error: {error}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {(data ?? []).map((post) => (
          <div
            key={post.id}
            style={{
              padding: 12,
              background: '#f9fafb',
              borderRadius: 6,
            }}
          >
            <strong style={{ fontSize: 14, display: 'block', marginBottom: 4 }}>
              {post.id}. {post.title}
            </strong>
            <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/PriceTag.tsx
````typescript
// src/components/PriceTag.tsx

type Currency = 'USD' | 'EUR' | 'COP' | 'MXN'

interface PriceTagProps {
  amount: number
  currency?: Currency
  discountPercent?: number
}

export default function PriceTag({
  amount,
  currency = 'USD',
  discountPercent = 0,
}: PriceTagProps) {
  const hasDiscount = discountPercent > 0
  const finalPrice  = hasDiscount ? amount * (1 - discountPercent / 100) : amount

  const symbols: Record<Currency, string> = {
    USD: '$',
    EUR: '€',
    COP: '$',
    MXN: '$',
  }

  const symbol = symbols[currency]

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {hasDiscount && (
        <span style={{ fontSize: 13, color: '#aaa', textDecoration: 'line-through' }}>
          {symbol}{amount.toFixed(2)} {currency}
        </span>
      )}
      <span style={{ fontSize: 20, fontWeight: 700, color: hasDiscount ? '#e00' : '#333' }}>
        {symbol}{finalPrice.toFixed(2)} {currency}
      </span>
      {hasDiscount && (
        <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>
          {discountPercent}% de descuento
        </span>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/PrimeSieve.tsx
````typescript
import { useState, useMemo } from 'react'

function calculatePrimes(limit: number): number[] {
  const primes: number[] = []
  for (let n = 2; n <= limit; n++) {
    let isPrime = true
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) { isPrime = false; break }
    }
    if (isPrime) primes.push(n)
  }
  return primes
}

export default function PrimeSieve() {
  const [limit, setLimit] = useState(100)

  const { primes, elapsed } = useMemo(() => {
    const start = performance.now()
    const result = calculatePrimes(limit)
    return { primes: result, elapsed: (performance.now() - start).toFixed(2) }
  }, [limit])

  return (
    <div style={{ maxWidth: 400 }}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
        <span style={{ fontSize: 14 }}>Límite superior:</span>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Math.max(2, Number(e.target.value)))}
          min={2}
          style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 6,
            fontSize: 14,
          }}
        />
      </label>
      <p style={{ fontSize: 13, color: '#6b7280' }}>
        {primes.length} primos encontrados (en {elapsed}ms)
      </p>
      <div
        style={{
          maxHeight: 200,
          overflowY: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          padding: 8,
          background: '#f9fafb',
          borderRadius: 6,
        }}
      >
        {primes.map((p) => (
          <span
            key={p}
            style={{
              padding: '2px 8px',
              background: '#6366f1',
              color: '#fff',
              borderRadius: 4,
              fontSize: 12,
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ProductCard.tsx
````typescript
// src/components/ProductCard.tsx

interface ProductCardProps {
  title: string
  description?: string
  highlighted?: boolean
}

export default function ProductCard({
  title,
  description = 'Sin descripción',
  highlighted = false,
}: ProductCardProps) {
  return (
    <div
      style={{
        border: highlighted ? '2px solid gold' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: highlighted ? '#fffbea' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ProductCatalogList.tsx
````typescript
// src/components/ProductCatalogList.tsx

interface Product {
  id: number
  name: string
  price: number
  outOfStock?: boolean
}

interface ProductCatalogListProps {
  products: Product[]
  title?: string
}

export default function ProductCatalogList({
  products,
  title = 'Catálogo',
}: ProductCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {products.length === 0 && (
        <p style={{ color: '#999' }}>No hay productos disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: product.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {product.name}
              {product.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Agotado
                </em>
              )}
            </span>
            <strong>${product.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
````

## File: modulo_4/01-Componentes/src/components/QuantitySelector.tsx
````typescript
import { useCounter } from '../hooks/useCounter'

export default function QuantitySelector() {
  const { count, increment, decrement, reset } = useCounter(1, 1, 10)

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 12 }}>
        Cantidad (mín: 1, máx: 10)
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
        <button onClick={decrement} style={btnStyle('#e00')}>−</button>
        <span style={{ fontSize: 28, fontWeight: 700, minWidth: 40 }}>{count}</span>
        <button onClick={increment} style={btnStyle('#22c55e')}>+</button>
      </div>
      <button
        onClick={reset}
        style={{
          ...btnStyle('#6b7280'),
          marginTop: 12,
        }}
      >
        Reset
      </button>
    </div>
  )
}

function btnStyle(color: string): React.CSSProperties {
  return {
    padding: '8px 16px',
    background: color,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 700,
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
````

## File: modulo_4/01-Componentes/src/components/RegistrationForm.tsx
````typescript
import { useReducer } from 'react'

interface FormState {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type Action =
  | { type: 'set_field'; field: keyof FormState; value: string }
  | { type: 'reset' }

const initialState: FormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'set_field':
      return { ...state, [action.field]: action.value }
    case 'reset':
      return initialState
  }
}

export default function RegistrationForm() {
  const [form, dispatch] = useReducer(reducer, initialState)

  const passwordsMatch = form.password === form.confirmPassword
  const isFormValid = form.name && form.email && form.password && passwordsMatch

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isFormValid) return
    alert(`Registrado: ${form.name} (${form.email})`)
    dispatch({ type: 'reset' })
  }

  const inputStyle: React.CSSProperties = {
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 14,
    width: '100%',
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => dispatch({ type: 'set_field', field: 'name', value: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => dispatch({ type: 'set_field', field: 'email', value: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="Contraseña"
        type="password"
        value={form.password}
        onChange={(e) => dispatch({ type: 'set_field', field: 'password', value: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="Confirmar contraseña"
        type="password"
        value={form.confirmPassword}
        onChange={(e) => dispatch({ type: 'set_field', field: 'confirmPassword', value: e.target.value })}
        style={{ ...inputStyle, borderColor: form.confirmPassword && !passwordsMatch ? '#e00' : '#d1d5db' }}
      />
      {form.confirmPassword && !passwordsMatch && (
        <span style={{ color: '#e00', fontSize: 12 }}>Las contraseñas no coinciden</span>
      )}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            padding: '8px 20px',
            background: isFormValid ? '#6366f1' : '#d1d5db',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Registrar
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'reset' })}
          style={{
            padding: '8px 20px',
            background: '#6b7280',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ResponsiveLayout.tsx
````typescript
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useWindowSize } from '../hooks/useWindowSize'

export default function ResponsiveLayout() {
  const { width } = useWindowSize()
  const isMobile = useMediaQuery('(max-width: 480px)')
  const isTablet = useMediaQuery('(min-width: 481px) and (max-width: 768px)')
  const isDesktop = useMediaQuery('(min-width: 769px)')

  let deviceLabel = 'Desktop'
  let deviceColor = '#6366f1'
  if (isMobile) { deviceLabel = 'Móvil'; deviceColor = '#22c55e' }
  else if (isTablet) { deviceLabel = 'Tablet'; deviceColor = '#f59e0b' }

  return (
    <div style={{ maxWidth: 500 }}>
      <div
        style={{
          padding: 20,
          background: '#f9fafb',
          borderRadius: 8,
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>Ancho de ventana</div>
        <div style={{ fontSize: 36, fontWeight: 700 }}>{width}px</div>
      </div>

      <div
        style={{
          padding: 20,
          background: deviceColor,
          color: '#fff',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>Dispositivo detectado</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>{deviceLabel}</div>
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 8 }}>
          {isMobile && 'max-width: 480px'}
          {isTablet && '481px – 768px'}
          {isDesktop && 'min-width: 769px'}
        </div>
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/SearchWithFetch.tsx
````typescript
import { useState, useCallback, useEffect } from 'react'

interface Post {
  id: number
  title: string
}

export default function SearchWithFetch() {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = useCallback(async (search: string) => {
    setLoading(true)
    try {
      const url = search
        ? `https://jsonplaceholder.typicode.com/posts?title_like=${encodeURIComponent(search)}`
        : 'https://jsonplaceholder.typicode.com/posts?_limit=10'
      const res = await fetch(url)
      const data: Post[] = await res.json()
      setPosts(data)
    } catch {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => fetchPosts(query), 300)
    return () => clearTimeout(timer)
  }, [query, fetchPosts])

  return (
    <div style={{ maxWidth: 420 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar posts..."
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
          marginBottom: 16,
        }}
      />
      {loading && <p style={{ fontSize: 13, color: '#6b7280' }}>Cargando...</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: '10px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            {post.title}
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ShoppingCart.tsx
````typescript
import { useReducer } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
}

type Action =
  | { type: 'add'; product: CartItem }
  | { type: 'remove'; id: number }
  | { type: 'clear' }

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'add':
      if (state.some((item) => item.id === action.product.id)) return state
      return [...state, action.product]
    case 'remove':
      return state.filter((item) => item.id !== action.id)
    case 'clear':
      return []
  }
}

const products: CartItem[] = [
  { id: 1, name: 'Teclado mecánico', price: 89.99 },
  { id: 2, name: 'Monitor 27"', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
  { id: 4, name: 'Webcam HD', price: 59.99 },
]

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const btnBase: React.CSSProperties = {
    padding: '6px 14px',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>Productos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {products.map((p) => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
            <span>{p.name} — ${p.price.toFixed(2)}</span>
            <button
              onClick={() => dispatch({ type: 'add', product: p })}
              style={{ ...btnBase, background: '#22c55e' }}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>Carrito ({cart.length})</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f0fdf4', borderRadius: 6 }}>
                <span>{item.name} — ${item.price.toFixed(2)}</span>
                <button
                  onClick={() => dispatch({ type: 'remove', id: item.id })}
                  style={{ ...btnBase, background: '#e00' }}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Total: ${total.toFixed(2)}</strong>
            <button
              onClick={() => dispatch({ type: 'clear' })}
              style={{ ...btnBase, background: '#6b7280' }}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ShoppingCartSummary.tsx
````typescript
// src/components/ShoppingCartSummary.tsx

interface CartItem {
  id: number
  name: string
  price: number
}

interface ShoppingCartSummaryProps {
  items: CartItem[]
  onClearCart: () => void
}

export default function ShoppingCartSummary({
  items,
  onClearCart,
}: ShoppingCartSummaryProps) {
  const total = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 10,
        padding: 16,
        marginTop: 24,
      }}
    >
      <h3 style={{ marginTop: 0 }}>Carrito ({items.length} items)</h3>

      {items.length === 0 && (
        <p style={{ color: '#999' }}>El carrito está vacío.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}
          >
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onClearCart}
            style={{
              marginTop: 12,
              backgroundColor: '#e00',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '8px 16px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/SimpleInfoTable.tsx
````typescript
// src/components/SimpleInfoTable.tsx

interface TableRow {
  label: string
  value: string | number
  highlight?: boolean
}

interface SimpleInfoTableProps {
  title?: string
  rows: TableRow[]
}

export default function SimpleInfoTable({ title, rows }: SimpleInfoTableProps) {
  return (
    <div style={{ maxWidth: 360 }}>
      {title && <h3 style={{ marginBottom: 8, fontSize: 15 }}>{title}</h3>}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              style={{
                backgroundColor: row.highlight ? '#fef9c3' : 'transparent',
              }}
            >
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  color: '#6b7280',
                  width: '45%',
                }}
              >
                {row.label}
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/StatusBadge.tsx
````typescript
// src/components/StatusBadge.tsx

type BadgeStatus = 'active' | 'inactive' | 'pending' | 'error'

interface StatusBadgeProps {
  status: BadgeStatus
  label?: string
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const config: Record<BadgeStatus, { bg: string; color: string; text: string }> = {
    active:   { bg: '#dcfce7', color: '#166534', text: 'Activo' },
    inactive: { bg: '#f3f4f6', color: '#6b7280', text: 'Inactivo' },
    pending:  { bg: '#fef9c3', color: '#854d0e', text: 'Pendiente' },
    error:    { bg: '#fee2e2', color: '#991b1b', text: 'Error' },
  }

  const { bg, color, text } = config[status]

  return (
    <span
      style={{
        backgroundColor: bg,
        color,
        padding: '3px 10px',
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-block',
      }}
    >
      {label ?? text}
    </span>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ThemeSelector.tsx
````typescript
import { useLocalStorage } from '../hooks/useLocalStorage'

const themes = [
  { label: 'Claro',  primary: '#6366f1', bg: '#ffffff', text: '#111827' },
  { label: 'Oscuro', primary: '#818cf8', bg: '#1f2937', text: '#f9fafb' },
  { label: 'Verde',  primary: '#22c55e', bg: '#f0fdf4', text: '#166534' },
  { label: 'Rojo',   primary: '#ef4444', bg: '#fef2f2', text: '#991b1b' },
]

export default function ThemeSelector() {
  const { value: activeTheme, set: setActiveTheme } = useLocalStorage('selected-theme', themes[0])

  const current = themes.find((t) => t.label === activeTheme.label) ?? themes[0]

  return (
    <div
      style={{
        background: current.bg,
        color: current.text,
        padding: 24,
        borderRadius: 8,
        maxWidth: 360,
        transition: 'all 0.2s',
      }}
    >
      <p style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600 }}>
        Tema persistido en localStorage
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {themes.map((t) => (
          <button
            key={t.label}
            onClick={() => setActiveTheme(t)}
            style={{
              padding: '6px 14px',
              background: current.label === t.label ? t.primary : '#f3f4f6',
              color: current.label === t.label ? '#fff' : '#374151',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 13, margin: 0 }}>
        Tema activo: <strong>{current.label}</strong>
      </p>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/ThemeToggle.tsx
````typescript
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const bg = theme === 'light' ? '#ffffff' : '#1f2937'
  const color = theme === 'light' ? '#111827' : '#f9fafb'

  return (
    <div
      style={{
        background: bg,
        color,
        padding: '20px',
        borderRadius: 8,
        transition: 'all 0.2s',
      }}
    >
      <p style={{ margin: '0 0 12px' }}>Tema actual: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px 20px',
          background: theme === 'light' ? '#111827' : '#f9fafb',
          color: theme === 'light' ? '#f9fafb' : '#111827',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/UserBadge.tsx
````typescript
import { useAuth } from '../contexts/AuthContext'

export default function UserBadge() {
  const { username, logout } = useAuth()

  return (
    <div
      style={{
        padding: '12px 16px',
        background: '#f0fdf4',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <span>
        Usuario: <strong>{username ?? 'Invitado'}</strong>
      </span>
      {username && (
        <button
          onClick={logout}
          style={{
            padding: '4px 12px',
            background: '#e00',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Cerrar sesión
        </button>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/UserProfileCard.tsx
````typescript
// src/components/UserProfileCard.tsx

interface UserProfileCardProps {
  fullName: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  isActive: boolean
  skills: string[]
  bio?: string
}

export default function UserProfileCard({
  fullName,
  email,
  role,
  isActive,
  skills,
  bio,
}: UserProfileCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        maxWidth: 400,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>{fullName}</h2>
        <span
          style={{
            backgroundColor: isActive ? '#d4edda' : '#f8d7da',
            color: isActive ? '#155724' : '#721c24',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 13,
          }}
        >
          {isActive ? 'Activo' : 'Inactivo'}
        </span>
      </div>

      <p style={{ margin: '8px 0 4px', color: '#555' }}>{email}</p>
      <p style={{ margin: '0 0 12px', fontSize: 13, color: '#888' }}>
        Rol: <strong>{role}</strong>
      </p>

      {bio && <p style={{ fontStyle: 'italic', color: '#444' }}>{bio}</p>}

      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {skills.map((skill) => (
          <li key={skill} style={{ fontSize: 14 }}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/contexts/AuthContext.tsx
````typescript
import { createContext, useContext, useState, type ReactNode } from 'react'

interface AuthContextType {
  username: string | null
  login: (name: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null)

  const login = (name: string) => setUsername(name)
  const logout = () => setUsername(null)

  return <AuthContext value={{ username, login, logout }}>{children}</AuthContext>
}
````

## File: modulo_4/01-Componentes/src/contexts/ThemeContext.tsx
````typescript
import { createContext, useContext, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
  return ctx
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
````

## File: modulo_4/01-Componentes/src/hooks/useClipboard.ts
````typescript
import { useState, useCallback } from 'react'

export function useClipboard() {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [])

  return { copied, copy }
}
````

## File: modulo_4/01-Componentes/src/hooks/useCounter.ts
````typescript
import { useState, useCallback } from 'react'

export function useCounter(initial = 0, min?: number, max?: number) {
  const [count, setCount] = useState(initial)

  const increment = useCallback(() => {
    setCount((c) => (max !== undefined ? Math.min(c + 1, max) : c + 1))
  }, [max])

  const decrement = useCallback(() => {
    setCount((c) => (min !== undefined ? Math.max(c - 1, min) : c - 1))
  }, [min])

  const reset = useCallback(() => setCount(initial), [initial])

  return { count, increment, decrement, reset, setCount }
}
````

## File: modulo_4/01-Componentes/src/hooks/useDebounce.ts
````typescript
import { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}
````

## File: modulo_4/01-Componentes/src/hooks/useFetch.ts
````typescript
import { useState, useEffect } from 'react'

interface FetchResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useFetch<T>(url: string | null): FetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return

    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<T>
      })
      .then((json) => {
        if (!cancelled) {
          setData(json)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [url])

  return { data, loading, error }
}
````

## File: modulo_4/01-Componentes/src/hooks/useLocalStorage.ts
````typescript
import { useState, useCallback } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? (JSON.parse(stored) as T) : defaultValue
    } catch {
      return defaultValue
    }
  })

  const set = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof newValue === 'function' ? (newValue as (prev: T) => T)(prev) : newValue
        localStorage.setItem(key, JSON.stringify(resolved))
        return resolved
      })
    },
    [key]
  )

  const remove = useCallback(() => {
    localStorage.removeItem(key)
    setValue(defaultValue)
  }, [key, defaultValue])

  return { value, set, remove }
}
````

## File: modulo_4/01-Componentes/src/hooks/useMediaQuery.ts
````typescript
import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    function onChange(e: MediaQueryListEvent) { setMatches(e.matches) }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
````

## File: modulo_4/01-Componentes/src/hooks/useOnlineStatus.ts
````typescript
import { useState, useEffect } from 'react'

export function useOnlineStatus(): boolean {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    function goOnline() { setOnline(true) }
    function goOffline() { setOnline(false) }
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return online
}
````

## File: modulo_4/01-Componentes/src/hooks/useToggle.ts
````typescript
import { useState, useCallback } from 'react'

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = useCallback(() => setValue((v) => !v), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  return { value, toggle, setTrue, setFalse }
}
````

## File: modulo_4/01-Componentes/src/hooks/useWindowSize.ts
````typescript
import { useState, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
````

## File: modulo_4/01-Componentes/src/index.css
````css

````

## File: modulo_4/01-Componentes/src/useEffect/DebounceSearch.tsx
````typescript
// src/components/DebounceSearch.tsx

import { useState, useEffect } from 'react'

export default function DebounceSearch() {
  const [input,          setInput]          = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input)
    }, 500)

    return () => clearTimeout(timer)
  }, [input])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe algo..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Valor debounced (500ms): <strong>{debouncedValue || '—'}</strong>
      </p>
      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        Útil para evitar llamadas a API en cada pulsación de tecla.
      </p>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/useEffect/DocumentTitle.tsx
````typescript
import { useState, useEffect } from 'react'

interface Props {
  initialTitle?: string
}

export default function DocumentTitle({ initialTitle = 'Mi App con React 19' }: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${title} — ${count} visitas`

    return () => {
      document.title = 'React App'
    }
  }, [title, count])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe un título..."
        style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', fontSize: 14 }}
      />
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        El título de la pestaña se actualiza automáticamente.
      </p>
      <p style={{ margin: 0, fontSize: 14 }}>
        <strong>{count}</strong> visitas a esta página
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: '8px 16px',
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Incrementar visitas
      </button>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/useEffect/FetchUser.tsx
````typescript
import { useState, useEffect } from 'react'

interface User {
  id:       number
  name:     string
  email:    string
  username: string
  phone:    string
  website:  string
  company:  { name: string }
}

interface Props {
  defaultUserId?: number
}

export default function FetchUser({ defaultUserId = 1 }: Props) {
  const [userId,  setUserId]  = useState(defaultUserId)
  const [customId, setCustomId] = useState('')
  const [user,    setUser]    = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchUser() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: User = await res.json()
        if (!cancelled) setUser(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUser()

    return () => { cancelled = true }
  }, [userId])

  function handleCustomSearch() {
    const id = Number(customId)
    if (id > 0) setUserId(id)
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: userId === id ? '#0070f3' : '#fff',
              color:      userId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: userId === id ? 600 : 400,
            }}
          >
            Usuario {id}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="number"
          min={1}
          max={10}
          value={customId}
          onChange={(e) => setCustomId(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCustomSearch()}
          placeholder="ID personalizado (1-10)"
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', fontSize: 14 }}
        />
        <button
          onClick={handleCustomSearch}
          style={{
            padding: '8px 16px',
            background: '#22c55e',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Buscar
        </button>
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {user && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 16 }}>{user.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            @{user.username} · {user.email}
          </p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            {user.phone}
          </p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            {user.website} · {user.company.name}
          </p>
        </div>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/useEffect/LiveClock.tsx
````typescript
// src/components/LiveClock.tsx

import { useState, useEffect } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2 }}>
      {time.toLocaleTimeString('es-ES')}
    </p>
  )
}
````

## File: modulo_4/01-Componentes/src/useEffect/OnlineStatus.tsx
````typescript
// src/components/OnlineStatus.tsx

import { useState, useEffect } from 'react'

export default function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    function handleOnline()  { setIsOnline(true)  }
    function handleOffline() { setIsOnline(false) }

    window.addEventListener('online',  handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online',  handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <p style={{ color: isOnline ? '#166534' : '#991b1b', fontWeight: 500 }}>
      {isOnline ? '🟢 Conectado a Internet' : '🔴 Sin conexión'}
    </p>
  )
}
````

## File: modulo_4/01-Componentes/src/useEffect/SearchWithEffect.tsx
````typescript
// src/components/SearchWithEffect.tsx

import { useState, useEffect } from 'react'

const MOCK_DB: Record<string, string> = {
  react:      'Biblioteca para construir interfaces de usuario.',
  typescript: 'JavaScript con tipos estáticos.',
  vite:       'Herramienta de desarrollo frontend ultrarrápida.',
  hooks:      'Funciones que permiten usar estado y efectos en componentes funcionales.',
}

export default function SearchWithEffect() {
  const [query,  setQuery]  = useState('')
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    const normalized = query.toLowerCase().trim()

    if (!normalized) {
      setResult(null)
      return
    }

    const found = MOCK_DB[normalized]
    setResult(found ?? 'Sin resultados para esa búsqueda.')
  }, [query])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca: react, typescript, vite, hooks..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      {result && (
        <p style={{ margin: 0, fontSize: 14, color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          {result}
        </p>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/useEffect/WindowSize.tsx
````typescript
// src/components/WindowSize.tsx

import { useState, useEffect } from 'react'

interface WindowDimensions {
  width:  number
  height: number
}

export default function WindowSize() {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width:  window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width:  window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 14, color: '#374151' }}>
      Ventana: {dimensions.width} × {dimensions.height} px
    </p>
  )
}
````

## File: modulo_4/01-Componentes/src/useRef/AutoFocusForm.tsx
````typescript
// src/components/AutoFocusForm.tsx

import { useRef, useEffect } from 'react'

export default function AutoFocusForm() {
  const nameRef  = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  // Foco en el primer campo al montar
  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  function handleNameKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Avanza al siguiente campo con Enter
    if (e.key === 'Enter') {
      e.preventDefault()
      emailRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={nameRef}
        placeholder="Nombre"
        onKeyDown={handleNameKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Enviar
      </button>
    </form>
  )
}
````

## File: modulo_4/01-Componentes/src/useRef/AutoFocusInput.tsx
````typescript
// src/components/AutoFocusInput.tsx

import { useEffect, useRef } from 'react'

export default function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <input
      ref={inputRef}
      placeholder="Este input recibe foco automáticamente al montar"
      style={{
        padding: '8px 12px',
        border: '1px solid #d1d5db',
        borderRadius: 6,
        width: '100%',
        fontSize: 14,
      }}
    />
  )
}
````

## File: modulo_4/01-Componentes/src/useRef/InlineEditor.tsx
````typescript
import { useState, useRef } from 'react'

export default function InlineEditor() {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState('Haz clic en Editar para modificar este texto')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleEdit() {
    setIsEditing(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  function handleSave() {
    setIsEditing(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setText('Haz clic en Editar para modificar este texto')
      setIsEditing(false)
    }
  }

  return (
    <div style={{ maxWidth: 400 }}>
      {isEditing ? (
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '2px solid #6366f1',
            borderRadius: 6,
            fontSize: 14,
            outline: 'none',
          }}
        />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 15, padding: '8px 0' }}>{text}</span>
          <button onClick={handleEdit} style={btnStyle()}>Editar</button>
        </div>
      )}
    </div>
  )
}

const btnStyle = (): React.CSSProperties => ({
  padding: '6px 16px',
  background: '#6366f1',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 600,
  whiteSpace: 'nowrap',
})
````

## File: modulo_4/01-Componentes/src/useRef/PreviousValue.tsx
````typescript
import { useState, useRef, useEffect } from 'react'

export default function PreviousValue() {
  const [value, setValue] = useState('')
  const prevRef = useRef<string>('')

  useEffect(() => {
    prevRef.current = value
  }, [value])

  return (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe algo aquí..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <div style={{ fontSize: 14, color: '#6b7280' }}>
        Valor anterior: <strong style={{ color: '#6366f1' }}>{prevRef.current || '(ninguno)'}</strong>
      </div>
      <div style={{ fontSize: 14, color: '#6b7280' }}>
        Valor actual: <strong style={{ color: '#22c55e' }}>{value || '(vacío)'}</strong>
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/useRef/Stopwatch.tsx
````typescript
import { useState, useRef, useEffect } from 'react'

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef<number | null>(null)

  function start() {
    if (intervalRef.current !== null) return
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }

  function stop() {
    if (intervalRef.current === null) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  function reset() {
    stop()
    setSeconds(0)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current)
    }
  }, [])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const display = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  return (
    <div style={{ textAlign: 'center', fontFamily: 'monospace' }}>
      <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>
        {display}
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={start} style={btnStyle('#22c55e')}>Iniciar</button>
        <button onClick={stop} style={btnStyle('#e00')}>Detener</button>
        <button onClick={reset} style={btnStyle('#6366f1')}>Reiniciar</button>
      </div>
    </div>
  )
}

function btnStyle(color: string): React.CSSProperties {
  return {
    padding: '8px 20px',
    background: color,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
  }
}
````

## File: modulo_4/01-Componentes/src/useState/DigitalCounter.tsx
````typescript
// src/components/DigitalCounter.tsx

import { useState } from 'react'

interface DigitalCounterProps {
  initialValue?: number
  step?: number
  label?: string
}

export default function DigitalCounter({
  initialValue = 0,
  step = 1,
  label = 'Contador',
} : DigitalCounterProps) {
  const [count, setCount] = useState(initialValue)

  function increment() {
    setCount(count + step)
  }

  function decrement() {
    setCount(count - step)
  }

  function reset() {
    setCount(initialValue)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 14, color: '#666' }}>{label}</span>
      <button onClick={decrement} style={btnStyle}>−</button>
      <span style={{ fontSize: 20, fontWeight: 600, minWidth: 40, textAlign: 'center' }}>
        {count}
      </span>
      <button onClick={increment} style={btnStyle}>+</button>
      <button onClick={reset} style={{ ...btnStyle, fontSize: 12, color: '#999' }}>
        Reset
      </button>
    </div>
  )
}

const btnStyle = {
  width: 32,
  height: 32,
  borderRadius: 6,
  border: '1px solid #ddd',
  background: '#f5f5f5',
  cursor: 'pointer',
  fontSize: 16,
}
````

## File: modulo_4/01-Componentes/src/useState/SafeCounter.tsx
````typescript
// src/useState/SafeCounter.tsx

import { useState } from 'react'

export default function SafeCounter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((prev) => prev + 1)
  }

  function incrementThree() {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={incrementThree}>+3</button>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/useState/TaskManager.tsx
````typescript
import { useState } from 'react'

interface Task {
  id: number
  title: string
  text: string
  done: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [titleInput, setTitleInput] = useState('')
  const [input, setInput] = useState('')

  // AGREGAR — spread del array anterior más el nuevo item
  function addTask() {
    if (!titleInput.trim() || !input.trim()) return
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: titleInput.trim(), text: input.trim(), done: false },
    ])
    setTitleInput('')
    setInput('')
  }

  // ELIMINAR — filter crea un nuevo array sin el elemento
  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  // ACTUALIZAR — map crea un nuevo array con el elemento modificado
  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Título de la tarea..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', fontWeight: 600 }}
        />
        <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Descripción..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Agregar
        </button>
        </div>
      </div>

      {tasks.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay tareas. ¡Agrega una!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <div style={{ flex: 1 }}>
              <strong
                style={{
                  display: 'block',
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#aaa' : '#333',
                }}
              >
                {task.title}
              </strong>
              <span
                style={{
                  fontSize: 13,
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#aaa' : '#999',
                }}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {tasks.filter((t) => t.done).length} de {tasks.length} completadas
        </p>
      )}
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/useState/UserProfileForm.tsx
````typescript
import { useState } from 'react'

interface UserProfile {
  name: string
  email: string
  age: number
}

export default function UserProfileForm() {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    age: 0,
  })

  function handleChange(field: keyof UserProfile, value: string | number) {
    setProfile((prev) => ({
      ...prev,        // copia todos los campos actuales
      [field]: value, // sobreescribe solo el campo que cambió
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre"
        value={profile.name}
        onChange={(e) => handleChange('name', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Email"
        type="email"
        value={profile.email}
        onChange={(e) => handleChange('email', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Edad"
        type="number"
        value={profile.age}
        onChange={(e) => handleChange('age', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{profile.name || '—'}</strong> · {profile.email || '—'} · {profile.age || '—'} años
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}
````

## File: modulo_4/01-Componentes/tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: modulo_4/01-Componentes/tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
````

## File: modulo_4/01-Componentes/vite.config.ts
````typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
````

## File: modulo_1/python/01_hello_world.py
````python
print("Hola Mundo desde la UTE")
````

## File: modulo_1/python/02_variables.py
````python
from types import NoneType


MAX_INTENTOS = 3
nombre = "Alexander Lopez"
edad = 26
altura = 1.73
activo = True
nulo = None

print(nombre, "tipo", type(nombre))
print(edad, "tipo", type(edad))
print(altura, "tipo", type(altura))
print(activo, "tipo", type(activo))
print(nulo, "tipo", type(nulo))

nombre_apellido: str = "Alexander Lopez"
edad_trabajador: int = 26
altura_trabajador: float = 1.73
activo_trabajador: bool = True
nulo_trabajador: NoneType = None

print(nombre_apellido, "tipo", type(nombre_apellido))
print(edad_trabajador, "tipo", type(edad_trabajador))
print(altura_trabajador, "tipo", type(altura_trabajador))
print(activo_trabajador, "tipo", type(activo_trabajador))
print(nulo_trabajador, "tipo", type(nulo_trabajador))
````

## File: modulo_1/python/03_strings.py
````python
CADENA_STRING = "Hola", "desde", "la", "UTE"

print(CADENA_STRING)
print("Hola", "desde", "la", "UTE")
print("Hola", "desde", "la", "UTE", sep = ",")
print("uno", "dos", "tres", "cuatro", sep = "-")
print("uno", "dos", "tres", "cuatro", end = " ")
print("uno", "dos", "tres", "cuatro", sep = " - ")
print("uno", "dos", "tres", "cuatro", end = " | ")

nombre = "Alexander López"
edad = 26
print(nombre, edad)
nombre_edad = f"Nombre: {nombre}, {edad}"
print(nombre_edad)
print(f"Nombre: {nombre}, {edad}")
print(f"Doble de {edad} es {edad*2}")

print(f"{'Maria': >15}")              # Alineado a la derecha

pi = 3.14159
print(f"{pi:.2f}")
print(f"{100000000000:,}")
````

## File: modulo_1/python/04_input.py
````python
nombre = input("¿Cual es su nombre?")
print(f"hola, {nombre}")

edad_str = input("Ingrese la edad")
print(f"Tienes, {edad_str} años.")

edad = int(edad_str)
print(f"El doble de tu edad es: {edad*2} años.")
````

## File: modulo_1/python/05_operadores_aritmeticos.py
````python
numero1=float(input("Ingrese el primer número: "))
numero2=float(input("Ingrese el segundo número: "))

print("Suma")
print(numero1, "+", numero2, numero1 + numero2)

print("Resta")
print(numero1, "-", numero2, numero1 - numero2)

print("Multiplicación")
print(numero1, "*", numero2, numero1 * numero2)

print("División")
print(numero1, "/", numero2, numero1 / numero2)

print("Módulo")
print(numero1, "%", numero2, numero1 % numero2)

print("Exponentes")
print(numero1, "**", numero2, numero1 ** numero2)
````

## File: modulo_3/typescript/07_tipos_primitivos_detalle.ts
````typescript
/**
 * 07 - TIPOS PRIMITIVOS (DETALLE)
 * number, string, boolean, null/undefined, ?? y ?.
 */

// ──────────────────────────────────────────────
// REFERENCIA RAPIDA (antes 03_tipos_primitivos)
// ──────────────────────────────────────────────

// number: enteros, decimales, negativos, hex
const precioNum: number = 299.99;
const puertoNum: number = 8080;
const hexColor: number = 0xff5733;

// string: comillas simples, dobles o backtick
const emailStr: string = "soporte@empresa.com";
const rutaStr: string = `/api/v2/usuarios`;

// boolean: solo true o false
const activoBool: boolean = true;
const requiereAuth: boolean = false;

// Operaciones tipicas
const subtotal = 1500;
const descuento = 150;
const total = subtotal - descuento;

// Los tres usan type inference al asignar un literal

// ──────────────────────────────────────────────
// number (detalle)
// ──────────────────────────────────────────────

const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;
const binario: number = 0b1010;
const octal: number = 0o17;
const grande: number = 1_000_000;

console.log("hex:", hexadecimal, "bin:", binario, "grande:", grande);

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("isFinite(1/0):", Number.isFinite(1 / 0));
console.log("isNaN(0/0):", Number.isNaN(0 / 0));

// ──────────────────────────────────────────────
// string (detalle)
// ──────────────────────────────────────────────

const simple: string = "Hola";
const doble: string = 'Tambien';
const template: string = `Hola ${"mundo"}`;
const saludo: string = `Hola, ${"Ana"}. Tiene ${28} anios.`;
const mayor: string = `Es ${28 >= 18 ? "mayor" : "menor"} de edad.`;

const multilinea: string = `
  Linea 1
  Linea 2
  Linea 3
`.trim();

console.log("  hola  ".trim());
console.log("hola".toUpperCase());
console.log("2024-06-15".split("-"));
console.log("error: fallo".includes("error"));
console.log("archivo.ts".endsWith(".ts"));

// ──────────────────────────────────────────────
// boolean (detalle)
// ──────────────────────────────────────────────

const activo: boolean = true;
const eliminado: boolean = false;
const esMayor = 25 >= 18;
const tieneStock = 0 > 0;

// Valores "falsy": false, 0, "", null, undefined, NaN
if (!tieneStock) console.log("Sin stock");

// Usa ===, no == (0 == false es true, pero 0 === false es false)

// ──────────────────────────────────────────────
// null y undefined
// ──────────────────────────────────────────────

let sinAsignar: undefined = undefined;
let sinValor: null = null;

const idBuscado: number = 5;
const usuarioEncontrado: string | null = idBuscado === 1 ? "Ana" : null;

// ?? (coalescencia nula): usa el derecho si izquierdo es null/undefined
const nom: string = usuarioEncontrado ?? "Invitado";
console.log("nom:", nom);

// ?. (encadenamiento opcional): no lanza error si es null/undefined
const longitud: number | undefined = usuarioEncontrado?.length;
console.log("longitud:", longitud);
````

## File: modulo_3/typescript/10_enums.ts
````typescript
/**
 * 10 - ENUMS
 * Temas: enum numerico, enum string, union de literales
 */

// ──────────────────────────────────────────────
// Enum numerico
// ──────────────────────────────────────────────

enum Direccion {
  Norte, Sur, Este, Oeste,
}

const rumbo: Direccion = Direccion.Norte;
console.log("rumbo:", rumbo);
console.log("mapeo inverso:", Direccion[0]);

enum CodigoHTTP {
  OK = 200,
  NoEncontrado = 404,
  Error = 500,
}

// ──────────────────────────────────────────────
// Enum de string
// ──────────────────────────────────────────────

enum Rol {
  Admin  = "ADMIN",
  Editor = "EDITOR",
  Lector = "READER",
}

const miRol: Rol = Rol.Editor;
console.log("miRol:", miRol);

// ──────────────────────────────────────────────
// Union de literales (alternativa moderna)
// ──────────────────────────────────────────────

type Estado = "pendiente" | "procesando" | "completado" | "error";
type Prioridad = "baja" | "media" | "alta";

const estadoPedido: Estado = "procesando";
console.log("Pedido:", estadoPedido);

// ──────────────────────────────────────────────
// Ejemplo: Tickets con Record
// ──────────────────────────────────────────────

type PrioridadTicket = "baja" | "media" | "alta" | "critica";

interface Ticket {
  id: number;
  titulo: string;
  prioridad: PrioridadTicket;
  resuelto: boolean;
}

const prefijos: Record<PrioridadTicket, string> = {
  baja: "[ ]", media: "[!]", alta: "[!!]", critica: "[!!!]",
};

const tickets: Ticket[] = [
  { id: 1, titulo: "Boton no funciona", prioridad: "baja", resuelto: true },
  { id: 2, titulo: "Pago falla", prioridad: "critica", resuelto: false },
  { id: 3, titulo: "Lentitud en carga", prioridad: "media", resuelto: false },
];

for (const t of tickets) {
  const estado = t.resuelto ? "[ok]" : "[...]";
  console.log(`${estado} ${prefijos[t.prioridad]} [#${t.id}] ${t.titulo}`);
}
````

## File: modulo_3/typescript/16_condicionales.ts
````typescript
/**
 * 16 - CONDICIONALES
 * Temas: if, if/else, if/else if, switch, ternario, anidadas
 */

// ──────────────────────────────────────────────
// if simple
// ──────────────────────────────────────────────

const temperatura: number = 38;
if (temperatura > 37.5) console.log("Tienes fiebre");

// ──────────────────────────────────────────────
// if/else y ternario
// ──────────────────────────────────────────────

const edad: number = 16;
if (edad >= 18) console.log("Mayor de edad");
else console.log("Menor de edad");

const estado: string = edad >= 18 ? "Mayor" : "Menor";
console.log("Ternario:", estado);

// ──────────────────────────────────────────────
// if/else if/else y switch
// ──────────────────────────────────────────────

const nota: number = 75;
if (nota >= 90) console.log("A");
else if (nota >= 80) console.log("B");
else if (nota >= 70) console.log("C");
else console.log("Reprobado");

const codigo: number = 404;
switch (codigo) {
  case 200: console.log("OK"); break;
  case 404: console.log("No encontrado"); break;
  case 500: console.log("Error del servidor"); break;
  default:  console.log("Codigo desconocido");
}

// Clasificador WiFi (rangos dBm estandar)
const lecturas: number[] = [-45, -55, -65, -75, -90];
for (const dbm of lecturas) {
  let clasificacion: string;
  if (dbm >= -50)      clasificacion = `Excelente (${dbm} dBm)`;
  else if (dbm >= -60) clasificacion = `Buena (${dbm} dBm)`;
  else if (dbm >= -70) clasificacion = `Aceptable (${dbm} dBm)`;
  else if (dbm >= -80) clasificacion = `Debil (${dbm} dBm)`;
  else                 clasificacion = `Sin cobertura (${dbm} dBm)`;
  console.log(clasificacion);
}

// ──────────────────────────────────────────────
// if anidadas y aplanamiento
// ──────────────────────────────────────────────

const logueado: boolean = true;
const esAdmin: boolean = false;

if (logueado) {
  if (esAdmin) console.log("Panel de administrador");
  else console.log("Panel de usuario");
} else console.log("Por favor inicia sesion");

// Aplanar con booleanos
const saldo: number = 500;
const monto: number = 200;
const pinCorrecto: boolean = true;

const pinOk: boolean = pinCorrecto;
const saldoOk: boolean = monto <= saldo;
const montoValido: boolean = monto % 10 === 0;

if (!pinOk)     console.log("PIN incorrecto");
else if (!saldoOk) console.log("Saldo insuficiente");
else if (!montoValido) console.log("Debe ser multiplo de 10");
else console.log(`Entregando $${monto}. Saldo restante: $${saldo - monto}`);
````

## File: modulo_3/typescript/34_herencia_abstractas.ts
````typescript
/**
 * 34 - HERENCIA Y CLASES ABSTRACTAS
 * Temas: extends, super(), override, abstract
 */

// ──────────────────────────────────────────────
// Herencia
// ──────────────────────────────────────────────

class Animal {
  constructor(public nombre: string) {}
  hablar(): string { return `${this.nombre} hace un sonido.`; }
}

class Perro extends Animal {
  constructor(nombre: string, public raza: string) { super(nombre); }
  override hablar(): string { return `${this.nombre} ladra: Guau!`; }
  buscar(objeto: string): string { return `${this.nombre} busca el ${objeto}.`; }
}

const a = new Animal("Criatura");
const d = new Perro("Rex", "Labrador");
console.log(a.hablar());
console.log(d.hablar());
console.log(d.buscar("palo"));

// ──────────────────────────────────────────────
// Clases abstractas
// ──────────────────────────────────────────────

abstract class Figura {
  abstract area(): number;
  abstract perimetro(): number;
  describir(): string {
    return `Area: ${this.area().toFixed(2)} | Perimetro: ${this.perimetro().toFixed(2)}`;
  }
}

class Circulo2 extends Figura {
  constructor(private radio: number) { super(); }
  override area(): number { return Math.PI * this.radio ** 2; }
  override perimetro(): number { return 2 * Math.PI * this.radio; }
}

class Rectangulo2 extends Figura {
  constructor(private ancho: number, private alto: number) { super(); }
  override area(): number { return this.ancho * this.alto; }
  override perimetro(): number { return 2 * (this.ancho + this.alto); }
}

// const f = new Figura(); // Error: abstracta

const circulo = new Circulo2(5);
const rect = new Rectangulo2(4, 6);
console.log(circulo.describir());
console.log(rect.describir());

// ──────────────────────────────────────────────
// Sistema de pagos (abstract)
// ──────────────────────────────────────────────

abstract class MetodoPago {
  constructor(protected titular: string) {}
  abstract procesar(monto: number): string;
  abstract validar(): boolean;

  resumen(monto: number): string {
    if (!this.validar()) return `[${this.titular}] Pago rechazado`;
    return this.procesar(monto);
  }
}

class TarjetaCredito extends MetodoPago {
  constructor(titular: string, private ultimos4: string, private saldoDisponible: number) {
    super(titular);
  }
  override validar(): boolean { return this.ultimos4.length === 4 && this.saldoDisponible > 0; }
  override procesar(monto: number): string {
    if (monto > this.saldoDisponible) return "Fondos insuficientes";
    this.saldoDisponible -= monto;
    return `Tarjeta ****${this.ultimos4}: $${monto} aprobado. Restante: $${this.saldoDisponible}`;
  }
}

class TransferenciaBancaria extends MetodoPago {
  constructor(titular: string, private clabe: string) { super(titular); }
  override validar(): boolean { return this.clabe.length === 18; }
  override procesar(monto: number): string {
    return `Transferencia de $${monto} a CLABE ${this.clabe.slice(-4).padStart(18, "*")}`;
  }
}

const tarjeta = new TarjetaCredito("Ana", "4321", 500);
const transferencia = new TransferenciaBancaria("Luis", "123456789012345678");
console.log(tarjeta.resumen(200));
console.log(transferencia.resumen(1000));
````

## File: modulo_3/typescript/35_implements_static_polimorfismo.ts
````typescript
/**
 * 35 - IMPLEMENTS, STATIC Y POLIMORFISMO
 * Temas: implements, static, polimorfismo
 */

// ──────────────────────────────────────────────
// implements
// ──────────────────────────────────────────────

interface Serializable { serializar(): string; }
interface Validable { esValido(): boolean; }

class Pedido implements Serializable, Validable {
  constructor(
    public id: string,
    public productos: string[],
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, productos: this.productos, total: this.total });
  }
  esValido(): boolean { return this.productos.length > 0 && this.total > 0; }
}

const pedido = new Pedido("P-001", ["Mouse", "Teclado"], 150);
console.log("Valido:", pedido.esValido());
console.log("Serializado:", pedido.serializar());

// ──────────────────────────────────────────────
// Miembros estaticos (static)
// ──────────────────────────────────────────────

class Matematica {
  static readonly PI: number = 3.14159265;
  static circunferencia(radio: number): number { return 2 * Matematica.PI * radio; }
  static potencia(base: number, exp: number): number { return base ** exp; }
}

console.log("PI:", Matematica.PI);
console.log("Circunferencia r=5:", Matematica.circunferencia(5));
console.log("2^10:", Matematica.potencia(2, 10));

// ──────────────────────────────────────────────
// Polimorfismo
// ──────────────────────────────────────────────

class Forma {
  nombre(): string { return "Forma"; }
  area(): number { return 0; }
}

class Circulo3 extends Forma {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Circulo"; }
  override area(): number { return Math.PI * this.r ** 2; }
}

class Triangulo extends Forma {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Triangulo"; }
  override area(): number { return (this.base * this.altura) / 2; }
}

class Cuadrado extends Forma {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Cuadrado"; }
  override area(): number { return this.lado ** 2; }
}

const formas: Forma[] = [
  new Circulo3(3), new Triangulo(6, 4), new Cuadrado(5),
];

for (const f of formas) {
  console.log(`${f.nombre()}: area = ${f.area().toFixed(2)}`);
}
````

## File: modulo_3/typescript/38_funciones_genericas.ts
````typescript
/**
 * 38 - FUNCIONES GENERICAS
 * Temas: motivacion, <T>, inferencia, <K, V>
 */

// ──────────────────────────────────────────────
// Motivacion (antes 37_introduccion_genericos)
// ──────────────────────────────────────────────

// Opcion 1 (mala): duplicar logica para cada tipo
function primerNumero(arr: number[]): number { return arr[0]; }
function primerTexto(arr: string[]): string { return arr[0]; }

// Opcion 2 (mala): any - pierdes seguridad
function primeroAny(arr: any[]): any { return arr[0]; }

// Opcion 3 (correcta): generico
function primero<T>(arr: T[]): T { return arr[0]; }

const n = primero([10, 20, 30]);
const s = primero(["a", "b"]);
console.log("Primero:", n, s);

// Funcion ultimo generica
function ultimo<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log("Ultimo [1,2,3]:", ultimo([1, 2, 3]));
console.log("Ultimo []:", ultimo([]));

// ──────────────────────────────────────────────
// Funcion generica con inferencia
// ──────────────────────────────────────────────

function identidad<T>(valor: T): T { return valor; }

const a = identidad(42);
const b = identidad("hola");
const c = identidad(true);
const d = identidad<number[]>([1, 2, 3]);

console.log("identidad:", a, b, c);

// Flecha generica
const copiar = <T,>(arr: T[]): T[] => [...arr];

// repetir generica
function repetir<T>(valor: T, veces: number): T[] {
  return Array.from({ length: veces }, () => valor);
}

console.log("repetir('eco', 3):", repetir("eco", 3));
console.log("repetir(0, 5):", repetir(0, 5));

// ──────────────────────────────────────────────
// Multiples parametros <K, V>
// ──────────────────────────────────────────────

function crearPar<K, V>(clave: K, valor: V): [K, V] {
  return [clave, valor];
}

const par1 = crearPar("edad", 30);
const par2 = crearPar(1, true);
console.log("par1:", par1, "par2:", par2);

// Mapa de configuraciones
function crearMapa<K extends string, V>(entradas: Array<[K, V]>): Map<K, V> {
  return new Map(entradas);
}

const roles = crearMapa([
  ["admin",   ["leer", "escribir", "borrar"]],
  ["editor",  ["leer", "escribir"]],
  ["lector",  ["leer"]],
]);

console.log("roles editor:", roles.get("editor"));
````

## File: modulo_3/typescript/ejercicios/02_tipos_de_datos-ejercicio_10.ts
````typescript
/**
 * Ejercicio: Type narrowing completo
 * unknown con typeof + discriminated union con switch.
 */

// typeof narrowing
function procesarUnknown(valor: unknown): void {
  if (typeof valor === "number") console.log("Numero:", valor);
  else if (typeof valor === "string") console.log("Texto de", valor.length, "caracteres:", valor);
  else if (typeof valor === "boolean") console.log("Booleano:", valor);
  else console.log("Tipo desconocido:", typeof valor);
}
procesarUnknown(42);
procesarUnknown("hola");
procesarUnknown(true);
procesarUnknown(null);

// Discriminated union + switch
type PagoTarjeta = { metodo: "tarjeta"; ultimos4: string; marca: "visa" | "mastercard" };
type PagoTransferencia = { metodo: "transferencia"; banco: string; referencia: string };
type PagoEfectivo = { metodo: "efectivo"; cambioRequerido: number };
type MedioPago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

function confirmarPago(m: MedioPago): string {
  switch (m.metodo) {
    case "tarjeta": return "Pago tarjeta " + m.marca + " ****" + m.ultimos4;
    case "transferencia": return "Transferencia " + m.banco + " ref: " + m.referencia;
    case "efectivo": return "Efectivo, cambio: $" + m.cambioRequerido;
  }
}
console.log(confirmarPago({ metodo: "tarjeta", ultimos4: "1234", marca: "visa" }));
console.log(confirmarPago({ metodo: "transferencia", banco: "BBVA", referencia: "REF-001" }));
console.log(confirmarPago({ metodo: "efectivo", cambioRequerido: 50 }));
````

## File: modulo_3/typescript/index.ts
````typescript
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
````

## File: modulo_4/01-Componentes/package.json
````json
{
  "name": "01-componentes",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "oxlint",
    "lint:eslint": "eslint src/",
    "lint:eslint:fix": "eslint src/ --fix",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.13.2",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "eslint": "^10.6.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.3",
    "globals": "^17.7.0",
    "oxlint": "^1.71.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.63.0",
    "vite": "^8.1.1"
  }
}
````

## File: modulo_4/01-Componentes/src/components/UserGreeting.tsx
````typescript
// src/components/UserGreeting.tsx

interface UserGreetingProps {
  name: string
  occupation?: string
  color?: string
}

export default function UserGreeting({ name, occupation, color }: UserGreetingProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: color ?? '#6366f1',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
        }}
      >
        {initials}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Hola, {name}</p>
        {occupation && (
          <p style={{ margin: 0, fontSize: 13, color: '#888' }}>{occupation}</p>
        )}
      </div>
    </div>
  )
}
````

## File: modulo_4/01-Componentes/src/components/WelcomeBanner.tsx
````typescript
export default function WelcomeBanner() {
  return (
    <main style={{maxWidth: 400, 
                  margin: '40px auto', 
                  fontFamily: 'sans-serif',
                  color: '#041b12' }}>
      <h1>Hola desde React 19 + TypeScript</h1>
      <h2>Proyecto configurado con Vite 8.</h2>
      <p>Versión: 1.0.0</p>
      <p style={{ fontStyle: 'italic' }}>
        Autor: Alexander López
      </p>
    </main>
  )
}
````

## File: modulo_4/01-Componentes/src/main.tsx
````typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
````

## File: modulo_4/01-Componentes/tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "useDefineForClassFields": true,
    "types": ["vite/client"],
    "allowArbitraryExtensions": true,
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
````

## File: README.md
````markdown
# Seminario Integrador.

## Alumno: Alexander López.
````

## File: modulo_4/01-Componentes/src/App.tsx
````typescript
// src/App.tsx

import { useState } from 'react'
import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'
import DigitalCounter  from './useState/DigitalCounter'
import UserProfileForm from './useState/UserProfileForm'
import TaskManager     from './useState/TaskManager'
import DocumentTitle   from './useEffect/DocumentTitle'
import FetchUser            from './useEffect/FetchUser'
import SafeCounter          from './useState/SafeCounter'
import CatalogProductItem   from './components/CatalogProductItem'
import ShoppingCartSummary  from './components/ShoppingCartSummary'
import OnlineStatus         from './useEffect/OnlineStatus'
import WindowSize           from './useEffect/WindowSize'
import LiveClock            from './useEffect/LiveClock'
import SearchWithEffect     from './useEffect/SearchWithEffect'
import DebounceSearch       from './useEffect/DebounceSearch'
import AutoFocusInput       from './useRef/AutoFocusInput'
import AutoFocusForm        from './useRef/AutoFocusForm'
import Stopwatch            from './useRef/Stopwatch'
import InlineEditor         from './useRef/InlineEditor'
import PreviousValue        from './useRef/PreviousValue'
import BasicCounter         from './components/BasicCounter'
import RegistrationForm     from './components/RegistrationForm'
import ShoppingCart         from './components/ShoppingCart'
import ThemeToggle          from './components/ThemeToggle'
import UserBadge            from './components/UserBadge'
import LoginForm            from './components/LoginForm'
import AppHeader            from './components/AppHeader'
import PrimeSieve           from './components/PrimeSieve'
import FilteredCatalog      from './components/FilteredCatalog'
import OrderMetrics         from './components/OrderMetrics'
import MultiTagFilter       from './components/MultiTagFilter'
import MemoizedList         from './components/MemoizedList'
import SearchWithFetch      from './components/SearchWithFetch'
import FilterTable          from './components/FilterTable'
import PaginatedFetch       from './components/PaginatedFetch'
import ModalDemo            from './components/ModalDemo'
import QuantitySelector     from './components/QuantitySelector'
import ThemeSelector        from './components/ThemeSelector'
import LiveSearch           from './components/LiveSearch'
import PostList             from './components/PostList'
import ResponsiveLayout     from './components/ResponsiveLayout'
import CodeBlock            from './components/CodeBlock'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// │  14  UserProfileForm     — formulario con useState                      │
// │  15  DigitalCounter      — contador con useState                        │
// │  16  TaskManager         — CRUD de tareas con useState                  │
// │  17  DocumentTitle       — useEffect: título dinámico de pestaña        │
// │  18  FetchUser           — useEffect: fetch con loading/error           │
// │  19  SafeCounter         — useState con forma funcional prev => prev   │
// │  20  Carrito useState    — array de objetos + lógica en App.tsx         │
// │  21  OnlineStatus        — useEffect: eventos online/offline             │
// │  22  WindowSize          — useEffect: resize, estado objeto tipado       │
// │  23  LiveClock           — useEffect: setInterval + inicializador perez. │
// │  24  SearchWithEffect    — useEffect: búsqueda sincronizada con query    │
// │  25  DebounceSearch      — useEffect: setTimeout/clearTimeout, debounce  │
// │  26  AutoFocusInput      — useRef + useEffect: foco imperativo           │
// │  27  AutoFocusForm       — useRef: foco entre múltiples campos           │
// │  28  Stopwatch           — useRef: almacenar ID de intervalo             │
// │  29  InlineEditor        — useRef: foco imperativo en edición inline    │
// │  30  PreviousValue       — useRef: preservar valor anterior del estado   │
// │  31  BasicCounter        — useReducer: contador simple                    │
// │  32  RegistrationForm    — useReducer: formulario multi-campo             │
// │  33  ShoppingCart        — useReducer: carrito de compras                 │
// │  34  ThemeToggle         — useContext: ThemeContext                        │
// │  35  UserBadge           — useContext: AuthContext                         │
// │  36  LoginForm           — useContext: AuthContext + formulario            │
// │  37  AppHeader           — useContext: ThemeContext + AuthContext           │
// │  38  PrimeSieve          — useMemo: cálculo de números primos               │
// │  39  FilteredCatalog     — useMemo: filtro de catálogo                      │
// │  40  OrderMetrics        — useMemo: métricas de pedidos                     │
// │  41  MultiTagFilter      — useMemo: filtro multi-etiqueta                   │
// │  42  MemoizedList        — useCallback + React.memo: lista optimizada      │
// │  43  SearchWithFetch     — useCallback: búsqueda con fetch                  │
// │  44  FilterTable         — useCallback: filtros de tabla                    │
// │  45  PaginatedFetch      — useCallback: paginación con fetch                │
// │  46  ModalDemo           — useToggle: apertura/cierre de modal              │
// │  47  QuantitySelector    — useCounter: selector de cantidad                  │
// │  48  ThemeSelector       — useLocalStorage: tema persistido                 │
// │  49  LiveSearch          — useDebounce + useFetch: búsqueda en vivo          │
// │  50  PostList            — useFetch: lista paginada de posts                 │
// │  51  ResponsiveLayout    — useMediaQuery + useWindowSize: layout responsive │
// │  52  CodeBlock           — useClipboard: copiar código al portapapeles       │
// └──────────────────────────────────────────────────────────────────────────┘
const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

const cartProducts = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
]

interface CartItem { id: number; name: string; price: number }

const PASO: number = 18

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }
  const content =
    PASO ===  1 ? <WelcomeBanner /> :
    PASO ===  2 ? <>
      <UserGreeting 
        name="Carlos López Ruiz" 
        occupation="Desarrollador Frontend" 
        color='#e11d48'/>
      <br/>
      <UserGreeting 
        name="Alexander López Fuentes" 
        occupation="Estudiante de Desarrollador - UTE"
        color='#2111b2'/>
        <br/>
      <UserGreeting 
        name="Ana Maria Guerrero" 
        occupation="Estudiante de Odontología - UTE"
        color='#2111b2'/>
      </> : 
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> : 
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> : 
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) :

    // Hooks: useState
    PASO === 14 ? <UserProfileForm /> :
    PASO === 15 ? <DigitalCounter initialValue={5} step={1} label="Contador de Servidores"/> :
    PASO === 16 ? <TaskManager /> :

    PASO === 17 ? <DocumentTitle initialTitle="Documentos - React" /> :
    PASO === 18 ? <FetchUser defaultUserId={3} /> :

    PASO === 19 ? <SafeCounter /> :
    PASO === 20 ? (
      <>
        <h1 style={{ fontSize: 22 }}>Tienda</h1>
        <section>
          {cartProducts.map((p) => (
            <CatalogProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>
        <ShoppingCartSummary items={cartItems} onClearCart={handleClearCart} />
      </>
    ) :

    // Hooks: useEffect
    PASO === 21 ? <OnlineStatus /> :
    PASO === 22 ? <WindowSize /> :
    PASO === 23 ? <LiveClock /> :
    PASO === 24 ? <SearchWithEffect /> :
    PASO === 25 ? <DebounceSearch /> :
    PASO === 26 ? <AutoFocusInput /> :

    // Hooks: useRef
    PASO === 27 ? <AutoFocusForm /> :
    PASO === 28 ? <Stopwatch /> :
    PASO === 29 ? <InlineEditor /> :
    PASO === 30 ? <PreviousValue /> :

    // Hooks: useReducer
    PASO === 31 ? <BasicCounter /> :
    PASO === 32 ? <RegistrationForm /> :
    PASO === 33 ? <ShoppingCart /> :

    // Hooks: useContext
    PASO === 34 ? <ThemeToggle /> :
    PASO === 35 ? <UserBadge /> :
    PASO === 36 ? <LoginForm /> :
    PASO === 37 ? <AppHeader /> :

    // Hooks: useMemo
    PASO === 38 ? <PrimeSieve /> :
    PASO === 39 ? <FilteredCatalog /> :
    PASO === 40 ? <OrderMetrics /> :
    PASO === 41 ? <MultiTagFilter /> :

    // Hooks: useCallback
    PASO === 42 ? <MemoizedList /> :
    PASO === 43 ? <SearchWithFetch /> :
    PASO === 44 ? <FilterTable /> :
    PASO === 45 ? <PaginatedFetch /> :

    // Hooks personalizados
    PASO === 46 ? <ModalDemo /> :
    PASO === 47 ? <QuantitySelector /> :
    PASO === 48 ? <ThemeSelector /> :
    PASO === 49 ? <LiveSearch /> :
    PASO === 50 ? <PostList /> :
    PASO === 51 ? <ResponsiveLayout /> :
    PASO === 52 ? <CodeBlock /> :

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>


  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
````
