INFORMACION_CURSO = "Python", "Java", "JavaScript", "React"

print(INFORMACION_CURSO)
print("Aprende", "programación", "en", "línea")
print("Aprende", "programación", "en", "línea", sep=",")
print("Módulo", "1", "Módulo", "2", "Módulo", "3", sep="-")
print("Estudiante:", "Juan", sep=" - ", end=" | ")
print("Calificación:", "A", sep=" - ")

nombre_estudiante = "María González"
calificacion = 95
descripcion_curso = f"Curso: {nombre_estudiante}, Nota: {calificacion}"
print(descripcion_curso)
print(f"Estudiante: {nombre_estudiante}, Calificación: {calificacion}")
print(f"Porcentaje de avance: {calificacion}%")

precio_curso = 149.99
print(f"Precio del curso: ${precio_curso:.2f}")
cantidad_inscritos = 1500000
print(f"Inscritos en la plataforma: {cantidad_inscritos:,}")
print(f"{'Python Avanzado': >30}")
