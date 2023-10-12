import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';


@Component({
  selector: 'app-ex-departamentos',
  templateUrl: './ex-departamentos.component.html',
  styleUrls: ['./ex-departamentos.component.css']
})
export class ExDepartamentosComponent {
  formDepartamentos: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formDepartamentos = this.formBuilder.group({
      departamento: ['', Validators.required]
    })
  }

  /*Guetters*/
  get departamento(){
    return this.formDepartamentos.get('departamento')as FormControl;
  }



}
