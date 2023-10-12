import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ex-uniformes',
  templateUrl: './ex-uniformes.component.html',
  styleUrls: ['./ex-uniformes.component.css']
})
export class ExUniformesComponent {
  formUniformes: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formUniformes = this.formBuilder.group({
      numberUniforms : ['', Validators.required], 
      salesUniformes : ['', Validators.required],
      date: ['', Validators.required] 
    })
  }

  /*Guetters*/
  get numberUniforms(){
    return this.formUniformes.get('numberUniforms') as FormControl;
  }

  get salesUniformes(){
    return this.formUniformes.get('salesUniformes') as FormControl;
  }

  get date(){
    return this.formUniformes.get('date') as FormControl;
  }

}
