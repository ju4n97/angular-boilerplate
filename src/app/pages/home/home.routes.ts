import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Home',
    loadComponent: async () => (await import('./home.page')).HomePage,
  },
];
