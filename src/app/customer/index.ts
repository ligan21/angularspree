import { RouterModule } from '@angular/router';
import { CustomerRoutes as routes } from './customer.routes';
import { NgModule } from '@angular/core';

// components
import { CustomerComponent } from './customer.component';
import {CustomerService} from './services/customer.service';
import {CustomerListComponent} from './customer-list/customer-list.component';
import { AddCustomerComponent} from './add-customer/add-customer.component';


// services
// import { UserService } from './services/user.service';


import { SharedModule } from '../shared/index';


@NgModule({
  declarations: [
    // components
    CustomerComponent,
    CustomerListComponent,
    AddCustomerComponent,
    // pipes


  ],
  exports: [
    // components
    // OverviewComponent,
    // OrderListItemComponent,
    // OrdersComponent,
    // ReturnsComponent,
    // ReturnListItemComponent,

  ],
  providers: [
   CustomerService
 ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CustomerModule {}
