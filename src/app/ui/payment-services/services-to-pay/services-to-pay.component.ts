import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/application/state/reducers';
import { Store } from '@ngrx/store';
import * as fromBoletas from '../../../application/state/boletas/boletas.selector'
import * as fromNavigationActions from '../../../application/state/navigation/navigation.action'
import { Servicios } from 'src/app/application/state/boletas/boletas.reducer';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/infrastructure/services/navigation.service';

@Component({
  selector: 'app-services-to-pay',
  templateUrl: './services-to-pay.component.html',
  styleUrls: ['./services-to-pay.component.scss']
})
export class ServicesToPayComponent implements OnInit {

  servicios$: Observable<Servicios[]>

  constructor(private store$: Store<State>, private _navigation: NavigationService) { }

  ngOnInit(): void {
    this.servicios$ = this.store$.select(fromBoletas.getBoletas)
  }

  next(){
    this._navigation.redirecTo('/step-two')
  }


}
