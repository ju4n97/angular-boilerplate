import { Route } from '@angular/router';
import { DashboardPage } from './dashboard.page';

export const DASHBOARD_ROUTE: Route = {
  path: '',
  component: DashboardPage,
  data: {
    title: 'Dashboard',
    robots: 'noindex, nofollow',
  },
};
