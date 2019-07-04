import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { MaterialModule } from '../Material/materia';


@NgModule({
  declarations: [CustomerListComponent, CustomersCardComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    
    MaterialModule
  ]
})
export class CustomersModule { }
