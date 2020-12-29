import { Route } from '@angular/router';
import { NotFoundPage } from './not-found.page';

export const NOT_FOUND_ROUTE: Route = {
  path: '404',
  component: NotFoundPage,
  data: {
    title: "The page you were looking for couldn't be found",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, expedita!',
    robots: 'noindex, nofollow',
  },
};
