import {MetaReducer, ActionReducerMap} from '@ngrx/store';
  import { environment } from '../../../environments/environment';
  
  // Reducers
  import * as fromBoletas from '../boletas/boletas.reducer'
  
  export interface State {
    [fromBoletas.boletasFeatureKey]: fromBoletas.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    [fromBoletas.boletasFeatureKey]: fromBoletas.boletaReducer
  };
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  