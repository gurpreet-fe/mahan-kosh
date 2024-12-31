import { Routes } from '@angular/router';

import { EntryComponent } from '@components/entry/entry.component';
import { EntryResolver } from './resolvers/entry.resolver';

export const routes: Routes = [
  {
    path: 'entry',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
      },
      {
        path: ':id',
        component: EntryComponent,
        resolve: { entry: EntryResolver },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
