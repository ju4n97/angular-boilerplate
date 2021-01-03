import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { BillingPage } from './billing.page';

export const BILLING_SETTINGS_ROUTE: Route = {
  path: Path.SettingsBilling,
  component: BillingPage,
  data: {
    title: 'Billing settings',
    robots: 'noindex, nofollow',
  },
};
