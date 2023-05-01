


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import {EmployeeListComponent} from './employee-list/employee-list.component'
import { RouterModule } from '@angular/router';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { FabricComponent } from './fabric/fabric.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    FabricComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
