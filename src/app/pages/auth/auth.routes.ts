import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'login',
    loadComponent: async () =>
      (await import('./login/login.component')).LoginComponent,
  },
  {
    path: 'register',
    loadComponent: async () =>
      (await import('./register/register.component')).RegisterComponent,
  },
];
