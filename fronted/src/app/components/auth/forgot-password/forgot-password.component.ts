import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  recoveryForm: FormGroup;
  message: string = '';

  constructor(private UserService: UserService, private fb: FormBuilder) {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendRecoveryEmail() {
    if (this.recoveryForm.valid) {
      const email = this.recoveryForm.get('email')?.value;
      this.UserService.sendPasswordRecoveryEmail(email).subscribe({
        next: () => {
          this.message = 'Correo de recuperación enviado con éxito.';
        },
        error: () => {
          this.message = 'Ocurrió un error al enviar el correo. Inténtalo de nuevo.';
        }
      });
    } else {
      this.message = 'Por favor ingresa un correo válido.';
    }
  }
}
