import { Route } from '@angular/router';
import { BillingPage } from './billing.page';

export const BILLING_SETTINGS_ROUTE: Route = {
  path: '',
  component: BillingPage,
  data: {
    title: 'Billing settings',
    robots: 'noindex, nofollow',
  },
};
