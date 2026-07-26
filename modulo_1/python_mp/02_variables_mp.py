from types import NoneType


MAX_ESTUDIANTES = 50
nombre_curso = "Python Avanzado"
cantidad_estudiantes = 25
duracion_semanas = 8.5
curso_activo = True
certificado = None

print(nombre_curso, "tipo", type(nombre_curso))
print(cantidad_estudiantes, "tipo", type(cantidad_estudiantes))
print(duracion_semanas, "tipo", type(duracion_semanas))
print(curso_activo, "tipo", type(curso_activo))
print(certificado, "tipo", type(certificado))

nombre_curso_completo: str = "Desarrollo Web con Django"
cantidad_participantes: int = 30
precio_curso: float = 99.99
certificado_disponible: bool = True
fecha_inicio: NoneType = None

print(nombre_curso_completo, "tipo", type(nombre_curso_completo))
print(cantidad_participantes, "tipo", type(cantidad_participantes))
print(precio_curso, "tipo", type(precio_curso))
print(certificado_disponible, "tipo", type(certificado_disponible))
print(fecha_inicio, "tipo", type(fecha_inicio))
