print("Ciclos while - Cursos Online")

contador = 1
while contador <= 5:
    print(f"Semana {contador} del curso")
    contador += 1

accion = ""
while accion != "salir":
    accion = input("Ingrese una acción (o 'salir' para terminar): ")
    print(f"Acción registrada: {accion}")

cantidad_tareas = int(input("¿Cuántas tareas entregó?: "))
total_puntos = 0
contador = 1
while contador <= cantidad_tareas:
    puntos = float(input(f"Puntos de la tarea {contador}: "))
    total_puntos += puntos
    contador += 1
print(f"Total de puntos: {total_puntos}")
if total_puntos >= 70:
    print("Estudiante aprobó el curso")
else:
    print("Estudiante debe mejorar")
