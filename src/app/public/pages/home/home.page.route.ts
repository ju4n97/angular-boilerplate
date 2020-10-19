import { Route } from '@angular/router';
import { PathMap } from '@app/@core/enums';
import { HomePage } from './home.page';

export const HOME_ROUTE: Route = {
  path: PathMap.Home,
  component: HomePage,
};
