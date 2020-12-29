import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { NotFoundPage } from './not-found.page';

export const NOT_FOUND_ROUTE: Route = {
  path: Path.NotFound,
  component: NotFoundPage,
  data: {
    title: "The page you were looking for couldn't be found",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, expedita!',
    robots: 'noindex, nofollow',
  },
};
