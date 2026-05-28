print("Ciclos for - Cursos Online")
print("For básico - Módulos del curso")

for i in range(1, 6):
    print(f"Módulo {i}")

cursos = ["Python", "JavaScript", "Django", "React"]
for curso in cursos:
    print(f"Curso ofrecido: {curso}")

print("Control de interrupciones - Lecciones")
for i in range(1, 10):
    if i == 3:
        continue
    if i == 7:
        break
    print(f"Lección {i} completada")
else:
    print("Ciclo de lecciones terminado")

print("For con range step - Lecciones cada 2 días")
for i in range(1, 10, 2):
    print(f"Día {i} del curso")

print("For con range regresivo - Cuenta regresiva para inicio")
for i in range(10, 0, -1):
    print(f"Faltan {i} días para iniciar")

print("For con enumerate - Lista de estudiantes")
estudiantes = ["Juan", "María", "Pedro", "Luis"]
for indice, estudiante in enumerate(estudiantes):
    print(f"{indice + 1}. {estudiante}")

print("For con zip - Estudiantes y calificaciones")
calificaciones = [85, 92, 78, 88]
for estudiante, calificacion in zip(estudiantes, calificaciones):
    print(f"{estudiante}: {calificacion}")

print("For anidados - Matriz de calificaciones")

for modulo in range(1, 4):
    for leccion in range(1, 4):
        print(f"Módulo {modulo}, Lección {leccion}")

cantidad_estudiantes = int(input("Ingrese cantidad de estudiantes: "))
suma_calificaciones = 0
for i in range(1, cantidad_estudiantes + 1):
    calificacion = float(input(f"Calificación del estudiante {i}: "))
    suma_calificaciones += calificacion
promedio = suma_calificaciones / cantidad_estudiantes
print(f"Promedio del curso: {promedio:.2f}")
if promedio >= 7:
    print("Curso aprobado")
else:
    print("Curso no aprobado")
