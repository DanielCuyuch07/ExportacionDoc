import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EXREGISTERComponent } from './component/ex-register/ex-register.component';
import { EXHOMEComponent } from './component/ex-home/ex-home.component';
import { EXEXPORTPDFComponent } from './component/ex-exportpdf/ex-exportpdf.component';
import { EXEXPORTEXCELComponent } from './component/ex-exportexcel/ex-exportexcel.component';
import { ExLoginComponent } from './component/ex-login/ex-login.component';

@NgModule({
  declarations: [
    AppComponent,
    EXREGISTERComponent,
    EXHOMEComponent,
    EXEXPORTPDFComponent,
    EXEXPORTEXCELComponent,
    ExLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
