import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromPaymentMethods from './payment-methods.reducer';
   
  export interface State {
    paymentMethods: fromPaymentMethods.State;
  }
   
  export const reducers: ActionReducerMap<State> = {
    paymentMethods: fromPaymentMethods.reducer,
  };
   
  export const selectpaymentMethodState = createFeatureSelector<fromPaymentMethods.State>(fromPaymentMethods.paymentMethodsesFeatureKey);
   
  export const selectpaymentMethodIds = createSelector(
    selectpaymentMethodState,
    fromPaymentMethods.selectIds
  );
  export const selectpaymentMethodEntities = createSelector(
    selectpaymentMethodState,
    fromPaymentMethods.selectEntities
  );
  export const selectAllpaymentMethods = createSelector(
    selectpaymentMethodState,
    fromPaymentMethods.selectAll
  );
  export const getAllpaymentMethods = createSelector(
    selectAllpaymentMethods,
    (data) => {
        const allpaymentMethod = Object.values(data)
        return allpaymentMethod
    }
  );
  export const getAllPaymentMethodsSelected = createSelector(
    selectAllpaymentMethods,
    (data) => {
        const allPaymentMethodsSelected = Object.values(data).filter( (obj) => obj.isSelected === true)
        return allPaymentMethodsSelected
    }
  );
  export const selectpaymentMethodTotal = createSelector(
    selectpaymentMethodState,
    fromPaymentMethods.selectTotal
  );
