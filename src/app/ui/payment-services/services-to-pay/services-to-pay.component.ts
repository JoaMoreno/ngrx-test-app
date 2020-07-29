import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/application/state/boletas/boleta.reducer';
import { Store } from '@ngrx/store';
import * as fromBoletasSelectores from '../../../application/state/boletas/boleta.selectors'
import { NavigationService } from 'src/app/infrastructure/services/navigation.service';
import { updateBoleta, updateBoletas } from 'src/app/application/state/boletas/boleta.actions';
import { Update } from '@ngrx/entity';
import { Boleta } from 'src/app/application/state/boletas/boleta.model';

@Component({
  selector: 'app-services-to-pay',
  templateUrl: './services-to-pay.component.html',
  styleUrls: ['./services-to-pay.component.scss']
})
export class ServicesToPayComponent implements OnInit {

  servicios$: Boleta[]

  constructor(private store$: Store<State>, private _navigation: NavigationService) { }

  ngOnInit(): void {
    this.store$.select(fromBoletasSelectores.getAllBoletas).subscribe(
      (data)=>{
        this.servicios$ = data
      }
    )
    
  }

  next(){
    this._navigation.redirecTo('/step-two')
  }

  onChangeItemSelected(boleta: Boleta) {
    const selectedItem = boleta.isSelected;
    const update: Update<Boleta> = {
        id: boleta.id,
        changes: { isSelected : !selectedItem }
    };
    this.store$.dispatch(updateBoleta({ boleta: update }));
}

// update(val: boolean) {
//   this.store$
//             .select(fromBoletasSelectores.selectAllBoletas)
//             .pipe(take(1))
//             .subscribe(data => {
//                 const update: Update<Boleta>[] = data.map(transferencia => {
//                     return {
//                         id: transferencia.,
//                         changes: { selected: val }
//                     };
//                 });
//   this.store$.dispatch(updateBoletas({ boletas: update }));
// }

}
