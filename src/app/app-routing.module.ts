import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EXEXPORTPDFComponent } from './component/ex-exportpdf/ex-exportpdf.component';
import { EXSubMenuComponent } from './component/ex-sub-menu/ex-sub-menu.component';

const routes: Routes = [

  {
    path: "", component: EXSubMenuComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
