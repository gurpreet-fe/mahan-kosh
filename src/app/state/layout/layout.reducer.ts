import { createReducer, on } from '@ngrx/store';
import { Layout } from '../../types/layout.type';
import * as LayoutActions from './layout.actions';

export interface LayoutState {
  layout: Layout;
}

const initialState: LayoutState = {
  layout: 'standard',
};

export const layoutReducer = createReducer(
  initialState,
  on(LayoutActions.setLayoutAction, (state, { layout }) => {
    return { ...state, layout };
  })
);
