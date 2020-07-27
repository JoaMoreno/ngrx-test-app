import { createFeatureSelector, createSelector } from '@ngrx/store';
import { paymentMethodsFeatureKey, State } from './paymentMethos.reducer';

export const getPaymentMethodsState = createFeatureSelector<State>(paymentMethodsFeatureKey);

export const getPaymentMethods = createSelector(
    getPaymentMethodsState,
  (state: State) => state.metodos
);