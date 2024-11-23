import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public persona = {
    nombres: '',
    apellido_paterno: '',
    apellido_materno: ''
  };
  formulario: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepLoggedIn: [false]
    });
  }

  // Cambiar visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Manejo del submit
  onSubmit(): void {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
      // Aquí puedes integrar el servicio de autenticación o backend
    } else {
      console.error('Formulario inválido');
    }
  }
}
