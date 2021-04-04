import { Route } from '@angular/router';
import { AppearancePage } from './appearance.page';

export const APPEARANCE_SETTINGS_ROUTE: Route = {
  path: '',
  component: AppearancePage,
  data: {
    title: 'Appearance settings',
    robots: 'noindex, nofollow',
  },
};
