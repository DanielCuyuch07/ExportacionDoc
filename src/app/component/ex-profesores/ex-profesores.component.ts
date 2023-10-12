import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';


@Component({
  selector: 'app-ex-profesores',
  templateUrl: './ex-profesores.component.html',
  styleUrls: ['./ex-profesores.component.css']
})
export class ExProfesoresComponent {
    formProfesores: FormGroup;

    constructor(private formBuilder: FormBuilder){
      this.formProfesores = this.formBuilder.group({
        nombreProfesor: ['', Validators.required],
        salario: ['', Validators.required],
        grado: ['', Validators.required],
        horarioSalida: ['', Validators.required],
        horarioEntrada: ['', Validators.required]
      })
    }

    /*Guetters*/

    get nombreProfesor(){
      return this.formProfesores.get('nombreProfesor') as FormControl;
    }

    get salario(){
      return this.formProfesores.get('salario') as FormControl;
    }

    get grado(){
      return this.formProfesores.get('grado') as FormControl;
    }
    
    get horarioSalida(){
      return this.formProfesores.get('horarioSalida') as FormControl;
    }

    get horarioEntrada(){
      return this.formProfesores.get('horarioEntrada') as FormControl;
    }



}
