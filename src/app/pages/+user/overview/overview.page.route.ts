import { Route } from '@angular/router';
import { OverviewPage } from './overview.page';

export const USERS_OVERVIEW_ROUTE: Route = {
  path: '',
  component: OverviewPage,
  data: {
    title: 'Users overview',
    robots: 'noindex, nofollow',
  },
};
