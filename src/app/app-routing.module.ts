import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EXEXPORTPDFComponent } from './component/ex-exportpdf/ex-exportpdf.component';

const routes: Routes = [

  {
    path: "", component: EXEXPORTPDFComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
