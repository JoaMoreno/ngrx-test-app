import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/application/state/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Selectores
import * as fromBoletas from '../../../application/state/boletas/boletas.selector'
import * as fromPaymentMethods from '../../../application/state/paymentMethods/paymentMethos.selector'
// Interfaces
import { Servicios } from 'src/app/application/state/boletas/boletas.reducer';
import { Metodos } from 'src/app/application/state/paymentMethods/paymentMethos.reducer';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  servicios$: Observable<Servicios[]>
  metodos$: Observable<Metodos[]>

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.servicios$ = this.store$.select(fromBoletas.getBoletas)
    this.metodos$ = this.store$.select(fromPaymentMethods.getPaymentMethods)
  }

}
