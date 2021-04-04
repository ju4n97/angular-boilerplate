import { Route } from '@angular/router';
import { PasswordResetPage } from './password-reset.page';

export const PASSWORD_RESET_ROUTE: Route = {
  path: '',
  component: PasswordResetPage,
  data: {
    title: 'Enter your new password',
    robots: 'noindex, nofollow',
  },
};
