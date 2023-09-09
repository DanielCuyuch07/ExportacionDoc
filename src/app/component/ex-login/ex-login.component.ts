import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ex-login',
  templateUrl: './ex-login.component.html',
  styleUrls: ['./ex-login.component.css']
})
export class ExLoginComponent {
  formulario: FormGroup;

  submitForm() {
    if (this.formulario.valid) {
      // El formulario es válido, puedes realizar acciones adicionales aquí.
      // Por ejemplo, enviar los datos al servidor.
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      usuario: [
        '', // Valor inicial del campo
        [
          Validators.required, // Campo obligatorio
          Validators.pattern(/^[a-z0-9]+$/), // Expresión regular para permitir solo letras minúsculas y números
        ],
      ],
      // Otros campos de tu formulario
    });
  }
}
