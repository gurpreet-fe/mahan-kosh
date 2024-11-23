import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_REQUEST } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { exhaustMap, filter, switchMap, tap } from 'rxjs';
import { LayoutFacade } from '../layout/layout.facade';
import { setLayoutAction } from '../layout/layout.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private layoutFacade: LayoutFacade
  ) {}

  routeToHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_REQUEST),
        filter(({ payload }: any) => payload.event.url === '/'),
        tap(() => this.layoutFacade.setLayout('standard'))
      ),
    { dispatch: false }
  );
}
