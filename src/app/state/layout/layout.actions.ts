import { createAction, props } from '@ngrx/store';
import { Layout } from '../../types/layout.type';

export const setLayoutAction = createAction(
  '[Layout] Set Layout',
  props<{ layout: Layout }>()
);
