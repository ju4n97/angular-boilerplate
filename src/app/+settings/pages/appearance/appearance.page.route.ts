import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { AppearancePage } from './appearance.page';

export const APPEARANCE_SETTINGS_ROUTE: Route = {
  path: Path.SettingsAppearance,
  component: AppearancePage,
  data: {
    title: 'Appearance settings',
    robots: 'noindex, nofollow',
  },
};
