import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'formulario-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // 👉 NECESARIO PARA QUE EL FORM SE RENDERICE
  templateUrl: './formulario-contact.component.html',
})
export class FormularioContactComponent {

  nombre = signal('');
  apellido = signal('');
  email = signal('');
  numero_telefono = signal('');
  asunto = signal('');
  mensaje = signal('');

  status = signal('');

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    this.status.set('Enviando...');

    const payload = {
      to: "luisjose0317@gmail.com",  // ⚠️ Esto debes ponerlo tú, no enviar al usuario
      subject: this.asunto(),
      message: `
        Nombre: ${this.nombre()}
        Apellido: ${this.apellido()}
        Teléfono: ${this.numero_telefono()}
        Email: ${this.email()}
        Mensaje: ${this.mensaje()}
      `
    };

    this.http.post('/api/send-email', payload).subscribe({
      next: () => {
        this.status.set('Correo enviado correctamente 🎉');
        this.limpiarFormulario();
      },
      error: (err) => {
        console.error(err);
        this.status.set('Hubo un error al enviar el correo ❌');
      }
    });
  }

  limpiarFormulario() {
    this.nombre.set('');
    this.apellido.set('');
    this.email.set('');
    this.numero_telefono.set('');
    this.asunto.set('');
    this.mensaje.set('');
  }
}
