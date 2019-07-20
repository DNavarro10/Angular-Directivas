import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass'],
  providers:[ClientService]  //provaiders siempre cuando se hace un injectacble
})
export class ClientesComponent implements OnInit {

  public user: any;

  constructor(private _peticionService: ClientService) { }

  ngOnInit() {
    
    this._peticionService.getUser().subscribe(
      result =>{
        this.user = result.data;
      },
      error =>{
        console.log(error);
      })

  }

}
