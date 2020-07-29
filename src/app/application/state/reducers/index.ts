import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

// Reducers
import * as fromBoletas from '../boletas/boleta.reducer';
import * as fromPaymentMethods from '../paymentMethods/payment-methods.reducer'

export interface State {
  [fromBoletas.boletasFeatureKey]: fromBoletas.State;
  [fromPaymentMethods.paymentMethodsesFeatureKey]: fromPaymentMethods.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromBoletas.boletasFeatureKey]: fromBoletas.reducer,
  [fromPaymentMethods.paymentMethodsesFeatureKey]: fromPaymentMethods.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
