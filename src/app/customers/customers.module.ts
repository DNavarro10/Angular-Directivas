import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';

import { MatButtonModule } from '@angular/material/button';

import { MatCardModule, MatIconModule } from '@angular/material';



@NgModule({
  declarations: [CustomerListComponent, CustomersCardComponent,],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CustomersModule { }
