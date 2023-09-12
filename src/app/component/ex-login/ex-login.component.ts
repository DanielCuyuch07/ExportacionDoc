import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'; // Importa AbstractControl aquí


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
      // contraseña: [
      //   '', // Valor inicial del campo
      //   [
      //     Validators.required, // Campo obligatorio
      //     Validators.minLength(8), // Mínimo de 8 caracteres
      //     this.validarContraseña // Función personalizada para validar la contraseña
      //   ],
      // ],
      // Otros campos de tu formulario
    });
  }

  // validarContraseña(control: AbstractControl) {
  //   const contraseña = control.value;
  //   const tieneMayuscula = /[A-Z]/.test(contraseña);
  //   const tieneMinuscula = /[a-z]/.test(contraseña);
  //   const tieneSigno = /[!@#\$%\^&\*\(\)_+\{\}\[\]:;<>,\.\?~\\-=]/.test(contraseña);

  //   if (!tieneMayuscula || !tieneMinuscula || !tieneSigno) {
  //     return { contraseñaInvalida: true };
  //   }

  //   return null;
  // }
}
