import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { layoutReducer } from './state/layout/layout.reducer';
import { RouterEffects } from './state/router/router.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(RouterEffects),
    provideRouter(routes),
    provideRouterStore(),
    provideStore({ layout: layoutReducer, router: routerReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
