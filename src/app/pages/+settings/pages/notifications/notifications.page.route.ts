import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { NotificationsPage } from './notifications.page';

export const NOTIFICATIONS_SETTINGS_ROUTE: Route = {
  path: Path.SettingsNotifications,
  component: NotificationsPage,
  data: {
    title: 'Notifications settings',
    robots: 'noindex, nofollow',
  },
};
