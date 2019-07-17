import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { 
      path: 'customers', 
      loadChildren: './customers/customers.module#CustomersModule' 
    },
    { 
      path: 'info', 
      loadChildren: './customers/customers.module#CustomersModule' 
    },
    { 
      path: 'orders', 
      loadChildren: './orders/orders.module#OrdersModule' 
    },
    
    { 
      path: 'message', 
      loadChildren: './message/messages.module#MessagesModule' 
    },
    { 
      path: 'client', 
      loadChildren: './client/client.module#ClientModule' 
    },
  

    { 
      path: '', 
      redirectTo: '',
      pathMatch: 'full'
    },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
