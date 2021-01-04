import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { BlockedUsersPage } from './blocked-users.page';

export const BLOCKED_USERS_SETTINGS_ROUTE: Route = {
  path: Path.SettingsBlockedUsers,
  component: BlockedUsersPage,
  data: {
    title: 'Blocked users settings',
    robots: 'noindex, nofollow',
  },
};
