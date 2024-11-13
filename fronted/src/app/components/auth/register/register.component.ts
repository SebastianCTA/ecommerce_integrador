import { Component } from '@angular/core';

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

  
}
