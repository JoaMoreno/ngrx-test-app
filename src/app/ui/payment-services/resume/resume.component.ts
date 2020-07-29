import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/application/state/reducers';
import { Store } from '@ngrx/store';
// Selectores
import * as fromBoletas from '../../../application/state/boletas/boleta.selectors'
import * as fromPaymentMethods from '../../../application/state/paymentMethods/payment-methods.selectors'
// Interfaces
import { Boleta } from 'src/app/application/state/boletas/boleta.model';
import { PaymentMethods } from 'src/app/application/state/paymentMethods/payment-methods.model';
import { NavigationService } from 'src/app/infrastructure/services/navigation.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  servicios$: Boleta[]
  metodos$: PaymentMethods[]

  constructor(private store$: Store<State>, private _navigation: NavigationService) { }

  ngOnInit(): void {
    this.store$.select(fromBoletas.getAllBoletasSelected).subscribe(
      (data) => {
        console.log('BOLETAS', data)
        this.servicios$ = data
      }
    )
    this.store$.select(fromPaymentMethods.getAllPaymentMethodsSelected).subscribe( data => {
        this.metodos$ = data
      }
    )
  }

  success(){
    this._navigation.redirecTo('/success')
  }

}
