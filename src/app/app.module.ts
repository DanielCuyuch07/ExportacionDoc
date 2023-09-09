import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EXREGISTERComponent } from './component/ex-register/ex-register.component';
import { EXHOMEComponent } from './component/ex-home/ex-home.component';
import { EXEXPORTPDFComponent } from './component/ex-exportpdf/ex-exportpdf.component';
import { EXEXPORTEXCELComponent } from './component/ex-exportexcel/ex-exportexcel.component';
import { ExLoginComponent } from './component/ex-login/ex-login.component';
import { EXSubMenuComponent } from './component/ex-sub-menu/ex-sub-menu.component';
import { MainComponent } from './component/main/main.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { ExGradosComponent } from './component/ex-grados/ex-grados.component';
import { ExDepartamentosComponent } from './component/ex-departamentos/ex-departamentos.component';
import { ExHorariosComponent } from './component/ex-horarios/ex-horarios.component';
import { ExUniformesComponent } from './component/ex-uniformes/ex-uniformes.component';
import { ExProfesoresComponent } from './component/ex-profesores/ex-profesores.component';
import { ExEmpleadosComponent } from './component/ex-empleados/ex-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EXREGISTERComponent,
    EXHOMEComponent,
    EXEXPORTPDFComponent,
    EXEXPORTEXCELComponent,
    ExLoginComponent,
    EXSubMenuComponent,
    MainComponent,
    UsuariosComponent,
    ExGradosComponent,
    ExDepartamentosComponent,
    ExHorariosComponent,
    ExUniformesComponent,
    ExProfesoresComponent,
    ExEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
