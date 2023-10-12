import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ex-grados',
  templateUrl: './ex-grados.component.html',
  styleUrls: ['./ex-grados.component.css']
})
export class ExGradosComponent {
    formGrados: FormGroup;

    constructor(private formBuilder: FormBuilder){
      this.formGrados = this.formBuilder.group({
        nombreAlumno: ['', Validators.required],
        gradoEscolar: ['', Validators.required],
        correoEmail: ['', Validators.required]
      })
    }

    get nombreAlummno() {
      return this.formGrados.get('nombreAlumno') as FormControl;
    }

    get correoEmail(){
      return this.formGrados.get('correoEmail') as FormControl
    }

    get gradoEscolar(){
      return this.formGrados.get('gradoEscolar') as FormControl
    }





}
