import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageNewComponent } from './message-new/message-new.component';
import { MaterialModule } from '../Material/materia';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [MessagesListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MaterialModule
  ]
})
export class MessagesModule { }
