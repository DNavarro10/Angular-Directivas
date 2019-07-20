import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ClientService {

  public url: string;


  constructor( public _htt: HttpClient) {

    this.url = "https://reqres.in/";


   }  

   getUser(): Observable<any>{
     return this._htt.get(this.url + 'api/users/2')
   }

}
