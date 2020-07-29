import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Boleta } from './boleta.model';
import * as BoletaActions from './boleta.actions';

export const boletasFeatureKey = 'boleta';

export interface State extends EntityState<Boleta> {
  // additional entities state properties
}
 
export function selectBoletaId(a: Boleta): string {
  //In this case this would be optional since primary key is id
  return a.id;
}

export const adapter: EntityAdapter<Boleta> = createEntityAdapter<Boleta>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  ids: [0, 1, 2],
  entities: {
    0: {
      id: 0,
      servicio: 'Netflix',
      deuda: 505,
      isSelected: false,
      referencia: 'AXCD-1122341511'
    },
    1: {
        id: 1,
        servicio: 'Spotify',
        deuda: 764,
        isSelected: false,
        referencia: 'LKA-14525474586'
    },
    2: {
        id: 2,
        servicio: 'Mercado Libre',
        deuda: 985,
        isSelected: false,
        referencia: 'MELI-15246359853'
    }
  }
});


export const reducer = createReducer(
  initialState,
  on(BoletaActions.addBoleta,
    (state, action) => adapter.addOne(action.boleta, state)
  ),
  on(BoletaActions.upsertBoleta,
    (state, action) => adapter.upsertOne(action.boleta, state)
  ),
  on(BoletaActions.addBoletas,
    (state, action) => adapter.addMany(action.boletas, state)
  ),
  on(BoletaActions.upsertBoletas,
    (state, action) => adapter.upsertMany(action.boletas, state)
  ),
  on(BoletaActions.updateBoleta,
    (state, action) => adapter.updateOne(action.boleta, state)
  ),
  on(BoletaActions.updateBoletas,
    (state, action) => adapter.updateMany(action.boletas, state)
  ),
  on(BoletaActions.deleteBoleta,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BoletaActions.deleteBoletas,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BoletaActions.loadBoletas,
    (state, action) => adapter.setAll(action.boletas, state)
  ),
  on(BoletaActions.clearBoletas,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
