import { Component, OnInit } from '@angular/core';
import { ProductActions } from './../../product/actions/product-actions';
import { AppState } from './../../interfaces';
import { getProducts } from './../../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  products$: Observable<any>;

  constructor(private store: Store<AppState>, private actions: ProductActions) {
    // Get all products for the product list component
    this.store.dispatch(this.actions.getAllProducts());
    this.products$ = this.store.select(getProducts);

  }

  ngOnInit() {
  }

}
