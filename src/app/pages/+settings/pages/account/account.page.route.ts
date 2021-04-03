import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { AccountPage } from './account.page';

export const ACCOUNT_SETTINGS_ROUTE: Route = {
  path: Path.SettingsAccount,
  component: AccountPage,
  data: {
    title: 'Account settings',
    robots: 'noindex, nofollow',
  },
};
