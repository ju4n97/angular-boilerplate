import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { OverviewPage } from './overview.page';

export const USERS_OVERVIEW_ROUTE: Route = {
  path: Path.UsersOverview,
  component: OverviewPage,
  data: {
    title: 'Users overview',
    robots: 'noindex, nofollow',
  },
};
