import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderNewComponent } from './order-new/order-new.component';

import { MaterialModule } from '../Material/materia';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatSortModule, MatCheckboxModule, MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [OrdersListComponent, OrderNewComponent,],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatMomentDateModule,
    MaterialModule
  ]
})
export class OrdersModule { }
