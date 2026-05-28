print("Diccionario - Cursos Online")
print("Crear Diccionarios")

vacio = {}
print(vacio)

estudiante = {"nombre": "Juan", "edad": 25, "ciudad": "Quito"}
print(estudiante)

curso = dict(nombre="Python Avanzado", duracion=8, precio=99.99)
print(curso)

# Acceso
print(estudiante["nombre"])

# Modificar
estudiante["nombre"] = "Pedro"
print(estudiante)

del estudiante["edad"]
print(estudiante)

# Verificar existencia
print("nombre" in estudiante)
print("email" in estudiante)

# Métodos esenciales
print(estudiante.keys())
print(estudiante.values())
print(estudiante.items())

# Iterar
for clave, valor in estudiante.items():
    print(f"clave: {clave}, valor: {valor}")
