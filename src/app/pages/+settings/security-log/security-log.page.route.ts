import { Route } from '@angular/router';
import { SecurityLogPage } from './security-log.page';

export const SECURITY_LOG_SETTINGS_ROUTE: Route = {
  path: '',
  component: SecurityLogPage,
  data: {
    title: 'Security log settings',
    robots: 'noindex, nofollow',
  },
};
