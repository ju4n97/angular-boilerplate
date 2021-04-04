import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { SecurityPage } from './security.page';

export const SECURITY_SETTINGS_ROUTE: Route = {
  path: Path.SettingsSecurity,
  component: SecurityPage,
  data: {
    title: 'Security settings',
    robots: 'noindex, nofollow',
  },
};
