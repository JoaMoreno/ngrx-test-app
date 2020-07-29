import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Boleta } from './boleta.model';

export const loadBoletas = createAction(
  '[Boleta/API] Load Boletas', 
  props<{ boletas: Boleta[] }>()
);

export const addBoleta = createAction(
  '[Boleta/API] Add Boleta',
  props<{ boleta: Boleta }>()
);

export const upsertBoleta = createAction(
  '[Boleta/API] Upsert Boleta',
  props<{ boleta: Boleta }>()
);

export const addBoletas = createAction(
  '[Boleta/API] Add Boletas',
  props<{ boletas: Boleta[] }>()
);

export const upsertBoletas = createAction(
  '[Boleta/API] Upsert Boletas',
  props<{ boletas: Boleta[] }>()
);

export const updateBoleta = createAction(
  '[Boleta/API] Update Boleta',
  props<{ boleta: Update<Boleta> }>()
);

export const updateBoletas = createAction(
  '[Boleta/API] Update Boletas',
  props<{ boletas: Update<Boleta>[] }>()
);

export const deleteBoleta = createAction(
  '[Boleta/API] Delete Boleta',
  props<{ id: string }>()
);

export const deleteBoletas = createAction(
  '[Boleta/API] Delete Boletas',
  props<{ ids: string[] }>()
);

export const clearBoletas = createAction(
  '[Boleta/API] Clear Boletas'
);
