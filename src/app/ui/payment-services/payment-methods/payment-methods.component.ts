import { Component, OnInit } from '@angular/core';
import { Metodos } from 'src/app/application/state/paymentMethods/paymentMethos.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/application/state/reducers';
import * as fromPaymentMethods from '../../../application/state/paymentMethods/paymentMethos.selector'

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  metodos$: Observable<Metodos[]>

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.metodos$ = this.store$.select(fromPaymentMethods.getPaymentMethods)
  }

}