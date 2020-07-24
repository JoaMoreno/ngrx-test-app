import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/state/reducers';
import { Store } from '@ngrx/store';
import * as fromBoletas from '../../state/boletas/boletas.selector'
import { Servicios } from 'src/app/state/boletas/boletas.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services-to-pay',
  templateUrl: './services-to-pay.component.html',
  styleUrls: ['./services-to-pay.component.scss']
})
export class ServicesToPayComponent implements OnInit {

  servicios$: Observable<Servicios[]>

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.servicios$ = this.store$.select(fromBoletas.getBoletas)
  }

}
