from types import NoneType


MAX_INTENTOS = 3
nombre = "Alexander Lopez"
edad = 26
altura = 1.73
activo = True
nulo = None

print(nombre, "tipo", type(nombre))
print(edad, "tipo", type(edad))
print(altura, "tipo", type(altura))
print(activo, "tipo", type(activo))
print(nulo, "tipo", type(nulo))

nombre_apellido: str = "Alexander Lopez"
edad_trabajador: int = 26
altura_trabajador: float = 1.73
activo_trabajador: bool = True
nulo_trabajador: NoneType = None

print(nombre_apellido, "tipo", type(nombre_apellido))
print(edad_trabajador, "tipo", type(edad_trabajador))
print(altura_trabajador, "tipo", type(altura_trabajador))
print(activo_trabajador, "tipo", type(activo_trabajador))
print(nulo_trabajador, "tipo", type(nulo_trabajador))