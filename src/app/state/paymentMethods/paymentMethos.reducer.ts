import { Action, createReducer, on } from '@ngrx/store';
import * as paymentMethodsActions from './paymentMethos.actions';

export const paymentMethodsFeatureKey = 'paymentMethods'

export interface Metodos {
    isSelected: boolean;
    metodo: string;
    numero?: string;
}
export interface State {
    metodos: Metodos[]
}

export const initialState: State = {
    metodos: [
        {
            metodo: 'Naranja',
            isSelected: false,
            numero: '3398-XXXX-XXXX-XXXX'
        },
        {
            metodo: 'Visa',
            isSelected: false,
            numero: '9878-XXXX-XXXX-XXXX'
        },
        {
            metodo: 'Debito',
            isSelected: false,
            numero: '7871-XXXX-XXXX-XXXX'
        },
        {
            metodo: 'Paypal',
            isSelected: false,
        }
    ]
}

  const _paymentMethodsReducer = createReducer(initialState,
    on(paymentMethodsActions.decrement, state => state)
  );
   
  export function paymentMethodsReducer(state, action) {
    return _paymentMethodsReducer(state, action);
  }