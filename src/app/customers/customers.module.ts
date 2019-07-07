import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';

import { MatButtonModule } from '@angular/material/button';

import { MatCardModule, MatIconModule } from '@angular/material';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { MaterialModule } from '../Material/materia';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerListComponent, CustomersCardComponent, CustomerNewComponent,],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CustomersModule { }
