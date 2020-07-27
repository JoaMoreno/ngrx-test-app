import { createReducer, on } from '@ngrx/store';
import * as actions from './navigation.action';

export const navigationFeatureKey = 'navigation'

export interface State {
    validations: any[]
}

export const initialState: State = {
    validations: []
};

const _navigationReducer = createReducer(initialState,
  on(actions.setNavigationState, (state,{validation}) => ({...state,validations: [...validation]})),
);

export function reducer(state, action) {
  return _navigationReducer(state, action);
}