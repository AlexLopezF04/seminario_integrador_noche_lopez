/**
 * ============================================
 * 42 - EJEMPLO COMBINADO: CACHE CON EXPIRACION
 * ============================================
 * Integra: genericos, restricciones, keyof,
 * clases genericas, utility types
 * ============================================
 */

interface EntradaCache<T> {
  valor: T;
  expiraEn: number;  // timestamp Unix en ms
}

interface Entidad {
  id: number;
}

class CacheConExpiracion<T extends Entidad> {
  private almacen = new Map<number, EntradaCache<T>>();

  guardar(item: T, ttlMs: number): void {
    this.almacen.set(item.id, {
      valor: item,
      expiraEn: Date.now() + ttlMs,
    });
  }

  obtener(id: number): T | undefined {
    const entrada = this.almacen.get(id);
    if (!entrada) return undefined;
    if (Date.now() > entrada.expiraEn) {
      this.almacen.delete(id);
      return undefined;
    }
    return entrada.valor;
  }

  campo<K extends keyof T>(id: number, clave: K): T[K] | undefined {
    return this.obtener(id)?.[clave];
  }

  resumenActivo(): Pick<T, "id">[] {
    const resultado: Pick<T, "id">[] = [];
    for (const [id, entrada] of this.almacen) {
      if (Date.now() <= entrada.expiraEn) {
        resultado.push({ id } as Pick<T, "id">);
      }
    }
    return resultado;
  }
}

interface Sesion extends Entidad {
  usuario: string;
  rol: "admin" | "editor" | "lector";
  ip: string;
}

const cacheSesiones = new CacheConExpiracion<Sesion>();

cacheSesiones.guardar({ id: 1, usuario: "ana", rol: "admin", ip: "10.0.0.1" }, 60_000);
cacheSesiones.guardar({ id: 2, usuario: "luis", rol: "editor", ip: "10.0.0.2" }, 60_000);

console.log("Obtener 1:", cacheSesiones.obtener(1)?.usuario);
console.log("Campo 2 rol:", cacheSesiones.campo(2, "rol"));
// cacheSesiones.campo(2, "clave_inexistente");  // Error en compilacion

type ActualizacionSesion = Partial<Omit<Sesion, "id">>;

function aplicarCambios(base: Sesion, cambios: ActualizacionSesion): Sesion {
  return { ...base, ...cambios };
}

const sesionActualizada = aplicarCambios(
  cacheSesiones.obtener(1)!,
  { rol: "lector", ip: "10.0.0.99" }
);
console.log("Sesion actualizada:", sesionActualizada);

console.log("Sesiones activas:", cacheSesiones.resumenActivo());
