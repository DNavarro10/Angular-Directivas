import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    FormsModule    
  ]
})

export class ClientModule { }
