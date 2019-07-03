import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
      path: 'customer', 
      loadChildren: './customers/customers.module#CustomerModule' 
    },
    { 
      path: 'orders', 
      loadChildren: './orders/orders.module#OrdersModule' 
    },
    
    { 
      path: 'message', 
      loadChildren: './message/message.module#MessageModule' 
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
