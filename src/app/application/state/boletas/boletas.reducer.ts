import { Action, createReducer, on } from '@ngrx/store';
import * as boletasActions from './boletas.actions';

export const boletasFeatureKey = 'boletas'

export interface Servicios {
    isSelected: boolean;
    servicio: string;
    deuda: number;
    referencia: string;
}
export interface State {
    servicios: Servicios[]
}

export const initialState: State = {
    servicios: [
        {
            servicio: 'Netflix',
            deuda: 505,
            isSelected: false,
            referencia: 'AXCD-1122341511'
        },
        {
            servicio: 'Spotify',
            deuda: 764,
            isSelected: false,
            referencia: 'LKA-14525474586'
        },
        {
            servicio: 'Mercado Libre',
            deuda: 985,
            isSelected: false,
            referencia: 'MELI-15246359853'
        }
    ]
}

  const _boletaReducer = createReducer(initialState,
    on(boletasActions.getBoletas, state => state)
  );
   
  export function boletaReducer(state, action) {
    return _boletaReducer(state, action);
  }