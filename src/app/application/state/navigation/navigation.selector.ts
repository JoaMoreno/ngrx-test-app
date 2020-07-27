import { createFeatureSelector, createSelector } from '@ngrx/store';
import { navigationFeatureKey, State } from './navigation.reducer';

export const getNavigationState = createFeatureSelector<State>(navigationFeatureKey);

export const getNavigation = createSelector(
    getNavigationState,
  (state: State) => state.validations
);