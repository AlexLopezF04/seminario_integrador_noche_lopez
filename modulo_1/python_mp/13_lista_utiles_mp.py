print("Manipulación de Listas - Cursos Online")
print("Crear Lista")

vacia = []
print(vacia)

calificaciones = [85, 90, 78, 92, 88]
print(calificaciones)

cursos = ["Python", "JavaScript", "React", "Django"]
print(cursos)

datos_mixtos = [1, "Python Avanzado", 99.99, True]
print(datos_mixtos)

calendario = [["Lunes", "Martes", "Miércoles"], ["Jueves", "Viernes", "Sábado"]]
print(calendario)

print("Acceso a los elementos de una lista")
print(cursos[1])
print(cursos[-1])
print(cursos[1:3])
print(cursos[::-1])

print("CRUD de una lista")
modulos = ["Módulo 1", "Módulo 2", "Módulo 3"]
print(modulos)

# Agregar
modulos.insert(1, "Introducción")
print(modulos)

modulos.append("Módulo 4")
print(modulos)

modulos.extend(["Módulo 5", "Proyecto Final"])

# Modificar
modulos[0] = "Bienvenida"
print(modulos)

# Eliminar elementos
modulos.remove("Bienvenida")
print(modulos)

eliminado = modulos.pop()
print(modulos)
print(f"Módulo eliminado: {eliminado}")

eliminado = modulos.pop(2)
print(modulos)

del modulos[0]
print(modulos)

print("Buscar valores en los elementos de una Lista")
print("Módulo 2" in modulos)
print(modulos.index("Módulo 2"))
print(modulos.count("Módulo 2"))

print("Ordenar una Lista")
calificaciones_desordenadas = [78, 92, 85, 88, 75, 95]
print(calificaciones_desordenadas)

calificaciones_desordenadas.sort()
print(calificaciones_desordenadas)

calificaciones_desordenadas.sort(reverse=True)
print(calificaciones_desordenadas)

ordenada = sorted(calificaciones_desordenadas)
print(ordenada)
print(calificaciones_desordenadas)
