print("Match - case - Cursos Online")
estado_curso = input("Ingrese el estado del curso (activo/pausado/completado/cancelado): ")
match estado_curso:
    case "activo":
        print("El curso está en ejecución......")
    case "pausado":
        print("El curso está en pausa......")
    case "completado":
        print("El curso ha finalizado......")
    case "cancelado":
        print("El curso fue cancelado......")
    case _:
        print(f"Estado '{estado_curso}' no válido")

print("Match - con condiciones - Calificación")
calificacion = int(input("Ingrese la calificación del estudiante (0-100): "))
match calificacion:
    case c if c < 0:
        print(f"{c} es una calificación no válida")
    case 0:
        print("Calificación de cero")
    case c if c >= 0 and c < 70:
        print(f"La calificación {c} es insuficiente")
    case c if c >= 70:
        print(f"La calificación {c} es aprobatoria")
