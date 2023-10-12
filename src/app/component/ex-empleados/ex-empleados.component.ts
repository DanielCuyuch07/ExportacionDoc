import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex-empleados',
  templateUrl: './ex-empleados.component.html',
  styleUrls: ['./ex-empleados.component.css']
})
export class ExEmpleadosComponent {
  formEmpleados: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formEmpleados =  this.formBuilder.group({
      nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
      horarioEntrada: ['', Validators.required],
      horarioSalida: ['', Validators.required],
    })
  }

  get nombre(){
    return this.formEmpleados.get('nombre') as FormControl;
  }

  get objetivo(){
    return this.formEmpleados.get('objetivo') as FormControl;
  }

  get horarioEntrada(){
    return this.formEmpleados.get('horarioEntrada') as FormControl;
  }

  get horarioSalida(){
    return this.formEmpleados.get('horarioSalida') as FormControl;
  }


}
