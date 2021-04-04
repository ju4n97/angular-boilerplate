import { Route } from '@angular/router';
import { BlockedUsersPage } from './blocked-users.page';

export const BLOCKED_USERS_SETTINGS_ROUTE: Route = {
  path: '',
  component: BlockedUsersPage,
  data: {
    title: 'Blocked users settings',
    robots: 'noindex, nofollow',
  },
};
