import { createFeatureSelector, createSelector } from '@ngrx/store';
import { boletasFeatureKey, State } from './boletas.reducer';

export const getBoletasState = createFeatureSelector<State>(boletasFeatureKey);

export const getBoletas = createSelector(
    getBoletasState,
  (state: State) => state.servicios
);