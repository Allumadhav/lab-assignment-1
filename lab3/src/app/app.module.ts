import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ServiceService} from './service.service';
import { EmpComponent } from './emp/emp.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
