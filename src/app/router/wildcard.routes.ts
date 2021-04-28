import { Route } from '@angular/router';

export const WILDCARD_ROUTE: Route = {
  path: '**',
  loadChildren: () =>
    import('@pages/public/not-found/not-found.module').then(
      (m) => m.NotFoundModule,
    ),
};
