import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    
  ]
})

export class ClientModule { }
