import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/application/state/reducers';
import * as fromPaymentMethods from '../../../application/state/paymentMethods/payment-methods.selectors'
import { NavigationService } from 'src/app/infrastructure/services/navigation.service';
import { PaymentMethods } from 'src/app/application/state/paymentMethods/payment-methods.model';
import { updatePaymentMethods, clearPaymentMethodss } from 'src/app/application/state/paymentMethods/payment-methods.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  metodos$: PaymentMethods[]

  constructor(private store$: Store<State>, private _navigation: NavigationService) { }

  ngOnInit(): void {
    this.store$.select(fromPaymentMethods.getAllpaymentMethods).subscribe(
      (data) => {
        this.metodos$ = data
      }
    )

  }

  next(){
    this._navigation.redirecTo('/step-three')
  }

  previous(){
    this._navigation.redirecTo('/step-one')
  }

  onChangeItemSelected(metodo: PaymentMethods) {
    const selectedItem = metodo.isSelected;
    const update: Update<PaymentMethods> = {
        id: metodo.id,
        changes: { isSelected : !selectedItem }
    };
    this.store$.dispatch(updatePaymentMethods({ paymentMethods: update }));
    this._navigation.redirecTo('/step-three')
  }

}
