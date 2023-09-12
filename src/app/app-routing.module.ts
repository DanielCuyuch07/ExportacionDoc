import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EXEXPORTPDFComponent } from './component/ex-exportpdf/ex-exportpdf.component';
import { EXSubMenuComponent } from './component/ex-sub-menu/ex-sub-menu.component';
import { EXEXPORTEXCELComponent } from './component/ex-exportexcel/ex-exportexcel.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { ExGradosComponent } from './component/ex-grados/ex-grados.component';
import { ExDepartamentosComponent } from './component/ex-departamentos/ex-departamentos.component';
import { ExHorariosComponent } from './component/ex-horarios/ex-horarios.component';
import { ExEmpleadosComponent } from './component/ex-empleados/ex-empleados.component';
import { ExProfesoresComponent } from './component/ex-profesores/ex-profesores.component';
import { ExUniformesComponent } from './component/ex-uniformes/ex-uniformes.component';
import { ExLoginComponent } from './component/ex-login/ex-login.component';
import { EXREGISTERComponent } from './component/ex-register/ex-register.component';
import { MainComponent } from './component/main/main.component';
import { EXHOMEComponent } from './component/ex-home/ex-home.component';

const routes: Routes = [

  {
    path: "", component: EXHOMEComponent,
  },
  {
    path: "login", component: ExLoginComponent,
  },
  {
    path: "registerUser", component: EXREGISTERComponent,
  },
  {
   path: "ViewComponentPFD", component: EXEXPORTPDFComponent, 
  },
  {
    path: "ViewComponentPFDExcel",component: EXEXPORTEXCELComponent,
  },
  {
    path: "ViewComponentUsuario", component: UsuariosComponent, 
  },
  {
    path: "ViewComponentGrado", component: ExGradosComponent,
  },
  {
    path:  "ViewComponentDepartamento", component: ExDepartamentosComponent,
  },
  {
    path:  "ViewComponentHorarios", component: ExHorariosComponent,
  },
  {
    path: "ViewComponentUniformes", component: ExUniformesComponent,
  },
  {
    path: "ViewComponentProfesores", component: ExProfesoresComponent,
  },
  {
    path: "ViewComponentEmpleados", component: ExEmpleadosComponent,
  },
  {
    path: "main", component: MainComponent,
  },
  {
    path: "home", component: EXHOMEComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
