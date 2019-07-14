import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.sass']
})
export class MessagesListComponent implements OnInit {
  public identificado: boolean;

  constructor() { 

  this.identificado = false;

  }

  ngOnInit() {
  }

  setIdentificado(){
    this.identificado = true;

  }
  unsetIdentificiado(){
    this.identificado = false;
  }
}
