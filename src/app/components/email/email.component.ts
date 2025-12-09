import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './email.component.html'
})
export class EmailComponent {

  status = "";
  form: any;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    // AHORA SÍ: fb ya existe y puedes usarlo sin error
    this.form = this.fb.group({
      to: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  send() {
    if (this.form.invalid) {
      this.status = "Formulario inválido ❌";
      return;
    }

    this.status = "Enviando...";

    const payload = this.form.getRawValue(); // Mejor que value, incluye coerción

    this.emailService.sendEmail(payload).subscribe({
      next: () => {
        this.status = "Correo enviado correctamente 🎉";
        this.form.reset();
      },
      error: () => {
        this.status = "Hubo un error al enviar el correo ❌";
      }
    });
  }
}
