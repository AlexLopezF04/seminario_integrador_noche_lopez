print("Condicional if - Cursos Online")
print("If simple - Verificar disponibilidad de curso")

plazas_disponibles = 3
if plazas_disponibles > 0:
    print("El curso está disponible para inscripción")

print("If else - Verificar aprobación")
calificacion = 65
if calificacion >= 70:
    print("Curso aprobado")
else:
    print("Calificación insuficiente")

print("If múltiples condiciones")
dias_transcurridos = 45
if dias_transcurridos < 7:
    print("Curso acababa de comenzar")
elif dias_transcurridos > 56:
    print("Curso finalizó")
else:
    print("Curso en progreso")

print("If condiciones anidadas")
usuario_registrado = True
suscripcion_activa = False
if usuario_registrado:
    if suscripcion_activa:
        print("Acceso completo al curso")
    else:
        print("Necesita activar suscripción")
else:
    print("Usuario no registrado")

print("If con operadores lógicos")
tareas_completadas = True
examen_aprobado = True
if tareas_completadas and examen_aprobado:
    print("Estudiante califica para certificado")

es_instructor = False
tiene_invitacion = True
if es_instructor or tiene_invitacion:
    print("Puede crear un curso")

bloqueado = False
if not bloqueado:
    print("Cuenta habilitada para acceder a los cursos")
