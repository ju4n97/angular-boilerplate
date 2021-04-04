import { Route } from '@angular/router';
import { AccountPage } from './account.page';

export const ACCOUNT_SETTINGS_ROUTE: Route = {
  path: '',
  component: AccountPage,
  data: {
    title: 'Account settings',
    robots: 'noindex, nofollow',
  },
};
