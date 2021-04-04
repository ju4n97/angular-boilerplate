import { Route } from '@angular/router';
import { SecurityPage } from './security.page';

export const SECURITY_SETTINGS_ROUTE: Route = {
  path: '',
  component: SecurityPage,
  data: {
    title: 'Security settings',
    robots: 'noindex, nofollow',
  },
};
