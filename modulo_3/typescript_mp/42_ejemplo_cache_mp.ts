/**
 * ============================================
 * 42 - EJEMPLO COMBINADO: CACHE DE SESIONES CURSOS
 * Tematica: Cursos Online
 * ============================================
 * Concepto: Genericos, restricciones, keyof,
 * clases genericas, utility types
 * Cursos Online: Cache de sesiones de estudiantes
 * con expiracion, tipos de entidad educativa.
 * ============================================
 */

interface EntradaCacheCurso<T> {
  valor: T;
  expiraEn: number;
}

interface EntidadCursoCache {
  id: number;
}

class CacheSesionesCurso<T extends EntidadCursoCache> {
  private almacen = new Map<number, EntradaCacheCurso<T>>();

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

interface SesionCurso extends EntidadCursoCache {
  usuario: string;
  rol: "admin" | "instructor" | "estudiante";
  ip: string;
}

const cacheSesionesCurso = new CacheSesionesCurso<SesionCurso>();

cacheSesionesCurso.guardar({ id: 1, usuario: "ana", rol: "admin", ip: "10.0.0.1" }, 60_000);
cacheSesionesCurso.guardar({ id: 2, usuario: "luis", rol: "estudiante", ip: "10.0.0.2" }, 60_000);

console.log("Obtener 1:", cacheSesionesCurso.obtener(1)?.usuario);
console.log("Campo 2 rol:", cacheSesionesCurso.campo(2, "rol"));

type ActualizacionSesionCurso = Partial<Omit<SesionCurso, "id">>;

function aplicarCambiosCurso(base: SesionCurso, cambios: ActualizacionSesionCurso): SesionCurso {
  return { ...base, ...cambios };
}

const sesionActualizadaCurso = aplicarCambiosCurso(
  cacheSesionesCurso.obtener(1)!,
  { rol: "estudiante", ip: "10.0.0.99" }
);
console.log("Sesion actualizada:", sesionActualizadaCurso);

console.log("Sesiones activas:", cacheSesionesCurso.resumenActivo());
