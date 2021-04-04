import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { SecurityLogPage } from './security-log.page';

export const SECURITY_LOG_SETTINGS_ROUTE: Route = {
  path: Path.SettingsSecurityLog,
  component: SecurityLogPage,
  data: {
    title: 'Security log settings',
    robots: 'noindex, nofollow',
  },
};
