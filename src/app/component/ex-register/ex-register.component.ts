import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ex-register',
  templateUrl: './ex-register.component.html',
  styleUrls: ['./ex-register.component.css']
})
export class EXREGISTERComponent implements OnInit {
  registerForm: FormGroup;
  modUser: UserModel;


  constructor
    (private fb: FormBuilder,
    private userServices: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      "username": ['', [Validators.required] ]
    })
    this.modUser = new UserModel('', '', '', '', '');
  }


  ngOnInit(): void {
  }

  /******************  Funciones *****************/

  register(registerForm: any) {
    this.userServices.register(this.modUser).subscribe({
      next: (res: any) => {
        Swal.fire({
          position: 'center',
          title: res.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
        return this.router.navigateByUrl('/login');
      },
      error: (err) => {
        registerForm.reset();
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }


}
