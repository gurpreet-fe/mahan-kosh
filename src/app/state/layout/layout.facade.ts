import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Layout } from '../../types/layout.type';
import { AppState } from '../app.state';
import * as LayoutActions from './layout.actions';
import { layoutSelector } from './layout.selector';

@Injectable({ providedIn: 'root' })
export class LayoutFacade {
  layout$ = this.store.select(layoutSelector);

  constructor(private store: Store<AppState>) {}

  setLayout(layout: Layout) {
    this.store.dispatch(LayoutActions.setLayoutAction({ layout }));
  }
}
