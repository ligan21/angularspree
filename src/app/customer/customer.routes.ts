import { Routes } from '@angular/router';
//import { CustomerDetailPageComponent } from './components/customer-detail-page/product-detail-page.component';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent} from './customer-list/customer-list.component'
import { AddCustomerComponent} from './add-customer/add-customer.component'

export const CustomerRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CustomerListComponent },
  { path: 'add',component:AddCustomerComponent},
  //{ path: ':id', component: ProductDetailPageComponent },
];
