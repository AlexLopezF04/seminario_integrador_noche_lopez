
precio_curso = float(input("Ingrese el precio del curso en USD: "))
cantidad_inscritos = float(input("Ingrese la cantidad de inscritos: "))

print("Ingresos totales")
print(precio_curso, "*", cantidad_inscritos, "=", precio_curso * cantidad_inscritos)

print("Descuento")
descuento = precio_curso * 0.10
print(precio_curso, "-", descuento, "=", precio_curso - descuento)

print("Precio final con IVA")
iva = precio_curso * 0.12
print(precio_curso, "+", iva, "=", precio_curso + iva)

print("División del presupuesto entre módulos")
print(precio_curso, "/", 5, "=", precio_curso / 5)

print("Lecciones por módulo")
total_lecciones = 50
modulos = 5
print(total_lecciones, "%", modulos, "=", total_lecciones % modulos)

print("Calcular días de curso")
duracion_horas = precio_curso
semanas = 8
print(duracion_horas, "**", semanas, "=", duracion_horas ** semanas)
