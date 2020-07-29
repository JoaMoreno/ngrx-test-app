import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PaymentMethods } from './payment-methods.model';
import * as PaymentMethodsActions from './payment-methods.actions';

export const paymentMethodsesFeatureKey = 'payment-methods';

export interface State extends EntityState<PaymentMethods> {
  // additional entities state properties
}

export function selectPaymentId(a: PaymentMethods): string {
  //In this case this would be optional since primary key is id
  return a.id;
}

export const adapter: EntityAdapter<PaymentMethods> = createEntityAdapter<PaymentMethods>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  ids: [0, 1, 2],
  entities: {
    0: {
      id: 0,
      metodo: 'Naranja',
      isSelected: false,
      numero: '3398-XXXX-XXXX-XXXX'
    },
    1: {
        id: 1,
        metodo: 'Visa',
        isSelected: false,
        numero: '9878-XXXX-XXXX-XXXX'
    },
    2: {
        id: 2,
        metodo: 'Débito',
        isSelected: false,
        numero: '7871-XXXX-XXXX-XXXX'
    }
  }
});


export const reducer = createReducer(
  initialState,
  on(PaymentMethodsActions.addPaymentMethods,
    (state, action) => adapter.addOne(action.paymentMethods, state)
  ),
  on(PaymentMethodsActions.upsertPaymentMethods,
    (state, action) => adapter.upsertOne(action.paymentMethods, state)
  ),
  on(PaymentMethodsActions.addPaymentMethodss,
    (state, action) => adapter.addMany(action.paymentMethodss, state)
  ),
  on(PaymentMethodsActions.upsertPaymentMethodss,
    (state, action) => adapter.upsertMany(action.paymentMethodss, state)
  ),
  on(PaymentMethodsActions.updatePaymentMethods,
    (state, action) => adapter.updateOne(action.paymentMethods, state)
  ),
  on(PaymentMethodsActions.updatePaymentMethodss,
    (state, action) => adapter.updateMany(action.paymentMethodss, state)
  ),
  on(PaymentMethodsActions.deletePaymentMethods,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PaymentMethodsActions.deletePaymentMethodss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(PaymentMethodsActions.loadPaymentMethodss,
    (state, action) => adapter.setAll(action.paymentMethodss, state)
  ),
  on(PaymentMethodsActions.clearPaymentMethodss,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
