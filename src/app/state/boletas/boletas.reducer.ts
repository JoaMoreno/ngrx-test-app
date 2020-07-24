import { Action, createReducer, on } from '@ngrx/store';
import * as boletasActions from './boletas.actions';

export const boletasFeatureKey = 'boletas'

export interface Servicios {
    servicio: string;
    deuda: number;
}
export interface State {
    servicios: Servicios[]
}

export const initialState: State = {
    servicios: [
        {
            servicio: 'Netflix',
            deuda: 505,
        },
        {
            servicio: 'Spotify',
            deuda: 764,
        },
        {
            servicio: 'Mercado Libre',
            deuda: 985,
        }
    ]
}

  const _boletaReducer = createReducer(initialState,
    on(boletasActions.getBoletas, state => state)
  );
   
  export function boletaReducer(state, action) {
    return _boletaReducer(state, action);
  }