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