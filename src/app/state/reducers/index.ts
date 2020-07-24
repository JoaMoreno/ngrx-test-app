import {MetaReducer, ActionReducerMap} from '@ngrx/store';
  import { environment } from '../../../environments/environment';
  
  // Reducers
  import * as fromBoletas from '../boletas/boletas.reducer';
  import * as fromPaymentMethods from '../paymentMethods/paymentMethos.reducer'
  
  export interface State {
    [fromBoletas.boletasFeatureKey]: fromBoletas.State;
    [fromPaymentMethods.paymentMethodsFeatureKey]: fromPaymentMethods.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    [fromBoletas.boletasFeatureKey]: fromBoletas.boletaReducer,
    [fromPaymentMethods.paymentMethodsFeatureKey]: fromPaymentMethods.paymentMethodsReducer
  };
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  