import { Route } from '@angular/router';
import { Path } from '@app/@core/enums';
import { HomePage } from './home.page';

export const HOME_ROUTE: Route = {
  path: Path.Home,
  component: HomePage,
};
