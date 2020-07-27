import { createAction, props } from '@ngrx/store';

export const setNavigationState = createAction('[Navigation] Set Navigation State', props<{validation: any[]}>());