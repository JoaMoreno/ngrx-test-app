import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { PaymentMethods } from './payment-methods.model';

export const loadPaymentMethodss = createAction(
  '[PaymentMethods/API] Load PaymentMethodss', 
  props<{ paymentMethodss: PaymentMethods[] }>()
);

export const addPaymentMethods = createAction(
  '[PaymentMethods/API] Add PaymentMethods',
  props<{ paymentMethods: PaymentMethods }>()
);

export const upsertPaymentMethods = createAction(
  '[PaymentMethods/API] Upsert PaymentMethods',
  props<{ paymentMethods: PaymentMethods }>()
);

export const addPaymentMethodss = createAction(
  '[PaymentMethods/API] Add PaymentMethodss',
  props<{ paymentMethodss: PaymentMethods[] }>()
);

export const upsertPaymentMethodss = createAction(
  '[PaymentMethods/API] Upsert PaymentMethodss',
  props<{ paymentMethodss: PaymentMethods[] }>()
);

export const updatePaymentMethods = createAction(
  '[PaymentMethods/API] Update PaymentMethods',
  props<{ paymentMethods: Update<PaymentMethods> }>()
);

export const updatePaymentMethodss = createAction(
  '[PaymentMethods/API] Update PaymentMethodss',
  props<{ paymentMethodss: Update<PaymentMethods>[] }>()
);

export const deletePaymentMethods = createAction(
  '[PaymentMethods/API] Delete PaymentMethods',
  props<{ id: string }>()
);

export const deletePaymentMethodss = createAction(
  '[PaymentMethods/API] Delete PaymentMethodss',
  props<{ ids: string[] }>()
);

export const clearPaymentMethodss = createAction(
  '[PaymentMethods/API] Clear PaymentMethodss'
);
