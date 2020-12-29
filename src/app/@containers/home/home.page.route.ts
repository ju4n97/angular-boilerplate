import { Route } from '@angular/router';
import { Path } from '@core/structs';
import { HomePage } from './home.page';

export const HOME_ROUTE: Route = {
  path: Path.Home,
  component: HomePage,
  data: {
    title: 'Home',
    description:
      'Start writing your business logic right away without any concern on architecture matters.',
    robots: 'index, follow',
  },
};
