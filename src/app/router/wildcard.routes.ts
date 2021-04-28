import { Route } from '@angular/router';
import { NotFoundPage } from '@app/pages/public/not-found/not-found.page';

export const WILDCARD_ROUTE: Route = {
  path: '**',
  loadChildren: () =>
    import('@pages/public/not-found/not-found.module').then(
      (m) => m.NotFoundModule,
    ),
  component: NotFoundPage,
};
