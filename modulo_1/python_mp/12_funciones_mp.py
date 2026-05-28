print("Funciones - Cursos Online")
print("Funciones básicas")

def bienvenida_curso():
    print("Bienvenido a la plataforma de cursos online")

bienvenida_curso()

print("Funciones con parámetros")
def inscribir_estudiante(nombre):
    print(f"Estudiante {nombre} ha sido inscrito en el curso")

inscribir_estudiante("Juan")
inscribir_estudiante("María")

print("Función que devuelve valor return")
def calcular_promedio(nota1, nota2):
    return (nota1 + nota2) / 2

resultado = calcular_promedio(85, 90)
print(f"Promedio: {resultado}")

print("Función por posición y por nombre")
def mostrar_info_curso(nombre, instructor, duracion):
    print(f"Curso: {nombre}, Instructor: {instructor}, Duración: {duracion} semanas")

mostrar_info_curso("Python", "Carlos", 8)
mostrar_info_curso("JavaScript", "Ana", 6)
mostrar_info_curso(duracion=10, nombre="React", instructor="Pedro")

print("Función con valores de parámetros por defecto")
def crear_curso(nombre, nivel="Básico", certificado="Sí"):
    print(f"Curso: {nombre}, Nivel: {nivel}, Certificado: {certificado}")

crear_curso("Python")
crear_curso("JavaScript", "Avanzado")
crear_curso("HTML", certificado="No")

print("Función con parámetros posicionales")
def sumar_calificaciones(*calificaciones):
    print(f"Calificaciones recibidas: {calificaciones}")
    return sum(calificaciones)

print(sumar_calificaciones(85, 90, 88))
print(sumar_calificaciones(70, 75, 80, 85, 92))

print("Función parámetros combinados")
def listar_cursos(titulo, *cursos):
    print(f"--- {titulo} ---")
    for curso in cursos:
        print(f"- {curso}")

listar_cursos("Cursos disponibles", "Python", "JavaScript", "Django")

print("Función parámetros combinación completa")
def configurar_curso(nombre, *instructores, precio=0, activo=True, **opciones):
    print("Configuración del Curso")
    print(f"Nombre: {nombre}")
    print(f"Instructores: {instructores}")
    print(f"Precio: ${precio}")
    print(f"Activo: {activo}")
    print(f"Opciones: {opciones}")

configurar_curso("Python Avanzado", "Juan", "María", precio=99.99, activo=True, certificado=True, nivel="Avanzado")

print("Devolver múltiples valores")
def obtener_estadisticas(calificaciones):
    return min(calificaciones), max(calificaciones)

minima, maxima = obtener_estadisticas([75, 88, 92, 80, 85])
print(f"Mínima: {minima}, Máxima: {maxima}")

print("Devolver diccionario para muchos valores")
def analizar_curso(calificaciones):
    total = sum(calificaciones)
    n = len(calificaciones)
    return {
        "total": total,
        "promedio": total / n if n > 0 else 0,
        "minima": min(calificaciones) if calificaciones else None,
        "maxima": max(calificaciones) if calificaciones else None,
        "cantidad": n,
    }

datos = [80, 85, 92, 78, 88]
estadisticas = analizar_curso(datos)
print(f"Total: {estadisticas['total']}")
print(f"Promedio: {estadisticas['promedio']:.2f}")
print(f"Rango: {estadisticas['minima']} - {estadisticas['maxima']}")

print("Funciones lambda")
def calcular_descuento(precio):
    return precio * 0.90

aplicar_descuento = lambda x: x * 0.90
print(f"Descuento manual: {calcular_descuento(100)}")
print(f"Descuento lambda: {aplicar_descuento(100)}")

sumar_precios = lambda a, b: a + b
print(f"Suma de precios: {sumar_precios(99.99, 49.99)}")
