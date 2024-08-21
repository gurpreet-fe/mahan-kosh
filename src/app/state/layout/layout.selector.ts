import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LayoutState } from './layout.reducer';

export const selectLayout = (state: AppState) => state.layout;

export const layoutSelector = createSelector(
  selectLayout,
  (state: LayoutState) => state.layout
);
