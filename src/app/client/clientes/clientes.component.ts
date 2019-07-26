import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass'],
  providers:[ClientService]  //provaiders siempre cuando se hace un injectacble
})
export class ClientesComponent implements OnInit {
  showSpinner: boolean = true;

  public user: any;
  public userId: any;
  constructor(private _peticionService: ClientService) {
   //iniciando
    this.userId = 1;
   }

  ngOnInit() {

    this.loadUser(); //funcion
    
  }

  loadUser(){
      //peticion
    this._peticionService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
        this.showSpinner = false;
      },
      error =>{
        console.log(error);
      })

  }

}
