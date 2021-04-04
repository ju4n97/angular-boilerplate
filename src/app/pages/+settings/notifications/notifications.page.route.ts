import { Route } from '@angular/router';
import { NotificationsPage } from './notifications.page';

export const NOTIFICATIONS_SETTINGS_ROUTE: Route = {
  path: '',
  component: NotificationsPage,
  data: {
    title: 'Notifications settings',
    robots: 'noindex, nofollow',
  },
};
