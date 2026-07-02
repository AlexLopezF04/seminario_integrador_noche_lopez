/**
 * ============================================
 * 35 - IMPLEMENTS, STATIC Y POLIMORFISMO
 * ============================================
 * Temas:
 *   - class implements interface
 *   - Miembros estaticos (static)
 *   - Polimorfismo
 * ============================================
 */

// ──────────────────────────────────────────────
// D.1: implements
// ──────────────────────────────────────────────

/**
 * Una clase puede comprometerse a cumplir el contrato de una
 * interfaz usando implements. Puede implementar varias a la vez.
 * A diferencia de extends, NO hereda implementacion (codigo),
 * solo hereda la forma (firmas).
 */

interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class Pedido implements Serializable, Validable {
  constructor(
    public id: string,
    public productos: string[],
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({
      id: this.id,
      productos: this.productos,
      total: this.total,
    });
  }

  esValido(): boolean {
    return this.productos.length > 0 && this.total > 0;
  }
}

const pedido = new Pedido("P-001", ["Mouse", "Teclado"], 150);
console.log("Valido:", pedido.esValido());
console.log("Serializado:", pedido.serializar());

// ──────────────────────────────────────────────
// D.2: Miembros estaticos (static)
// ──────────────────────────────────────────────

/**
 * Los miembros static pertenecen a la clase misma,
 * no a las instancias. Se accede con NombreClase.miembro.
 */

class Matematica {
  static readonly PI: number = 3.14159265;

  static circunferencia(radio: number): number {
    return 2 * Matematica.PI * radio;
  }

  static potencia(base: number, exp: number): number {
    return base ** exp;
  }
}

console.log("PI:", Matematica.PI);
console.log("Circunferencia r=5:", Matematica.circunferencia(5));
console.log("2^10:", Matematica.potencia(2, 10));

// ──────────────────────────────────────────────
// D.3: Polimorfismo
// ──────────────────────────────────────────────

/**
 * El polimorfismo permite tratar objetos de distintas subclases
 * de forma uniforme a traves del tipo base. TypeScript invoca
 * la version correcta de cada metodo en tiempo de ejecucion.
 */

class Forma {
  nombre(): string { return "Forma"; }
  area(): number { return 0; }
}

class Circulo3 extends Forma {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Circulo"; }
  override area(): number { return Math.PI * this.r ** 2; }
}

class Triangulo extends Forma {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Triangulo"; }
  override area(): number { return (this.base * this.altura) / 2; }
}

class Cuadrado extends Forma {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Cuadrado"; }
  override area(): number { return this.lado ** 2; }
}

const formas: Forma[] = [
  new Circulo3(3),
  new Triangulo(6, 4),
  new Cuadrado(5),
];

for (const f of formas) {
  console.log(f.nombre() + ": area = " + f.area().toFixed(2));
}

// ──────────────────────────────────────────────
// EJEMPLO: Sistema de notificaciones polimorfico
// ──────────────────────────────────────────────

abstract class Notificacion {
  constructor(protected destinatario: string, protected mensaje: string) {}

  abstract enviar(): string;

  resumen(): string {
    return "[" + this.constructor.name + "] -> " + this.destinatario;
  }
}

class NotificacionEmail extends Notificacion {
  constructor(destinatario: string, mensaje: string, private asunto: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return "Email a <" + this.destinatario + "> | Asunto: \"" + this.asunto + "\" | Cuerpo: " + this.mensaje;
  }
}

class NotificacionSMS extends Notificacion {
  constructor(destinatario: string, mensaje: string, private telefono: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return "SMS a " + this.telefono + " (" + this.destinatario + "): " + this.mensaje;
  }
}

class NotificacionPush extends Notificacion {
  constructor(destinatario: string, mensaje: string, private dispositivoId: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return "Push -> dispositivo " + this.dispositivoId + " (" + this.destinatario + "): " + this.mensaje;
  }
}

const notificaciones: Notificacion[] = [
  new NotificacionEmail("ana@mail.com", "Tu pedido llego.", "Entrega completada"),
  new NotificacionSMS("Luis", "Tu cita es manana.", "+52-555-0001"),
  new NotificacionPush("Carlos", "Oferta especial!", "dev-abc-123"),
];

for (const n of notificaciones) {
  console.log(n.resumen());
  console.log("  >", n.enviar());
}
