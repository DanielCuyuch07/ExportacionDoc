import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex-horarios',
  templateUrl: './ex-horarios.component.html',
  styleUrls: ['./ex-horarios.component.css']
})
export class ExHorariosComponent {
  formHorarios: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formHorarios = this.formBuilder.group({
      horarioEntrada: ['', Validators.required],
      horarioSalida: ['', Validators.required]
    })
  }

  get horarioEntrada() {
    return this.formHorarios.get('horarioEntrada') as FormControl;
  }

  get horarioSalida() {
    return this.formHorarios.get('horarioSalida') as FormControl;
  }

}
