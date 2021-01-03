import { Route } from '@angular/router';
import { Path } from '@core/structs';
import { NotFoundPage } from './not-found.page';

export const NOT_FOUND_ROUTE: Route = {
  path: Path.NotFound,
  component: NotFoundPage,
  data: {
    title: 'The page you were looking for could not be found',
    robots: 'noindex, nofollow',
  },
};
