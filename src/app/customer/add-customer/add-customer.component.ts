import { getAuthStatus } from './../../auth/reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from './../../auth/actions/auth.actions';
import { CustomerService } from './../services/customer.service';
import { CheckoutService } from './../../core/services/checkout.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit, OnDestroy {

  customerForm: FormGroup;
  emailForm: FormGroup;
  isAuthenticated: boolean;

  constructor(
    private fb: FormBuilder, private authActions: AuthActions,
    private checkoutService: CheckoutService,
    private customerService: CustomerService,
    private store: Store<AppState>) {
      this.customerForm = customerService.initCustomerForm();
      this.emailForm = customerService.initEmailForm();
      this.store.select(getAuthStatus).subscribe((auth) => {
        this.isAuthenticated = auth;
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    const customer = this.customerForm.value;
    let customerAttributes;
    if (this.isAuthenticated) {
      customerAttributes = this.customerService.createCustomerAttributes(customer);
    } else {
      const email = this.getEmailFromUser();
      customerAttributes = this.customerService.createGuestAddressAttributes(customer, email);
    }
    this.checkoutService.updateOrder(customerAttributes)
      .subscribe();
  }

  private getEmailFromUser() {
    return this.emailForm.value.email;
  }

  ngOnDestroy() {
  }

}
