import { Injectable } from '@angular/core';
import { OrdersListComponent } from '../orders/orders-list/orders-list.component';

@Injectable({
  providedIn: 'root',

})
export class ServiciosService {

  constructor() {
 
   }

   getDatos(){
    return [
      {
        orderDate: new Date(),
        orderNumber: 100,
        total: 29.99,
        orderDescription: '21 kls of meat',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 22,
        total: 11199,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.12399,
        orderDescription: '220 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 22,
        total: 11199,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.12399,
        orderDescription: '2230 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '140 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 22,
        total: 11199,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.12399,
        orderDescription: '2204 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 22,
        total: 114199,
        orderDescription: '124 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 493.12399,
        orderDescription: '220 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 1531.99,
        orderDescription: '1440 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 22,
        total: 11199,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 491.12399,
        orderDescription: '220 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 22,
        total: 11199,
        orderDescription: '132 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.12399,
        orderDescription: '220 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '120 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 15.99,
        orderDescription: '10 kls of cheese',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 10.99,
        orderDescription: '12 beers',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 103,
        total: 49.99,
        orderDescription: '20 kls of rice',
        isChecked: false
      },
    ];
    
  
    
   }
  
}
