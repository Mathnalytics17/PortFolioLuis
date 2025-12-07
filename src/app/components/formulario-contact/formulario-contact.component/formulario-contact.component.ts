import { Component, signal } from '@angular/core';
import { FormInterface } from '../../../interfaces/form-interface';

@Component({
  selector: 'formulario-contact',
  imports: [],
  templateUrl: './formulario-contact.component.html',
})
export class FormularioContactComponentComponent {
  
  nombre = signal('');
  apellido = signal('');
  email = signal('');
  numero_telefono = signal('');
  asunto = signal('');
  mensaje = signal('');

  formularioSubmit = signal<FormInterface[]>([]);

  enviarFormulario() {
    // Crear objeto con los datos del formulario
    const datosFormulario = {
      nombre: this.nombre(),
      apellido: this.apellido(),
      email: this.email(),
      numero_telefono: this.numero_telefono(),
      asunto: this.asunto(),
      mensaje: this.mensaje()
    };

    // Console.log para verificar los datos
    console.log('Datos del formulario:', datosFormulario);

    // Aquí puedes agregar la lógica para enviar los datos
    // Por ejemplo, agregar al array formularioSubmit
    this.formularioSubmit.update(form => [...form, datosFormulario]);
    
    // Limpiar formulario después de enviar
    this.limpiarFormulario();
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