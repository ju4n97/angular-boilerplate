import { Route } from '@angular/router';
import { InternalServerErrorPage } from './internal-server-error.page';

export const INTERNAL_SERVER_ERROR_ROUTE: Route = {
  path: 'internal-server-error',
  component: InternalServerErrorPage,
};
