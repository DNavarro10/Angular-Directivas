import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RepDialogComponent } from './customer-new/rep-dialog/rep-dialog.component';

import { CustomersRoutingModule } from './customers-routing.module';




import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatIconModule, MatDialogModule, MatRadioModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/materia';



@NgModule({
  declarations: [CustomerListComponent, CustomersCardComponent, CustomerNewComponent, RepDialogComponent],
  entryComponents:[RepDialogComponent],

  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MaterialModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatSnackBarModule
    
  ]
})
export class CustomersModule { }
