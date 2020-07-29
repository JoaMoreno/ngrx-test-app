import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromBoleta from './boleta.reducer';
   
  export interface State {
    boletas: fromBoleta.State;
  }
   
  export const reducers: ActionReducerMap<State> = {
    boletas: fromBoleta.reducer,
  };
   
  export const selectBoletaState = createFeatureSelector<fromBoleta.State>('boleta');
   
  export const selectBoletaIds = createSelector(
    selectBoletaState,
    fromBoleta.selectIds // shorthand for usersState => fromBoleta.selectUserIds(usersState)
  );
  export const selectBoletaEntities = createSelector(
    selectBoletaState,
    fromBoleta.selectEntities
  );
  export const selectAllBoletas = createSelector(
    selectBoletaState,
    fromBoleta.selectAll
  );
  export const getAllBoletas = createSelector(
    selectAllBoletas,
    (data) => {
        const allBoleta = Object.values(data)
        return allBoleta
    }
  );
  export const getAllBoletasSelected = createSelector(
    selectAllBoletas,
    (data) => {
        const allBoletasSelected = Object.values(data).filter( (obj) => obj.isSelected === true)
        return allBoletasSelected
    }
  );
  export const selectBoletaTotal = createSelector(
    selectBoletaState,
    fromBoleta.selectTotal
  );
